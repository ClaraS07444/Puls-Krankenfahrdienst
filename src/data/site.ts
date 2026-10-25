// Central content source. All company, contact and franchise data is fictional
// (concept site) and must be replaced with verified data before going live.

import kombi from "../assets/fahrzeug-kombi.jpg";
import vito from "../assets/fahrzeug-vito.jpg";
import sprinter from "../assets/fahrzeug-sprinter.jpg";

export type IconName =
  | "stethoscope"
  | "hospital"
  | "dialysis"
  | "ribbon"
  | "radiation"
  | "reha"
  | "wheelchair"
  | "document"
  | "plane"
  | "sun"
  | "seat"
  | "chair"
  | "stretcher"
  | "users"
  | "shield"
  | "clock"
  | "heart"
  | "card"
  | "phone"
  | "mail"
  | "pin";

export const company = {
  name: "PULS Krankenfahrdienst",
  legalName: "PULS Mobilität GmbH",
  slogan: "Mit Herz unterwegs.",
  founded: 2014,
  franchiseSince: 2022,
  email: "info@puls-krankenfahrdienst.de",
  franchiseEmail: "franchise@puls-krankenfahrdienst.de",
  jobsEmail: "karriere@puls-krankenfahrdienst.de",
  hotline: { label: "0241 990 41 00", href: "tel:+492419904100" },
  dispatchHours: [
    { days: "Montag – Freitag", time: "06:00 – 20:00 Uhr" },
    { days: "Samstag", time: "07:00 – 14:00 Uhr" },
    { days: "Sonn- & Feiertage", time: "Fahrten nach Vereinbarung" },
  ],
  stats: [
    { value: 3, suffix: "", label: "Standorte in Deutschland" },
    { value: 46, suffix: "", label: "Fahrzeuge im Einsatz" },
    { value: 110, suffix: "+", label: "geschulte Mitarbeitende" },
    { value: 65000, suffix: "+", label: "Fahrten pro Jahr" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
  ],
};

export type Location = {
  slug: string;
  city: string;
  region: string;
  role: string;
  operator: string;
  street: string;
  zip: string;
  phone: { label: string; href: string };
  email: string;
  opened: number;
  vehicles: number;
  geo: { lat: number; lng: number };
  areas: string[];
  destinations: string[];
  intro: string;
};

export const locations: Location[] = [
  {
    slug: "aachen",
    city: "Aachen",
    region: "Städteregion Aachen",
    role: "Systemzentrale & Pilotbetrieb",
    operator: "PULS Mobilität GmbH",
    street: "Jülicher Straße 215",
    zip: "52070",
    phone: { label: "0241 990 41 00", href: "tel:+492419904100" },
    email: "aachen@puls-krankenfahrdienst.de",
    opened: 2014,
    vehicles: 20,
    geo: { lat: 50.7867, lng: 6.1095 },
    areas: [
      "Aachen",
      "Alsdorf",
      "Baesweiler",
      "Eschweiler",
      "Herzogenrath",
      "Monschau",
      "Roetgen",
      "Simmerath",
      "Stolberg",
      "Würselen",
    ],
    destinations: [
      "Uniklinik RWTH Aachen",
      "Luisenhospital Aachen",
      "Marienhospital Aachen",
      "Franziskushospital Aachen",
      "Dialysezentren der Städteregion",
    ],
    intro:
      "In Aachen hat PULS angefangen. Von hier aus steuern wir die Systemzentrale und fahren täglich in der gesamten Städteregion – vom Kaiserdom bis in die Eifel.",
  },
  {
    slug: "koeln",
    city: "Köln",
    region: "Köln & Rhein-Erft-Kreis",
    role: "Franchisepartner",
    operator: "Rheinmobil Care GmbH",
    street: "Aachener Straße 1040",
    zip: "50858",
    phone: { label: "0221 4710 410", href: "tel:+492214710410" },
    email: "koeln@puls-krankenfahrdienst.de",
    opened: 2022,
    vehicles: 15,
    geo: { lat: 50.9333, lng: 6.8622 },
    areas: ["Köln", "Frechen", "Hürth", "Pulheim", "Brühl", "Bergheim", "Leverkusen"],
    destinations: [
      "Uniklinik Köln",
      "Kliniken Köln-Merheim",
      "St. Elisabeth-Krankenhaus Hohenlind",
      "Dialysezentren im Kölner Westen",
    ],
    intro:
      "Unser erster Franchisestandort bringt das PULS-Konzept in die Domstadt. Das Kölner Team fährt im gesamten Stadtgebiet und im angrenzenden Rhein-Erft-Kreis.",
  },
  {
    slug: "frankfurt",
    city: "Frankfurt am Main",
    region: "Frankfurt & Rhein-Main",
    role: "Franchisepartner",
    operator: "MainPuls Mobilitätsdienste GmbH",
    street: "Hanauer Landstraße 300",
    zip: "60314",
    phone: { label: "069 90009 300", href: "tel:+496990009300" },
    email: "frankfurt@puls-krankenfahrdienst.de",
    opened: 2024,
    vehicles: 11,
    geo: { lat: 50.1131, lng: 8.7183 },
    areas: ["Frankfurt am Main", "Offenbach", "Bad Vilbel", "Eschborn", "Oberursel", "Neu-Isenburg"],
    destinations: [
      "Universitätsklinikum Frankfurt",
      "Klinikum Frankfurt Höchst",
      "Bürgerhospital Frankfurt",
      "Sana Klinikum Offenbach",
    ],
    intro:
      "Seit 2024 ist PULS auch im Rhein-Main-Gebiet unterwegs. Unser Frankfurter Partnerbetrieb verbindet kurze Wege mit der gewohnten PULS-Qualität.",
  },
];

export type Topic = {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  lead: string;
  points: string[];
  details: { title: string; text: string }[];
  note?: string;
};

export const transportTypes: Topic[] = [
  {
    slug: "sitzend-begleitet",
    title: "Sitzende & begleitete Fahrt",
    short: "Für Fahrgäste, die sitzen können und etwas Unterstützung beim Ein- und Aussteigen brauchen.",
    icon: "seat",
    lead: "Die häufigste Form der Krankenfahrt: Sie sitzen bequem im Fahrzeug, wir holen Sie an der Wohnungstür ab und begleiten Sie bis zur Anmeldung.",
    points: [
      "Abholung an der Haustür oder Station",
      "Hilfe beim Ein- und Aussteigen",
      "Begleitung bis zur Anmeldung",
      "Rollator und Gepäck werden mitgenommen",
    ],
    details: [
      { title: "Für wen geeignet?", text: "Für Menschen, die sitzen können, aber nicht selbst fahren oder öffentliche Verkehrsmittel nutzen sollen – etwa nach Eingriffen, bei Seheinschränkung oder nach Chemotherapie." },
      { title: "Begleitperson", text: "Eine Begleitperson fährt kostenlos mit, wenn dies ärztlich verordnet ist. Bei privaten Fahrten stimmen wir die Mitnahme vorher mit Ihnen ab." },
      { title: "Fahrzeug", text: "In der Regel E-Klasse Kombi oder Vito mit erhöhter Sitzposition und großem Kofferraum für Rollator und Taschen." },
    ],
  },
  {
    slug: "rollstuhl",
    title: "Rollstuhlfahrten",
    short: "Sie bleiben in Ihrem Rollstuhl sitzen – gesichert mit Rampe und Vier-Punkt-Rückhaltesystem.",
    icon: "wheelchair",
    lead: "Kein Umsetzen nötig: Sie fahren in Ihrem eigenen Rollstuhl, sicher fixiert nach DIN 75078.",
    points: [
      "Fahrzeuge mit Rampe oder Hebebühne",
      "Vier-Punkt-Rollstuhlrückhaltesystem",
      "Auch für Elektrorollstühle bis 300 kg",
      "Leihrollstuhl auf Anfrage",
    ],
    details: [
      { title: "Sicherheit", text: "Rollstuhl und Fahrgast werden getrennt gesichert: der Rollstuhl mit vier Gurten am Fahrzeugboden, Sie selbst mit einem Dreipunktgurt." },
      { title: "Treppen & Etagen", text: "Wohnen Sie nicht ebenerdig, sagen Sie es uns bei der Buchung. Wir planen dann eine zweite Person oder einen Tragestuhl ein." },
      { title: "Fahrzeug", text: "Vito oder Sprinter mit Heckrampe bzw. Hebebühne, je nach Gewicht und Maßen des Rollstuhls." },
    ],
  },
  {
    slug: "tragestuhl",
    title: "Tragestuhlfahrten",
    short: "Wenn Treppen das Problem sind: Wir tragen Sie sicher aus der Wohnung bis ins Fahrzeug.",
    icon: "chair",
    lead: "Für Fahrgäste, die Treppen nicht selbst bewältigen können. Zwei geschulte Mitarbeitende tragen Sie mit einem Raupen- oder Tragestuhl.",
    points: [
      "Zwei Mitarbeitende pro Einsatz",
      "Treppenraupe für enge Treppenhäuser",
      "Transfer in Rollstuhl oder Fahrzeugsitz",
      "Auch für Rückfahrten bis in die Wohnung",
    ],
    details: [
      { title: "Ablauf", text: "Wir kommen zu zweit, setzen Sie in den Tragestuhl und bringen Sie Etage für Etage nach unten. Im Fahrzeug fahren Sie im Tragestuhl oder auf einem Sitz." },
      { title: "Wichtig bei der Buchung", text: "Bitte nennen Sie Etage, Aufzug ja/nein und ungefähres Körpergewicht. So planen wir Personal und Hilfsmittel richtig." },
      { title: "Fahrzeug", text: "Sprinter mit Hebebühne und Halterung für Tragestühle." },
    ],
  },
  {
    slug: "liegend",
    title: "Liegendfahrten",
    short: "Für Fahrgäste, die nicht sitzen können, aber keine medizinisch-fachliche Betreuung brauchen.",
    icon: "stretcher",
    lead: "Wir transportieren Sie liegend auf einer Trage – zum Beispiel nach einer Hüft-OP oder bei starken Rückenschmerzen.",
    points: [
      "Fahrtrage mit Fixierung",
      "Zwei Mitarbeitende pro Einsatz",
      "Ruhige, schonende Fahrweise",
      "Abholung auch direkt von Station",
    ],
    details: [
      { title: "Abgrenzung zum Krankentransport", text: "Brauchen Sie während der Fahrt medizinisch-fachliche Betreuung oder Sauerstoff, ist ein qualifizierter Krankentransport (KTW) nötig. Diesen erreichen Sie über die regionale Leitstelle unter 19222." },
      { title: "Verordnung", text: "Liegendfahrten werden als Krankenfahrt verordnet, wenn eine liegende Beförderung medizinisch nötig ist, aber keine fachliche Betreuung erforderlich ist." },
      { title: "Fahrzeug", text: "Sprinter mit Fahrtrage, Hebebühne und erhöhtem Innenraum." },
    ],
    note: "Kein Notfall- oder Rettungsdienst. Bei akuter Lebensgefahr wählen Sie bitte 112.",
  },
];

export const services: Topic[] = [
  {
    slug: "arztfahrten",
    title: "Fahrten zum Arzt",
    short: "Pünktlich zur Praxis und wieder nach Hause – auch zu Fachärzten und MVZ.",
    icon: "stethoscope",
    lead: "Ob Hausarzt, Facharzt oder ambulante OP: Wir bringen Sie pünktlich hin und holen Sie nach der Behandlung wieder ab.",
    points: ["Hin- und Rückfahrt", "Wartezeit nach Absprache", "Abholung nach ambulanter OP", "Auch mit Rollstuhl"],
    details: [
      { title: "Kostenübernahme", text: "Fahrten zu ambulanten Behandlungen übernimmt die Krankenkasse nur in Ausnahmefällen und nach Genehmigung – etwa bei Pflegegrad 3 mit Mobilitätseinschränkung, Pflegegrad 4 oder 5 oder den Merkzeichen aG, Bl oder H." },
      { title: "Rückfahrt", text: "Sie wissen nicht, wann die Behandlung endet? Rufen Sie uns kurz an, wir holen Sie in der Regel innerhalb von 30 bis 45 Minuten ab." },
    ],
  },
  {
    slug: "dialyse",
    title: "Dialysefahrten",
    short: "Feste Serienfahrten zu Ihren Dialyseterminen – mit gleichbleibendem Fahrerteam.",
    icon: "dialysis",
    lead: "Dreimal pro Woche, oft über Jahre: Bei der Dialyse zählt Verlässlichkeit. Wir planen Ihre Fahrten als Serie und schicken möglichst immer dieselben Fahrer.",
    points: ["Feste Serienfahrten", "Gleichbleibendes Fahrerteam", "Direkte Abrechnung mit der Kasse", "Abstimmung mit dem Dialysezentrum"],
    details: [
      { title: "Genehmigung", text: "Dialysefahrten gehören zu den hochfrequenten Behandlungen nach der Krankentransport-Richtlinie. Sie brauchen eine Verordnung und eine Genehmigung Ihrer Krankenkasse – beides ist in der Regel unkompliziert." },
      { title: "Planänderungen", text: "Verschiebt sich Ihr Termin im Dialysezentrum, passen wir die Serie an. Ein Anruf genügt." },
    ],
  },
  {
    slug: "chemotherapie",
    title: "Chemotherapiefahrten",
    short: "Ruhige, rücksichtsvolle Fahrten zur onkologischen Behandlung und zurück.",
    icon: "ribbon",
    lead: "Nach einer Chemotherapie ist man oft erschöpft. Wir fahren ruhig, haben Spucktüten und Wasser an Bord und nehmen uns Zeit.",
    points: ["Serienfahrten möglich", "Rücksichtsvolle Fahrweise", "Begleitung bis in die Praxis", "Direkte Abrechnung mit der Kasse"],
    details: [
      { title: "Genehmigung", text: "Fahrten zur ambulanten Chemotherapie gelten als hochfrequente Behandlung. Mit Verordnung und Genehmigung übernimmt die Krankenkasse die Kosten abzüglich der gesetzlichen Zuzahlung." },
      { title: "Diskretion", text: "Unsere Fahrzeuge sind dezent gestaltet, und unser Team behandelt alle Informationen vertraulich." },
    ],
  },
  {
    slug: "bestrahlung",
    title: "Bestrahlungsfahrten",
    short: "Tägliche Fahrten zur Strahlentherapie, zuverlässig über den gesamten Behandlungszeitraum.",
    icon: "radiation",
    lead: "Strahlentherapie bedeutet oft wochenlang tägliche Termine. Wir planen alle Fahrten im Voraus und halten Ihnen den Rücken frei.",
    points: ["Tägliche Serienfahrten", "Planung über die ganze Therapie", "Kurze Wartezeiten", "Direkte Abrechnung mit der Kasse"],
    details: [
      { title: "Genehmigung", text: "Wie Dialyse und Chemotherapie zählt die Strahlentherapie zu den hochfrequenten Behandlungen. Eine Verordnung und eine Genehmigung der Krankenkasse sind nötig." },
      { title: "Termine", text: "Schicken Sie uns Ihren Bestrahlungsplan. Wir legen die Abholzeiten passend dazu fest." },
    ],
  },
  {
    slug: "krankenhausfahrten",
    title: "Krankenhausfahrten",
    short: "Aufnahme, Entlassung, Verlegung und Konsilfahrten – auch direkt von der Station.",
    icon: "hospital",
    lead: "Für die Aufnahme ins Krankenhaus, die Entlassung nach Hause oder die Verlegung in eine andere Klinik: Wir holen Sie dort ab, wo Sie sind.",
    points: ["Aufnahme & Entlassung", "Verlegungen zwischen Kliniken", "Konsilfahrten", "Abholung direkt von Station"],
    details: [
      { title: "Kostenübernahme", text: "Fahrten im Zusammenhang mit einer stationären Behandlung übernimmt die Krankenkasse mit ärztlicher Verordnung – eine gesonderte Genehmigung ist nicht nötig." },
      { title: "Für Kliniken", text: "Entlassmanagement und Stationen erreichen uns direkt über die Disposition. Wir bestätigen Fahrten schnell und zuverlässig." },
    ],
  },
  {
    slug: "reha",
    title: "Reha- & Therapiefahrten",
    short: "Zur Reha-Klinik, zur ambulanten Reha oder zur regelmäßigen Physiotherapie.",
    icon: "reha",
    lead: "Wir bringen Sie zur Anschlussheilbehandlung, zur ambulanten Reha oder zu regelmäßigen Therapieterminen – auch über weite Strecken.",
    points: ["An- und Abreise zur Reha", "Ambulante Reha", "Gepäcktransport inklusive", "Fernfahrten deutschlandweit"],
    details: [
      { title: "Kostenübernahme", text: "Bei stationärer Reha übernimmt oft der Reha-Träger (z. B. Rentenversicherung) die Fahrtkosten. Wir helfen Ihnen, die richtigen Unterlagen zusammenzustellen." },
      { title: "Fernfahrten", text: "Ihre Reha-Klinik liegt an der Ostsee oder im Allgäu? Kein Problem – wir planen Pausen ein und fahren Sie bequem bis vor die Tür." },
    ],
  },
  {
    slug: "flughafentransfer",
    title: "Flughafentransfer",
    short: "Barrierefrei zum Flughafen Köln/Bonn, Düsseldorf oder Frankfurt – mit Gepäck.",
    icon: "plane",
    lead: "Mit eingeschränkter Mobilität in den Urlaub: Wir bringen Sie und Ihr Gepäck zum Terminal und übergeben Sie auf Wunsch an den Mobilitätsservice des Flughafens.",
    points: ["Alle großen Flughäfen in NRW & Rhein-Main", "Übergabe an den Flughafen-Service", "Viel Platz für Gepäck", "Festpreis vorab"],
    details: [
      { title: "Kosten", text: "Flughafentransfers sind Privatfahrten. Sie erhalten vorab einen verbindlichen Festpreis." },
      { title: "Planung", text: "Buchen Sie möglichst eine Woche im Voraus. Teilen Sie uns Flugnummer und Rollstuhltyp mit." },
    ],
  },
  {
    slug: "freizeitfahrten",
    title: "Freizeit- & Ausflugsfahrten",
    short: "Familienfeier, Konzert oder Ausflug: Mobilität für schöne Momente.",
    icon: "sun",
    lead: "Krankenfahrten sind nicht nur Pflicht. Wir bringen Sie auch zum Geburtstag der Enkelin, ins Theater oder auf einen Ausflug in die Eifel.",
    points: ["Familienfeiern & Hochzeiten", "Kultur & Veranstaltungen", "Ausflüge & Besuche", "Wartezeit flexibel buchbar"],
    details: [
      { title: "Kosten", text: "Freizeitfahrten sind Privatfahrten. Wir nennen Ihnen vorab einen Festpreis inklusive Wartezeit." },
      { title: "Begleitung", text: "Auf Wunsch begleitet Sie unser Fahrer auch vor Ort – etwa vom Parkplatz bis zum Tisch." },
    ],
  },
];

export type Vehicle = {
  name: string;
  image: ImageMetadata;
  alt: string;
  text: string;
  specs: string[];
};

export const fleet: Vehicle[] = [
  {
    name: "E-Klasse Kombi",
    image: kombi,
    alt: "Schwarze Mercedes E-Klasse Kombi mit PULS-Beschriftung",
    text: "Komfortabel für sitzende Fahrgäste mit Begleitung und viel Platz für Rollator oder Gepäck.",
    specs: ["Bis 3 Fahrgäste", "Sitzend", "Großer Kofferraum", "Klimaanlage"],
  },
  {
    name: "Vito / Van",
    image: vito,
    alt: "Schwarzer Mercedes Vito mit PULS-Beschriftung",
    text: "Unser Allrounder mit Rampe: für Rollstuhlfahrten und Fahrten mit mehreren Begleitpersonen.",
    specs: ["Bis 6 Fahrgäste", "1 Rollstuhlplatz", "Heckrampe", "Elektrische Schiebetür"],
  },
  {
    name: "Sprinter / Großraum",
    image: sprinter,
    alt: "Schwarzer Mercedes Sprinter mit PULS-Beschriftung",
    text: "Für Tragestuhl- und Liegendfahrten sowie schwere Elektrorollstühle.",
    specs: ["2 Rollstuhlplätze", "Hebebühne bis 300 kg", "Fahrtrage", "Stehhöhe innen"],
  },
];

export const faqs: { q: string; a: string }[] = [
  { q: "Was ist der Unterschied zwischen Krankenfahrt und Krankentransport?", a: "Eine Krankenfahrt ist die Beförderung ohne medizinisch-fachliche Betreuung – sitzend, im Rollstuhl, im Tragestuhl oder liegend. Ein Krankentransport (KTW) ist nötig, wenn während der Fahrt medizinische Betreuung erforderlich ist. PULS ist ein Krankenfahrdienst." },
  { q: "Übernimmt meine Krankenkasse die Kosten?", a: "Bei Fahrten zu stationären Behandlungen ja, mit ärztlicher Verordnung. Fahrten zu ambulanten Behandlungen werden nur in bestimmten Fällen und nach Genehmigung übernommen – etwa bei Dialyse, Chemo- oder Strahlentherapie, bei Pflegegrad 3 mit Mobilitätseinschränkung, Pflegegrad 4 oder 5 sowie den Merkzeichen aG, Bl oder H." },
  { q: "Wie hoch ist meine Zuzahlung?", a: "Gesetzlich Versicherte zahlen 10 % der Fahrtkosten, mindestens 5 € und höchstens 10 € pro Fahrt. Sind Sie von Zuzahlungen befreit, legen Sie uns einfach Ihren Befreiungsausweis vor." },
  { q: "Welche Unterlagen brauche ich?", a: "Die Verordnung einer Krankenbeförderung (Muster 4) von Ihrem Arzt und – bei ambulanten Behandlungen – die Genehmigung Ihrer Krankenkasse. Bringen Sie zur Fahrt bitte auch Ihre Versichertenkarte mit." },
  { q: "Wie früh sollte ich eine Fahrt buchen?", a: "Möglichst zwei bis drei Werktage im Voraus. Kurzfristige Fahrten ermöglichen wir, wann immer es die Planung zulässt – rufen Sie uns einfach an." },
  { q: "Kann eine Begleitperson mitfahren?", a: "Ja. Ist die Begleitung ärztlich verordnet, fährt sie kostenlos mit. Bei privaten Fahrten stimmen wir die Mitnahme vorab mit Ihnen ab." },
  { q: "Fahren Sie auch am Wochenende und nachts?", a: "Ja, nach Vereinbarung fahren wir an sieben Tagen pro Woche. Unsere Disposition ist Montag bis Freitag von 6 bis 20 Uhr und samstags von 7 bis 14 Uhr erreichbar." },
  { q: "Kann ich auch privat und ohne Verordnung fahren?", a: "Natürlich. Für Privatfahrten nennen wir Ihnen vorab einen verbindlichen Festpreis. Bezahlung bar, mit EC-Karte oder auf Rechnung." },
  { q: "Ich bin privat versichert. Wie läuft die Abrechnung?", a: "Sie erhalten von uns eine Rechnung, die Sie bei Ihrer privaten Krankenversicherung oder Beihilfe einreichen können." },
  { q: "Sind Sie ein Notdienst?", a: "Nein. Bei medizinischen Notfällen wählen Sie bitte sofort 112. Den ärztlichen Bereitschaftsdienst erreichen Sie unter 116 117." },
];

export const steps = [
  { title: "Verordnung holen", text: "Ihr Arzt stellt die Verordnung einer Krankenbeförderung (Muster 4) aus." },
  { title: "Genehmigung klären", text: "Bei ambulanten Fahrten genehmigt die Krankenkasse die Fahrt. Wir helfen gern." },
  { title: "Fahrt anfragen", text: "Rufen Sie uns an oder nutzen Sie das Online-Formular. Wir bestätigen den Termin." },
  { title: "Entspannt ankommen", text: "Wir holen Sie ab und rechnen direkt mit Ihrer Krankenkasse ab." },
];

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const navigation: NavItem[] = [
  {
    label: "Leistungen",
    href: "/leistungen/",
    children: [
      { label: "Beförderungsarten", href: "/befoerderungsarten/" },
      ...services.map((s) => ({ label: s.title, href: `/leistungen/${s.slug}/` })),
    ],
  },
  { label: "Kostenübernahme", href: "/kostenuebernahme/" },
  {
    label: "Standorte",
    href: "/standorte/",
    children: locations.map((l) => ({ label: l.city, href: `/standorte/${l.slug}/` })),
  },
  {
    label: "Über uns",
    href: "/ueber-uns/",
    children: [
      { label: "Das sind wir", href: "/ueber-uns/" },
      { label: "Fuhrpark", href: "/fuhrpark/" },
      { label: "Karriere", href: "/karriere/" },
      { label: "Franchise", href: "/franchise/" },
      { label: "FAQ", href: "/faq/" },
    ],
  },
  { label: "Kontakt", href: "/kontakt/" },
];
