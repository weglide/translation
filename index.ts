import { i18nStore } from '@/weglide/store'
import { Translations } from './translation.types'

// Main translation
export const translations: Translations = {
  /* Schema
    key: [
        "english",
        "german",
        "french",
        "dutch",
        "czech",
        "italian",
        "polish",
        "spanish",
    ],
    */

  // Notification
  betaTitle: [
    'Prerelease',
    'Testversion',
    "Version d'essai",
    'Test versie',
    'Testovací verze',
    'Prerelease',
    'Wersja testowa',
    'Versión de prueba'
  ],
  betaText: [
    'Please be aware that we might need to delete data or break some functionality.',
    'Bitte sei dir bewusst, dass wir eventuell Daten löschen müssen oder Fehler auftauchen.',
    "Merci de prendre en compte que nous serons éventuellement contraint d'effacer des données et que des erreurs peuvent survenir.",
    'Ben je ervan bewust dat data verloren kan gaan en sommige functies nog niet goed werken.',
    'Prosím, buďte připraveni, že případně budeme muset data smazat nebo se může objevit chyba',
    'Tieni presente che potrebbe essere necessario eliminare i dati o interrompere alcune funzionalità',
    'Proszę zwrócić uwagę, że możemy być zmuszeni do usunięcia danych lub część funkcji może nie działać.',
    'Tenga en cuenta que es posible que necesitemos eliminar datos o interrumpir alguna funcionalidad.'
  ],
  waiting: [
    'Waiting',
    'Warten',
    'Patientez',
    'Wachtend',
    'čekej.',
    'In attesa',
    'Czekanie',
    'Esperando'
  ],
  processing: [
    'Processing',
    'wird verarbeitet',
    'En cours de traitement',
    'Wordt verwerkt',
    'Zpracovává se',
    'In elaborazione',
    'Procesowanie',
    'Procesando'
  ],
  attention: [
    'Attention',
    'Achtung',
    'Attention',
    'Attentie',
    'Pozor',
    'Attenzione',
    'Uwaga',
    'Atención'
  ],
  success: [
    'Success',
    'Erfolg',
    'Avec succès',
    'Geslaagd',
    'Úspěch',
    'Completato',
    'Sukces',
    'Éxito'
  ],
  errorAuthTitle: [
    'Session expired',
    'Sitzung abgelaufen',
    'Session expirée',
    'Sessie vervallen',
    'Relace skončila',
    'Sessione scaduta',
    'Sesja wygasła',
    'Sesión expirada'
  ],
  errorAuth: [
    'Please log in first',
    'Bitte logge dich zuerst ein',
    'Merci de te connecter à nouveau',
    'Log alstublieft eerst in',
    'Prosím nejdříve se přihlašte',
    'Per favore fai prima il log in',
    'Proszę najpierw się zalogować',
    'Por favor ingresa primero'
  ],
  errorServerTitle: [
    'Service unavailable',
    'Dienst nicht erreichbar',
    'Service non disponible',
    'Dienst niet beschikbaar',
    'Služba není k dispozici',
    'Server temporaneamente non disponibile',
    'Usługa niedostępna',
    'Servicio no disponible'
  ],
  errorServer: [
    'Please try again later or contact us',
    'Bitte versuche es später erneut oder kontaktiere uns',
    'Merci de réessayer plus tard ou de nous contacter',
    'Probeer het later nog eens',
    'Prosím zkus to později znovu nebo nás kontaktuj',
    'Per favore, riprova più tardi o contattaci',
    'Proszę spróbuj ponownie później albo skontaktuj się z nami',
    'Vuelve a intentarlo más tarde o contáctanos'
  ],
  errorForm: [
    'Please check your form inputs',
    'Bitte prüfe deine Formulareingaben',
    'Merci de vérifier les renseignements indiqués dans le formulaire',
    'Controleer het formulier',
    'Prosím zkontroluj si svá zadání ve formuláři',
    'Si prega di controllare gli input del modulo',
    'Proszę sprawdzić dane w formularzu',
    'Por favor revise las entradas de su formulario'
  ],
  verified: [
    'Email verification complete, please log in.',
    'E-Mail wurde verifiziert, bitte einloggen.',
    'Ton adresse e-mail a été vérifiée, merci de te connecter.',
    'Verificatie gelukt, log nu in.',
    'E-mailová adresa byla potvrzena, nyní se zkus přihlásit',
    "Verifica dell'email completata, esegui l'accesso",
    'Weryfikacja e-mail zakończona, proszę zaloguj się.',
    'Verificación de correo electrónico completa, inicie sesión.'
  ],
  notVerified: [
    'Please verify your Email first',
    'Bitte verifiziere zuerst deine E-Mail',
    "Merci de d'abord vérifier ton adresse e-mail",
    'Verifieer je e-mailadres',
    'Prosím, ověřte nejdříve svoji emailovou adresu',
    'Verifica prima la tua email',
    'Proszę najpierw zweryfikować adres email',
    'Primero verifique su correo electrónico.'
  ],
  resetComplete: [
    'Password reset complete, please log in.',
    'Passwort wurde zurückgesetzt, bitte einloggen.',
    'Ton mot de passe a été réinitialisé, merci de te connecter.',
    'Wachtwoord hersteld, log nu in.',
    'Heslo bylo obnoveno, prosím přihlaš se',
    "Reset della password completata, esegui l'accesso",
    'Hasło zresetowane, proszę się zalogować',
    'Restablecimiento de contraseña completo, inicie sesión.'
  ],
  info: [
    'Information',
    'Information',
    'Information',
    'Informatie',
    'Informace',
    'Informazioni',
    'Informacja',
    'Información'
  ],
  warning: [
    'Warning',
    'Warnung',
    'Avertissement',
    'Waarschuwing',
    'Varování',
    'Attenzione',
    'Ostrzeżenie',
    'Advertencia'
  ],
  error: [
    'Error',
    'Fehler',
    'Erreur',
    'Fout',
    'Chyba',
    'Errore',
    'Błąd',
    'Error'
  ],
  analyzed: [
    'Analyzed',
    'Analyse',
    'Analyse',
    'Analyse',
    'Analýza',
    'Analizzato',
    'Analiza',
    'Analizado'
  ],

  // Aircraft
  aircraft: [
    'Aircraft',
    'Flugzeug',
    'Avion',
    'Vliegtuig',
    'Letadlo',
    'Aereo',
    'Samolot',
    'Aeronave'
  ],
  kind: [
    'Kind',
    'Art',
    'Sorte',
    'Soort',
    'Druh',
    'Tipo',
    'Rodzaj',
    'Tipo'
  ],
  glider: [
    'Glider',
    'Segelflugzeug',
    'Planeur',
    'Zweefvliegtuig',
    'Kluzák',
    'Aliante',
    'Szybowiec',
    'Planeador'
  ],
  fes: [
    'FES',
    'FES',
    'FES',
    'FES',
    'FES',
    'FES',
    'FES',
    'FES'
  ],
  engine: [
    'Engine',
    'Motor',
    'Moteur',
    'Motor',
    'Motor',
    'Motore',
    'Silnik',
    'Motor'
  ],
  paraglider: [
    'Paraglider',
    'Paragleiter',
    'Parapente',
    'Schermvlieger',
    'Paraglider',
    'Parapendio',
    'Paralotnia',
    'Parapente'
  ],
  hangGlider: [
    'Hang Glider',
    'Drachen',
    'Deltaplane',
    'Deltavlieger',
    'Rogalo',
    'Deltaplano',
    'Latawiec',
    'Ala delta'
  ],
  ulGlider: [
    'UL Glider',
    'UL Gleiter',
    'Planeur ultra-léger motorisé',
    'UL Zweefvliegtuig',
    'UL Kluzák',
    'Aliante UL',
    'Ultralekki szybowiec',
    'Ultraligero'
  ],
  family: [
    'Family',
    'Familie',
    'Famille',
    'Familie',
    'Rodina',
    'Famiglia',
    'Rodzina',
    'Familia'
  ],
  manufacturer: [
    'Manufacturer',
    'Hersteller',
    'Constructeur',
    'Fabrikant',
    'Výrobce',
    'Produttore',
    'Producent',
    'Fabricante'
  ],
  seats: [
    'Seats',
    'Sitze',
    'Places',
    'Zitplaatsen',
    'Sedadel',
    'Posti a sedere',
    'Siedzenia',
    'Asientos'
  ],
  class: [
    'Class',
    'Klasse',
    'Classe',
    'Klasse',
    'Třída',
    'Classe',
    'Klasa',
    'Clase'
  ],
  index: [
    'Index',
    'Index',
    'Index',
    'Index',
    'Index',
    'Index',
    'Indeks',
    'Índice'
  ],
  igc: [
    'IGC',
    'IGC',
    'IGC',
    'IGC',
    'IGC',
    'IGC',
    'IGC',
    'IGC'
  ],
  enableOpenInSeeYou: [
    'Allow open in SeeYou for my flights',
    'Erlaube öffnen mit SeeYou für meine Flüge',
    "Autoriser l'ouverture avec SeeYou pour mes vols",
    'Sta open met SeeYou toe voor mijn vluchten',
    'Povolit otevření s SeeYou pro mé lety',
    "Consenti l'apertura con SeeYou per i miei voli",
    'Zezwalaj na otwarcie z SeeYou dla moich lotów',
    'Permitir abrir en SeeYou para mis vuelos'
  ],
  openInSeeYou: [
    'Open in SeeYou',
    'Öffnen mit SeeYou',
    'Ouvrir avec SeeYou',
    'Openen met SeeYou',
    'Otevřete s SeeYou',
    'Apri con SeeYou',
    'Otwórz z SeeYou',
    'Abierto en SeeYou'
  ],

  // Airport
  airport: [
    'Airport',
    'Flugplatz',
    'Aéroport',
    'Vliegveld',
    'Letiště',
    'Aereoporto',
    'Lotnisko',
    'Aeropuerto'
  ],
  airports: [
    'Airports',
    'Flugplätze',
    'Aéroports',
    'Vliegvelden',
    'Letiště',
    'Aereoporti',
    'Lotniska',
    'Aeropuertos'
  ],
  radio: [
    'Radio',
    'Funk',
    'Radio',
    'Radio',
    'Rádio',
    'Radio',
    'Radio',
    'Radio'
  ],
  frequency: [
    'Frequency',
    'Frequenz',
    'Fréquence',
    'Frequentie',
    'Frekvence',
    'Frequenza',
    'Częstotliwośc',
    'Frecuencia'
  ],
  description: [
    'Description',
    'Beschreibung',
    'Description',
    'Omschrijving',
    'Popis',
    'Descrizione',
    'Opis',
    'Descripción'
  ],
  type: [
    'Type',
    'Typ',
    'Type',
    'Type',
    'Typ',
    'Tipo',
    'Typ',
    'Tipo'
  ],
  category: [
    'Category',
    'Kategorie',
    'Catégorie',
    'Categorie',
    'Kategorie',
    'Categoria',
    'Kategoria',
    'Categoría'
  ],
  location: [
    'Location',
    'Standort',
    'Localisation',
    'Lokatie',
    'Místo',
    'Posizione',
    'Lokalizacja',
    'Localización'
  ],
  timezone: [
    'Timezone',
    'Zeitzone',
    'Fuseau horaire',
    'Tijdzone',
    'Časové pásmo',
    'Fuso orario',
    'Strefa czasowa',
    'Zona horaria'
  ],
  continent: [
    'Continent',
    'Kontinent',
    'Continent',
    'Continent',
    'Kontinent',
    'Continente',
    'Kontynent',
    'Continente'
  ],
  country: [
    'Country',
    'Land',
    'Pays',
    'Land',
    'Země',
    'Nazione',
    'Kraj',
    'País'
  ],
  region: [
    'Region',
    'Region',
    'Région',
    'Regio',
    'Region',
    'Regione',
    'Region',
    'Región'
  ],
  elevation: [
    'Elevation',
    'Höhe',
    'Élévation',
    'Hoogte',
    'Výška',
    'Elevazione',
    'Wysokość',
    'Elevación'
  ],
  usage: [
    'Usage',
    'Nutzung',
    'Usage',
    'Gebruik',
    'Využití',
    'Utilizzo',
    'Użycie',
    'Uso'
  ],
  coordinates: [
    'Coordinates',
    'Koordinaten',
    'Coordonnées',
    'Coördinaten',
    'Souřadnice',
    'Coordinate',
    'Koordynaty',
    'Coordenadas'
  ],
  latitudeAbbrev: [
    'Lat.',
    'Lat.',
    'Lat.',
    'Lat.',
    'Lat',
    'Lat.',
    'Szer.',
    'Lat.'
  ],
  longitudeAbbrev: [
    'Lon.',
    'Lon.',
    'Lon.',
    'Lon.',
    'Lon',
    'Lon.',
    'Dłg.',
    'Lon.'
  ],
  runway: [
    'Runway',
    'Piste',
    'Piste',
    'Baan',
    'Dráha',
    'Pista di decollo',
    'Pas startowy',
    'Pista'
  ],
  length: [
    'Length',
    'Länge',
    'Longueur',
    'Lengte',
    'Délka',
    'Lunghezza',
    'Długość',
    'Largo'
  ],
  width: [
    'Width',
    'Breite',
    'Largeur',
    'Breedte',
    'Šířka',
    'Altezza',
    'Szerokość',
    'Ancho'
  ],
  surface: [
    'Surface',
    'Oberfläche',
    'Surface',
    'Soort',
    'Povrch',
    'Superficie',
    'Powierzchnia',
    'Superficie'
  ],
  strength: [
    'Strength',
    'Stärke',
    'Force',
    'Sterkte',
    'Síla',
    'Potenza',
    'Siła',
    'Fuerza'
  ],
  glidingUsage: [
    'Gliding Usage',
    'Segelflugnutzung',
    "Utilisation d'un planeur",
    'Zweefvliegterrein',
    'Plachtařské využití',
    'Piano di volo',
    'Użycie szybowców',
    'Uso de deslizamiento'
  ],
  reign: [
    'Reign',
    'Einflussgebiet',
    "Zone d'influence",
    'Invloedgebied',
    'Oblast využití',
    'Area di influenza',
    'Obszar wpływów',
    'Area de influencia'
  ],
  launches: [
    'Gliding launches',
    'Segelflugstarts',
    'Décollages planeur',
    'Zweefvliegstarts',
    'Start kluzáku',
    'Decolli di alianti',
    'Start szybowców',
    'Lanzamientos deslizantes'
  ],

  // Call to action
  reportFalseInformation: [
    'Report false information',
    'Melde falsche Informationen',
    'Signaler des fausses informations',
    'Meld verkeerde informatie',
    'Hláška chybné informace',
    'Segnala informazioni false',
    'Zgłoś błędną infromację',
    'Informar información falsa'
  ],
  logIn: [
    'Log in',
    'Einloggen',
    'Se connecter',
    'Inloggen',
    'Přihlásit se',
    'Accedi',
    'Zaloguj',
    'Acceso'
  ],
  signUp: [
    'Sign up',
    'Registrieren',
    "S'inscrire",
    'Registreren',
    'Registrovat se',
    'Registrati',
    'Zarejestruj',
    'Regístrate'
  ],
  forgotPassword: [
    'Forgot Password?',
    'Passwort vergessen?',
    'Mot de passe oublié?',
    'Wachtwoord vergeten?',
    'Zapomenuté heslo?',
    'Password dimenticata?',
    'Zapomniałeś hasła?',
    '¿Has olvidado tu contraseña?'
  ],
  verifyEmail: [
    'Send verification link again',
    'Sende Verifizierungslink erneut',
    'Envoyer le lien de vérification à nouveau',
    'Verstuur verificatie e-mail nogmaals',
    'Posílám nový potvrzovací odkaz',
    'Invia di nuovo il link di verifica',
    'Wyślij link weryfikujący ponownie',
    'Enviar enlace de verificación de nuevo'
  ],
  changePassword: [
    'Change Password',
    'Passwort ändern',
    'Changer mon mot de passe',
    'Wachtwoord veranderen',
    'Změnit heslo',
    'Cambia password',
    'Zmień hasło',
    'Cambiar la contraseña'
  ],
  resendVerification: [
    'Send verification link',
    'Verifizierungslink senden',
    'Envoyer le lien de vérification',
    'Verificatie e-mail versturen',
    'Poslat ověřovací odkaz',
    'Invia link di verifica',
    'Wyślij link weryfikujący',
    'Enviar enlace de verificación'
  ],
  sendEmailAgain: [
    'Send email again',
    'E-Mail erneut senden',
    "Envoyer l'email à nouveau",
    'Email nogmaals versturen',
    'Poslat znovu e-mail',
    'Invia email di nuovo',
    'Wyślij email ponownie',
    'Enviar correo electrónico de nuevo'
  ],
  showStories: [
    'Stories',
    'Geschichten',
    'Voir les récits',
    'Bekijk meer verhalen',
    'Zobrazit průběh',
    'Mostra storie',
    'Pokaż relacje',
    'Cuentos'
  ],
  showAllArticles: [
    'All articles',
    'Alle Artikel',
    'Voir tous les articles',
    'Laat alle artikelen zien',
    'Zobrazit všechny příspěvky',
    'Mostra tutti gli articoli',
    'Pokaż wszystkie artykuły',
    'Todos los artículos'
  ],
  showLatest: [
    'Latest',
    'Neueste',
    'Voir les nouveautés',
    'Bekijk meer vluchten',
    'Zobrazit nejnovější',
    'Mostra le ultime',
    'Pokaż najnowsze',
    'Último'
  ],
  showDaily: [
    'Daily best',
    'Tageswertung',
    'Voir le meilleur vol du jour',
    'Alle vluchten van de dag',
    'Zobrazit dnes nejlepší',
    'Mostra articoli giornalieri',
    'Pokaż dziennie',
    'Bestia diaria'
  ],
  cancel: [
    'Cancel',
    'Abbrechen',
    'Annuler',
    'Annuleer',
    'Zrušit',
    'Cancella',
    'Anuluj',
    'Cancelar'
  ],
  save: [
    'Save',
    'Speichern',
    'Enregistrer',
    'Opslaan',
    'Uložit',
    'Salva',
    'Zapisz',
    'Salvar'
  ],
  edit: [
    'Edit',
    'Bearbeiten',
    'Modifier',
    'Aanpassen',
    'Upravit',
    'Modifica',
    'Edytuj',
    'Editar'
  ],
  delete: [
    'Delete',
    'Löschen',
    'Supprimer',
    'Verwijderen',
    'Smazat',
    'Elimina',
    'Usuń',
    'Borrar'
  ],
  show: [
    'show',
    'zeigen',
    'Afficher',
    'bekijken',
    'Zobrazit',
    'Mostra',
    'pokaż',
    'show'
  ],

  // Flight
  flight: [
    'Flight',
    'Flug',
    'Vol',
    'Vlucht',
    'Let',
    'Volo',
    'Lot',
    'Vuelo'
  ],
  flights: [
    'Flights',
    'Flüge',
    'Vols',
    'Vluchten',
    'Lety',
    'Voli',
    'Loty',
    'Vuelos'
  ],
  allFlights: [
    'All flights',
    'Alle Flüge',
    'Tous les vols',
    'Alle vluchten',
    'Všechny lety',
    'Tutti i voli',
    'Wszystkie loty',
    'Todos los vuelos'
  ],
  flightDeleted: [
    'Flight deleted',
    'Flug gelöscht',
    'Vol supprimé',
    'Vlucht verwijderd',
    'Smazat let',
    'Volo Cancellato',
    'Lot usunięty',
    'Vuelo eliminado'
  ],
  flightSaved: [
    'Flight saved',
    'Flug gespeichert',
    'Vol enregistré',
    'Vlucht opgeslagen',
    'Let uložen',
    'Volo salvato',
    'Lot zapisany',
    'Vuelo guardado'
  ],
  deleteConfirm: [
    'Confirm deletion?',
    'Löschen bestätigen?',
    'Confirmer la suppression?',
    'Echt verwijderen?',
    'Opravdu smazat?',
    'Eliminare davvero?',
    'Naprawdę usunąć?',
    '¿Confirmar la eliminación?'
  ],

  // User
  junior: [
    'Junior',
    'Junior*in',
    'Junior',
    'Junior',
    'Junior',
    'Bambini',
    'Junior',
    'Júnior'
  ],
  juniorMale: [
    'Junior',
    'Junior',
    'Junior',
    'Junior',
    'Junior',
    'Bambini',
    'Junior',
    'Júnior'
  ],
  juniorFemale: [
    'Junior',
    'Juniorin',
    'Junior',
    'Junior',
    'Junior',
    'Bambini',
    'Junior',
    'Júnior'
  ],
  male: [
    'Male',
    'Männlich',
    'Homme',
    'Man',
    'Muž',
    'Maschi',
    'Mężczyzna',
    'Masculino'
  ],
  female: [
    'Female',
    'Weiblich',
    'Femme',
    'Vrouw',
    'Žena',
    'Femmine',
    'Kobieta',
    'Mujer'
  ],
  other: [
    'Other',
    'Divers',
    'Autre',
    'Anders',
    'Jiné',
    'Altro',
    'Inna',
    'Diverso'
  ],
  pilots: [
    'Pilots',
    'Pilot*innen',
    'Pilotes',
    'Vliegers',
    'Pilot',
    'Piloti',
    'Piloci',
    'Pilotos'
  ],

  // Meeting
  openFlight: [
    'Open flight',
    'Flug öffnen',
    'Ouvrir le vol',
    'Vlucht openen',
    'Otevřít let',
    'Apri il volo',
    'Otwarty lot',
    'Vuelo abierto'
  ],
  compare: [
    'Compare',
    'Vergleichen',
    'Comparer',
    'Vergelijken',
    'Porovnat',
    'Confronta',
    'Porównaj',
    'Comparar'
  ],
  remove: [
    'Remove',
    'Entfernen',
    'Supprimer',
    'Verwijderen',
    'Odstranit',
    'Rimuovi',
    'Usuń',
    'Eliminar'
  ],

  // Task kind
  FR: [
    'Free',
    'Frei',
    'Libre',
    'Vrije',
    'Volný',
    'Senza',
    'Wolne',
    'Libre'
  ],
  FR4: [
    '3 TP',
    '3 WP (DMSt)',
    '3 TN',
    '3 KP',
    '3 OB',
    '3 Svolte',
    '3 PZ',
    '3 PG'
  ],
  GL: [
    'Goal',
    'Ziel',
    'Objectif',
    'Doel',
    'Cíl',
    'Obiettivo',
    'Cel',
    'Meta'
  ],
  TR: [
    'Triangle',
    'Dreieck',
    'Triangle',
    'Driehoek',
    'Trojúhelník',
    'Triangolo',
    'Trójkąt',
    'Triángulo'
  ],
  MTR: [
    'Multi Triangle',
    'Mehrfachdreieck',
    'Triangle multiple',
    'Multi Driehoek',
    'Multi Trojúhelník',
    'Multi Triangolo',
    'Multi Trójkąt',
    'Triángulo múltiple'
  ],
  RT: [
    'Rectangle',
    'Viereck',
    'Rectangle',
    'Firkant',
    'Čtyřúhelník',
    'Rettangolo',
    'Prostokąt',
    'Rectángulo'
  ],
  MRT: [
    'Multi Rectangle',
    'Mehrfachviereck',
    'Rectangle multiple',
    'Multi Firkant',
    'Multi Čtyřúhelník',
    'Multi Rettangolo',
    'Multi Prostokąt',
    'Rectángulo múltiple'
  ],
  OR: [
    'Out and return',
    'Zielrück',
    'Aller-retour',
    'Retour',
    'Návrat',
    'Ritorno',
    'Powrót',
    'Salida-regreso'
  ],
  closed: [
    'Closed',
    'Geschlossen',
    'Fermé',
    'Gesloten',
    'Uzavřený',
    'Chiuso',
    'Zamknięte',
    'Cerrado'
  ],
  open: [
    'Open',
    'Offen',
    'Ouvert',
    'Open',
    'Otevřený',
    'Aperto',
    'Otwarte',
    'Abierto'
  ],
  unnamed: [
    'Unnamed',
    'Unbenannt',
    'Anonyme',
    'Zonder naam',
    'Nepojmenovaný',
    'Senza nome',
    'Anonimowe',
    'Sin nombre'
  ],

  // Form fields
  email: [
    'Email',
    'E-Mail',
    'Adresse e-mail',
    'Email',
    'E-mail',
    'Email',
    'Email',
    'Correo electrónico'
  ],
  password: [
    'Password',
    'Passwort',
    'Mot de passe',
    'Wachtwoord',
    'Heslo',
    'Password',
    'Hasło',
    'Contraseña'
  ],
  name: [
    'Name',
    'Name',
    'Nom',
    'Naam',
    'Jméno',
    'Nome',
    'Imię',
    'Nombre'
  ],
  fullName: [
    'First and last name',
    'Vor- und Nachname',
    'Prénom et Nom',
    'Voor- en Achternaam',
    'Jméno a příjmení',
    'Nome e Cognome',
    'Imię i nazwisko',
    'Nombre y apellido'
  ],
  birthdate: [
    'Date of birth',
    'Geburtsdatum',
    'Date de naissance',
    'Geboortedatum',
    'Datum narození',
    'Data di nascita',
    'Data urodzenia',
    'Fecha de nacimiento'
  ],
  club: [
    'Club',
    'Verein',
    'Club',
    'Club',
    'Klub',
    'Club',
    'Klub',
    'Club'
  ],
  textConfirm: [
    'I have read and agree to the following documents:',
    'Ich habe die folgenden Dokumente gelesen und stimme zu:',
    "J'ai lu les documents et j'accepte:",
    'Ik heb de volgende documenten gelezen en ga akkoord:',
    'Přečetl jsem si následující dokumenty a souhlasím s nimi:',
    'Ho letto e accetto i seguenti documenti:',
    'Przeczytałem i zgadzam się z następującymi dokumentami:',
    'He leído y acepto los siguientes documentos: '
  ],
  privacyPolicy: [
    'Privacy Policy',
    'Datenschutzerklärung',
    'Déclaration de confidentialité',
    'Privacy Statement',
    'Prohlášení o ochraně osobních údajů',
    'Politica sulla Privacy',
    'Polityka Prywatności',
    'Política de privacidad'
  ],
  userAgreement: [
    'User Agreement',
    'Nutzungsbedingungen',
    "Conditions d'utilisation",
    'Voorwaarden',
    'Podmínky využití',
    'Accordo per gli utenti',
    'Zgoda Użytkownika',
    'Acuerdo del Usuario'
  ],
  subscribeNewsletter: [
    'Subscribe to monthly Newsletter',
    'Abonniere den monatlichen Newsletter',
    'Abonne-toi à notre newsletter',
    'Meld je aan voor de nieuwsbrief',
    'Chci odebírat zpravodaj',
    'Iscriviti alla nostra Newsletter',
    'Zapisz się do naszego newslettera',
    'Suscríbete al boletín mensual'
  ],
  oldPassword: [
    'Old password',
    'Altes Passwort',
    'Ancien mot de passe',
    'Oud wachtwoord',
    'Nové heslo',
    'Nuova password',
    'Nowe hasło',
    'Contraseña anterior'
  ],
  newPassword: [
    'New password',
    'Neues Passwort',
    'Nouveau mot de passe',
    'Nieuw wachtwoord',
    'Staré heslo',
    'Vecchia password',
    'Stare hasło',
    'Nueva contraseña'
  ],
  registration: [
    'Registration (optional)',
    'Registrierung (optional)',
    "S'inscrire (optionnel)",
    'Registreren (niet verpflicht)',
    'Registrace (opce)',
    'Registrazione (opzionale)',
    'Rejestracja (opcjonalnie)',
    'Registro (opcional)'
  ],
  coPilotName: [
    'Co-Pilot name',
    'Name Co-Pilot*in',
    'Nom du co-pilote',
    'Tweede vlieger',
    'Jméno druhého pilota',
    'Nome copilota',
    'Imię drugiego pilota',
    'Nombre del copiloto'
  ],
  coPilotDateOfBirth: [
    'Co-Pilot date of birth',
    'Co-Pilot Geburtsdatum',
    'Date de naissance du co-pilote',
    'Geboorte datum tweede vlieger',
    'Datum narození druhého pilota',
    'Data di nascita del copilota',
    'Data urodzenia drugiego pilota',
    'Fecha de nacimiento del copiloto'
  ],
  competitionId: [
    'Competition ID (optional)',
    'Wettbewerbs-ID (optional)',
    'ID ou numéro de compétition (optionnel)',
    'Wedstrijdnummer (niet verpflicht)',
    'Soutěžní znak (opce)',
    'ID Concorenza (opzionale)',
    'ID konkurecncji (opcjonalnie)',
    'ID de competición (opcional)'
  ],
  scoreClubClass: [
    'Score flight in club class',
    'Werte den Flug in der Clubklasse',
    'Marquer le vol en classe club',
    'Scoor de vlucht in clubklasse',
    'Skóre letu v klubové třídě',
    'Punteggio del volo in classe club',
    'Doceń lot w klasie klubowej',
    'Anotar vuelo en clase club'
  ],
  year: [
    'Year',
    'Jahr',
    'Annnée',
    'Jaar',
    'Rok',
    'Anno',
    'Rok',
    'Año'
  ],
  month: [
    'Month',
    'Monat',
    'Mois',
    'Maand',
    'Měsíc',
    'Mese',
    'Miesiąc',
    'Mes'
  ],
  day: [
    'Day',
    'Tag',
    'Jour',
    'Dag',
    'Den',
    'Giorno',
    'Dzień',
    'Día'
  ],
  days: [
    'Days',
    'Tage',
    'Jours',
    'Dagen',
    'Dnů',
    'Giorni',
    'Dni',
    'Dias'
  ],
  forever: [
    'Forever',
    'Für immer',
    'Toujours',
    'Voor altijd',
    'Navždy',
    'Per sempre',
    'Na zawsze',
    'Para siempre'
  ],
  dateRangeHelp: [
    'Select start and end date',
    'Wähle Start- und Enddatum',
    'Sélectionnez la date de début et de fin',
    'Selecteer begin- en einddatum',
    'Vyberte datum zahájení a ukončení',
    'Seleziona la data di inizio e di fine',
    'Wybierz datę rozpoczęcia i zakończenia',
    'Seleccione la fecha de inicio y finalización'
  ],
  dateMultipleHelp: [
    'Select to add date',
    'Wähle einen Tag zum hinzufügen',
    'Sélectionnez pour ajouter une date',
    'Selecteer om datum toe te voegen',
    'Vyberte pro přidání data',
    'Seleziona per aggiungere la data',
    'Wybierz, aby dodać datę ',
    'Seleccionar para agregar la fecha'
  ],

  // Social
  commentsAllowed: [
    'Allow others to comment my flights',
    'Erlaube anderen meine Flüge zu kommentieren',
    'Autoriser les autres à commenter mes vols',
    'Anderen toestaan commentaar te geven op mijn vluchten',
    'Umožnit ostatním komentovat mé lety',
    'Consenti ad altri di commentare i miei voli',
    'Pozwól innym komentować moje loty',
    'Permitir que otros comenten mis vuelos'
  ],
  notifications: [
    'Notifications',
    'Mitteilungen',
    'Notifications',
    'Meldingen',
    'Oznámení',
    'Notifiche',
    'Powiadomienia',
    'Notificaciones'
  ],
  noNotifications: [
    'No notifications.',
    'Keine Mitteilungen',
    'Aucune notification.',
    'Geen notificaties.',
    'Žádná oznámení.',
    'Nessuna notifica.',
    'Brak powiadomień.',
    'No Notificaciones.'
  ],
  friends: [
    'Friends',
    'Freunde',
    'Amis',
    'Vrienden',
    'Přátelé',
    'Amici',
    'Przyjaciele',
    'Amigos'
  ],
  follow: [
    'Follow',
    'Folgen',
    "S'abonner",
    'Volgen',
    'Následovat',
    'Segui',
    'Podążać',
    'Seguir'
  ],
  followed: [
    'Following',
    'Folge ich',
    'Abonné(e)',
    'Volgend',
    'Následující',
    'Segui',
    'Następny',
    'Siguiente'
  ],
  following: [
    'Following',
    'Folgt',
    'Abonnements',
    'Volgend',
    'Následující',
    'Seguiti',
    'Następny',
    'Siguiente'
  ],
  followers: [
    'Followers',
    'Follower',
    'Abonnés',
    'Volgers',
    'Stoupenci',
    'Follower',
    'Obserwujący',
    'Seguidores'
  ],
  update: [
    'Update',
    'Aktualisieren',
    'Mettre à jour',
    'Bijwerken',
    'Aktualizace',
    'Aggiornare',
    'Aktualizacja',
    'Actualizar'
  ],
  publish: [
    'Publish',
    'Veröffentlichen',
    'Publier',
    'Publiceren',
    'Publikovat',
    'Pubblicare',
    'Publikować',
    'Publicar'
  ],
  showAll: [
    'Show all',
    'Zeige alle',
    'Afficher tout',
    'Toon alles',
    'Ukázat vše',
    'Mostra tutto',
    'Pokaż wszystko',
    'Mostrar todo'
  ],
  edited: [
    'edited',
    'bearbeitet',
    'édité',
    'bewerkt',
    'upraveno',
    'modificato',
    'edytowane',
    'editado'
  ],
  findFriends: [
    'Find friends',
    'Freunde finden',
    'Retrouver des amis',
    'Zoek vrienden',
    'Najít přátele',
    'Trova amici',
    'Znajdź przyjaciół',
    'Encontrar amigos'
  ],
  noOneYet: [
    'No one yet.',
    'Noch niemand.',
    'Personne encore.',
    'Nog niemand.',
    'Zatím nikdo.',
    'Nessuno ancora.',
    'Nikt jeszcze.',
    'Todavía nadie.'
  ],
  yourFlightCommented: [
    'commented your flight.',
    'hat deinen Flug kommentiert.',
    'a commenté votre vol.',
    'heeft gereageerd op je vlucht.',
    'okomentoval váš let.',
    'ha commentato il tuo volo.',
    'skomentował Twój lot.',
    'comentó tu vuelo.'
  ],
  ownFlightCommented: [
    'answered your comment.',
    'hat deinen Kommentar beantwortet.',
    'répondu à votre commentaire.',
    'uw opmerking beantwoord.',
    'odpověděl na váš komentář.',
    'risposto al tuo commento.',
    'odpowiedział na twój komentarz.',
    'respondió tu comentario.'
  ],
  sameFlightCommented: [
    'also commented on the flight from',
    'kommentierte auch den Flug von',
    'a également commenté le vol de',
    'gaf ook commentaar op de vlucht van',
    'také komentoval let od',
    'ha anche commentato il volo da',
    'skomentował również lot',
    'también comentó sobre el vuelo de'
  ],
  flightsOfMyFriends: [
    'Flights of my friends',
    'Flüge meiner Freunde',
    'Les vols de mes amis',
    'Vluchten van vrienden',
    'Lety mých přátel',
    'Voli dei miei amici',
    'Loty moich znajomych',
    'Vuelos de mis amigos'
  ],

  // Authentication
  joinThanks: [
    'Thank you for joining WeGlide!',
    'Wir freuen uns dich in der Community zu begrüßen!',
    "Merci d'avoir rejoint WeGlide!",
    'Bedankt voor je aanmelding bij WeGlide!',
    'Těší nás, že tě můžeme přivítat v naší komunitě!',
    'Grazie per esserti unito a WeGilde!',
    'Dziękujemy za dołączenie do WeGlide!',
    '¡Gracias por unirse a WeGlide!'
  ],
  urgeVerify: [
    'Please verify your email by clicking the link in the email you got.',
    'Bitte verifiziere deine E-Mail Adresse über den Link den wir dir zugesendet haben.',
    "Vérifie ton adresse e-mail en cliquant sur le lien que nous t'avons envoyé.",
    'Verifieer je email adres door op de link te klikken die we je net hebben gestuurd.',
    'Prosíme o potvrzení tvé e-mailové adresy přes odkaz, který jsme ti zaslali.',
    'Per favore verifica la tua email cliccando il link che ti è arrivato nella tua email',
    'Proszę zweryfikuj Twój email przez kliknięcie w łącze załączone do wiadomości którą dostałeś.',
    'Verifique su correo electrónico haciendo clic en el enlace del correo electrónico que recibió.'
  ],
  verifyInstructions: [
    'If you got no email, please wait a minute and check your spam folder or contact us at',
    'Falls du keine E-Mail bekommen hast, warte eine Minute und prüfe deinen Spam-Ordner oder kontaktiere uns unter',
    "Si tu n'as pas reçu de mail, attends une minute et regarde dans tes spams ou contacte-nous à",
    'Als je geen mail het gehad, wacht een paar minuten, controleer je spam folder of stuur ons een bericht.',
    'Pokud jsi žádný e-mail nedostal, počkej 1 minutu a případně prověř adresář Spam, nebo nás kontaktuj',
    'Se non hai ricevuto nessuna email, per favore aspetta un minuto e controlla la posta indesiderata o contattaci a',
    'Jeśli nie dostałeś żadnego emaila, proszę poczekaj parę minut i sprawdź folder spam albo skontaktuj się z nami',
    'Si no recibió ningún correo electrónico, espere un minuto y revise su carpeta de correo no deseado o contáctenos en'
  ],
  joinCommunity: [
    'Join the community!',
    'Werde Teil der Community!',
    'Rejoins la communauté!',
    'Neem deel aan WeGlide!',
    'Připojuji se ke komunitě!',
    'Unisciti alla community!',
    'Dołącz do społeczności!',
    '¡Unete a la communidad!'
  ],
  errorPrivacy: [
    'Please accept our privacy statements and terms.',
    'Bitte akzeptiere die Nutzungsbedingungen und Datenschutzerklärung.',
    "Merci d'accepter les conditions d'utilisation et la déclaration de confidentialité.",
    'Accepteer onze voorwaarden en het privacy statement.',
    'Prosíme o potvrzení uživatelských podmínek a prohlášení o ochraně osobních údajů',
    'Per favore accetta le nostre normative sulla privacy e i termini.',
    'Proszę zaakceptuj nasze oświadczenia oraz warunki dotyczące prywatności.',
    'Acepte nuestras declaraciones y términos de privacidad.'
  ],
  errorCaptcha: [
    'Please solve the captcha to verify you are human.',
    'Bitte löse das Captcha um zu zeigen dass du ein Mensch bist.',
    "Merci de résoudre le Captcha pour vérifier que tu n'est pas un robot.",
    'Los de Captcha op om zeker te zijn dat je geen robot bent.',
    'Potvrď, že nejsi robot',
    'Si prega di risolvere il captcha per verificare che non sei un robot',
    'Proszę rozwiąż Captcha by udowodnić że jesteś człowiekiem.',
    'Por favor resuelve el captcha para verificar que eres humano.'
  ],
  verifying: [
    'Verifying Email',
    'E-Mail wird verifiziert',
    'Nous vérifions ton adresse e-mail',
    'Email wordt geverifieerd',
    'Ověřuji E-mail',
    "Verificando l'email",
    'Weryfikacja Email',
    'Verificación de correo electrónico'
  ],
  urgeLogIn: [
    'Please log in afterwards',
    'Danach bitte einloggen',
    'Ensuite connecte-toi',
    'Daarna inloggen',
    'Poté se prosím přihlaš',
    'Puoi effettuare il login',
    'Następnie zaloguj się proszę',
    'Inicie sesión después'
  ],
  requestVerification: [
    'Request new verification link',
    'Neuen Verifizierungslink anfordern',
    'Demander un nouveau lien de vérification',
    'Vraag nieuwe verificatie link aan',
    'Prosím o zaslání nového potvrzovacího odkazu',
    'Richiedi un nuovo link di verifica',
    'Poproś o nowy link weryfikujący',
    'Solicitar nuevo enlace de verificación'
  ],
  requestRecoverPassword: [
    'Request password recovery',
    'Passwort-Wiederherstellung anfordern',
    'Demander la récupération de mon mot de passe',
    'Wachtwoord herstel aanvragen',
    'Prosím o vytvoření nového hesla',
    'Richiedi password di recupero',
    'Poproś o stworznie nowego hasła',
    'Solicitar recuperación de contraseña'
  ],
  instructionsEmailed: [
    'Email send, please follow the mailed instructions.',
    'E-Mail gesendet, bitte folge den dort beschriebenen Anweisungen',
    "Nous t'avons envoyé un mail avec les instructions à suivre pour récupérer ton mot de passe",
    'Email verstuurd',
    'E-mail byl odeslán, pokračuj dle postupu popsaném v e-mailu',
    'Email inviata, segui le istruzioni al suo interno',
    'Email wysłany, proszę postępuj zgodnie z instrukcjami w nim zawartymi.',
    'Enviar correo electrónico, siga las instrucciones enviadas por correo.'
  ],
  recoverPassword: [
    'Recover password',
    'Passwort Wiederherstellen',
    'Récupérer mon mot de passe',
    'Wachtwoord herstellen',
    'Vytvořit nové heslo',
    'Password di recupero',
    'Odzyskaj hasło',
    'Recuperar contraseña'
  ],
  choosePassword: [
    'Choose new password',
    'Wähle ein neues Passwort',
    'Choisir un nouveau mot de passe',
    'Stel een nieuw wachtwoord in',
    'Vyberte nové heslo',
    'Scegli una nuova password',
    'Wybierz nowe hasło',
    'Elija una nueva contraseña'
  ],
  resetInvalid: [
    'Password recovery link is no longer valid. Please request a new one.',
    'Link zur Passwort-Wiederherstellung ist abgelaufen. Bitte fordere einen neuen an.',
    "Le lien pour récupérer ton mot de passe est expiré. Merci d'en demander un nouveau.",
    'Wachtwoord herstel link is niet meer geldig. Vraag een nieuwe aan.',
    'Čas odkazu na vytvoření nového hesla vypršel. Prosím vyžádej si nový odkaz ',
    'Il link per il recupero della password non è piu valido. Richiedine uno nuovo',
    'Link resetujący hasło nie jest już ważny. Wystąp o nowy.',
    'El enlace de recuperación de contraseña ya no es válido. Solicite uno nuevo'
  ],

  // Airspace
  airspace: [
    'Airspace',
    'Luftraum',
    'Espace aérien',
    'Luchtruim',
    'Vzdušný prostor',
    'Spazio aereo',
    'Przestrzeń powietrzna',
    'Espacio aéreo'
  ],
  airspaces: [
    'Airspaces',
    'Lufträume',
    'Espaces aériens',
    'Luchtruim',
    'Vzdušné prostory',
    'Spazi aerei',
    'Przestrzenie powietrzne',
    'Espacios aéreos'
  ],
  noAirspaceViolations: [
    'No airspaces crossed.',
    'Keine Lufträume durchflogen.',
    "Pas d'espaces aériens traversés.",
    'Geen luchtruim schendingen.',
    'Nenarušeny žádné vzdušné prostory',
    'Nessuno spazio aereo incrociato',
    'Żadna przestrzeń powietrzna nie została przekroczona',
    'No se cruzaron espacios aéreos.'
  ],

  // Page not found
  pageNotFound: [
    'Landing site not found.',
    'Ort zum Landen nicht gefunden.',
    "Le lieu d'atterrissage n'a pas été trouvé.",
    'Pagina niet gevonden.',
    'Stránka nenalezena.',
    'Pagina non trovata.',
    'Strona nieznaleziona.',
    'No se encontró el sitio de destino.'
  ],
  pickMeUp: [
    'Pick me up',
    'Bring mich zurück',
    'Retour en arrière',
    'Breng me terug',
    'Zpět',
    'Torna indietro',
    'Powrót',
    'Recógeme'
  ],

  // Filter
  filterPlaceholder: [
    'Search',
    'Suche',
    'Recherche',
    'Zoeken',
    'Hledat',
    'Cerca',
    'Szukaj',
    'Búsqueda'
  ],
  flightFilterPlaceholder: [
    'Region, pilot, club, airfield …',
    'Land, Person, Verein, Flugplatz …',
    'Région, Pilote, Club, Aérodrome …',
    'Regio, piloot, club, vliegveld …',
    'Region, pilot, klub, přistávací …',
    'Regione, Pilota, Club, Aeroporto …',
    'Region, pilota, klub, lotnisko …',
    'Región, Piloto, club, aeródromo …'
  ],
  rankingFilterPlaceholder: [
    'Continent, country, state',
    'Kontinent, Land, Bundesland',
    'Continent, Pays, État',
    'Continent, land, staat',
    'Kontinent, země, stát',
    'Continente, Paese, Stato',
    'Kontynent, kraj, stan',
    'Continente, país, estado'
  ],
  liveFilterPlaceholder: [
    'Region, airfield, pilot, aircraft …',
    'Land, Flugplatz, Person, Flugzeug …',
    'Région, Aérodrome, Pilote, Avion …',
    'Regio, vliegveld, piloot, vliegtuig …',
    'Region, letiště, pilot, letadlo …',
    'Regione, aeroporto, pilota, aereo …',
    'Region, lotnisko, pilot, samolot …',
    'Región, aeródromo, piloto, aeronave …'
  ],
  taskFilterPlaceholder: [
    'Task, distance, pilot, airfield',
    'Aufgabe, Distanz, Person, Flugplatz',
    'Tâche, distance, pilote, aérodrome',
    'Taak, afstand, piloot, vliegveld',
    'Úkol, vzdálenost, pilot, letiště',
    'Compito, distanza, pilota, aeroporto',
    'Zadanie, odległość, pilot, lotnisko',
    'Tarea, distancia, piloto, aeródromo'
  ],

  // Flight detail
  flightDetail: [
    'Flight detail',
    'Flugdetails',
    'Détails du vol',
    'Vluchtdetails',
    'Podrobnosti letu',
    'Dettagli del volo',
    'Szczegóły lotu',
    'Detalles del vuelo'
  ],
  liveDetail: [
    'Live detail',
    'Livedetails',
    'Détail en direct',
    'Live detail',
    'Živé detaily',
    'Live dettagli',
    'Żywe szczegóły',
    'Detalle en vivo'
  ],
  wingmen: [
    'Wingmen',
    'Gefährten',
    'Co-équipier',
    'Ontmoetingen',
    'Partner',
    'Amici',
    'Towarzysz',
    'Wingmen'
  ],
  scoreProcessing: [
    'Scoring in process',
    'Punkte werden berechnet,',
    'Calcul des points en cours,',
    'Bezig met scoren',
    'Probíhá výpočet',
    'Calcondo i punti',
    'Trwają obliczenia',
    'Puntuación en proceso'
  ],
  pleaseReload: [
    'please reload this page.',
    'bitte lade die Seite neu.',
    'merci de rafraîchir la page.',
    'herlaad deze pagina.',
    'Načti stránku znovu',
    'Per favore ricarica la pagina.',
    'Proszę przeładuj stronę.',
    'vuelva a cargar esta página.'
  ],
  points: [
    'Points',
    'Punkte',
    'Points',
    'Punten',
    'Body',
    'Punti',
    'Punkty',
    'Puntos'
  ],
  invalid: [
    'Invalid',
    'Ungültig',
    'Invalide',
    'Ongeldig',
    'Neplatné',
    'Non valido',
    'Niepoprawny',
    'Inválido'
  ],
  invalidFlight: [
    'Flight claimed too late for this contest',
    'Flugmeldung zu spät für diese Wertung',
    'Déclaration de vol trop tardive pour ce classement',
    'Vlucht te laat ingediend voor deze wedstrijd',
    'Nahlášení letu příliš pozdě na vyhodnocení soutěže',
    'Il volo è stato richiesto troppo tardi per questo concorso',
    'Lot zgłoszony za późno do tych zawodów',
    'Vuelo reclamado demasiado tarde para este concurso'
  ],
  free: [
    'Free',
    'Frei',
    'Libre',
    'Vrije',
    'Volný',
    'Gratuito',
    'Wolny',
    'Libre'
  ],
  speed: [
    'Speed',
    'Geschwindigkeit',
    'Vitesse',
    'Snelheid',
    'Rychlost',
    'Velocità',
    'Prędkość',
    'Velocidad'
  ],
  triangle: [
    'Triangle',
    'Dreieck',
    'Triangle',
    'Driehoek',
    'Trojúhelník',
    'Triangolo',
    'Trójkąt',
    'Triángulo'
  ],
  rectangle: [
    'Rectangle',
    'Viereck',
    'Rectangle',
    'Vierhoek',
    'Obdelník',
    'Rettangolo',
    'Prostokąt',
    'Rectángulo'
  ],
  declaration: [
    'Declared',
    'Deklariert',
    'Déclaré',
    'Gedeclareerd',
    'Deklarace',
    'Dichiarato',
    'Zadeklarowany',
    'Declarado'
  ],
  out_return: [
    'Out and Return',
    'Zielrück',
    'Aller-retour',
    'Retour',
    'Návrat',
    'Ritorno',
    'Powrót',
    'Salida y regreso'
  ],
  convex_hull: [
    'Convex Hull',
    'Konvexe Hülle',
    'Enveloppe convexe',
    'Convex omhulsel',
    'Vypouklé pouzdro',
    'Scafo convesso',
    'Powłoka wypukła',
    'Casco convexo'
  ],
  calculation: [
    'Calculation',
    'Berechnung',
    'Calcul',
    'Berekening',
    'Výpočet',
    'Calcolo',
    'Obliczenie',
    'Cálculo'
  ],
  teSpeed: [
    'EC Speed',
    'EK Geschwindigkeit',
    'Vitesse CE',
    'TE Snelheid',
    'EC rychlost',
    'Velocità ER',
    '',
    'Velocidad CE'
  ],
  teSpeedDescription: [
    'Energy Compensated Speed relative to task',
    'Energiekompensierte Geschwindigkeit relativ zur Aufgabe',
    "Vitesse compensée en énergie relative à l'épreuve",
    'Endergie gecompenseerde snelheid i.r.t. opdracht',
    'Energeticky kompenzovaná rychlost vzhledem k úkolu',
    "Velocità compensata dall'energia relativa al compito",
    'Prędkość z kompensacją energii w stosunku do zadania',
    'Velocidad de energía compensada en relación con la tarea'
  ],
  declareFor: [
    'Declare this task for',
    'Deklariere diese Aufgabe für',
    'Déclarez ce circuit pour',
    'Declareer deze taak voor',
    'Deklarujte tento úkol po dobu',
    'Dichiara questa attività per',
    'Zadeklaruj to zadanie na',
    'Declare esta tarea para'
  ],
  declaredTask: [
    'Declared Task',
    'Deklarierte Aufgabe',
    'Circuit déclaré',
    'Gedeclareerde opdracht',
    'Deklarovaná úloha',
    'Incarichi dichiarati',
    'Zadeklarowane zadanie',
    'Tarea declarada'
  ],
  declaredTaskDescription: [
    'Task declared by pilot before flight',
    'Vom Piloten vor dem Flug deklarierte Aufgabe',
    'Circuit/vol déclaré par le pilote avant le vol',
    'De opdracht die voor de vlucht is gedeclareed',
    'Úloha deklarovaná před vzletem',
    'Incarichi dichiarati dal pilota prima del volo',
    'Zadanie zadeklarowane przez pilota przed lotem',
    'Task declared by pilot before flight'
  ],
  statistics: [
    'Statistics',
    'Statistiken',
    'Statistiques',
    'Statistieken',
    'Statistika',
    'Statistiche',
    'Statystyki',
    'Estadísticas'
  ],
  general: [
    'General',
    'Allgemein',
    'Général',
    'Algemeen',
    'Všeobecné',
    'Generale',
    'Generalne',
    'General'
  ],
  distanceAbbrev: [
    'Dist.',
    'Dist.',
    'Dist.',
    'Afst.',
    'Vzdál.',
    'Dist.',
    'Dyst.',
    'Dist.'
  ],
  windAbbrev: [
    'Wind',
    'Wind',
    'Vent',
    'Wind',
    'Vítr',
    'Vento',
    'Wiatr',
    'Viento'
  ],
  electric: [
    'Electric',
    'Elektrisch',
    'Électrique',
    'Electrisch',
    'Elektrický',
    'Elettricità',
    'Elektryczny',
    'Eléctrico'
  ],
  energyAbbrev: [
    'Energy',
    'Energie',
    'Énergie',
    'Energie',
    'Energie',
    'Energia',
    'Energia',
    'Energía'
  ],
  total: [
    'Total',
    'Gesamt',
    'Total',
    'Totaal',
    'Celkem',
    'Totale',
    'Całkowite',
    'Total'
  ],
  thermaling: [
    'Thermaling',
    'Thermik',
    'Thermique',
    'Thermiek',
    'Kroužení',
    'Termico',
    'Termiczne',
    'Térmico'
  ],
  circling: [
    'Circling',
    'Kreisen',
    'Spirale',
    'Cirkelen',
    'Krouží',
    'Girando',
    'Krążą',
    'Circundar'
  ],
  countAbbrev: [
    'Count',
    'Anzahl',
    'Nombre',
    'Aantal',
    'Počet',
    'Numero',
    'Numer',
    'Número'
  ],
  timeAbbrev: [
    'Time',
    'Zeit',
    'Temps',
    'Tijd',
    'Čas',
    'Tempo',
    'Czas',
    'Tiempo'
  ],
  averageAbbrev: [
    'Avg.',
    'Schnitt',
    'Moyenne',
    'Gem.',
    'Průměr',
    'Media',
    'Średnia',
    'Medio'
  ],
  radius: [
    'Radius',
    'Radius',
    'Rayon',
    'Straal',
    'Poloměr',
    'Raggio',
    'Promień',
    'Radio'
  ],
  climb: [
    'Climb',
    'Steigen',
    'Montée',
    'Stijgen',
    'Šplhat',
    'Scalata',
    'Podejście',
    'Ascent'
  ],
  bank: [
    'Bank',
    'Neigung',
    'Inclinaison',
    'Bank',
    'Banka',
    'Banca',
    'Przechylenie',
    'Inclinación'
  ],
  glide: [
    'Glide',
    'Gleiten',
    'Plané',
    'Glijden',
    'Klouzavost',
    'Planare',
    'Ślizg',
    'Planeo'
  ],
  ratioAbbrev: [
    'Ratio',
    'Ratio',
    'Ratio',
    'Ratio',
    'Poměr',
    'Rapporto',
    'Stosunek',
    'Proporción'
  ],
  detourAbbrev: [
    'Detour',
    'Umweg',
    'Détour',
    'Omweg',
    'Navíc',
    'Deviazione',
    'Objazd',
    'Desvío'
  ],
  distance: [
    'Distance',
    'Distanz',
    'Distance',
    'Afstand',
    'Vzdálenost',
    'Distanza',
    'Dystans',
    'Distancia'
  ],
  duration: [
    'Duration',
    'Dauer',
    'Durée',
    'Duur',
    'Čas',
    'Durata',
    'Czas trwania',
    'Duración'
  ],
  takeoff: [
    'Takeoff',
    'Start',
    'Décollage',
    'Start',
    'Start',
    'Partenza',
    'Start',
    'Despegar'
  ],
  landing: [
    'Landing',
    'Landung',
    'Atterrissage',
    'Landing',
    'Přistání',
    'Atterraggio',
    'Lądowanie',
    'Aterrizaje'
  ],
  status: [
    'Status',
    'Status',
    'Statut',
    'Status',
    'Status',
    'Stato',
    'Status',
    'Estado'
  ],
  flightValid: [
    'Flight valid',
    'Flug gültig',
    'Vol valide',
    'Geldige vlucht',
    'Let je platný',
    'Volo valido',
    'Lot ważny',
    'Vuelo válido'
  ],
  flightInvalid: [
    'Flight invalid',
    'Flug ungültig',
    'Vol invalide',
    'Ongeldige vlucht',
    'Let je neplatný',
    'Volo non valido',
    'Lot nieważny',
    'Vuelo inválido'
  ],
  flightPending: [
    'Flight pending',
    'Flug ausstehend',
    'Vol en attente',
    'Vlucht in afwachting',
    'Let čeká na zpracování',
    'Volo in attesa',
    'Lot oczekujący',
    'Vuelo pendiente '
  ],
  filePending: [
    'File pending',
    'Datei ausstehend',
    'Fichier en attente',
    'Bestand in afwachting',
    'Soubor čeká na zpracování',
    'File in attesa',
    'Plik oczekuje na przetworzenie',
    'archivo pendiente'
  ],
  fileWeGlideValid: [
    'WeGlide valid',
    'WeGlide gültig',
    'WeGlide valide',
    'WeGlide geldig',
    'WeGlide platné',
    'WeGlide valido',
    'WeGlide poprawny',
    'WeGlide válido'
  ],
  fileIgcValid: [
    'IGC valid',
    'IGC valide',
    'IGC valide',
    'IGC geldig',
    'IGC platné',
    'IGC valido',
    'IGC poprawny',
    'IGC válido'
  ],
  fileInvalid: [
    'File invalid',
    'Datei ungültig',
    'Fichier invalide',
    'Data ongeldig',
    'Soubor platný',
    'File non valido',
    'Dane niepoprawne',
    'Archivo inválido'
  ],
  comment: [
    'Comment',
    'Kommentar',
    'Commentaire',
    'Opmerkingen',
    'Komentář',
    'Commento',
    'Komentarz',
    'Comentario'
  ],
  comments: [
    'Comments',
    'Kommentare',
    'Commentaires',
    'Opmerkingen',
    'Komentáře',
    'Commenti',
    'Komentarzie',
    'Comentarios'
  ],
  translate: [
    'Translate',
    'Übersetzen',
    'Traduire',
    'Vertalen',
    'Přeložit ',
    'Tradurre',
    'Tłumaczyć',
    'Traducir'
  ],
  outstart: [
    'Outstart',
    'Außenstart',
    'Décollage extérieur',
    'Buitenstart',
    'Nenalezený start',
    'outstart',
    'Start niezależny',
    'Empiece por fuera'
  ],
  outlanding: [
    'Outlanding',
    'Außenlandung',
    'Atterrissage extérieur',
    'Buitenlanding',
    'Přistání do terénu',
    'outlanding',
    'Lądowanie w terenie',
    'Aterrizando afuera'
  ],
  fileValid: [
    'No remarks analyzing this flight.',
    'Keine Anmerkungen zur Analyse des Fluges.',
    "Pas de remarque sur l'analyse du vol.",
    'Geen opmerkingen bij het analyseren van deze vlucht.',
    'Žádné poznámky k analýze letu',
    'Nessuna osservazione analizzando questo volo.',
    'Brak komentarzy dotyczących tego lotu.',
    'Sin comentarios analizando este vuelo.'
  ],
  loggerInformation: [
    'Logger information',
    'Logger Informationen',
    "Informations de l'enregistreur",
    'Logger informatie',
    'Informace ze zapisovače letu',
    'Registro informazioni',
    'Dziennik',
    'Información del registrador'
  ],
  share: [
    'Share',
    'Teilen',
    'Partager',
    'Delen',
    'Sdílet',
    'Condividi',
    'Podziel się',
    'Cuota'
  ],
  embed: [
    'Embed',
    'Einbetten',
    'Intégrer',
    'Integreren',
    'Vložit',
    'Embed',
    'Zintegruj',
    'Empotrar'
  ],
  showBarogram: [
    'Show barogram',
    'Barogram zeigen',
    'Afficher le barogramme',
    'Laat barogram zien',
    'Zobrazit barozáznam',
    'Mostra barogramma',
    'Pokaż barogram',
    'Mostrar barograma'
  ],
  includeBBox: [
    'Current bounding box',
    'Aktueller Ausschnitt',
    'Boîte de délimitation',
    'Actuele uitsnede',
    'Aktuální výběr',
    'Riquadro di delimitazione',
    'Aktualny wybór',
    'Cuadro delimitador actual'
  ],
  displayedFlights: [
    'Displayed flights',
    'Angezeigte Flüge',
    'Vols affichés',
    'Zichtbare vluchten',
    'Zobrazené lety',
    'Voli visualizzati',
    'Wyświetlone loty',
    'Vuelos mostrados'
  ],

  // Flight list
  flightList: [
    'Flight list',
    'Flugliste',
    'Liste des vols',
    'Vluchtenlijst',
    'Seznam letů',
    'Elenco dei voli',
    'Lista lotów',
    'Lista de vuelos'
  ],
  date: [
    'Date',
    'Datum',
    'Date',
    'Datum',
    'Datum',
    'Data',
    'Data',
    'Fecha'
  ],
  pilot: [
    'Pilot',
    'Pilot*in',
    'Pilote',
    'Individueel',
    'Pilot',
    'Pilota',
    'Pilot',
    'Piloto'
  ],
  more: [
    'More',
    'Mehr',
    'Plus',
    'Meer',
    'Více',
    'Altro',
    'Więcej',
    'Más'
  ],
  likes: [
    'Likes',
    'Gefällt',
    'Aime',
    'Houdt van',
    'Rád',
    'Piace',
    'Lubi',
    'Gustos'
  ],
  noFlightsYet: [
    'No flights yet.',
    'Noch keine Flüge.',
    'Pas encore de vols.',
    'Nog geen vluchten.',
    'Zatím žádné lety.',
    'Ancora nessun volo.',
    'Nie ma jeszcze lotów.',
    'Aún no hay vuelos.'
  ],
  noFlightsMapYet: [
    'No flights yet in this map section.',
    'Noch keine Flüge in diesem Kartenausschnitt.',
    'Pas encore de vols dans cette section de carte.',
    'Nog geen vluchten in dit kaartgedeelte.',
    'V této části mapy zatím nejsou žádné lety.',
    'Non ci sono ancora voli in questa sezione della mappa.',
    'W tej sekcji mapy nie ma jeszcze lotów.',
    'Aún no hay vuelos en esta sección del mapa.'
  ],

  // Flight overview
  overview: [
    'Overview',
    'Übersicht',
    'Aperçu',
    'Overzicht',
    'Přehled',
    'Sintesi',
    'Przegląd',
    'Visión general'
  ],
  flightOverview: [
    'Flight overview',
    'Flugübersicht',
    'Aperçu du vol',
    'Overzicht',
    'Náhled letu',
    'Panoramica',
    'Przegląd lotów',
    'Resumen de vuelo'
  ],
  liveOverview: [
    'Live overview',
    'Live Übersicht',
    'Aperçu en direct',
    'Live overzicht',
    'Náhled letu',
    'Panoramica volo',
    'Przegląd lotów',
    'Resumen en vivo'
  ],
  liveCompetition: [
    'Live competition',
    'Live Wettbewerb',
    'Compétition en direct',
    'Live competitie',
    'Živá soutěž',
    'Competizione dal vivo',
    'Konkurs na żywo',
    'Competencia en vivo'
  ],
  currentCompetitions: [
    'Current competitions',
    'Aktuelle Wettbewerbe',
    'Compétitions en cours',
    'Huidige competities',
    'Aktuální soutěže',
    'Concorsi in corso',
    'Aktualne konkursy',
    'Competiciones actuales'
  ],
  noCompetitions: [
    'No competitions',
    'Keine Wettbewerbe',
    'Pas de compétitions',
    'Geen competities',
    'Žádné soutěže',
    'Nessuna competizione',
    'Brak konkursów',
    'Sin competiciones'
  ],
  list: [
    'List',
    'Liste',
    'Liste',
    'Lijst',
    'Seznam',
    'Lista',
    'Lista',
    'Lista'
  ],

  // Upload/Edit
  uploadFlights: [
    'Upload flights',
    'Flüge hochladen',
    'Charger les vols',
    'Vlucht uploaden',
    'Nahrát lety',
    'Carica volo',
    'Wyślij loty',
    'Subir vuelos'
  ],
  editFlight: [
    'Edit flight',
    'Flug bearbeiten',
    'Modifier le vol',
    'VLucht aanpassen',
    'Upravit let',
    'Modifica volo',
    'Edytuj lot',
    'Editar vuelo'
  ],

  // Form edit flight
  scoringReset: [
    'Reset scoring windows',
    'Wertungsfenster zurücksetzen',
    'Réinitialiser la fenêtre de vol',
    'Scoringsgebied herstellen',
    'Obnovit vyhodnocení',
    'Resetta punteggi',
    'Zresetuj ocenę',
    'Restablecer ventanas de puntuación'
  ],
  scoringAdd: [
    'Add scoring window',
    'Neues Wertungsfenster',
    'Nouvelle fenêtre de vol',
    'Scoringsgebied toevoegen',
    'Přidat vyhodnocení',
    'Aggiungi punteggio',
    'Dodaj ocenę',
    'Agregar ventana de puntuación'
  ],
  scoringStart: [
    'Scoring start',
    'Wertungsbeginn',
    'Début du vol',
    'Begin van het scoren',
    'Začátek vyhodnocení',
    'Inizio punteggio',
    'Zcznij ocenianie',
    'Inicio de puntuación'
  ],
  scoringEnd: [
    'Scoring end',
    'Wertungsende',
    'Fin du vol',
    'Eind van het scoren',
    'Konec vyhodnocení',
    'Fine punteggio',
    'Zakończ ocenę',
    'Puntaje final '
  ],
  registrationFormat: [
    "Only uppercase letters, numbers and '-' are allowed for registration.",
    "Nur Großbuchstaben, Ziffern und '-' sind die Registrierung erlaubt.",
    "Seul les lettres majuscules, les chiffres et '-' sont permis pour l'inscription.",
    "Alleen hoofdletters, nummers en '-' zijn toegestaan voor registratie.",
    "V registraci jsou povoleny pouze velká písmena, čísla a '-' ",
    "Sono accettati solo lettere maiuscole, numeri e '-' per la registrazione. ",
    "Tylko wielkie litery, cyfry i '-' są dozwolone przy rejestracji.",
    "Solo se permiten letras mayúsculas, números y '-' para el registro."
  ],
  isNotRegistered: [
    'is not registered, no further authentication required.',
    'ist nicht registriert, keine Authentifizierung erforderlich.',
    "n'est pas enregistré, pas d'authentification nécessaire.",
    'is niet geregistreerd, geen verdere authenticatie benodigd.',
    'Není registrován, není požadována autorizace',
    'non è registrato, non è richiesta alcuna ulteriore autenticazione.',
    'nie jest zarejestrowany, dalsze uwierzytelnienie niewymagane.',
    'no está registrado, no se requiere autenticación adicional.'
  ],
  isRegistered: [
    'is registered, date of birth required as authentication.',
    'ist registriert, Geburtsdatum wird als Authentifizierung benötigt.',
    "est enregistré, date de naissance nécessaire pour l'authentification.",
    'is geregistreed, geboortedatum vereist voor authenticatie.',
    'Je registrován, pro autorizaci je nutné datum narození',
    'è registrato, la data di nascita è richiesta come autenticazione',
    'jest zarejestrowany, wymagana data urodzenia do uwierzytelnienia.',
    'está registrado, la fecha de nacimiento se requiere como autenticación.'
  ],
  competitionIdFormat: [
    'Only alphanumeric characters are allowed for competition id.',
    'Nur Alphanumerische Zeichen sind für die Wettbewerbs-ID erlaubt.',
    'Seul les caractères alphanumériques sont permis pour le numéro/ID de compétition.',
    'Alleen alfanumerieke karakters zijn toegestaan als wedstrijdnummer.',
    'Na soutěžní znak jsou povoleny pouze písmena a čísla',
    "Sono accettati sono caratteri alfanumerici per l' ID Concorenza",
    'Tylko alfanumeryczne znaki są dozwolone w ID zawodów.',
    'Solo se permiten caracteres alfanuméricos para la identificación de la competencia.'
  ],
  scoringWindows: [
    'Scoring windows',
    'Wertungsfenster',
    'Fenêtre pour le score',
    'Scoringsgebied',
    'Vyhodnoceni',
    'Finestra punteggi',
    'Ocenianie',
    'Ventanas de puntuación'
  ],
  scoringTowingNotice: [
    'Please make sure that the scoring windows do not include towing.',
    'Bitte prüfe, dass die Wertungsfenster kein Schleppen beinhalten.',
    'Merci de vérifier que la fenêtre de vol ne contient pas de remorqué.',
    'Sleeptijd mag geen onderdeel zijn van het scoringsgebied.',
    'Ujistětě se, že ve vyhodnocení neobsahuje let v aerovleku',
    'Assicurati che la valutazione non includa un volo in traino aereo',
    'Proszę upewnić się, że ocenianie nie zawiera holowania.',
    'Asegúrese de que las ventanas de puntuación no incluyan el remolque.'
  ],
  scoringFesNotice: [
    'Airplane with electric propulsion selected. Please make sure time spans with running engine (yellow) are excluded from scoring.',
    'Flugzeug mit elektrischem Antrieb ausgewählt. Bitte prüfe, dass die Wertungsfenster keinen Motorlauf (gelb) beinhalten.',
    'Tu as choisi un planeur avec moteur électrique. Merci de vérifier que les fenêtres de vol ne contiennent pas de temps moteur (jaune).',
    'Vliegtuig met electro motor geselecteerd, het scoringsgebied mag geen motorlooptijd bevatten.',
    'Vybrán kluzák s elektromotorem, ujistěte se, že ve vyhodnocení není část s během motoru (žlutá)',
    'Aereo con propulsione elettrica selezionato. Assicurati che i periodi di tempo con il motore in funzione (giallo) siano escusi dal punteggio',
    'Wybrany samolot z elektrycznym napędem. Proszę upewnić się, że okresy kiedy silnik jest włączony (żółte) są wykluczone z oceny.',
    'Avión con propulsión eléctrica seleccionada. Asegúrese de que los intervalos de tiempo con el motor en marcha (amarillo) estén excluidos de la puntuación.'
  ],
  scoringEngineNotice: [
    'Airplane with engine selected. Please make sure time spans with running engine (yellow) are excluded from scoring.',
    'Flugzeug mit Motor ausgewählt. Bitte prüfe, dass die Wertungsfenster keinen Motorlauf (gelb) beinhalten.',
    'Tu as choisi un planeur avec moteur. Merci de vérifier que les fenêtres de vol ne contiennent pas de temps de moteur (jaune).',
    'Vliegtuig met motor geselecteerd, het scoringgebied mag geen motorlooptijd bevatten.',
    'Vybrán kluzák s motorem, ujistěte se, že ve vyhodnocení není část letu s během motoru (žlutá)',
    'Aereo con motore selezionato, Assicurati che i periodi di tempo con il motore in funzione (giallo) siano escusi dal punteggio',
    'Wybrany samolot z napędem. Proszę upewnić się, że okresy kiedy silnik jest włączony (żółte) są wykluczone z oceny.',
    'Avión con motor seleccionado. Asegúrese de que los intervalos de tiempo con el motor en marcha (amarillo) estén excluidos de la puntuación.'
  ],
  scoringGliderNotice: [
    'Airplane without engine selected, switch to aircraft with engine to see potential engine runs.',
    'Flugzeug ohne Motor ausgewählt, wechsel zu einem Flugzeug mit Motor um potentielle Motorläufe zu sehen.',
    'Planeur sans moteur sélectionné, choisis un planeur avec moteur pour voir les potentiels temps moteur.',
    'Vliegtuigen zonder motor geselecteerd, schakel over naar vliegtuig met motor om potentiële motorlooppas te zien.',
    'Letadlo bez zvoleného motoru, přepněte na letadlo s motorem, abyste viděli potenciální běhy motoru.',
    'Aereo senza motore selezionato, passare a un aereo con motore per vedere i potenziali motori in funzione.',
    'Samolot bez wybranego silnika, przełącz się na samolot z silnikiem, aby zobaczyć potencjalną pracę silnika.',
    'Avión sin motor seleccionado, cambie a avión con motor para ver el funcionamiento potencial del motor.'
  ],
  errorTerms: [
    'Please agree to the terms.',
    'Bitte stimme den Bedingungen zu.',
    "Merci d'accepter les conditions.",
    'Ga eerst akkoord met de voorwaarden.',
    'Prosíme o odsouhlasení podmínek',
    'Per favore accetta i termini.',
    'Proszę zgódź się z zasadami.',
    'Acepta los términos.'
  ],
  textConfirmUpload: [
    'I confirm that my scoring windows are chosen according to the rules, each active airspace crossed was cleared by ATC and I have read and accepted the following documents:',
    'Ich bestätige, dass ich die Wertungsfenster nach den Regeln gewählt habe, jeder durchflogene aktive Luftraum von ATC freigegeben wurde, und ich die folgenden Dokumente gelesen habe und ihnen zustimme:',
    "Je confirme avoir choisi la fenêtre de vol selon les règles, j'ai reçu les clairances ATC nécessaires pour traverser les espaces aériens actifs et j'ai lu et approuvé les documents suivants:",
    'Ik bevestig dat mijn scoringsgebied(en) zijn geselecteerd volgens de regels, voor elk luchtruimbeperking had ik ATC-klaring en ik heb de volgende documenten gelezen en ga akkoord:',
    'Potvrzuji, že jsem zvolil vyhodnocení podle pravidel, průlet aktivních prostorů mi byl povolen četl jsem a akceptuji následující dokumenty:',
    "Confermo che le mie finestre di punteggio sono scelte in base alle regole che ogni spazio aereo attivo attraversato è stato cancellato dall'ATC e ho letto e accettato i seguenti documenti:",
    'Potwierdzam że moja ocena jest wybrana prawidłowo zgodnie z zasadami, każda przestrzeń powietrzna została przekroczona zgodnie z ATC oraz przeczytałem i zaakceptowałem poniższe dokumenty:',
    'Confirmo que mis ventanas de puntuación se eligen de acuerdo con las reglas, cada espacio aéreo activo cruzado fue autorizado por ATC y he leído y aceptado los siguientes documentos:'
  ],

  // Form upload igc
  hello: [
    'Hello',
    'Hallo',
    'Bonjour',
    'Hallo',
    'Ahoj',
    'Ciao',
    'Cześć',
    'Hola'
  ],
  shareFlights: [
    'share your flights!',
    'teile deine Flüge!',
    'partage tes vols! ',
    'deel je vluchten!',
    'Sdílej své lety',
    'condividi i tuoi voli!',
    'podziel się lotami!',
    'comparte tus vuelos!'
  ],
  unauthorizedNotice: [
    'You are not logged in, please provide your date of birth and full name to upload if you have an account or',
    'Du bist nicht eingeloggt, bitte gib deinen vollen Namen sowie dein Geburtsdatum zum Hochladen an falls du einen Account hast oder',
    "Tu n'es pas connecté, entre ton nom complet et ta date de naissance afin de pouvoir charger si tu as un compte ou",
    'Je bent niet ingelogd. Vul je volledige naam en geboortedatum in.',
    'Nejsi přihlášen, k nahrání letů napiš celé jméno a datum narození, pokud jsi již registrován',
    "Non hai effettuato l'accesso, per favore fornisci la tua data di nascita e il tuo nome completo se hai un account o",
    'Nie jesteś zalogowany, proszę wprowadź datę urodzenia oraz pełne imię by przesłać plik jeśli masz konto albo',
    'No ha iniciado sesión, proporcione su fecha de nacimiento y nombre completo para cargar si tiene una cuenta o'
  ],
  logInFirst: [
    'log in',
    'melde dich an',
    'inscris-toi',
    'log in',
    'Přihlásit',
    'log in',
    'Zaloguj się',
    'iniciar sesión'
  ],
  igcDragText: [
    'Drag .igc files here to upload or click to select',
    'Ziehe IGC-Dateien hierher zum Hochladen oder klicke zum Auswählen',
    'Dépose tes fichiers IGC ici pour les charger ou clique pour les sélectionner',
    'Sleep je .igc-bestanden hierheen of klik hier om ze te selecteren',
    'Přetáhni .igc soubor k nahrání nebo ho vyber ze seznamu',
    "Trascina i file .igc qua per effettuare l'upload o clicca per selezionarli",
    'Przeciągnij pliki .igc tutaj by je przesłać albo kliknij by wybrać',
    'Arrastre los archivos .igc aquí para cargarlos o haga clic para seleccionar'
  ],
  igcDropText: [
    'Drop .igc files to upload',
    'Lasse die IGC-Dateien los zum Hochladen',
    'Lâche les fichiers IGC pour les charger',
    'Laat je .igc-bestanden los om ze te uploaden',
    'Přetáhni .igc soubor k nahrání',
    'Rilascia il file .igc',
    'Przeciągnij pliki .igc by je przesłać',
    'Suelta los archivos .igc para subir'
  ],

  // Teaser
  currentLanguage: [
    'English',
    'Deutsch',
    'Français',
    'Nederlands',
    'Česky',
    'Italiano',
    'Polski',
    'Español'
  ],
  welcome: [
    'Welcome',
    'Willkommen',
    'Bienvenue',
    'Welkom',
    'Vítejte',
    'Benvenuto',
    'Witaj',
    'Bienvenidos'
  ],
  uploadFlight: [
    'Upload flight',
    'Flug hochladen',
    'Ajouter un vol',
    'Vluchten uploaden',
    'Nahrát let',
    'Carica un volo',
    'Prześlij lot',
    'Subir vuelo'
  ],
  myProfile: [
    'My profile',
    'Mein Profil',
    'Mon profil',
    'Mijn profiel',
    'Můj profil',
    'Il mio profilo',
    'Mój profil',
    'Mi perfil'
  ],
  encourage: [
    "Let's take off together and join the next-generation gliding platform.",
    'Lass uns zusammen abheben und genieße die Segelflugplattform der nächsten Generation.',
    'Décolle avec nous et profite de la nouvelle génération de plateforme vélivole.',
    'Laten we samen starten en sluit je aan bij het zweefplatform van de volgende generatie.',
    'Užij si novou platformu pro plachtění',
    'Decolliamo insieme e unisciti alla nuova piattaforma di volo.',
    'Wystartujmy razem i dołącz do platformy o szybownictwie nowej generacji.',
    'Despeguemos juntos y unámonos a la plataforma de deslizamiento de próxima generación.'
  ],
  flightOfTheMonth: [
    'Flight of the month',
    'Flug des Monats',
    'Vol du mois',
    'Vlucht van de maand',
    'Let měsíce',
    'Volo del mese',
    'Lot miesiąca',
    'Vuelo del mes'
  ],

  // Partner
  partner: [
    'Partner',
    'Partner',
    'Partenaire',
    'Partner',
    'Partner',
    'Partner',
    'Partner',
    'Pareja'
  ],
  supporter: [
    'Funded by',
    'Gefördert durch',
    'Soutenu par',
    'Mede mogelijk gemaakt door',
    'Založeno',
    'Fondato da',
    'Założono przez',
    'Fundado por'
  ],
  sponsors: [
    'Sponsors',
    'Sponsoren',
    'Les sponsors',
    'Sponsors',
    'Sponzoři',
    'Sponsor',
    'Sponsorzy',
    'Patrocinadores'
  ],

  // Footer
  contact: [
    'Contact',
    'Kontakt',
    'À propos',
    'Contact',
    'Kontakt',
    'Contatti',
    'Kontakt',
    'Contacto'
  ],
  philosophy: [
    'Philosophy',
    'Philosophie',
    'Philosophie',
    'Filosofie',
    'Filozofie',
    'Filosofia',
    'Filozofia',
    'Filosofía'
  ],
  imprint: [
    'Imprint',
    'Impressum',
    'Mentions légales',
    'Colofon',
    'Impresum',
    'Impronta',
    'Odcisk',
    'Imprimir'
  ],
  media: [
    'Media',
    'Medien',
    'Médias',
    'Media',
    'Média',
    'Media',
    'Media',
    'Comunicación'
  ],
  press: [
    'Press',
    'Presse',
    'Presse',
    'Pers',
    'PR',
    'Stampa',
    'Prasowe',
    'PR'
  ],
  services: [
    'Services',
    'Dienste',
    'Services',
    'Diensten',
    'Služby',
    'Servizi',
    'Usługi',
    'Servicios'
  ],
  contestRules: [
    'Contest Rules',
    'Wettbewerbsregeln',
    'Règles de compétition',
    'Wedstrijdreglement',
    'Soutěžní pravidla',
    'Regole del concorso',
    'Zasady zawodów',
    'Reglas del concurso'
  ],
  loggers: [
    'Loggers',
    'Logger',
    'Enregistreur',
    'Loggers',
    'Zapisovače letu',
    'Logger',
    'Dzienniki',
    'Registrador'
  ],
  instructions: [
    'Instructions',
    'Anleitungen',
    'Instructions',
    'Instructies',
    'Instrukce',
    'Istruzioni',
    'Instrukcje',
    'Instrucciones'
  ],
  supportRequest: [
    'Support request',
    'Support Anfrage',
    'Demande de soutien',
    'Ondersteuningsverzoek',
    'Žádost o podporu',
    'Richiesta di supporto',
    'Żądanie wsparcia',
    'Solicitud de soporte'
  ],
  developer: [
    'Developer',
    'Entwickler',
    'Développeur',
    'Ontwikkelaars',
    'Vývojář',
    'Sviluppatori',
    'Deweloper',
    'Desarrollador'
  ],
  getStarted: [
    'Get Started',
    'Einleitung',
    'Introduction',
    'Introductie',
    'Uvedení',
    'Lavora con noi',
    'Wprowadzenie',
    'Empezar'
  ],
  faq: [
    'FAQ',
    'Häufige Fragen',
    'FAQ',
    'FAQ',
    'Často kladené otázky',
    'FAQ',
    'Często zadawane pytania',
    'Preguntas más frecuentes'
  ],

  // Teaser
  dailyBest: [
    'Daily best',
    'Tageswertung',
    'Le meilleur du jour',
    'Dagelijkse score',
    'Dnes nejlepší',
    'Migliore del giorno',
    'Najlepsze dziennie',
    'Bestia diaria'
  ],
  latestUploads: [
    'Latest uploads',
    'Neu hochgeladen',
    'Téléchargements récents',
    'Laatste vluchten',
    'Poslední nahrané lety',
    'Ultimo upload',
    'Najnowsze przesłane',
    'Últimas cargas'
  ],
  flightStories: [
    'Flight Stories',
    'Fluggeschichten',
    'Récits de vols',
    'Verhalen',
    'Historie letu',
    'Storie di volo',
    'Relacje lotów',
    'Historias de vuelos'
  ],

  // Home Content
  magazine: [
    'Magazine',
    'Magazin',
    'Magasine',
    'Artikelen',
    'Časopis',
    'Notizie',
    'Magazyn',
    'Revista'
  ],
  competitions: [
    'Competitions',
    'Wettbewerbe',
    'Compétitions',
    'Wedstrijden',
    'Soutěže',
    'Competizioni',
    'Zawody',
    'Competiciones'
  ],
  team: [
    'Team',
    'Team',
    'Équipe',
    'Team',
    'Tým',
    'Team',
    'Zespół',
    'Equipo'
  ],
  johannesDescription: [
    'Competition Pilot',
    'Wettbewerbspilot',
    'Pilote de compétition',
    'Wedstrijdvlieger',
    'Soutěžní pilot',
    'Pilota da competizione',
    'Konkurencyjny pilot',
    'Piloto de competición'
  ],
  moritzDescription: [
    'Cross-Country Explorer',
    'Cross-Country Entdecker',
    'Pilote de découverte en vol libre',
    'Overland verkenner',
    'Vyhledávač po celém světě',
    'Esploratore di nuovi mondi',
    'Międzynarodowy Ekspolrer',
    'Explorador de campo traviesa'
  ],
  samuelDescription: [
    'Outdoor Enthusiast',
    'Outdoor Abenteurer',
    'Aventurier de plein air',
    'Outdoorliefhebber',
    'Outdorový dobrodruh',
    'Appassionato di attività alla aperto',
    'Entuzjasta świeżego powietrza',
    'Aficionado al aire libre'
  ],

  // Magazine Teaser
  readingTime: [
    'min. read',
    'Min. Lesezeit',
    'Min. Temps de lecture',
    'Min. Leestijd',
    'Min. čas čtení',
    'tempo di lettura',
    'min. czytania',
    'min. leer'
  ],

  // Map layer
  map: [
    'Map',
    'Karte',
    'Carte',
    'Kaart',
    'Mapa',
    'Mappa',
    'Mapa',
    'Mapa'
  ],
  comingSoon: [
    'Coming soon',
    'Kommt bald',
    'Bientôt disponible',
    'Komt binnenkort',
    'Přijde brzy',
    'Prossimamente',
    'Wkrótce',
    'Próximamente, en breve, pronto'
  ],
  transportation: [
    'Streets',
    'Straßen',
    'Rues',
    'Wegen',
    'Silnice',
    'Strade',
    'Ulice',
    'Calles'
  ],
  landcover: [
    'Land cover',
    'Landbedeckung',
    'Couverture du sol',
    'Bodembedekking',
    'Zakrýt krajinu',
    'Copertura del suolo',
    'Pokrycie terenu',
    'Cobertura Terrestre'
  ],
  administrative: [
    'Cities and Countries',
    'Städte und Länder',
    'Villes et Pays',
    'Steden en Landen',
    'Města a státy',
    'Città e Paesi',
    'Miasta i państwa',
    'Ciudades y países'
  ],
  pois: [
    'Points of interest',
    'Interessante Punkte',
    "Points d'intérêts",
    'Bezienswaardigheden',
    'Zájmové body',
    'Punti di interesse',
    'Punkty zainteresowań',
    'Puntos de interés'
  ],
  mountains: [
    'Mountains',
    'Berge',
    'Montagnes',
    'Bergen',
    'Hory',
    'Montagne',
    'Góry',
    'Montañas'
  ],
  landingFields: [
    'Landing fields',
    'Landewiesen',
    "Champs d'atterrissage",
    'Landingsvelden',
    'Přistávací pole',
    'Campi di atterraggio',
    'Lądowiska',
    'Campos de aterrizaje'
  ],
  glidingAirspaces: [
    'Gliding airspaces',
    'Segelfluglufträume',
    'Espaces aériens de vol à voile',
    'Glijdende luchtruimten',
    'Klouzavý vzdušný prostor',
    'Spazi aerei plananti',
    'Szybujące przestrzenie powietrzne',
    'Espacios aéreos deslizantes'
  ],
  weather: [
    'Weather',
    'Wetter',
    'Météo',
    'Weer',
    'Počasí',
    'Tempo',
    'Pogoda',
    'Tiempo'
  ],
  connectWeatherProviders: [
    'Connect weather providers',
    'Wetteranbieter verbinden',
    'Connectez les fournisseurs de météo',
    'Verbind weerproviders',
    'Připojte poskytovatele počasí',
    'Collega i servizi meteorologici',
    'Połącz dostawców pogody',
    'Conectar proveedores meteorológicos'
  ],
  thermal: [
    'Thermal',
    'Thermik',
    'Thermique',
    'Thermiek',
    'Tepelný',
    'Termico',
    'Termiczny',
    'Térmico'
  ],
  clouds: [
    'Clouds',
    'Wolken',
    'Nuages',
    'Wolken',
    'Mraky',
    'Nuvole',
    'Chmury',
    'Nubes'
  ],
  wind: [
    'Wind',
    'Wind',
    'Vent',
    'Wind',
    'Vítr',
    'Il vento',
    'Wiatr',
    'Viento'
  ],
  satImage: [
    'Satellite image',
    'Satellitenbild',
    'Image satellite',
    'Sattelietbeelden',
    'Satelitní snímek',
    'Immagini Satellitare',
    'Zdjęcie satelitarne',
    'Imagen de satélite'
  ],
  predictedFlightDistance: [
    'Predicted flight distance',
    'Vorhergesagte Flugdistanz',
    'Distance de vol prévue',
    'Voorspelde vluchtafstand',
    'Předpovězená délka letu',
    'Distanza di volo prevista',
    'Przewidywany dystans lotu',
    'Distancia de vuelo prevista'
  ],
  xcSpeed: [
    'XC Speed',
    'XC Geschwindigkeit',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  thermalHeight: [
    'Thermal height',
    'Thermikhöhe',
    'Plafond',
    '',
    '',
    '',
    '',
    ''
  ],
  cuVerticalExpansion: [
    'CU vertical expansion',
    'CU vertikale Ausdehnung',
    'Hauteur verticale CU',
    '',
    '',
    '',
    '',
    ''
  ],
  cuBasis: [
    'CU basis',
    'CU Basis',
    'Base CU',
    '',
    '',
    '',
    '',
    ''
  ],
  rainRadar: [
    'Rain radar',
    'Regenradar',
    'Radar de pluie',
    'Regenradar',
    'Srážkový radar',
    'Radar pioggia',
    'Radar deszczowy',
    'Radar de lluvia '
  ],
  temperature: [
    'Temperature',
    'Temperatur',
    'Température',
    '',
    '',
    '',
    '',
    'La temperatura'
  ],
  uphillRidgeWind: [
    'Uphill ridge wind',
    'Hangaufwind',
    'Vent de crêtes',
    '',
    '',
    '',
    '',
    ''
  ],
  thermalMaps: [
    'Thermal maps',
    'Thermikkarten',
    'Cartes des thermiques',
    'Thermische kaarten',
    'Termální mapy',
    'Mappe termiche',
    'Mapy Termiczne',
    'Mapas térmicos'
  ],
  start: [
    'Start',
    'Start',
    'Début',
    'Begin',
    'Začátek',
    'Inizio',
    'Początek',
    'Comienzo'
  ],
  end: [
    'End',
    'Ende',
    'Fin',
    'Einde',
    'Konec',
    'Fine',
    'Koniec',
    'Fin'
  ],
  range: [
    'Range',
    'Bereich',
    'Domaine',
    'Bereik',
    'Rozsah',
    'Gamma',
    'Zasięg',
    'Abarcar'
  ],
  multiple: [
    'Multiple',
    'Mehrfach',
    'Plusieurs',
    'Meerdere',
    'Násobek',
    'Molteplici',
    'Wielokrotność',
    'Múltiple'
  ],

  // Navigation
  home: [
    'Home',
    'Start',
    'Accueil',
    'Start',
    'Start',
    'Avvia',
    'Start',
    'Comienzo'
  ],
  ranks: [
    'Ranks',
    'Wertung',
    'Classements',
    'Ranglijst',
    'Pořadí',
    'Rangk',
    'Rangi',
    'Rangos'
  ],
  upload: [
    'Upload',
    'Hochladen',
    'Charger',
    'Uploaden',
    'Nahrát',
    'Upload',
    'Wyślij',
    'Subir'
  ],
  task: [
    'Task',
    'Aufgabe',
    'Circuit',
    'Opdracht',
    'Úloha',
    'Obiettivi',
    'Zadanie',
    'Tarea'
  ],
  profile: [
    'Profile',
    'Profil',
    'Profil',
    'Profiel',
    'Profil',
    'Profilo',
    'Profil',
    'Perfil'
  ],
  logOut: [
    'Log out',
    'Ausloggen',
    'Déconnecter',
    'Log uit',
    'Odhlásit se',
    'Disconnettiti',
    'Wyloguj się',
    'Cerrar sesión'
  ],

  // Profile statistics
  joined: [
    'Joined WeGlide',
    'WeGlide Beigetreten',
    'Tu as rejoins WeGlide',
    'Lid sinds',
    'Připoj se k WeGlide',
    'Unito a WeGilde',
    'Dołączono do WeGlide',
    'Se unió a WeGlide'
  ],
  stories: [
    'Stories',
    'Geschichten',
    'Récits',
    'Verhalen',
    'Příběhy',
    'Storie',
    'Relacje',
    'Cuentos'
  ],
  airtime: [
    'Cumulative airtime',
    'Gesamte Flugzeit',
    'Durée de vol totale',
    'Vliegtijd',
    'Celková doba letu',
    'Tempo totale di volo',
    'Całkowity czas lotu',
    'Tiempo aire acumulado'
  ],
  cumulativeDistance: [
    'Cumulative distance',
    'Gesamte Distanz',
    'Distance de vol totale',
    'Afstand',
    'Celková vzdálenost',
    'Distanza totale',
    'Całkowity dystans',
    'Distancia acumulada'
  ],
  avgSpeed: [
    'Average speed',
    'Durchschnittsgeschwindigkeit',
    'Vitesse moyenne',
    'Snelheid',
    'Průměrná rychlost',
    'Velocità media',
    'Średnia prędkość',
    'Velocidad media'
  ],
  avgGlideSpeed: [
    'Average glide speed',
    'Gleitgeschwindigkeit',
    'Vitesse de vol plané moyenne',
    'Steeksnelheid',
    'Průměrná rychlost klouzání',
    'Velocità media di planata',
    'Średnia prędkość szybowania',
    'Velocidad de planeo media'
  ],
  avgGlideDetour: [
    'Average glide detour',
    'Durchschnittlicher Gleitumweg',
    'Détour moyen de vol plané',
    'Omvliegfactor',
    'Průměrná vzdálenost mimo trať',
    'Deviazione media per planata',
    'Średni objazd schodzenia',
    'Desvío de planeo promedio'
  ],

  // Profile Settings
  settingsUpdated: [
    'Settings updated',
    'Einstellungen gespeichert',
    'Paramètres mis à jour',
    'Instellingen bijgewerkt',
    'Nastavení aktualizováno',
    'Impostazioni aggiornate',
    'Ustawienia zaktualizowane',
    'Ajustes actualizan'
  ],
  metric: [
    'Metric',
    'Metrisch',
    'Métrique',
    'Metrisch',
    'Metrické',
    'Metrico',
    'Metryczne',
    'Métrico'
  ],
  imperial: [
    'Imperial',
    'Imperial',
    'Impérial',
    'Imperiaal',
    'Britské',
    'Imperiale',
    'Imperialne',
    'Imperial'
  ],
  profileImageDragText: [
    'Drag your new profile picture here to upload or click to select',
    'Ziehe dein neues Profilbild hierher zum Hochladen oder klicke zum Auswählen',
    'Fais glisser ta nouvelle photo de profil ici pour la charger ou clique pour sélectionner',
    'Sleep je nieuwe profielfoto hierheen om te uploaden of klik om te selecteren',
    'Přetáhněte sem svůj nový profilový obrázek pro nahrání nebo kliknutím vyberte',
    'Trascina qui la tua nuova immagine del profilo per caricarla o fai clic per selezionarla',
    'Przeciągnij tutaj swoje nowe zdjęcie profilowe, aby je przesłać, lub kliknij, aby wybrać',
    'Arrastre su nueva foto de perfil aquí para cargarla o haga clic para seleccionar'
  ],
  profileImageDropText: [
    'Drop your profile picture to upload',
    'Lasse dein Profilbild zum Hochladen los',
    'Dépose ta photo de profil pour la charger',
    'Zet je profielfoto neer om te uploaden',
    'Nahrajte svůj profilový obrázek',
    'Rilascia la tua immagine del profilo per caricarla',
    'Upuść swoje zdjęcie profilowe, aby je przesłać',
    'Suelta tu foto de perfil para subir'
  ],
  changeProfileImage: [
    'Change profile picture',
    'Profilbild ändern',
    'Modifier la photo de profil',
    'Profielfoto veranderen',
    'Změnit profilový obrázek',
    'Cambia immagine del profilo',
    'Zmień zdjęcie profilowe',
    'Cambiar foto de perfil'
  ],
  integrateSkysight: [
    'Integrate SkySight weather data into WeGlide',
    'Integriere SkySight Wetter in WeGlide',
    'Intègre la météo de SkySight sur WeGlide',
    'SkySight integratie',
    'Propojení SkySight s WeGlide',
    'Integra i dati meteorologici SkySight in WeGlide',
    'Zintegruj dane pogodowe SkySight z WeGlide',
    'Integre los datos meteorológicos de SkySight en WeGlide'
  ],
  integrateCopilot: [
    'Link your COPILOT profile in WeGlide',
    'Verlinke dein COPILOT Profil in WeGlide',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  integrateTopmeteo: [
    'Integrate TopMeteo weather data into WeGlide',
    'Integriere TopMeteo Wetter in WeGlide',
    'Intègre la météo de TopMeteo sur WeGlide',
    'TopMeteo integratie',
    'Propojení  TopMeteo s WeGlide',
    'Integra i dati meteorologici TopMeteo in WeGlide',
    'Zintegruj dane pogodowe TopMeteo z WeGlide',
    'Integre los datos meteorológicos de TopMeteo en WeGlide'
  ],

  // Profile
  settings: [
    'Settings',
    'Einstellungen',
    'Réglages',
    'Instellingen',
    'Nastavení',
    'Impostazioni',
    'Ustawienia',
    'Ajustes'
  ],
  security: [
    'Security',
    'Sicherheit',
    'Sécurité',
    'Veiligheid',
    'Bezpečnostní',
    'Sicurezza',
    'Bezpieczeństwo',
    'Seguridad'
  ],
  customize: [
    'Customize',
    'Anpassen',
    'Personnaliser',
    'Aanpassen',
    'Přizpůsobit',
    'Personalizzare',
    'Dostosuj',
    'Personalizar'
  ],
  favoriteFilter: [
    'Favorite filter',
    'Favoriten Filter',
    'Filtre préféré',
    'Favoriete filter',
    'Oblíbený filtr',
    'Filtro preferito',
    'Ulubiony filtr',
    'Filtro favorito'
  ],
  favoriteFilterShortcut: [
    'Select up to four favorite filters as shortcut for the homepage:',
    'Wähle bis zu vier favorisierte Filter als Schnellzugriff für die Startseite:',
    "Sélectionnez jusqu'à quatre filtres favoris comme raccourci pour la page d'accueil:",
    'Selecteer maximaal vier favoriete filters als snelkoppeling voor de startpagina:',
    'Vyberte až čtyři oblíbené filtry jako zástupce domovské stránky:',
    'Seleziona fino a quattro filtri preferiti come scorciatoia per la home page:',
    'Wybierz maksymalnie cztery ulubione filtry jako skrót do strony głównej:',
    'Seleccione hasta cuatro filtros favoritos como acceso directo para la página de inicio:'
  ],
  integrations: [
    'Integrations',
    'Integrationen',
    'Intégrations',
    'Integraties',
    'Integrace',
    'Integrazioni',
    'Integracje',
    'Integraciones'
  ],
  liveConnect: [
    'Live connect',
    'Live verbinden',
    'Connexion en direct',
    'Live verbinding',
    'Živé připojení',
    'Connessione live',
    'Połączenie na żywo',
    'Conectar en vivo'
  ],
  liveConnectHelp: [
    'Connect your glider to show up in live tracking with your profile and declared task.',
    'Verbinde dein Segelflugzeug, um mit deinem Profil und deiner deklarierten Aufgabe im Live-Tracking zu erscheinen.',
    'Connectez votre planeur pour apparaître dans le suivi en direct avec votre profil et la tâche déclarée.',
    'Verbind je zweefvliegtuig om live te volgen met je profiel en gedeclareerde taak.',
    'Připojte svůj kluzák, aby se ukázal v živém sledování s vaším profilem a deklarovaným úkolem.',
    "Collega il tuo aliante per presentarti nel monitoraggio dal vivo con il tuo profilo e l'attività dichiarata.",
    'Połącz swój szybowiec, aby wyświetlać się w śledzeniu na żywo ze swoim profilem i zadeklarowanym zadaniem.',
    'Conecte su planeador para que aparezca en seguimiento en vivo con su perfil y tarea declarada.'
  ],
  noTrackingConnected: [
    'No tracking connected.',
    'Kein Tracking verbunden.',
    'Aucun suivi connecté.',
    'Geen tracking verbonden.',
    'Není připojeno žádné sledování.',
    'Nessun tracciamento connesso.',
    'Brak podłączonego śledzenia.',
    'No hay seguimiento conectado.'
  ],
  flightsAsList: [
    'Flights as list',
    'Flüge als Liste',
    'Vols sous forme de liste',
    'Vluchtenlijst',
    'Lety ze seznamu',
    'Voli come elenco',
    'Loty jako lista',
    'Vuelos como lista'
  ],
  flightsAsMap: [
    'Flights as map',
    'Flüge als Karte',
    'Vols comme carte',
    'Vluchten als kaart',
    'Lety jako mapa',
    'Voli come mappa',
    'Loty jako mapa',
    'Vuelos como mapa'
  ],

  // League
  league: [
    'League',
    'Liga',
    'Ligue',
    'Liga',
    'Liga',
    'Lega',
    'Liga',
    'Liga'
  ],
  round: [
    'Round',
    'Runde',
    'Rond',
    'Ronde',
    'Kolo',
    'Il giro',
    'Okrągły',
    'Redondo'
  ],
  wholeLeague: [
    'Whole league',
    'Ganze Liga',
    'Toute la ligue',
    'Hele competitie',
    'Celá liga',
    'Tutta la lega',
    'Cała liga',
    'Liga entera'
  ],

  // Ranking
  ranking: [
    'Ranking',
    'Rangliste',
    'Classement',
    'Ranglijst',
    'Umístění v žebříčku',
    'Classifica',
    'Klasyfikacja',
    'Clasificación'
  ],
  contest: [
    'Contest',
    'Wettbewerb',
    'Compétition',
    'Wedstrijd',
    'Soutěž',
    'Concorso',
    'Zawody',
    'Concurso'
  ],
  freeDescription: [
    'WeGlide Distance Cup',
    'WeGlide Distanz Cup',
    'Compétition de distance WeGlide',
    'WeGlide afstandscup',
    'WeGlide Cup - vzdálenost',
    'WeGlide Distance Cup',
    'Puchar odległości WeGlide',
    'Copa de distancia WeGlide'
  ],
  sprintDescription: [
    'WeGlide Speed Cup',
    'WeGlide Geschwindigkeits Cup',
    'Compétition de vitesse WeGlide',
    'WeGlide snelheidscup',
    'WeGlide Cup - rychlost',
    'WeGlide Speed Cup',
    'Puchar prędkości WeGlide',
    'Taza de velocidad WeGlide'
  ],
  outReturnDescription: [
    'WeGlide Out & Return Cup',
    'WeGlide Zielrück Cup',
    "Compétition d'aller-retour WeGlide",
    'WeGlide retourcup',
    'WeGlide Cup - návrat',
    'WeGlide Ritorn Cup',
    'Puchar powrót WeGlide',
    'Taza WeGlide Out & Return'
  ],
  exploreDescription: [
    'WeGlide Explore Cup',
    'WeGlide Entdeckungs Cup',
    "Compétition d'exploration WeGlide",
    'WeGlide explore cup',
    'WeGlide Cup - explore',
    'WeGlide Explore Cup',
    'Puchar explore WeGlide',
    'Copa WeGlide Explore'
  ],
  electricDescription: [
    'WeGlide electric cup',
    'WeGlide Electric Cup',
    'Compétition électrique WeGlide',
    'WeGlide electrisch cup',
    'WeGlide elektrický cup',
    'WeGlide Electric Cup',
    'Puchar elektryczny WeGlide',
    'Taza eléctrica WeGlide'
  ],
  dmstDescription: [
    'German Championships',
    'Deutsche Meisterschaften',
    'Championnat allemand',
    'Duitse kampioenschappen',
    'Německý šampionát',
    'Campionato tedesco',
    'Mistrzostwa Niemiec',
    'Campeonatos alemanes'
  ],
  nsfwDescription: [
    'Swiss Championships',
    'Schweitzer Meisterschaften',
    'Championnats suisses',
    'Zwitserse Kampioenschappen',
    'Švýcarské mistrovství',
    'Campionati Svizzeri',
    'Mistrzostwa Szwajcarii',
    'Campeonatos suizos'
  ],
  auDescription: [
    'Australian Championships',
    'Australische Meisterschaften',
    "Championnats d'Australie",
    'Australische Kampioenschappen',
    'Australské mistrovství',
    'Campionati australiani',
    'Mistrzostwa Australii',
    'Campeonatos australianos'
  ],
  leagueDescription: [
    'Round based national contests',
    'Rundenbasierte nationale Wettbewerbe',
    'Concours nationaux en rondes',
    'Ronde nationale wedstrijden',
    'Kulaté národní soutěže',
    'Concorsi nazionali a base rotonda',
    'Konkursy krajowe oparte na rundzie',
    'Concursos nacionales basados en rondas'
  ],
  internationalCompetitions: [
    'International competitions',
    'Internationale Wettbewerbe',
    'Compétitions internationales',
    'Internationale wedstrijden',
    'Mezinárodní soutěže',
    'Concorsi internazionali',
    'Konkursy międzynarodowe',
    'Competiciones internacionales'
  ],
  nationalCompetitions: [
    'National competitions',
    'Nationale Wettbewerbe',
    'Compétitions nationales',
    'Nationale wedstrijden',
    'Celostátní soutěže',
    'Concorsi nazionali',
    'Konkursy krajowe',
    'Competiciones nacionales'
  ],
  youthPromotion: [
    'Youth promotion',
    'Juniorenförderung',
    'Promotion junior',
    'Jeugdpromotie',
    'Podpora mládeže',
    'Promozione giovanile',
    'Promocja młodzieży',
    'Promoción juvenil'
  ],
  youthPromotionDescription: [
    'Coaching and youth gliders',
    'Coaching und Förderflugzeuge',
    'Coaching et planeurs',
    'Coachen en zweefvliegen',
    'Koučování a kluzáky',
    'Coaching e alianti',
    'Treningi i szybowce',
    'Coaching y planeadores juveniles'
  ],

  // Ranking config
  season: [
    'Season',
    'Saison',
    'Saison',
    'Seizoen',
    'Sezóna',
    'Season',
    'Sezon',
    'Temporada'
  ],
  gliderClass: [
    'Glider class',
    'Flugzeugklasse',
    'Classe planeur',
    'Klasse',
    'Třída kluzáku',
    'Classe aereo',
    'Klasa szybowca',
    'Clase de planeador'
  ],

  // Ranking table
  rank: [
    'Rank',
    'Rang',
    'Rang',
    'Plaats',
    'Pořadí',
    'Rango',
    'Ranga',
    'Rango'
  ],
  picture: [
    'Picture',
    'Bild',
    'Photo',
    'Beeld',
    'Fotografie',
    'Foto',
    'Zdjęcie',
    'Imagen'
  ],
  totalPoints: [
    'Total',
    'Gesamt',
    'Total',
    'Totaal',
    'Celkem',
    'Totali',
    'Całkowite',
    'Total'
  ],

  // Story
  story: [
    'Story',
    'Geschichte',
    'Récit',
    'Verhaal',
    'Příběh',
    'Storia',
    'Relacja',
    'Cuento'
  ],
  beforeTakeoff: [
    'Before takeoff',
    'Vor dem Start',
    'Avant le décollage',
    'Voor de starts',
    'Před startem',
    'Prima del decollo',
    'Przed startem',
    'Antes de despegar'
  ],
  afterLanding: [
    'After landing',
    'Nach der Landung',
    "Après l'atterrissage",
    'Na de landing',
    'Po přistání',
    "Dopo l'atterraggio",
    'Po lądowaniu',
    'Despues de aterrizar'
  ],
  timeless: [
    'Timeless',
    'Zeitlos',
    'Sans temps',
    'Tijdloos',
    'Nadčasový',
    'Senza tempo',
    'Ponadczasowy',
    'Sin tiempo'
  ],
  until: [
    'until',
    'bis',
    "Jusqu'à",
    'tot',
    'do',
    'fino',
    'do',
    'hasta'
  ],
  now: [
    'now',
    'jetzt',
    'maintenant',
    'nu',
    'nyní',
    'adesso',
    'teraz',
    'ahora'
  ],
  addComment: [
    'New comment',
    'Neuer Kommentar',
    'Nouveau commentaire',
    'Nieuwe opmerking',
    'Přidat komentář',
    'Aggiungi commento',
    'Dodaj komentarz',
    'Nuevo comentario'
  ],
  addVideo: [
    'Add video',
    'Neues Video',
    'Nouvelle vidéo',
    'Niewe video',
    'Přidat video',
    'Aggiungi video',
    'Dodaj wideo',
    'Añadir video'
  ],
  imageDragText: [
    'Drag images here to upload or click to select',
    'Ziehe Bilder hierher zum Hochladen oder klicke zum Auswählen',
    'Glisse tes photos ici pour les charger ou clique sur sélectionner',
    "Sleep je foto's hierheen of klik hier om ze te selecteren",
    'Sem přetáhni fotku k nahrání, nebo vyber ze seznamu',
    "Trascina l'immagine qui per caricarla o clicca per selezionarla",
    'Przeciągnij tutaj zdjęcia albo kliknij by wybrać',
    'Arrastre las imágenes aquí para cargarlas o haga clic para seleccionar'
  ],
  imageDropText: [
    'Drop images to upload',
    'Lasse die Bilder los zum Hochladen',
    'Lâche les photos pour les télécharger',
    "Laat je foto's los om ze te uploaden",
    'Přesuň sem obrázek k nahrání',
    "Rilascia l'immagine per caricarla",
    'Przeciągnij zdjęcia by wysłać',
    'Suelta imágenes para subir'
  ],
  writeComment: [
    'Write comment ...',
    'Schreibe einen Kommentar ...',
    'Écris un commentaire ...',
    'Plaats een opmerking ...',
    'Napiš komentář ...',
    'Scrivi un commento ...',
    'Napisz komentarz ...',
    'Escribir comentario ...'
  ],

  // Task
  loadMore: [
    'Load more',
    'Mehr laden',
    'Charger plus',
    'Meer laden',
    'Načíst další',
    'Carica di più',
    'Załaduj więcej',
    'Carga más'
  ],
  tasks: [
    'Tasks',
    'Aufgaben',
    'Circuits',
    'Opdrachten',
    'Úloha',
    'Obiettivi',
    'Zadania',
    'Tareas'
  ],
  all: [
    'All',
    'Alle',
    'Tous',
    'Alle',
    'Vše',
    'Tutti',
    'Wszystkie',
    'Todos'
  ],
  explore: [
    'Explore',
    'Entdecken',
    'Explorer',
    'Verkennen',
    'Prozkoumat',
    'Esplorare',
    'Badać',
    'Explorar'
  ],
  mine: [
    'Mine',
    'Meine',
    'Mes circuit',
    'Mijn',
    'Moje',
    'Mio',
    'Moje',
    'Mío'
  ],
  starred: [
    'Starred',
    'Favorisiert',
    'Favoris',
    'Favorieten',
    'Oblíbené',
    'Preferiti',
    'Ulubione',
    'Favorito'
  ],
  declare: [
    'Declare',
    'Deklarieren',
    'Déclarer',
    'Declareren',
    'Deklarovat',
    'Dichiara',
    'zgłosić',
    'Declarar'
  ],
  undeclare: [
    'Delete Declaration',
    'Deklaration Löschen',
    'Ne plus déclarer',
    'Declaratie verwijderen',
    'Oddeklarovat',
    'Non dichiarato',
    'usuń deklarację',
    'Eliminar declaración'
  ],
  validFor: [
    'Valid for',
    'Gültig für',
    'Valable pour',
    'Geldig voor',
    'Platný pro',
    'Valido per',
    'Ważny przez',
    'Válido para'
  ],
  newTask: [
    'New task',
    'Neue Aufgabe',
    'Nouveau circuit',
    'Nieuwe opdracht',
    'Nová úloha',
    'Nuovi obiettivi',
    'nowe zadanie',
    'Nueva tarea'
  ],
  noTaskDeclared: [
    'No declared task.',
    'Keine Aufgabe deklariert.',
    'Pas de circuit déclaré',
    'Nog geen gedeclareerde opdracht.',
    'Dosud není deklarována žádná úloha',
    'Ancora nessun obbiettivo dichiarato',
    'Nie zdefiniowano zadań jeszcze.',
    'Ninguna tarea declarada.'
  ],
  noTasks: [
    'No tasks yet, plan a new one!',
    'Keine Aufgaben bis jetzt, plane eine!',
    "Pas de circuit jusqu'ici, crées-en !",
    'Nog geen opdracht, plan een nieuwe!',
    'Dosud žádná úloha, naplánuj!',
    'Nessun obbiettivo, provvedi a selezionarne uno',
    'Brak zadań jeszcze, zaplanuj nowe!',
    '¡Aún no hay tareas, planifica uno nuevo!'
  ],
  noTaskInFile: [
    'No valid task in file found',
    'Keine gültige Aufgabe in der Datei gefunden',
    'Aucun circuit valide trouvé dans le fichier',
    'Geen geldige taak in bestand gevonden',
    'V souboru nebyl nalezen žádný platný úkol',
    'Nessuna attività valida nel file trovata',
    'Nie znaleziono prawidłowego zadania w pliku',
    'No se encontró ninguna tarea válida en el archivo'
  ],
  position: [
    'Position',
    'Position',
    'Position',
    'Positie',
    'Poloha',
    'Posizione',
    'Pozycja',
    'Posición'
  ],
  startOnLeg: [
    'Start on leg',
    'Start auf Schenkel',
    'Décollage sur branche',
    'Begin op been',
    'Start na rameni',
    'Avvia',
    'Początek',
    'Comience en la pierna'
  ],
  taskLockedNotice: [
    "Can't edit task because it was declared.",
    'Aufgabe kann nicht bearbeitet werden weil sie bereits deklariert wurde.',
    "Le circuit n'est pas accessible car il a déjà été déclaré.",
    'Opdracht is vergrendeld omdat deze al is gedeclareerd.',
    'Úloha je uzamčena, protože je již deklarována',
    "L'obbiettivo è bloccata perché è già stata dichiarata.",
    'Zadanie jest zablokowane, ponieważ zostało już zgłoszone.',
    'No se puede editar la tarea porque se declaró.'
  ],
  taskplaner: [
    'Taskplaner',
    'Aufgabenplaner',
    'Planifier des circuits',
    'Opdrachtplanner',
    'Plánovač úloh',
    'Pianificatore di attività',
    'Planowanie zadań',
    'Planificador de tareas'
  ],
  editTask: [
    'Edit task',
    'Aufgabe bearbeiten',
    'Éditer le circuit',
    'Opdracht aanpassen',
    'Upravit úlohu',
    'Modifica obbiettivo',
    'Edytuj zadanie',
    'Editar tarea'
  ],
  taskName: [
    'Task name',
    'Aufgabenname',
    'Nom du circuit',
    'Naam',
    'Název úlohy',
    'Nome obbiettivo',
    'Nazwa zadania',
    'Nombre de la tarea'
  ],
  private: [
    'Only visible for me',
    'Nur sichtbar für mich',
    'Seulement visible pour moi',
    'Privé',
    'Viditelné jen pro mě',
    'Visibile solo a te',
    'Widoczne tylko dla mnie',
    'Solo visible para mi'
  ],
  turnpoint: [
    'Turnpoint',
    'Wendepunkt',
    'Point de virage',
    'Keerpunt',
    'Otočný body',
    'Punto di svolta',
    'Punkty zwrotne',
    'Punto de giro'
  ],
  discard: [
    'Discard',
    'Verwerfen',
    'Supprimer',
    'Weggooien',
    'Vyřadit',
    'Scartare',
    'Odrzucać',
    'Descarte'
  ],
  cupDragText: [
    'Drag a .cup file here to upload or click to select',
    'Ziehe eine CUP-Datei hierher zum Hochladen oder klicke zum Auswählen',
    'Dépose un fichier CUP ici pour le charger ou clique pour sélectionner',
    'Sleep een .CUP-bestand hier naar toe om te uploaden of klik om te selecteren',
    'Přetáhni .cup soubor k nahrání, nebo vyber soubor',
    'Trascina un file .cup qui o clicca per selezionarlo',
    'Przeciągnij plik .cup tutaj by wysłać albo kliknij by wybrać',
    'Arrastre un archivo .cup aquí para cargarlo o haga clic para seleccionar'
  ],
  cupDropText: [
    'Drop .cup file to upload',
    'Lasse die CUP-Datei los zum Hochladen',
    'Lâche le fichier CUP pour le charger',
    'Sleep een .CUP-bestand om deze te uploaden',
    'Přetáhni .cup soubor k nahrání',
    'Rilascia il file .cup per caricarlo',
    'Przeciągnij plik .cup by wysłać',
    'Suelta el archivo .cup para subir'
  ],
  taskSaved: [
    'Task saved',
    'Aufgabe gespeichert',
    'Circuit enregistré',
    'Opdracht bewaard',
    'Úloha uložena',
    'Obbiettivo salvato',
    'Zadanie zapisane',
    'Tarea guardada'
  ],
  taskDeleted: [
    'Task deleted',
    'Aufgabe gelöscht',
    'Circuit supprimé',
    'Opdracht verwijderd',
    'Úloha odstraněna',
    'Obbiettivo cancellato',
    'Zadanie usunięte',
    'Tarea eliminada'
  ]
}

export function i18n (key: keyof typeof translations): string {
  if (!translations[key]) {
    console.error('Translation not found for', key)
    return ''
  } else if (translations[key][i18nStore.current] === '') {
    return translations[key][0] // fallback to english
  } else {
    return translations[key][i18nStore.current]
  }
}
