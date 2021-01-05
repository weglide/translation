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
        "Version d'essai",
        "",
    ],
    betaText: [
        "Please be aware that we might need to delete data or break some functionality.",
        "Bitte sei dir bewusst, dass wir eventuell Daten löschen müssen oder Fehler auftauchen.",
        "Merci de prendre en compte que nous serons éventuellement contraint d'effacer des données et que des erreurs peuvent survenir.",
        "",
    ],
    waiting: [
        "Waiting",
        "Warten",
        "Attendre",
        "Wachtend",
    ],
    processing: [
        "Processing",
        "Verarbeiten",
        "En traitement",
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
        "Erfolgreich",
        "Avec succès",
        "Geslaagd",
    ],
    errorAuthTitle: [
        "Session expired",
        "Sitzung abgelaufen",
        "Session expirée",
        "Sessie vervallen",
    ],
    errorAuth: [
        "Please log in again",
        "Bitte logge dich erneut ein",
        "Merci de te connecter à nouveau",
        "Log opniew in",
    ],
    errorServerTitle: [
        "Service unavailable",
        "Dienst nicht erreichbar",
        "Service non disponible",
        "Dienst niet beschikbaar",
    ],
    errorServer: [
        "Please try again later or contact us",
        "Bitte versuche es später erneut oder kontaktiere uns",
        "Merci de réessayer plus tard ou de nous contacter",
        "Probeer het later nog eens",
    ],
    errorForm: [
        "Please check your form inputs",
        "Bitte prüfe deine Formulareingaben",
        "Merci de vérifier les renseignements faits dans le formulaire",
        "Controleer het formulier",
    ],
    verified: [
        "Email verification complete, please log in.",
        "E-Mail wurde verifiziert, bitte einloggen.",
        "Ton adresse e-mail a été vérifiée, merci de te connecter.",
        "Verificatie gelukt, log nu in.",
    ],
    notVerified: [
        "Please verify your Email first.",
        "Bitte verifiziere zuerst deine E-Mail.",
        "Merci de d'abord vérifier ton adresse e-mail.",
        "",
    ],
    resetComplete: [
        "Password reset complete, please log in.",
        "Passwort wurde zurückgesetzt, bitte einloggen.",
        "Ton mot de passe a été réinitialisé, merci de te connecter.",
        "Wachtwoord hersteld, log nu in.",
    ],
    info: [
        "Info",
        "Info",
        "Information",
        "Informatie",
    ],
    warning: [
        "Warning",
        "Warnung",
        "Avertissement",
        "Waarschuwing",
    ],
    error: [
        "Error",
        "Fehler",
        "Erreur",
        "Fout",
    ],
    analyzed: [
        "Analyzed",
        "Analyse",
        "Analyse",
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
        "Planeur",
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
        "Moteur",
        "Motor",
    ],
    paraglider: [
        "Paraglider",
        "Paragleiter",
        "Parapente",
        "Schermvlieger",
    ],
    hangGlider: [
        "Hang Glider",
        "Drachen",
        "Deltaplane",
        "Deltavlieger",
    ],
    ulGlider: [
        "UL Glider",
        "UL Gleiter",
        "Planeur ultra-léger motorisé",
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
        "Constructeur",
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
        "Index",
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
        "Aéroports",
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
        "Localisation",
        "Lokatie",
    ],
    timezone: [
        "Timezone",
        "Zeitzone",
        "Fuseau horaire",
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
        "Usage",
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
        "Lat.",
        "Lat.",
    ],
    longitudeAbbrev: [
        "Lon.",
        "Lon.",
        "Lon.",
        "Lon.",
    ],
    runway: [
        "Runway",
        "Rollbahn",
        "Piste",
        "Baan",
    ],
    length: [
        "Length",
        "Länge",
        "Longueur",
        "Lengte",
    ],
    width: [
        "Width",
        "Breite",
        "Largeur",
        "Breedte",
    ],
    surface: [
        "Surface",
        "Oberfläche",
        "Surface",
        "Soort",
    ],
    strength: [
        "Strength",
        "Stärke",
        "Force",
        "Sterkte",
    ],
    glidingUsage: [
        "Gliding Usage",
        "Segelflugnutzung",
        "Usage d'un planeur",
        "Zweefvliegterrein",
    ],
    reign: [
        "Reign",
        "Einflussgebiet",
        "Zone d'influence",
        "Invloedgebied",
    ],
    launches: [
        "Gliding launches",
        "Segelflugstarts",
        "Décollages planeur",
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
        "Envoyer le lien de vérification à nouveau",
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
        "Envoyer le lien de vérification",
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
        "Voir les récits",
        "",
    ],
    showAllArticles: [
        "Show all articles",
        "Zeige alle Artikel",
        "Voir tous les articles",
        "",
    ],
    showLatest: [
        "Show latest",
        "Zeige Neue",
        "Voir nouveautés",
        "Laatste bekijken",
    ],
    showDaily: [
        "Show daily",
        "Zeige Tagesbeste",
        "Voir le meilleur vol du jour",
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
        "Enregistrer",
        "Opslaan",
    ],
    edit: [
        "Edit",
        "Bearbeiten",
        "Éditer",
        "Aanpassen",
    ],
    delete: [
        "Delete",
        "Löschen",
        "Supprimer",
        "Verwijderen",
    ],
    show: [
        "show",
        "zeigen",
        "montrer",
        "laten zien",
    ],

    // Flight
    flight: [
        "Flight",
        "Flug",
        "Vol",
        "Vlucht",
    ],
    flights: [
        "Flights",
        "Flüge",
        "Vols",
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
        "Vol supprimé",
        "",
    ],
    flightSaved: [
        "Flight saved",
        "Flug gespeichert",
        "Vol enregistré",
        "",
    ],
    flightDeleteConfirm: [
        "Do you really want to delete this flight?",
        "Möchtest du diesen Flug wirklich löschen?",
        "Veux-tu vraiment supprimer ce vol?",
        "",
    ],

    // User
    junior: [
        "Junior",
        "Junior",
        "Junior",
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
        "Piloten",
        "Pilotes",
        "Vlieger",
    ],

    // Meeting
    openFlight: [
        "Open flight",
        "Flug öffnen",
        "Ouvrir le vol",
        "Vlucht openen",
    ],
    compare: [
        "Compare",
        "Vergleichen",
        "Comparer",
        "",
    ],
    remove: [
        "Remove",
        "Entfernen",
        "Enlever",
        "",
    ],

    // Task kind
    FR: [
        "Free",
        "Frei",
        "Libre",
        "",
    ],
    FR4: [
        "Free (DMSt)",
        "Frei (DMSt)",
        "Libre (DMSt)",
        "",
    ],
    GL: [
        "Goal",
        "Ziel",
        "Objectif",
        "",
    ],
    TR: [
        "Triangle",
        "Dreieck",
        "Triangle",
        "",
    ],
    RT: [
        "Rectangle",
        "Viereck",
        "Polygone (3 points de virage)",
        "",
    ],
    OR: [
        "Out and Return",
        "Zielrück",
        "Aller-retour",
        "",
    ],
    closed: [
        "Closed",
        "Geschlossen",
        "Fermé",
        "",
    ],
    open: [
        "Open",
        "Offen",
        "Ouvert",
        "Open",
    ],
    unnamed: [
        "Unnamed",
        "Unbenannt",
        "Anonyme",
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
        "p.ex. 1960-01-25 (AAAA-MM-JJ)",
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
        "J'ai lu les documents et j'accepte:",
        "",
    ],
    privacyPolicy: [
        "Privacy Policy",
        "Datenschutzerklärung",
        "Déclaration de confidentialité",
        "Privacy Statement",
    ],
    userAgreement: [
        "User Agreement",
        "Nutzungsbedingungen",
        "Conditions d'utilisation",
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
        "S'inscrire (optionnel)",
        "Registreren (niet verpflicht)",
    ],
    coPilotName: [
        "Co-Pilot name",
        "Co-Pilot Name",
        "Nom du co-pilote",
        "Tweede vlieger",
    ],
    coPilotDateOfBirth: [
        "Co-Pilot date of birth",
        "Co-Pilot Geburtsdatum",
        "Date de naissance du co-pilote",
        "Geboorte datum tweede vlieger",
    ],
    competitionId: [
        "Competition ID (optional)",
        "Wettbewerbs-ID (optional)",
        "ID ou numéro de compétition (optionnel)",
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
        "Merci de vérifier ton adresse e-mail en cliquant sur le lien que nous t'avons envoyé.",
        "Verifieer je email adres door op de link te klikken die we je net hebben gestuurd.",
    ],
    verifyInstructions: [
        "If not you got no email, please wait a minute and check your spam folder or contact us at",
        "Falls du keine E-Mail bekommen hast, warte eine Minute und prüfe deinen Spam-Ordner oder kontaktiere uns unter",
        "Si tu n'as pas reçu de mail, attends une minute et regarde dans tes spams ou contacte-nous sous",
        "Als je geen mail het gehad, wacht een paar minuten, controleer je spam folder of stuur ons een bericht.",
    ],
    joinCommunity: [
        "Join the community!",
        "Werde Teil der Community!",
        "Rejoins la communauté!",
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
        "Merci de résoudre le Captcha pour vérifier que tu n'est pas un robot.",
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
        "Ensuite merci de te connecter",
        "Daarna inloggen",
    ],
    requestVerification: [
        "Request new verification link",
        "Neuen Verifizierungslink anfordern",
        "Demander un nouveau lien de vérification",
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
        "Nous t'avons envoyé un mail avec les instructions à suivre pour récupérer ton mot de passe",
        "Email verstuurd",
    ],
    recoverPassword: [
        "Recover password",
        "Passwort Wiederherstellen",
        "Récupérer mon mot de passe",
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
        "Le lien pour récupérer ton mot de passe est expiré. Merci d'en demander un nouveau.",
        "Wachtwoord herstel link is niet meer geldig. Vraag een nieuwe aan.",
    ],

    // Airspace
    airspace: [
        "Airspace",
        "Luftraum",
        "Espace aérien",
        "Luchtruim",
    ],
    airspaces: [
        "Airspaces",
        "Lufträume",
        "Espaces aériens",
        "Luchtruimen",
    ],
    noAirspaceViolations: [
        "No airspaces crossed.",
        "Keine Lufträume durchflogen.",
        "Pas d'espaces aériens traversés.",
        "Geen luchtruim schendingen.",
    ],

    // Page not found
    pageNotFound: [
        "Landing site not found",
        "Ort zum Landen nicht gefunden",
        "L'endroit d'atterrissage n'a pas été trouvé.",
        "Pagina niet gevonden",
    ],
    pickMeUp: [
        "Pick me up",
        "Bring mich zurück",
        "Ramène-moi en arrière",
        "Breng me terug",
    ],

    // Filter
    filterPlaceholder: [
        "Search",
        "Suche",
        "Recherche",
        "",
    ],

    // Flight detail
    flightDetail: [
        "Flight detail",
        "Flugdetails",
        "Détails du vol",
        "Vluchtdetails",
    ],
    wingmen: [
        "Wingmen",
        "Gefährten",
        "Partenaire d'équipe",
        "Wingmen",
    ],
    scoreProcessing: [
        "Scoring in process",
        "Punkte werden berechnet,",
        "Calculation des points en cours,",
        "Bezig met scoren",
    ],
    pleaseReload: [
        "please reload this page.",
        "bitte lade die Seite neu.",
        "merci de rafraîchir la page.",
        "",
    ],
    points: [
        "Points",
        "Punkte",
        "Points",
        "Punten",
    ],
    invalid: [
        "Invalid",
        "Ungültig",
        "Invalide",
        "",
    ],
    invalidFlight: [
        "Flight claimed too late for this contest",
        "Flugmeldung zu spät für diese Wertung",
        "Déclaration de vol trop tard pour ce classement",
        "",
    ],
    free: [
        "Free",
        "Frei",
        "Libre",
        "Vrije",
    ],
    speed: [
        "Speed",
        "Geschwindigkeit",
        "Vitesse",
        "Snelheid",
    ],
    triangle: [
        "Triangle",
        "Dreieck",
        "Triangle",
        "Driehoek",
    ],
    rectangle: [
        "Rectangle",
        "Viereck",
        "Polygone (3 points de virage)",
        "Vierhoek",
    ],
    declared: [
        "Declared",
        "Deklariert",
        "Déclaré",
        "Gedeclareerd",
    ],
    outReturn: [
        "Out and Return",
        "Zielrück",
        "Aller-retour",
        "Retour",
    ],
    convexHull: [
        "Convex Hull",
        "Konvexe Hülle",
        "Enveloppe convexe",
        "Convex omhulsel",
    ],
    teSpeed: [
        "EC Speed",
        "EK Geschwindigkeit",
        "Vitesse CE",
        "TE Snelheid",
    ],
    teSpeedDescription: [
        "Energy Compensated Speed relative to task",
        "Energiekompensierte Geschwindigkeit relativ zur Aufgabe",
        "Vitesse compensée en énergie relative à l'épreuve",
        "Endergie gecompenseerde snelheid i.r.t. opdracht",
    ],
    declaredTask: [
        "Declared Task",
        "Deklarierte Aufgabe",
        "Performance déclarée",
        "Gedeclareerde opdracht",
    ],
    declaredTaskDescription: [
        "Task declared by pilot before flight",
        "Vom Piloten vor dem Flug deklarierte Aufgabe",
        "Performance/vol déclarée par le pilote avant le vol",
        "De opdracht die voor de vlucht is gedeclareed",
    ],
    statistics: [
        "Statistics",
        "Statistiken",
        "Statistiques",
        "Statistieken",
    ],
    general: [
        "General",
        "Allgemein",
        "Général",
        "",
    ],
    distanceAbbrev: [
        "Dist.",
        "Dist.",
        "Dist.",
        "Afst.",
    ],
    windAbbrev: [
        "Wind",
        "Wind",
        "Vent",
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
        "Électrique",
        "Electrisch",
    ],
    energyAbbrev: [
        "Energy",
        "Energie",
        "Énergie",
        "Energie",
    ],
    total: [
        "Total",
        "Gesamt",
        "Total",
        "Totaal",
    ],
    thermaling: [
        "Thermaling",
        "Thermik",
        "Thermique",
        "Thermiek",
    ],
    countAbbrev: [
        "Count",
        "Anzahl",
        "Nombre",
        "Aantal",
    ],
    timeAbbrev: [
        "Time",
        "Zeit",
        "Temps",
        "Tijd",
    ],
    averageAbbrev: [
        "Avg.",
        "Schnitt",
        "Vitesse moyenne",
        "Gem.",
    ],
    glide: [
        "Glide",
        "Gleiten",
        "Planer",
        "Glijden",
    ],
    ratioAbbrev: [
        "Ratio",
        "Ratio",
        "Ratio",
        "Ratio",
    ],
    detourAbbrev: [
        "Detour",
        "Umweg",
        "Détour",
        "Omweg",
    ],
    distance: [
        "Distance",
        "Distanz",
        "Distance",
        "Afstand",
    ],
    duration: [
        "Duration",
        "Dauer",
        "Durée",
        "Duur",
    ],
    takeoff: [
        "Takeoff",
        "Start",
        "Décollage",
        "Start",
    ],
    landing: [
        "Landing",
        "Landung",
        "Atterrissage",
        "Landing",
    ],
    status: [
        "Status",
        "Status",
        "Statut",
        "Status",
    ],
    flightValid: [
        "flight valid",
        "Flug gültig",
        "Vol valide",
        "Geldige vlucht",
    ],
    flightInvalid: [
        "flight invalid",
        "Flug ungültig",
        "Vol invalide",
        "Ongeldige vlucht",
    ],
    flightPending: [
        "flight pending",
        "Flug ausstehend",
        "Vol en attente",
        "Vlucht in afwachting",
    ],
    filePending: [
        "file pending",
        "Datei ausstehend",
        "Fichier en attente",
        "Bestand in afwachting",
    ],
    fileHashValid: [
        "file hash valid",
        "Dateihash gültig",
        "Hash du fichier valide",
        "Datahash geldig",
    ],
    fileIgcValid: [
        "interim IGC valid",
        "Vorläufig IGC valide",
        "Fichier IGC valide",
        "IGC data geldig",
    ],
    fileInvalid: [
        "file interim invalid",
        "Datei vorläufig ungültig",
        "Fichier IGC invalide",
        "Data ongeldig",
    ],
    comment: [
        "Comment (optional)",
        "Kommentar (optional)",
        "Commentaire (optionnel)",
        "Opmerkingen (niet verplicht)",
    ],
    outstart: [
        "Outstart",
        "Außenstart",
        "Décollage extérieur",
        "Buitenstart",
    ],
    outlanding: [
        "Outlanding",
        "Außenlandung",
        "Atterrissage extérieur",
        "Buitenlanding",
    ],
    fileValid: [
        "No remarks analyzing this flight.",
        "Keine Anmerkungen zur Analyse des Fluges.",
        "Pas de remarques sur l'analyse du vol.",
        "",
    ],
    loggerInformation: [
        "Logger information",
        "Logger Informationen",
        "Informations de l'enregistreur",
        "",
    ],
    share: [
        "Share",
        "Teilen",
        "Partager",
        "",
    ],
    embed: [
        "Embed",
        "Einbetten",
        "Intégrer",
        "",
    ],
    showBarogram: [
        "Show barogram",
        "Barogram zeigen",
        "Montrer l'altitude enregistrée",
        "",
    ],
    includeBBox: [
        "Current bounding box",
        "Aktueller Ausschnitt",
        "Extrait actuel",
        "",
    ],
    displayedFlights: [
        "Displayed flights",
        "Angezeigte Flüge",
        "Vols affichés",
        "",
    ],
    similarFlights: [
        "Similar flights",
        "Ähnliche Flüge",
        "Vols similaires",
        "",
    ],

    // Flight list
    flightList: [
        "Flight list",
        "Flugliste",
        "Liste des vols",
        "",
    ],
    flightOverviewSwitch: [
        "Map",
        "Karte",
        "Carte",
        "Kaart",
    ],
    date: [
        "Date",
        "Datum",
        "Date",
        "Datum",
    ],
    pilot: [
        "Pilot",
        "Pilot",
        "Pilote",
        "",
    ],
    more: [
        "More",
        "Mehr",
        "Plus",
        "Meer",
    ],
    noFlightsFilter: [
        "No flights with these filters.",
        "Keine Flüge mit diesen Filtern.",
        "Pas de vols avec ce filtre.",
        "Geen resultaten met deze filter",
    ],

    // Flight overview
    flightOverview: [
        "Flight overview",
        "Flugübersicht",
        "Aperçu du vol",
        "Overzicht",
    ],
    flightListSwitch: [
        "List",
        "Liste",
        "Liste",
        "Lijst",
    ],

    // Upload/Edit
    uploadFlights: [
        "Upload flights",
        "Flüge hochladen",
        "Télécharger les vols",
        "",
    ],
    editFlight: [
        "Edit flight",
        "Flug bearbeiten",
        "Éditer le vol",
        "",
    ],

    // Form edit flight
    scoringReset: [
        "Reset scoring windows",
        "Wertungsfenster zurücksetzen",
        "Réinitialiser fenêtre d'épreuve",
        "Scoring herstellen",
    ],
    scoringAdd: [
        "Add scoring window",
        "Neues Wertungsfenster",
        "Nouvelle fenêtre d'épreuve",
        "Scoring window toevoegen",
    ],
    scoringStart: [
        "Scoring start",
        "Wertungsbeginn",
        "Début de l'épreuve",
        "Begin van het scoren",
    ],
    scoringEnd: [
        "Scoring end",
        "Wertungsende",
        "Fin de l'épreuve",
        "Eind van het scoren",
    ],
    registrationFormat: [
        "Only uppercase letters, numbers and '-' are allowed for registration.",
        "Nur Großbuchstaben, Ziffern und '-' sind die Registrierung erlaubt.",
        "Seul les lettres majuscules, les chiffres et '-' sont permis pour l'inscription.",
        "Alleen hoofdletters, nummers en '-' zijn toegestaan voor registratie.",
    ],
    isNotRegistered: [
        "is not registered, no further authentication required.",
        "ist nicht registriert, keine Authentifizierung erforderlich.",
        "n'est pas enregistré, pas d'authentification nécessaire.",
        "is niet geregistreerd, geen verdere authenticatie benodigd.",
    ],
    isRegistered: [
        "is registered, date of birth required as authentication.",
        "ist registriert, Geburtsdatum wird als Authentifizierung benötigt.",
        "est enregistré, date de naissance nécessaire pour l'authentification.",
        "is geregistreed, geboortedatum vereist voor authenticatie.",
    ],
    competitionIdFormat: [
        "Only alphanumeric characters are allowed for competition id.",
        "Nur Alphanumerische Zeichen sind für die Wettbewerbs-ID erlaubt.",
        "Seul les caractères alphanumériques sont permis pour le numéro/ID de compétition.",
        "Alleen alfanumerieke karakters zijn toegestaan als wedstrijdnummer.",
    ],
    scoringWindows: [
        "Scoring windows",
        "Wertungsfenster",
        "Fenêtre pour le score",
        "Scoring Windows",
    ],
    scoringTowingNotice: [
        "Please make sure that the scoring windows do not include towing.",
        "Bitte prüfe, dass die Wertungsfenster kein Schleppen beinhalten.",
        "Merci de vérifier que la fenêtre d'épreuve ne contient pas de remorqué.",
        "Sleeptijd mag geen onderdeel zijn van het scoring window.",
    ],
    scoringiNotice: [
        "Airplane with electric propulsion selected. Please make sure time spans with running engine (yellow) are excluded from scoring.",
        "Flugzeug mit elektrischem Antrieb ausgewählt. Bitte prüfe, dass die Wertungsfenster keinen Motorlauf (gelb) beinhalten.",
        "Tu as choisi un avion avec moteur électrique. Merci de vérifier que les fenêtres d'épreuve ne contiennent pas de temps de moteur (jaune).",
        "Vliegtuig met electro motor geselecteerd, het scoring window mag geen motorlooptijd bevatten.",
    ],
    scoringEngineNotice: [
        "Airplane with engine selected. Please make sure time spans with running engine (yellow) are excluded from scoring.",
        "Flugzeug mit Motor ausgewählt. Bitte prüfe, dass die Wertungsfenster keinen Motorlauf (gelb) beinhalten.",
        "Tu as choisi un avion avec moteur. Merci de vérifier que les fenêtres d'épreuve ne contiennent pas de temps de moteur (jaune).",
        "Vliegtuig met motor geselecteerd, het scoring window mag geen motorlooptijd bevatten.",
    ],
    errorTerms: [
        "Please agree to the terms.",
        "Bitte stimme den Bedingungen zu.",
        "Merci d'accepter les conditions.",
        "",
    ],
    textConfirmUpload: [
        "I confirm that my scoring windows are chosen according to the rules,\
         each active airspace crossed was cleared by ATC\
         and I have read and accepted the following documents:",
        "Ich bestätige, dass ich die Wertungsfenster nach den Regeln gewählt habe, \
         jeder durchflogene aktive Luftraum von ATC freigegeben wurde,\
         und ich die folgenden Dokumente gelesen habe und ihnen zustimme:",
        "Je confirme avoir choisi la fenêtre d'épreuve selon les règles, \
          J'ai été autorisé par AIS à traverser les espaces aériens actifs\
          et j'ai lu et approuvé les documents suivants:",
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
        "partage tes vols! ",
        "deel je vluchten!",
    ],
    unauthorizedNotice: [
        "You are not logged in, please provide your date of birth and full name to upload if you have an account or",
        "Du bist nicht eingeloggt, bitte gib deinen vollen Namen sowie dein Geburtsdatum zum Hochladen an falls du einen Account hast oder",
        "Tu n'es pas connecté, merci d'entrer ton nom complet et ta date de naissance afin de pouvoir télécharger si tu as un compte ou",
        "Je bent niet ingelogd. Vul je volledige naam en geboortedatum in.",
    ],
    logInFirst: [
        "log in",
        "melde dich an",
        "inscris-toi",
        "",
    ],
    igcDragText: [
        "Drag .igc files here to upload or click to select",
        "Ziehe IGC-Dateien hierher zum Hochladen oder klicke zum Auswählen",
        "Tire tes fichiers IGC ici pour les télécharger ou clique pour les sélectionner",
        "Sleep je .igc-bestanden hierheen om ze te uploaden of klik hier om ze te slecteren",
    ],
    igcDropText: [
        "Drop .igc files to upload",
        "Lasse die IGC-Dateien los zum Hochladen",
        "Lâche les fichiers IGC pour les télécharger",
        "Laat je .igc-bestenden los om ze te uploaden",
    ],

    // Teaser
    currentLanguage: [
        "English",
        "Deutsch",
        "Allemand",
        "Nederlands",
    ],
    welcome: [
        "Welcome",
        "Willkommen",
        "Bienvenue",
        "Welkom",
    ],
    shareAdventures: [
        "Share your latest adventures.",
        "Teile deine neuesten Abenteuer.",
        "Partage tes aventures récentes.",
        "Deel je laatste avonturen",
    ],
    uploadFlight: [
        "Upload flight",
        "Flug hochladen",
        "Télécharger le vol",
        "Vluchten uploaden",
    ],
    myProfile: [
        "My profile",
        "Mein Profil",
        "Mon profil",
        "Mijn profiel",
    ],
    encourage: [
        "Let's take off together and join the next-generation gliding platform.",
        "Lass uns zusammen abheben und genieße die Segelflugplattform der nächsten Generation.",
        "Viens décoller avec nous et profite de la nouvelle plate-forme autour du vol à voile de la nouvelle génération.",
        "Laten we samen starten en sluit je aan bij het zweefplatform van de volgende generatie.",
    ],
    fromByPilots: [
        "Built by Pilots for Pilots.",
        "Entworfen von Piloten für Piloten.",
        "Créé par des pilotes pour des pilotes.",
        "Gebouwd voor en door vliegers.",
    ],

    // Partner
    partner: [
        "Partner",
        "Partner",
        "Partenaire",
        "Partner",
    ],
    sponsors: [
        "Funded by",
        "Gefördert durch",
        "Soutenu par",
        "Mede mogelijk gemaakt door",
    ],
    logoLang: [
        "EN",
        "DE",
        "FR",
        "EN",
    ],

    // Footer
    about: [
        "About",
        "Über",
        "À propos",
        "Over",
    ],
    contact: [
        "Contact",
        "Kontakt",
        "Contact",
        "Contact",
    ],
    philosophy: [
        "Philosophy",
        "Philosophie",
        "Philosophie",
        "",
    ],
    imprint: [
        "Imprint",
        "Impressum",
        "Mentions légales",
        "Colofon",
    ],
    media: [
        "Media",
        "Medien",
        "Médias",
        "Media",
    ],
    pressKit: [
        "Press Kit",
        "Pressekit",
        "Kit de presse",
        "Pers kit",
    ],
    services: [
        "Services",
        "Dienste",
        "Services",
        "Diensten",
    ],
    contestRules: [
        "Contest Rules",
        "Wettbewerbsregeln",
        "Règles de compétition",
        "",
    ],
    loggers: [
        "Loggers",
        "Logger",
        "Enregistreur",
        "",
    ],
    developer: [
        "Developer",
        "Entwickler",
        "Développeur",
        "Ontwikkelaars",
    ],
    getStarted: [
        "Get Started",
        "Einleitung",
        "Introduction",
        "",
    ],
    faq: [
        "Frequent questions",
        "Häufige Fragen",
        "FAQ",
        "FAQ",
    ],

    // Teaser
    dailyBest: [
        "Daily best",
        "Tagesbeste",
        "Le meilleur du jour",
        "Beste van de dag",
    ],
    latestUploads: [
        "Latest uploads",
        "Neu hochgeladen",
        "Téléchargements récents",
        "Nieuwste uploads",
    ],
    flightStories: [
        "Flight Stories",
        "Fluggeschichten",
        "Récits de vols",
        "",
    ],

    // Home Content
    magazine: [
        "Magazine",
        "Magazin",
        "Magazine",
        "Tijdschrift",
    ],
    magazineFeatures: [
        "WeGlide provides interactive flight data and maps to every story, video or article.",
        "WeGlide stellt interaktive Flugdaten und Karten zu jeder Geschichte, jedem Video oder Artikel.",
        "WeGlide propose des données des vols et des cartes interactives pour chaque récit, chaque vidéo et chaque article.",
        "WeGlide biedt interactieve vluchtgegevens en kaarten voor elk verhaal, video of artikel.",
    ],
    competitions: [
        "Competitions",
        "Wettbewerbe",
        "Compétitions",
        "Wedstrijden",
    ],
    competitionsFeatures: [
        "With our leading scoring algorithms we aim for fair competitions around the globe.",
        "Mit unseren führenden Wertungsalgorithmen streben wir gerechte Wettbewerbe rund um den Globus an.",
        "Avec nos algorithmes leaders pour l'évaluation des vols, nous souhaitons réaliser des compétitions justes et équitables à travers le monde.",
        "Met onze toonaangevende scoringsalgoritmen streven we naar eerlijke wedstrijden over de hele wereld. Ongeacht de regels.",
    ],
    team: [
        "Team",
        "Team",
        "Équipe",
        "Team",
    ],
    johannesDescription: [
        "Competition Pilot",
        "Wettbewerbspilot",
        "Pilote de compétition",
        "Wedstrijdvlieger",
    ],
    moritzDescription: [
        "Cross-Country Explorer",
        "Cross-Country Entdecker",
        "Pilote de découverte en vol libre",
        "Overland verkenner",
    ],
    samuelDescription: [
        "Outdoor Enthusiast",
        "Outdoor Abenteurer",
        "Aventurier de plein air",
        "Outdoorliefhebber",
    ],

    // Magazine Teaser
    readingTime: [
        "min. read",
        "Min. Lesezeit",
        "Min. Temps de lecture",
        "Min. Leestijd",
    ],

    // Map layer
    mapLayer: [
        "Map layer",
        "Karte",
        "Carte",
        "Kaart",
    ],
    comingSoon: [
        "Coming soon",
        "Kommt bald",
        "Bientôt disponible",
        "",
    ],
    transportation: [
        "Streets",
        "Straßen",
        "Rues",
        "Transport",
    ],
    landcover: [
        "Landcover",
        "Landbedeckung",
        "Couverture du sol",
        "Landbedekking",
    ],
    administrative: [
        "Cities and Countries",
        "Städte und Länder",
        "Villes et pays",
        "Administratief",
    ],
    pois: [
        "Points of interest",
        "Interessante Punkte",
        "Points intéressants",
        "Keerpunten",
    ],
    weather: [
        "Weather",
        "Wetter",
        "Météo",
        "Weer",
    ],
    satImage: [
        "Satellite image",
        "Satellitenbild",
        "Image satellite",
        "Sattelietbeelden",
    ],
    pfd: [
        "Predicted flight distance",
        "Vorhergesagte Flugdistanz",
        "Distance de vol prévue",
        "Voorspelde vluchtafstand",
    ],
    rainRadar: [
        "Rain radar",
        "Regenradar",
        "Radar de pluie",
        "Regenradar",
    ],

    // Navigation
    start: [
        "Start",
        "Start",
        "Départ",
        "Start",
    ],
    ranks: [
        "Ranks",
        "Wertung",
        "Classement",
        "Plaats",
    ],
    upload: [
        "Upload",
        "Hochladen",
        "Télécharger",
        "Uploaden",
    ],
    task: [
        "Task",
        "Aufgabe",
        "Performance",
        "Opdracht",
    ],
    profile: [
        "Profile",
        "Profil",
        "Profil",
        "Profiel",
    ],
    logOut: [
        "Log out",
        "Ausloggen",
        "Se déconnecter",
        "Log uit",
    ],

    // Profile statistics
    joined: [
        "Joined WeGlide",
        "WeGlide Beigetreten",
        "Tu as rejoins WeGlide",
        "Lid geworden van WeGlide",
    ],
    stories: [
        "Stories",
        "Geschichten",
        "Récits",
        "Verhalen",
    ],
    airtime: [
        "Cumulative airtime",
        "Gesamte Flugzeit",
        "Durée de vol totale",
        "Totale vliegtijd",
    ],
    cumulativeDistance: [
        "Cumulative distance",
        "Gesamte Distanz",
        "Distance de vol totale",
        "Totale afstand",
    ],
    avgSpeed: [
        "Average speed",
        "Durchschnittsgeschwindigkeit",
        "Vitesse moyenne",
        "Gemiddelde snelheid",
    ],
    avgGlideSpeed: [
        "Average glide speed",
        "Gleitgeschwindigkeit",
        "Vitesse",
        "Gemiddelde glijsnelheid",
    ],
    avgGlideDetour: [
        "Average glide detour",
        "Durchschnittlicher Gleitumweg",
        "Moyenne distance de détour planée",
        "Gemiddelde glij omweg",
    ],

    // Profile Settings
    profileSettings: [
        "Profile settings",
        "Profileinstellungen",
        "Réglages de mon profil",
        "Profiel instellingen",
    ],
    metric: [
        "Metric",
        "Metrisch",
        "Métrique",
        "Metrisch",
    ],
    imperial: [
        "Imperial",
        "Imperial",
        "Impérial",
        "Imperial",
    ],
    integrateSkysight: [
        "Integrate SkySight weather data into WeGlide",
        "Integriere SkySight Wetter in WeGlide",
        "Intègre la météo de SkySight sur WeGlide",
        "Integreer SkySight binnen WeGlide",
    ],
    integrateTopmeteo: [
        "Integrate TopMeteo weather data into WeGlide",
        "Integriere TopMeteo Wetter in WeGlide",
        "Intègre la météo de TopMeteo sur WeGlide",
        "Integreer TopMeteo binnen WeGlide",
    ],

    // Profile
    settings: [
        "Settings",
        "Einstellungen",
        "Réglages",
        "Instellingen",
    ],
    flightsAsList: [
        "Flights as list",
        "Flüge als Liste",
        "Vols sous forme de liste",
        "",
    ],

    // Ranking
    ranking: [
        "Ranking",
        "Rangliste",
        "Liste de classement",
        "Rangschikking",
    ],
    contest: [
        "Contest",
        "Wettbewerb",
        "Compétition",
        "Wedstrijd",
    ],
    dmstDescription: [
        "German Championships",
        "Deutsche Meisterschaften",
        "Championnat allemand",
        "Duitse kampioenschappen",
    ],
    plusDescription: [
        "WeGlide Distance Cup",
        "WeGlide Distanz Cup",
        "Compétition de distance WeGlide",
        "WeGlide afstandscup",
    ],
    sprintDescription: [
        "WeGlide Speed Cup",
        "WeGlide Geschwindigkeits Cup",
        "Compétition de vitesse WeGlide",
        "WeGlide snelheidscup",
    ],
    electricDescription: [
        "WeGlide FES Cup",
        "WeGlide FES Cup",
        "Compétition FES WeGlide",
        "WeGlide FES-Cup",
    ],

    // Ranking config
    season: [
        "Season",
        "Saison",
        "Saison",
        "Seizoen",
    ],
    gliderClass: [
        "Glider Class",
        "Flugzeugklasse",
        "Classe planeur",
        "Vliegtuigklasse",
    ],

    // Ranking table
    rank: [
        "Rank",
        "Rang",
        "Rank",
        "Rang",
    ],
    totalPoints: [
        "Total",
        "Gesamt",
        "Total",
        "Punten totaal",
    ],

    // Story
    story: [
        "Story",
        "Geschichte",
        "Récit",
        "Verhaal",
    ],
    fullscreen: [
        "Fullscreen",
        "Vollbild",
        "Plein écran",
        "Volledig scherm",
    ],
    beforeTakeoff: [
        "Before takeoff",
        "Vor dem Start",
        "Avant le décollage",
        "Voor de starts",
    ],
    afterLanding: [
        "After landing",
        "Nach der Landung",
        "Après l'atterrissage",
        "Na de landing",
    ],
    timeless: [
        "Timeless",
        "Zeitlos",
        "Intemporel",
        "Tijdloos",
    ],
    until: [
        "until",
        "bis",
        "Jusqu'à",
        "",
    ],
    addComment: [
        "Add comment",
        "Neuer Kommentar",
        "Nouveau commentaire",
        "Nieuwe opmerking",
    ],
    addVideo: [
        "Add video",
        "Neues Video",
        "Nouvelle vidéo",
        "Niewe video",
    ],
    imageDragText: [
        "Drag images here to upload or click to select",
        "Ziehe Bilder hierher zum Hochladen oder klicke zum Auswählen",
        "Tire tes photos ici pour les télécharger ou clique sur sélectionner",
        "Sleep je foto hierheen om ze te uploaden of klik hier om ze te slecteren",
    ],
    imageDropText: [
        "Drop images to upload",
        "Lasse die Bilder los zum Hochladen",
        "Lâche les photos pour les télécharger",
        "Laat je foto's los om ze te uploaden",
    ],
    writeComment: [
        "Write comment..",
        "Schreibe einen Kommentar..",
        "Écrit un commentaire..",
        "Plaats een opmerking...",
    ],

    // Task
    tasks: [
        "Tasks",
        "Aufgaben",
        "Performances",
        "",
    ],
    all: [
        "All",
        "Alle",
        "Tous",
        "",
    ],
    my: [
        "My",
        "Meine",
        "Mes",
        "",
    ],
    starred: [
        "Starred",
        "Favorisiert",
        "Favorisé",
        "",
    ],
    myTasks: [
        "My tasks",
        "Meine Aufgaben",
        "Mes performances",
        "Mijn opdrachten",
    ],
    declare: [
        "declare",
        "deklarieren",
        "déclarer",
        "declareren",
    ],
    undeclare: [
        "undeclare",
        "entdeklarieren",
        "ne plus déclarer",
        "declaratie verwijderen",
    ],
    newTask: [
        "new task",
        "neue Aufgabe",
        "nouvelle performance",
        "nieuwe opdracht",
    ],
    noTaskDeclared: [
        "No declared task yet.",
        "Noch keine Aufgabe deklariert.",
        "Pas de performance(s) déclarée(s)",
        "Nog geen gedeclareerde opdracht.",
    ],
    noTasks: [
        "No tasks yet, plan a new one!",
        "Keine Aufgaben bis jetzt, plane eine!",
        "Pas de performance jusqu'ici, crées-en une!",
        "Nog geen opdracht, plan een nieuwe!",
    ],
    position: [
        "Position",
        "Position",
        "Position",
        "",
    ],
    startOnLeg: [
        "Start on leg",
        "Start auf Schenkel",
        "Décollage sur branche",
        "",
    ],
    locked: [
        "Task is locked because it was once declared.",
        "Aufgabe ist gesperrt weil sie bereits deklariert wurde.",
        "La performance n'est pas accessible car elle a déjà été déclarée.",
        "",
    ],
    taskplaner: [
        "Taskplaner",
        "Aufgabenplaner",
        "Planifier les performances",
        "Opdrachtplanner",
    ],
    editTask: [
        "Edit task",
        "Aufgabe bearbeiten",
        "Éditer la performance",
        "Opdracht aanpassen",
    ],
    taskName: [
        "Task name",
        "Aufgabenname",
        "Nom de la performance",
        "Opdrachtnaam",
    ],
    private: [
        "Only visible for me",
        "Nur sichtbar für mich",
        "Seulement visible pour moi",
        "Privé",
    ],
    turnpoints: [
        "Turnpoints",
        "Wendepunkte",
        "Points de virage",
        "Keerpunten",
    ],
    cupDragText: [
        "Drag a .cup file here to upload or click to select",
        "Ziehe eine CUP-Datei hierher zum Hochladen oder klicke zum Auswählen",
        "Tire un fichier CUP ici pour le télécharger ou clique pour sélectionner",
        "",
    ],
    cupDropText: [
        "Drop .cup file to upload",
        "Lasse die CUP-Datei los zum Hochladen",
        "Lâche le fichier CUP pour le télécharger",
        "",
    ],
    taskSaved: [
        "Task saved",
        "Aufgabe gespeichert",
        "Performance enregistrée",
        "",
    ],
    taskDeleted: [
        "Task deleted",
        "Aufgabe gelöscht",
        "Performance supprimée",
        "",
    ],
    turnpointHelp: [
        "Click on the map to add a turnpoint.",
        "Klicke auf die Karte für einen Wendepunkt.",
        "Clique sur la carte pour ajouter un point de virage.",
        "",
    ],
    editHelp: [
        "Double click or drag to edit.",
        "Doppelt klicken oder ziehen zum Bearbeiten.",
        "Cliquer double ou tirer pour éditer.",
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
