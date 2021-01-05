import { i18nStore } from "@/shared/store"

// API error code translation
export const translations = {
    // category
    pilot: [
        "Pilot",
        "Pilot*in",
        "Pilote",
        "Vlieger",
        "Pilot",
        "Pilota",
    ],
    club: [
        "Club",
        "Verein",
        "Club",
        "Club",
        "Klub",
        "Club",
    ],
    club_total: [
        "Club Total",
        "Verein Gesamt",
        "Club total",
        "Club Totaal",
        "Klub celkem",
        "Club Totali",
    ],
    airport_total: [
        "Airport Total",
        "Flugplatz Gesamt",
        "Aérodrome total",
        "Vliegveld Totaal",
        "Letiště celkem",
        "Aereoporti totali"
    ],
    // User
    ALL: [
        "All",
        "Alle",
        "Tous",
        "Alle",
        "Všichni",
        "Tutti",
    ],
    female: [
        "Women",
        "Frauen",
        "Femmes",
        "Vrouw",
        "Ženy",
        "Femmine",
    ],
    junior: [
        "Juniors",
        "Junior*innen",
        "Junior",
        "Junior",
        "Junioři",
        "Bambini"
    ],
    // SC Class
    OP: [
        "Open",
        "Offen",
        "Libre",
        "Open",
        "Open",
        "Apri",
    ],
    18: [
        "18m",
        "18m",
        "18m",
        "18m",
        "18m",
        "18m"
    ],
    15: [
        "15m",
        "15m",
        "15m",
        "15m",
        "15m",
        "15m"
    ],
    ST: [
        "Standard",
        "Standard",
        "Standard",
        "Standaard",
        "Standart",
        "Standard",
    ],
    CL: [
        "Club",
        "Club",
        "Club",
        "Club",
        "Klub",
        "Club",
    ],
    DO: [
        "Double",
        "Doppelsitzer",
        "Biplace",
        "Tweezitter",
        "Dojmístné",
        "Doppio",
    ]
}

export function i18nRankingOptions(key: keyof typeof translations): string {
    if (!translations[key]) console.error("Translation not found for", key);
    if (translations[key][i18nStore.current] === "")
        return translations[key][0]; // english
    else
        return translations[key][i18nStore.current];
}