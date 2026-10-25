// Client-side validation only. No data is transmitted until a secure,
// GDPR-compliant form endpoint is connected (see submit handler).

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function todayIso(): string {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

function fieldLabel(field: Field): string {
  const label = field.closest("label");
  const text = label?.querySelector(".label-text")?.textContent?.trim();
  return text?.replace(/\s*\*$/, "") || field.name || "Feld";
}

function showErrors(form: HTMLFormElement, errors: string[]): void {
  const summary = form.querySelector<HTMLElement>(".form-errors");
  if (!summary) return;

  summary.replaceChildren();
  if (!errors.length) {
    summary.hidden = true;
    return;
  }

  const heading = document.createElement("strong");
  heading.textContent = "Bitte prüfen Sie Ihre Angaben:";
  const list = document.createElement("ul");
  errors.forEach((error) => {
    const item = document.createElement("li");
    item.textContent = error;
    list.append(item);
  });
  summary.append(heading, list);
  summary.hidden = false;
  summary.focus();
}

function validate(form: HTMLFormElement): boolean {
  const fields = form.querySelectorAll<Field>("input, select, textarea");
  fields.forEach((f) => f.removeAttribute("aria-invalid"));

  const email = form.querySelector<HTMLInputElement>('input[name="email"]');
  const contact = form.querySelector<HTMLInputElement>('input[name="contact"]:checked')?.value;
  email?.setCustomValidity(contact === "E-Mail" && !email.value.trim() ? "Bitte geben Sie eine E-Mail-Adresse ein." : "");

  const outbound = form.querySelector<HTMLInputElement>('input[name="date"]');
  const back = form.querySelector<HTMLInputElement>('input[name="returnDate"]');
  if (outbound && back) {
    back.setCustomValidity(
      back.value && outbound.value && back.value < outbound.value ? "Die Rückfahrt darf nicht vor der Hinfahrt liegen." : "",
    );
  }

  const errors: string[] = [];
  fields.forEach((field) => {
    if (field.disabled || field.checkValidity()) return;
    field.setAttribute("aria-invalid", "true");
    errors.push(`${fieldLabel(field)}: ${field.validationMessage}`);
  });

  showErrors(form, errors);
  return errors.length === 0;
}

function initReturnTrip(form: HTMLFormElement): void {
  const fieldset = form.querySelector<HTMLElement>("[data-return-fields]");
  const radios = form.querySelectorAll<HTMLInputElement>('input[name="returnTrip"]');
  if (!fieldset || !radios.length) return;

  const update = () => {
    const required = form.querySelector<HTMLInputElement>('input[name="returnTrip"]:checked')?.value === "Ja";
    fieldset.hidden = !required;
    fieldset.querySelectorAll<HTMLInputElement>("input").forEach((input) => {
      input.required = required;
      if (!required) {
        input.value = "";
        input.setCustomValidity("");
        input.removeAttribute("aria-invalid");
      }
    });
  };
  radios.forEach((r) => r.addEventListener("change", update));
  update();
}

function preselectVehicle(): void {
  const vehicle = new URLSearchParams(window.location.search).get("fahrzeug");
  const select = document.querySelector<HTMLSelectElement>('select[name="vehicle"]');
  if (!vehicle || !select) return;
  if ([...select.options].some((o) => o.value === vehicle)) select.value = vehicle;
}

function init(): void {
  const min = todayIso();
  document.querySelectorAll<HTMLInputElement>('input[type="date"]:not([data-past])').forEach((i) => (i.min = min));
  preselectVehicle();

  document.querySelectorAll<HTMLFormElement>("form[data-validate]").forEach((form) => {
    initReturnTrip(form);
    const status = form.querySelector<HTMLElement>(".form-status");
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const submitText = submit?.textContent ?? "";

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (status) status.textContent = "";
      if (!validate(form)) return;

      if (submit) {
        submit.disabled = true;
        submit.textContent = "Wird geprüft …";
      }
      window.setTimeout(() => {
        if (status) {
          status.textContent =
            "Vielen Dank! Ihre Angaben sind vollständig. Hinweis: Für den echten Versand muss noch ein sicherer Formular-Endpunkt angebunden werden – bitte rufen Sie uns bis dahin an.";
        }
        if (submit) {
          submit.disabled = false;
          submit.textContent = submitText;
        }
      }, 500);
    });
  });
}

init();
