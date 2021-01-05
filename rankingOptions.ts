import { i18nStore } from "@/shared/store"

// API error code translation
export const translations = {
    // category
    pilot: [
        "Pilot",
        "Pilot*in",
        "",
        "Vlieger",
        "Pilot",
        "Pilota",
    ],
    club: [
        "Club",
        "Verein",
        "",
        "Club",
        "Klub",
        "Club",
    ],
    club_total: [
        "Club Total",
        "Verein Gesamt",
        "",
        "Club Totaal",
        "Klub celkem",
        "Club Totali",
    ],
    airport_total: [
        "Airport Total",
        "Flugplatz Gesamt",
        "",
        "Vliegveld Totaal",
        "Letiště celkem",
        "Aereoporti totali"
    ],
    // User
    ALL: [
        "All",
        "Alle",
        "",
        "Alle",
        "Všichni",
        "Tutti",
    ],
    female: [
        "Women",
        "Frauen",
        "",
        "Vrouw",
        "Ženy",
        "Femmine",
    ],
    junior: [
        "Juniors",
        "Junior*innen",
        "",
        "Junior",
        "Junioři",
        "Bambini"
    ],
    // SC Class
    OP: [
        "Open",
        "Offen",
        "",
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
        "",
        "Standaard",
        "Standart",
        "Standard",
    ],
    CL: [
        "Club",
        "Club",
        "",
        "Club",
        "Klub",
        "Club",
    ],
    DO: [
        "Double",
        "Doppelsitzer",
        "",
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