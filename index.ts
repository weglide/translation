import { i18nStore } from "@/shared/store"

// Main translation
export const translations = {
    // Scheme
    /*
    key: [
        "english",
        "german",
        "french",
        "dutch",
    ]
    */

    // Notification
    betaTitle: [
        "Prerelease",
        "Testversion",
        "",
        "",
    ],
    betaText: [
        "Please be aware that we might need to delete data or break some functionality.",
        "Bitte sei dir bewusst, dass wir eventuell Daten löschen müssen oder Fehler auftauchen.",
        "",
        "",
    ],
    waiting: [
        "Waiting",
        "Warten",
        "",
        "Wachtend",
    ],
    processing: [
        "Processing",
        "wird verarbeitet",
        "",
        "Wordt verwerkt",
    ],
    attention: [
        "Attention",
        "Achtung",
        "Attention",
        "Attentie",
    ],
    success: [
        "Success",
        "Erfolg",
        "Avec succès",
        "Geslaagd",
    ],
    errorAuthTitle: [
        "Session expired",
        "Sitzung abgelaufen",
        "",
        "Sessie vervallen",
    ],
    errorAuth: [
        "Please log in again",
        "Bitte logge dich erneut ein",
        "",
        "Log opniew in",
    ],
    errorServerTitle: [
        "Service unavailable",
        "Dienst nicht erreichbar",
        "",
        "Dienst niet beschikbaar",
    ],
    errorServer: [
        "Please try again later or contact us",
        "Bitte versuche es später erneut oder kontaktiere uns",
        "",
        "Probeer het later nog eens",
    ],
    errorForm: [
        "Please check your form inputs",
        "Bitte prüfe deine Formulareingaben",
        "",
        "Controleer het formulier",
    ],
    verified: [
        "Email verification complete, please log in.",
        "E-Mail wurde verifiziert, bitte einloggen.",
        "Votre adresse e-mail a été vérifiée, veuillez vous connecter s'il vous plait.",
        "Verificatie gelukt, log nu in.",
    ],
    notVerified: [
        "Please verify your Email first.",
        "Bitte verifiziere zuerst deine E-Mail.",
        "",
        "",
    ],
    resetComplete: [
        "Password reset complete, please log in.",
        "Passwort wurde zurückgesetzt, bitte einloggen.",
        "Votre mot de passe a été réinitialisé, veuillez vous connecter s'il vous plait.",
        "Wachtwoord hersteld, log nu in.",
    ],
    info: [
        "Info",
        "Info",
        "",
        "Informatie",
    ],
    warning: [
        "Warning",
        "Warnung",
        "",
        "Waarschuwing",
    ],
    error: [
        "Error",
        "Fehler",
        "",
        "Fout",
    ],
    analyzed: [
        "Analyzed",
        "Analyse",
        "",
        "",
    ],

    // Aircraft
    aircraft: [
        "Aircraft",
        "Flugzeug",
        "Avion",
        "Vliegtuig",
    ],
    kind: [
        "Kind",
        "Art",
        "Sorte",
        "Soort",
    ],
    glider: [
        "Glider",
        "Segelflugzeug",
        "",
        "Zweefvliegtuig",
    ],
    fes: [
        "FES",
        "FES",
        "FES",
        "FES",
    ],
    engine: [
        "Engine",
        "Motor",
        "",
        "Motor",
    ],
    paraglider: [
        "Paraglider",
        "Paragleiter",
        "",
        "Schermvlieger",
    ],
    hangGlider: [
        "Hang Glider",
        "Drachen",
        "",
        "Deltavlieger",
    ],
    ulGlider: [
        "UL Glider",
        "UL Gleiter",
        "",
        "UL Zweefvliegtuig",
    ],
    family: [
        "Family",
        "Familie",
        "Famille",
        "Familie",
    ],
    manufacturer: [
        "Manufacturer",
        "Hersteller",
        "Fabricant",
        "Fabrikant",
    ],
    seats: [
        "Seats",
        "Sitze",
        "Places",
        "Zitplaatsen",
    ],
    class: [
        "Class",
        "Klasse",
        "Classe",
        "Klasse",
    ],
    index: [
        "Index",
        "Index",
        "",
        "Index",
    ],
    igc: [
        "IGC",
        "IGC",
        "IGC",
        "IGC",
    ],

    // Airport
    airport: [
        "Airport",
        "Flughafen",
        "Aéroport",
        "Vliegveld",
    ],
    airports: [
        "Airports",
        "Flughäfen",
        "",
        "Vliegvelds",
    ],
    radio: [
        "Radio",
        "Funk",
        "Radio",
        "Radio",
    ],
    frequency: [
        "Frequency",
        "Frequenz",
        "Fréquence",
        "Frequentie",
    ],
    description: [
        "Description",
        "Beschreibung",
        "Description",
        "Omschrijving",
    ],
    type: [
        "Type",
        "Typ",
        "Type",
        "Type",
    ],
    category: [
        "Category",
        "Kategorie",
        "Catégorie",
        "Categorie",
    ],
    location: [
        "Location",
        "Standort",
        "",
        "Lokatie",
    ],
    timezone: [
        "Timezone",
        "Zeitzone",
        "",
        "Tijdzone",
    ],
    region: [
        "Region",
        "Region",
        "Région",
        "Regio",
    ],
    elevation: [
        "Elevation",
        "Höhe",
        "Élévation",
        "Hoogte",
    ],
    usage: [
        "Usage",
        "Nutzung",
        "",
        "Gebruik",
    ],
    coordinates: [
        "Coordinates",
        "Koordinaten",
        "Coordonnées",
        "Coördinaten",
    ],
    latitudeAbbrev: [
        "Lat.",
        "Lat.",
        "",
        "Lat.",
    ],
    longitudeAbbrev: [
        "Lon.",
        "Lon.",
        "",
        "Lon.",
    ],
    runway: [
        "Runway",
        "Piste",
        "",
        "Baan",
    ],
    length: [
        "Length",
        "Länge",
        "",
        "Lengte",
    ],
    width: [
        "Width",
        "Breite",
        "",
        "Breedte",
    ],
    surface: [
        "Surface",
        "Oberfläche",
        "",
        "Soort",
    ],
    strength: [
        "Strength",
        "Stärke",
        "",
        "Sterkte",
    ],
    glidingUsage: [
        "Gliding Usage",
        "Segelflugnutzung",
        "",
        "Zweefvliegterrein",
    ],
    reign: [
        "Reign",
        "Einflussgebiet",
        "",
        "Invloedgebied",
    ],
    launches: [
        "Gliding launches",
        "Segelflugstarts",
        "",
        "Zweefvliegstarts",
    ],

    // Call to action
    reportFalseInformation: [
        "Report false information",
        "Melde falsche Informationen",
        "Signale fausses informations",
        "Meld verkeerde informatie",
    ],
    logIn: [
        "Log in",
        "Einloggen",
        "Se connecter",
        "Inloggen",
    ],
    signUp: [
        "Sign up",
        "Registrieren",
        "S'inscrire",
        "Registreren",
    ],
    forgotPassword: [
        "Forgot Password?",
        "Passwort vergessen?",
        "Mot de passe oublié?",
        "Wachtwoord vergeten?",
    ],
    verifyEmail: [
        "Send verification link again",
        "Sende Verifizierungslink erneut",
        "",
        "",
    ],
    changePassword: [
        "Change Password",
        "Passwort ändern",
        "Changer mon mot de passe",
        "Wachtwoord veranderen",
    ],
    resendVerification: [
        "Send verification link",
        "Verifizierungslink senden",
        "",
        "",
    ],
    sendEmailAgain: [
        "Send email again",
        "E-Mail erneut senden",
        "Envoyer l'email à nouveau",
        "Email nogmaals versturen",
    ],
    showStories: [
        "Show stories",
        "Zeige Geschichten",
        "",
        "",
    ],
    showAllArticles: [
        "Show all articles",
        "Zeige alle Artikel",
        "",
        "",
    ],
    showLatest: [
        "Show latest",
        "Zeige Neueste",
        "",
        "Laatste bekijken",
    ],
    showDaily: [
        "Show daily",
        "Zeige Tagesbeste",
        "",
        "Beste bekijken",
    ],
    cancel: [
        "Cancel",
        "Abbrechen",
        "Annuler",
        "Annuleer",
    ],
    save: [
        "Save",
        "Speichern",
        "",
        "Opslaan",
    ],
    edit: [
        "Edit",
        "Bearbeiten",
        "",
        "Aanpassen",
    ],
    delete: [
        "Delete",
        "Löschen",
        "",
        "Verwijderen",
    ],
    show: [
        "show",
        "zeigen",
        "",
        "laten zien",
    ],

    // Flight
    flight: [
        "Flight",
        "Flug",
        "",
        "Vlucht",
    ],
    flights: [
        "Flights",
        "Flüge",
        "",
        "Vluchten",
    ],
    allFlights: [
        "All flights",
        "Alle Flüge",
        "Tous les vols",
        "Alle vluchten",
    ],
    flightDeleted: [
        "Flight deleted",
        "Flug gelöscht",
        "",
        "",
    ],
    flightSaved: [
        "Flight saved",
        "Flug gespeichert",
        "",
        "",
    ],
    flightDeleteConfirm: [
        "Do you really want to delete this flight?",
        "Möchtest du diesen Flug wirklich löschen?",
        "",
        "",
    ],

    // User
    junior: [
        "Junior",
        "Junior*in",
        "",
        "Junior",
    ],
    male: [
        "Male",
        "Männlich",
        "Masculin",
        "Man",
    ],
    female: [
        "Female",
        "Weiblich",
        "Féminin",
        "Vrouw",
    ],
    other: [
        "Other",
        "Divers",
        "Sexe neutre",
        "Anders",
    ],
    pilots: [
        "Pilots",
        "Pilot*innen",
        "",
        "Vlieger",
    ],

    // Meeting
    openFlight: [
        "Open flight",
        "Flug öffnen",
        "",
        "Vlucht openen",
    ],
    compare: [
        "Compare",
        "Vergleichen",
        "",
        "",
    ],
    remove: [
        "Remove",
        "Entfernen",
        "",
        "",
    ],

    // Task kind
    FR: [
        "Free",
        "Frei",
        "",
        "",
    ],
    FR4: [
        "Free (DMSt)",
        "Frei (DMSt)",
        "",
        "",
    ],
    GL: [
        "Goal",
        "Ziel",
        "",
        "",
    ],
    TR: [
        "Triangle",
        "Dreieck",
        "",
        "",
    ],
    RT: [
        "Rectangle",
        "Viereck",
        "",
        "",
    ],
    OR: [
        "Out and Return",
        "Zielrück",
        "",
        "",
    ],
    closed: [
        "Closed",
        "Geschlossen",
        "",
        "",
    ],
    open: [
        "Open",
        "Offen",
        "",
        "Open",
    ],
    unnamed: [
        "Unnamed",
        "Unbenannt",
        "",
        "",
    ],

    // Form fields
    email: [
        "Email",
        "E-Mail",
        "Adresse e-mail",
        "Email",
    ],
    password: [
        "Password",
        "Passwort",
        "Mot de passe",
        "Wachtwoord",
    ],
    name: [
        "First and last name",
        "Vor- und Nachname",
        "Prénom et Nom",
        "Voor- en Achternaam",
    ],
    birthdate: [
        "Date of birth",
        "Geburtsdatum",
        "Date de naissance",
        "Geboortedatum",
    ],
    dateFormat: [
        "e.g. 1960-01-25 (YYYY-MM-DD)",
        "z.B. 1960-01-25 (JJJJ-MM-DD)",
        "",
        "",
    ],
    club: [
        "Club",
        "Verein",
        "Club",
        "Club",
    ],
    textConfirm: [
        "I have read and agree to the following documents:",
        "Ich habe die folgenden Dokumente gelesen und stimme zu:",
        "",
        "",
    ],
    privacyPolicy: [
        "Privacy Policy",
        "Datenschutzerklärung",
        "",
        "Privacy Statement",
    ],
    userAgreement: [
        "User Agreement",
        "Nutzungsbedingungen",
        "",
        "Voorwaarden",
    ],
    subscribeNewsletter: [
        "Subscribe to our newsletter",
        "Abonniere unseren Newsletter",
        "Abonne-toi à notre newsletter",
        "Meld je aan voor de nieuwsbrief",
    ],
    newPassword: [
        "New password",
        "Neues Passwort",
        "Nouveau mot de passe",
        "Nieuw wachtwoord",
    ],
    registration: [
        "Registration (optional)",
        "Registrierung (optional)",
        "",
        "Registreren (niet verpflicht)",
    ],
    coPilotName: [
        "Co-Pilot name",
        "Co-Pilot*in Name",
        "",
        "Tweede vlieger",
    ],
    coPilotDateOfBirth: [
        "Co-Pilot date of birth",
        "Co-Pilot Geburtsdatum",
        "",
        "Geboorte datum tweede vlieger",
    ],
    competitionId: [
        "Competition ID (optional)",
        "Wettbewerbs-ID (optional)",
        "",
        "Wedstrijdnummer (niet verpflicht)",
    ],

    // Authentication
    joinThanks: [
        "Thank you for joining WeGlide!",
        "Wir freuen uns dich in der Community zu begrüßen!",
        "Merci d'avoir rejoint WeGlide!",
        "Bedankt voor je aanmelding bij WeGlide!",
    ],
    urgeVerify: [
        "Please verify your email by clicking the link in the email you got.",
        "Bitte verifiziere deine E-Mail Adresse über den Link den wir dir zugesendet haben.",
        "Merci de vérifier ton adresse e-mail en cliquant sur le lien que nous t'avons envoyé ",
        "Verifieer je email adres door op de link te klikken die we je net hebben gestuurd.",
    ],
    verifyInstructions: [
        "If not you got no email, please wait a minute and check your spam folder or contact us at",
        "Falls du keine E-Mail bekommen hast, warte eine Minute und prüfe deinen Spam-Ordner oder kontaktiere uns unter",
        "Si tu n'as pas recu de mail, attends une minute et regarde dans tes spams ou contactes nous",
        "Als je geen mail het gehad, wacht een paar minuten, controleer je spam folder of stuur ons een bericht.",
    ],
    joinCommunity: [
        "Join the community!",
        "Werde Teil der Community!",
        " 	Rejoins la communauté!",
        "Neem deel aan WeGlide!",
    ],
    errorPrivacy: [
        "Please accept our privacy statements and terms.",
        "Bitte akzeptiere die Nutzungsbedingungen und Datenschutzerklärung.",
        "Merci d'accepter les conditions d'utilisation et la déclaration de confidentialité.",
        "Accepteer onze voorwaarden en het privacy statement.",
    ],
    errorCaptcha: [
        "Please solve the captcha to verify you are human.",
        "Bitte löse das Captcha um zu zeigen dass du ein Mensch bist.",
        "",
        "",
    ],
    verifying: [
        "Verifying Email",
        "E-Mail wird verifiziert",
        "Nous vérifions ton adresse e-mail",
        "Email wordt geverifieerd",
    ],
    urgeLogIn: [
        "Please log in afterwards",
        "Danach bitte einloggen",
        "Ensuite merci de vous connecter",
        "Daarna inloggen",
    ],
    requestVerification: [
        "Request new verification link",
        "Neuen Verifizierungslink anfordern",
        "",
        "",
    ],
    requestRecoverPassword: [
        "Request password recovery",
        "Passwort-Wiederherstellung anfordern",
        "Demander la récupération de mon mot de passe",
        "Wachtwoord herstel aanvragen",
    ],
    instructionsEmailed: [
        "Email send, please follow the mailed instructions.",
        "E-Mail gesendet, bitte folge den dort beschriebenen Anweisungen",
        "Nous vous avons envoyé un mail avec les instructions à suivre pour récupérer votre mot de passe",
        "Email verstuurd",
    ],
    recoverPassword: [
        "Recover password",
        "Passwort Wiederherstellen",
        "récupérer mon mot de passe",
        "Wachtwoord herstellen",
    ],
    choosePassword: [
        "Choose new password",
        "Wähle ein neues Passwort",
        "Choisir un nouveau mot de passe",
        "Stel een nieuw wachtwoord in",
    ],
    resetInvalid: [
        "Password recovery link is no longer valid. Please request a new one.",
        "Link zur Passwort-Wiederherstellung ist abgelaufen. Bitte fordere einen neuen an.",
        "Le lien pour récupérer ton mot de passse est éxpiré. Merci d'en demander un nouveau.",
        "Wachtwoord herstel link is niet meer geldig. Vraag een nieuwe aan.",
    ],

    // Airspace
    airspace: [
        "Airspace",
        "Luftraum",
        "",
        "Luchtruim",
    ],
    airspaces: [
        "Airspaces",
        "Lufträume",
        "",
        "Luchtruimen",
    ],
    noAirspaceViolations: [
        "No airspaces crossed.",
        "Keine Lufträume durchflogen.",
        "",
        "Geen luchtruim schendingen.",
    ],

    // Page not found
    pageNotFound: [
        "Landing site not found",
        "Ort zum Landen nicht gefunden",
        "",
        "Pagina niet gevonden",
    ],
    pickMeUp: [
        "Pick me up",
        "Bring mich zurück",
        "",
        "Breng me terug",
    ],

    // Filter
    filterPlaceholder: [
        "Search",
        "Suche",
        "",
        "",
    ],

    // Flight detail
    flightDetail: [
        "Flight detail",
        "Flugdetails",
        "",
        "Vluchtdetails",
    ],
    wingmen: [
        "Wingmen",
        "Gefährten",
        "",
        "Wingmen",
    ],
    scoreProcessing: [
        "Scoring in process",
        "Punkte werden berechnet,",
        "",
        "Bezig met scoren",
    ],
    pleaseReload: [
        "please reload this page.",
        "bitte lade die Seite neu.",
        "",
        "",
    ],
    points: [
        "Points",
        "Punkte",
        "",
        "Punten",
    ],
    invalid: [
        "Invalid",
        "Ungültig",
        "",
        "",
    ],
    invalidFlight: [
        "Flight claimed too late for this contest",
        "Flugmeldung zu spät für diese Wertung",
        "",
        "",
    ],
    free: [
        "Free",
        "Frei",
        "",
        "Vrije",
    ],
    speed: [
        "Speed",
        "Geschwindigkeit",
        "",
        "Snelheid",
    ],
    triangle: [
        "Triangle",
        "Dreieck",
        "",
        "Driehoek",
    ],
    rectangle: [
        "Rectangle",
        "Viereck",
        "",
        "Vierhoek",
    ],
    declared: [
        "Declared",
        "Deklariert",
        "",
        "Gedeclareerd",
    ],
    outReturn: [
        "Out and Return",
        "Zielrück",
        "",
        "Retour",
    ],
    convexHull: [
        "Convex Hull",
        "Konvexe Hülle",
        "",
        "Convex omhulsel",
    ],
    teSpeed: [
        "EC Speed",
        "EK Geschwindigkeit",
        "",
        "TE Snelheid",
    ],
    teSpeedDescription: [
        "Energy Compensated Speed relative to task",
        "Energiekompensierte Geschwindigkeit relativ zur Aufgabe",
        "",
        "Endergie gecompenseerde snelheid i.r.t. opdracht",
    ],
    declaredTask: [
        "Declared Task",
        "Deklarierte Aufgabe",
        "",
        "Gedeclareerde opdracht",
    ],
    declaredTaskDescription: [
        "Task declared by pilot before flight",
        "Vom Piloten vor dem Flug deklarierte Aufgabe",
        "",
        "De opdracht die voor de vlucht is gedeclareed",
    ],
    statistics: [
        "Statistics",
        "Statistiken",
        "",
        "Statistieken",
    ],
    general: [
        "General",
        "Allgemein",
        "",
        "",
    ],
    distanceAbbrev: [
        "Dist.",
        "Dist.",
        "",
        "Afst.",
    ],
    windAbbrev: [
        "Wind",
        "Wind",
        "",
        "Wind",
    ],
    speedAbbrev: [
        "Speed",
        "V",
        "V",
        "V",
    ],
    electric: [
        "Electric",
        "Elektrisch",
        "",
        "Electrisch",
    ],
    energyAbbrev: [
        "Energy",
        "Energie",
        "",
        "Energie",
    ],
    total: [
        "Total",
        "Gesamt",
        "",
        "Totaal",
    ],
    thermaling: [
        "Thermaling",
        "Thermik",
        "",
        "Thermiek",
    ],
    countAbbrev: [
        "Count",
        "Anzahl",
        "",
        "Aantal",
    ],
    timeAbbrev: [
        "Time",
        "Zeit",
        "",
        "Tijd",
    ],
    averageAbbrev: [
        "Avg.",
        "Schnitt",
        "",
        "Gem.",
    ],
    glide: [
        "Glide",
        "Gleiten",
        "",
        "Glijden",
    ],
    ratioAbbrev: [
        "Ratio",
        "Ratio",
        "",
        "Ratio",
    ],
    detourAbbrev: [
        "Detour",
        "Umweg",
        "",
        "Omweg",
    ],
    distance: [
        "Distance",
        "Distanz",
        "",
        "Afstand",
    ],
    duration: [
        "Duration",
        "Dauer",
        "",
        "Duur",
    ],
    takeoff: [
        "Takeoff",
        "Start",
        "",
        "Start",
    ],
    landing: [
        "Landing",
        "Landung",
        "",
        "Landing",
    ],
    status: [
        "Status",
        "Status",
        "",
        "Status",
    ],
    flightValid: [
        "flight valid",
        "Flug gültig",
        "",
        "Geldige vlucht",
    ],
    flightInvalid: [
        "flight invalid",
        "Flug ungültig",
        "",
        "Ongeldige vlucht",
    ],
    flightPending: [
        "flight pending",
        "Flug ausstehend",
        "",
        "Vlucht in afwachting",
    ],
    filePending: [
        "file pending",
        "Datei ausstehend",
        "",
        "Bestand in afwachting",
    ],
    fileHashValid: [
        "file hash valid",
        "Dateihash gültig",
        "",
        "Datahash geldig",
    ],
    fileIgcValid: [
        "interim IGC valid",
        "Vorläufig IGC valide",
        "",
        "IGC data geldig",
    ],
    fileInvalid: [
        "file interim invalid",
        "Datei vorläufig ungültig",
        "",
        "Data ongeldig",
    ],
    comment: [
        "Comment (optional)",
        "Kommentar (optional)",
        "",
        "Opmerkingen (niet verplicht)",
    ],
    outstart: [
        "Outstart",
        "Außenstart",
        "",
        "Buitenstart",
    ],
    outlanding: [
        "Outlanding",
        "Außenlandung",
        "",
        "Buitenlanding",
    ],
    fileValid: [
        "No remarks analyzing this flight.",
        "Keine Anmerkungen zur Analyse des Fluges.",
        "",
        "",
    ],
    loggerInformation: [
        "Logger information",
        "Logger Informationen",
        "",
        "",
    ],
    share: [
        "Share",
        "Teilen",
        "",
        "",
    ],
    embed: [
        "Embed",
        "Einbetten",
        "",
        "",
    ],
    showBarogram: [
        "Show barogram",
        "Barogram zeigen",
        "",
        "",
    ],
    includeBBox: [
        "Current bounding box",
        "Aktueller Ausschnitt",
        "",
        "",
    ],
    displayedFlights: [
        "Displayed flights",
        "Angezeigte Flüge",
        "",
        "",
    ],
    similarFlights: [
        "Similar flights",
        "Ähnliche Flüge",
        "",
        "",
    ],

    // Flight list
    flightList: [
        "Flight list",
        "Flugliste",
        "",
        "",
    ],
    flightOverviewSwitch: [
        "Map",
        "Karte",
        "",
        "Kaart",
    ],
    date: [
        "Date",
        "Datum",
        "",
        "Datum",
    ],
    pilot: [
        "Pilot",
        "Pilot",
        "",
        "",
    ],
    more: [
        "More",
        "Mehr",
        "",
        "Meer",
    ],
    noFlightsFilter: [
        "No flights with these filters.",
        "Keine Flüge mit diesen Filtern.",
        "",
        "Geen resultaten met deze filter",
    ],

    // Flight overview
    flightOverview: [
        "Flight overview",
        "Flugübersicht",
        "",
        "Overzicht",
    ],
    flightListSwitch: [
        "List",
        "Liste",
        "",
        "Lijst",
    ],

    // Upload/Edit
    uploadFlights: [
        "Upload flights",
        "Flüge hochladen",
        "",
        "",
    ],
    editFlight: [
        "Edit flight",
        "Flug bearbeiten",
        "",
        "",
    ],

    // Form edit flight
    scoringReset: [
        "Reset scoring windows",
        "Wertungsfenster zurücksetzen",
        "",
        "Scoring herstellen",
    ],
    scoringAdd: [
        "Add scoring window",
        "Neues Wertungsfenster",
        "",
        "Scoring window toevoegen",
    ],
    scoringStart: [
        "Scoring start",
        "Wertungsbeginn",
        "",
        "Begin van het scoren",
    ],
    scoringEnd: [
        "Scoring end",
        "Wertungsende",
        "",
        "Eind van het scoren",
    ],
    registrationFormat: [
        "Only uppercase letters, numbers and '-' are allowed for registration.",
        "Nur Großbuchstaben, Ziffern und '-' sind die Registrierung erlaubt.",
        "",
        "Alleen hoofdletters, nummers en '-' zijn toegestaan voor registratie.",
    ],
    isNotRegistered: [
        "is not registered, no further authentication required.",
        "ist nicht registriert, keine Authentifizierung erforderlich.",
        "",
        "is niet geregistreerd, geen verdere authenticatie benodigd.",
    ],
    isRegistered: [
        "is registered, date of birth required as authentication.",
        "ist registriert, Geburtsdatum wird als Authentifizierung benötigt.",
        "",
        "is geregistreed, geboortedatum vereist voor authenticatie.",
    ],
    competitionIdFormat: [
        "Only alphanumeric characters are allowed for competition id.",
        "Nur Alphanumerische Zeichen sind für die Wettbewerbs-ID erlaubt.",
        "",
        "Alleen alfanumerieke karakters zijn toegestaan als wedstrijdnummer.",
    ],
    scoringWindows: [
        "Scoring windows",
        "Wertungsfenster",
        "",
        "Scoring Windows",
    ],
    scoringTowingNotice: [
        "Please make sure that the scoring windows do not include towing.",
        "Bitte prüfe, dass die Wertungsfenster kein Schleppen beinhalten.",
        "",
        "Sleeptijd mag geen onderdeel zijn van het scoring window.",
    ],
    scoringiNotice: [
        "Airplane with electric propulsion selected. Please make sure time spans with running engine (yellow) are excluded from scoring.",
        "Flugzeug mit elektrischem Antrieb ausgewählt. Bitte prüfe, dass die Wertungsfenster keinen Motorlauf (gelb) beinhalten.",
        "",
        "Vliegtuig met electro motor geselecteerd, het scoring window mag geen motorlooptijd bevatten.",
    ],
    scoringEngineNotice: [
        "Airplane with engine selected. Please make sure time spans with running engine (yellow) are excluded from scoring.",
        "Flugzeug mit Motor ausgewählt. Bitte prüfe, dass die Wertungsfenster keinen Motorlauf (gelb) beinhalten.",
        "",
        "Vliegtuig met motor geselecteerd, het scoring window mag geen motorlooptijd bevatten.",
    ],
    errorTerms: [
        "Please agree to the terms.",
        "Bitte stimme den Bedingungen zu.",
        "",
        "",
    ],
    textConfirmUpload: [
        "I confirm that my scoring windows are chosen according to the rules,\
         each active airspace crossed was cleared by ATC\
         and I have read and accepted the following documents:",
        "Ich bestätige, dass ich die Wertungsfenster nach den Regeln gewählt habe, \
         jeder durchflogene aktive Luftraum von ATC freigegeben wurde,\
         und ich die folgenden Dokumente gelesen habe und ihnen zustimme:",
        "",
        "",
    ],

    // Form upload igc
    hello: [
        "Hello",
        "Hallo",
        "Bonjour",
        "Hallo",
    ],
    shareFlights: [
        "share your flights!",
        "teile deine Flüge!",
        "",
        "deel je vluchten!",
    ],
    unauthorizedNotice: [
        "You are not logged in, please provide your date of birth and full name to upload if you have an account or",
        "Du bist nicht eingeloggt, bitte gib deinen vollen Namen sowie dein Geburtsdatum zum Hochladen an falls du einen Account hast oder",
        "",
        "Je bent niet ingelogd. Vul je volledige naam en geboortedatum in.",
    ],
    logInFirst: [
        "log in",
        "melde dich an",
        "",
        "",
    ],
    igcDragText: [
        "Drag .igc files here to upload or click to select",
        "Ziehe IGC-Dateien hierher zum Hochladen oder klicke zum Auswählen",
        "",
        "Sleep je .igc-bestanden hierheen om ze te uploaden of klik hier om ze te slecteren",
    ],
    igcDropText: [
        "Drop .igc files to upload",
        "Lasse die IGC-Dateien los zum Hochladen",
        "",
        "Laat je .igc-bestenden los om ze te uploaden",
    ],

    // Teaser
    currentLanguage: [
        "English",
        "Deutsch",
        "Français",
        "Nederlands",
    ],
    welcome: [
        "Welcome",
        "Willkommen",
        "",
        "Welkom",
    ],
    shareAdventures: [
        "Share your latest adventures.",
        "Teile deine neuesten Abenteuer.",
        "",
        "Deel je laatste avonturen",
    ],
    uploadFlight: [
        "Upload flight",
        "Flug hochladen",
        "",
        "Vluchten uploaden",
    ],
    myProfile: [
        "My profile",
        "Mein Profil",
        "",
        "Mijn profiel",
    ],
    encourage: [
        "Let's take off together and join the next-generation gliding platform.",
        "Lass uns zusammen abheben und genieße die Segelflugplattform der nächsten Generation.",
        "",
        "Laten we samen starten en sluit je aan bij het zweefplatform van de volgende generatie.",
    ],
    fromByPilots: [
        "Built by Pilots for Pilots.",
        "Entworfen von Piloten für Piloten.",
        "",
        "Gebouwd voor en door vliegers.",
    ],

    // Partner
    partner: [
        "Partner",
        "Partner",
        "",
        "Partner",
    ],
    sponsors: [
        "Funded by",
        "Gefördert durch",
        "",
        "Mede mogelijk gemaakt door",
    ],
    logoLang: [
        "EN",
        "DE",
        "EN",
        "EN",
    ],

    // Footer
    about: [
        "About",
        "Über",
        "",
        "Over",
    ],
    contact: [
        "Contact",
        "Kontakt",
        "",
        "Contact",
    ],
    philosophy: [
        "Philosophy",
        "Philosophie",
        "",
        "",
    ],
    imprint: [
        "Imprint",
        "Impressum",
        "",
        "Colofon",
    ],
    media: [
        "Media",
        "Medien",
        "",
        "Media",
    ],
    pressKit: [
        "Press Kit",
        "Pressekit",
        "",
        "Pers kit",
    ],
    services: [
        "Services",
        "Dienste",
        "",
        "Diensten",
    ],
    contestRules: [
        "Contest Rules",
        "Wettbewerbsregeln",
        "",
        "",
    ],
    loggers: [
        "Loggers",
        "Logger",
        "",
        "",
    ],
    developer: [
        "Developer",
        "Entwickler",
        "",
        "Ontwikkelaars",
    ],
    getStarted: [
        "Get Started",
        "Einleitung",
        "",
        "",
    ],
    faq: [
        "Frequent questions",
        "Häufige Fragen",
        "",
        "FAQ",
    ],

    // Teaser
    dailyBest: [
        "Daily best",
        "Tagesbeste",
        "",
        "Beste van de dag",
    ],
    latestUploads: [
        "Latest uploads",
        "Neu hochgeladen",
        "",
        "Nieuwste uploads",
    ],
    flightStories: [
        "Flight Stories",
        "Fluggeschichten",
        "",
        "",
    ],

    // Home Content
    magazine: [
        "Magazine",
        "Magazin",
        "",
        "Tijdschrift",
    ],
    magazineFeatures: [
        "WeGlide provides interactive flight data and maps to every story, video or article.",
        "WeGlide stellt interaktive Flugdaten und Karten zu jeder Geschichte, jedem Video oder Artikel.",
        "",
        "WeGlide biedt interactieve vluchtgegevens en kaarten voor elk verhaal, video of artikel.",
    ],
    competitions: [
        "Competitions",
        "Wettbewerbe",
        "",
        "Wedstrijden",
    ],
    competitionsFeatures: [
        "With our leading scoring algorithms we aim for fair competitions around the globe.",
        "Mit unseren führenden Wertungsalgorithmen streben wir gerechte Wettbewerbe rund um den Globus an.",
        "",
        "Met onze toonaangevende scoringsalgoritmen streven we naar eerlijke wedstrijden over de hele wereld. Ongeacht de regels.",
    ],
    team: [
        "Team",
        "Team",
        "",
        "Team",
    ],
    johannesDescription: [
        "Competition Pilot",
        "Wettbewerbspilot",
        "",
        "Wedstrijdvlieger",
    ],
    moritzDescription: [
        "Cross-Country Explorer",
        "Cross-Country Entdecker",
        "",
        "Overland verkenner",
    ],
    samuelDescription: [
        "Outdoor Enthusiast",
        "Outdoor Abenteurer",
        "",
        "Outdoorliefhebber",
    ],

    // Magazine Teaser
    readingTime: [
        "min. read",
        "Min. Lesezeit",
        "",
        "Min. Leestijd",
    ],

    // Map layer
    mapLayer: [
        "Map layer",
        "Karte",
        "",
        "Kaart",
    ],
    comingSoon: [
        "Coming soon",
        "Kommt bald",
        "",
        "",
    ],
    transportation: [
        "Streets",
        "Straßen",
        "",
        "Transport",
    ],
    landcover: [
        "Landcover",
        "Landbedeckung",
        "",
        "Landbedekking",
    ],
    administrative: [
        "Cities and Countries",
        "Städte und Länder",
        "",
        "Administratief",
    ],
    pois: [
        "Points of interest",
        "Interessante Punkte",
        "",
        "Keerpunten",
    ],
    weather: [
        "Weather",
        "Wetter",
        "",
        "Weer",
    ],
    satImage: [
        "Satellite image",
        "Satellitenbild",
        "",
        "Sattelietbeelden",
    ],
    pfd: [
        "Predicted flight distance",
        "Vorhergesagte Flugdistanz",
        "",
        "Voorspelde vluchtafstand",
    ],
    rainRadar: [
        "Rain radar",
        "Regenradar",
        "",
        "Regenradar",
    ],

    // Navigation
    start: [
        "Start",
        "Start",
        "",
        "Start",
    ],
    ranks: [
        "Ranks",
        "Wertung",
        "",
        "Plaats",
    ],
    upload: [
        "Upload",
        "Hochladen",
        "",
        "Uploaden",
    ],
    task: [
        "Task",
        "Aufgabe",
        "",
        "Opdracht",
    ],
    profile: [
        "Profile",
        "Profil",
        "",
        "Profiel",
    ],
    logOut: [
        "Log out",
        "Ausloggen",
        "",
        "Log uit",
    ],

    // Profile statistics
    joined: [
        "Joined WeGlide",
        "WeGlide Beigetreten",
        "",
        "Lid geworden van WeGlide",
    ],
    stories: [
        "Stories",
        "Geschichten",
        "",
        "Verhalen",
    ],
    airtime: [
        "Cumulative airtime",
        "Gesamte Flugzeit",
        "",
        "Totale vliegtijd",
    ],
    cumulativeDistance: [
        "Cumulative distance",
        "Gesamte Distanz",
        "",
        "Totale afstand",
    ],
    avgSpeed: [
        "Average speed",
        "Durchschnittsgeschwindigkeit",
        "",
        "Gemiddelde snelheid",
    ],
    avgGlideSpeed: [
        "Average glide speed",
        "Gleitgeschwindigkeit",
        "",
        "Gemiddelde glijsnelheid",
    ],
    avgGlideDetour: [
        "Average glide detour",
        "Durchschnittlicher Gleitumweg",
        "",
        "Gemiddelde glij omweg",
    ],

    // Profile Settings
    profileSettings: [
        "Profile settings",
        "Profileinstellungen",
        "",
        "Profiel instellingen",
    ],
    metric: [
        "Metric",
        "Metrisch",
        "",
        "Metrisch",
    ],
    imperial: [
        "Imperial",
        "Imperial",
        "",
        "Imperial",
    ],
    integrateSkysight: [
        "Integrate SkySight weather data into WeGlide",
        "Integriere SkySight Wetter in WeGlide",
        "",
        "Integreer SkySight binnen WeGlide",
    ],
    integrateTopmeteo: [
        "Integrate TopMeteo weather data into WeGlide",
        "Integriere TopMeteo Wetter in WeGlide",
        "",
        "Integreer TopMeteo binnen WeGlide",
    ],

    // Profile
    settings: [
        "Settings",
        "Einstellungen",
        "",
        "Instellingen",
    ],
    flightsAsList: [
        "Flights as list",
        "Flüge als Liste",
        "",
        "",
    ],

    // Ranking
    ranking: [
        "Ranking",
        "Rangliste",
        "",
        "Rangschikking",
    ],
    contest: [
        "Contest",
        "Wettbewerb",
        "",
        "Wedstrijd",
    ],
    dmstDescription: [
        "German Championships",
        "Deutsche Meisterschaften",
        "",
        "Duitse kampioenschappen",
    ],
    plusDescription: [
        "WeGlide Distance Cup",
        "WeGlide Distanz Cup",
        "",
        "WeGlide afstandscup",
    ],
    sprintDescription: [
        "WeGlide Speed Cup",
        "WeGlide Geschwindigkeits Cup",
        "",
        "WeGlide snelheidscup",
    ],
    electricDescription: [
        "WeGlide FES Cup",
        "WeGlide FES Cup",
        "",
        "WeGlide FES-Cup",
    ],

    // Ranking config
    season: [
        "Season",
        "Saison",
        "",
        "Seizoen",
    ],
    gliderClass: [
        "Glider Class",
        "Flugzeugklasse",
        "",
        "Vliegtuigklasse",
    ],

    // Ranking table
    rank: [
        "Rank",
        "Rang",
        "",
        "Rang",
    ],
    totalPoints: [
        "Total",
        "Gesamt",
        "",
        "Punten totaal",
    ],

    // Story
    story: [
        "Story",
        "Geschichte",
        "",
        "Verhaal",
    ],
    fullscreen: [
        "Fullscreen",
        "Vollbild",
        "",
        "Volledig scherm",
    ],
    beforeTakeoff: [
        "Before takeoff",
        "Vor dem Start",
        "",
        "Voor de starts",
    ],
    afterLanding: [
        "After landing",
        "Nach der Landung",
        "",
        "Na de landing",
    ],
    timeless: [
        "Timeless",
        "Zeitlos",
        "",
        "Tijdloos",
    ],
    until: [
        "until",
        "bis",
        "",
        "",
    ],
    addComment: [
        "Add comment",
        "Neuer Kommentar",
        "",
        "Nieuwe opmerking",
    ],
    addVideo: [
        "Add video",
        "Neues Video",
        "",
        "Niewe video",
    ],
    imageDragText: [
        "Drag images here to upload or click to select",
        "Ziehe Bilder hierher zum Hochladen oder klicke zum Auswählen",
        "",
        "Sleep je foto hierheen om ze te uploaden of klik hier om ze te slecteren",
    ],
    imageDropText: [
        "Drop images to upload",
        "Lasse die Bilder los zum Hochladen",
        "",
        "Laat je foto's los om ze te uploaden",
    ],
    writeComment: [
        "Write comment..",
        "Schreibe einen Kommentar..",
        "",
        "Plaats een opmerking...",
    ],

    // Task
    tasks: [
        "Tasks",
        "Aufgaben",
        "",
        "",
    ],
    all: [
        "All",
        "Alle",
        "",
        "",
    ],
    my: [
        "My",
        "Meine",
        "",
        "",
    ],
    starred: [
        "Starred",
        "Favorisiert",
        "",
        "",
    ],
    myTasks: [
        "My tasks",
        "Meine Aufgaben",
        "",
        "Mijn opdrachten",
    ],
    declare: [
        "declare",
        "deklarieren",
        "",
        "declareren",
    ],
    undeclare: [
        "undeclare",
        "entdeklarieren",
        "",
        "declaratie verwijderen",
    ],
    newTask: [
        "new task",
        "neue Aufgabe",
        "",
        "nieuwe opdracht",
    ],
    noTaskDeclared: [
        "No declared task yet.",
        "Noch keine Aufgabe deklariert.",
        "",
        "Nog geen gedeclareerde opdracht.",
    ],
    noTasks: [
        "No tasks yet, plan a new one!",
        "Keine Aufgaben bis jetzt, plane eine!",
        "",
        "Nog geen opdracht, plan een nieuwe!",
    ],
    position: [
        "Position",
        "Position",
        "",
        "",
    ],
    startOnLeg: [
        "Start on leg",
        "Start auf Schenkel",
        "",
        "",
    ],
    locked: [
        "Task is locked because it was once declared.",
        "Aufgabe ist gesperrt weil sie bereits deklariert wurde.",
        "",
        "",
    ],
    taskplaner: [
        "Taskplaner",
        "Aufgabenplaner",
        "",
        "Opdrachtplanner",
    ],
    editTask: [
        "Edit task",
        "Aufgabe bearbeiten",
        "",
        "Opdracht aanpassen",
    ],
    taskName: [
        "Task name",
        "Aufgabenname",
        "",
        "Opdrachtnaam",
    ],
    private: [
        "Only visible for me",
        "Nur sichtbar für mich",
        "",
        "Privé",
    ],
    turnpoints: [
        "Turnpoints",
        "Wendepunkte",
        "",
        "Keerpunten",
    ],
    cupDragText: [
        "Drag a .cup file here to upload or click to select",
        "Ziehe eine CUP-Datei hierher zum Hochladen oder klicke zum Auswählen",
        "",
        "",
    ],
    cupDropText: [
        "Drop .cup file to upload",
        "Lasse die CUP-Datei los zum Hochladen",
        "",
        "",
    ],
    taskSaved: [
        "Task saved",
        "Aufgabe gespeichert",
        "",
        "",
    ],
    taskDeleted: [
        "Task deleted",
        "Aufgabe gelöscht",
        "",
        "",
    ],
    turnpointHelp: [
        "Click on the map to add a turnpoint.",
        "Klicke auf die Karte für einen Wendepunkt.",
        "",
        "",
    ],
    editHelp: [
        "Double click or drag to edit.",
        "Doppelt klicken oder ziehen zum Bearbeiten.",
        "",
        "",
    ]
}

export function i18n(key: keyof typeof translations): string {
    if (!translations[key]) console.error("Translation not found for", key);
    if (translations[key][i18nStore.current] === "")
        return translations[key][0]; // english
    else
        return translations[key][i18nStore.current];
}
