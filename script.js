"use strict";

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".primary-nav");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReducedMotion = reducedMotionQuery.matches;

/* Mobile navigation */
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));

    const accessibleLabel = menuButton.querySelector(".sr-only");
    if (accessibleLabel) {
      accessibleLabel.textContent = isOpen ? "Menü schließen" : "Menü öffnen";
    }
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

/* General scroll reveal */
const revealElements = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

/* Scroll-triggered “Mit Herz unterwegs.” slogan */
const scrollSlogan = document.querySelector("[data-scroll-slogan]");

if (scrollSlogan) {
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    scrollSlogan.classList.add("is-visible");
  } else {
    const sloganObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    sloganObserver.observe(scrollSlogan);
  }
}

/* Page progress and scroll spy */
const progressBar = document.getElementById("progress");
const sections = [...document.querySelectorAll("main section[id]")];
const navigationLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];

function updateScrollUI() {
  const maximumScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maximumScroll > 0 ? (window.scrollY / maximumScroll) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  let currentSection = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
      currentSection = section.id;
    }
  });

  navigationLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentSection}`;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
window.addEventListener("resize", updateScrollUI);
updateScrollUI();

/* Current year */
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

/* Date minimums */
const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
const minimumDate = today.toISOString().split("T")[0];

document.querySelectorAll('input[type="date"]').forEach((input) => {
  if (input.name !== "birthDate") {
    input.min = minimumDate;
  }
});

/* Private return trip fields */
const returnTripRadios = document.querySelectorAll('input[name="returnTrip"]');
const returnFields = document.getElementById("return-fields");

function updateReturnFields() {
  if (!returnFields) {
    return;
  }

  const returnTripIsRequired =
    document.querySelector('input[name="returnTrip"]:checked')?.value === "Ja";

  returnFields.hidden = !returnTripIsRequired;
  returnFields.querySelectorAll("input").forEach((input) => {
    input.required = returnTripIsRequired;

    if (!returnTripIsRequired) {
      input.value = "";
      input.setCustomValidity("");
      input.removeAttribute("aria-invalid");
    }
  });
}

returnTripRadios.forEach((radio) => {
  radio.addEventListener("change", updateReturnFields);
});
updateReturnFields();

/* Transfer vehicle selection into the private form */
document.querySelectorAll(".choose-vehicle").forEach((button) => {
  button.addEventListener("click", () => {
    const vehicleSelect = document.querySelector('#private-form select[name="vehicle"]');
    const privateRequestSection = document.getElementById("private-anfrage");

    if (!vehicleSelect || !privateRequestSection) {
      return;
    }

    vehicleSelect.value = button.dataset.vehicle || "";
    privateRequestSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    window.setTimeout(
      () => vehicleSelect.focus(),
      prefersReducedMotion ? 0 : 500,
    );
  });
});

function getFieldLabel(field) {
  const label = field.closest("label");
  const directText = label?.childNodes?.[0]?.textContent?.trim();
  return directText || field.name || "Feld";
}

function resetFormErrors(form) {
  form.querySelectorAll('[aria-invalid="true"]').forEach((field) => {
    field.removeAttribute("aria-invalid");
  });
}

function validateForm(form) {
  const errorSummary = form.querySelector(".form-errors");
  const errors = [];

  resetFormErrors(form);

  const selectedContactMethod = form.querySelector('input[name="contact"]:checked')?.value;
  const emailInput = form.querySelector('input[name="email"]');

  if (emailInput) {
    if (selectedContactMethod === "E-Mail" && !emailInput.value.trim()) {
      emailInput.setCustomValidity("Bitte geben Sie eine E-Mail-Adresse ein.");
    } else {
      emailInput.setCustomValidity("");
    }
  }

  if (form.id === "private-form") {
    const outboundDate = form.elements.date?.value;
    const returnDate = form.elements.returnDate?.value;

    if (returnDate && outboundDate && returnDate < outboundDate) {
      form.elements.returnDate.setCustomValidity(
        "Die Rückfahrt darf nicht vor der Hinfahrt liegen.",
      );
    } else if (form.elements.returnDate) {
      form.elements.returnDate.setCustomValidity("");
    }
  }

  form.querySelectorAll("input, select, textarea").forEach((field) => {
    if (!field.disabled && !field.checkValidity()) {
      field.setAttribute("aria-invalid", "true");
      errors.push(`${getFieldLabel(field)}: ${field.validationMessage}`);
    }
  });

  if (errors.length > 0) {
    if (errorSummary) {
      errorSummary.innerHTML = `
        <strong>Bitte prüfen Sie Ihre Angaben:</strong>
        <ul>${errors.map((error) => `<li>${error}</li>`).join("")}</ul>
      `;
      errorSummary.hidden = false;
      errorSummary.focus();
    }
    return false;
  }

  if (errorSummary) {
    errorSummary.hidden = true;
    errorSummary.innerHTML = "";
  }

  return true;
}

/* Front-end validation only. No sensitive data is transmitted here. */
document.querySelectorAll(".request-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formStatus = form.querySelector(".form-status");
    const submitButton = form.querySelector(".submit");

    if (!validateForm(form)) {
      if (formStatus) {
        formStatus.textContent = "";
      }
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Wird geprüft …";
    }

    window.setTimeout(() => {
      if (formStatus) {
        formStatus.textContent =
          "Die Angaben sind vollständig. Für den echten Versand muss noch ein sicherer Formular-Endpunkt verbunden werden.";
      }

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent =
          form.id === "private-form"
            ? "Private Anfrage prüfen"
            : "Transportschein-Anfrage prüfen";
      }
    }, 650);
  });
});
