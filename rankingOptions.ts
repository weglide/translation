import { i18nStore } from "@/shared/store"

// API error code translation
export const translations = {
    // category
    pilot: [
        "Pilot",
        "Pilot*in",
        "",
        "Vlieger",
        "",
        "Pilota",
    ],
    club: [
        "Club",
        "Verein",
        "",
        "Club",
        "",
        "Club",
    ],
    club_total: [
        "Club Total",
        "Verein Gesamt",
        "",
        "Club Totaal",
        "",
        "Club Totali",
    ],
    airport_total: [
        "Airport Total",
        "Flugplatz Gesamt",
        "",
        "Vliegveld Totaal",
        "",
        "Aereoporti totali"
    ],
    // User
    ALL: [
        "All",
        "Alle",
        "",
        "Alle",
        "",
        "Tutti",
    ],
    female: [
        "Women",
        "Frauen",
        "",
        "Vrouw",
        "",
        "Femmine",
    ],
    junior: [
        "Juniors",
        "Junior*innen",
        "",
        "Junior",
        "",
        "Bambini"
    ],
    // SC Class
    OP: [
        "Open",
        "Offen",
        "",
        "Open",
        "",
        "Apri",
    ],
    18: [
        "18m",
        "18m",
        "18m",
        "18m",
        "",
        "18m"
    ],
    15: [
        "15m",
        "15m",
        "15m",
        "15m",
        "",
        "15m"
    ],
    ST: [
        "Standard",
        "Standard",
        "",
        "Standaard",
        "",
        "Standard",
    ],
    CL: [
        "Club",
        "Club",
        "",
        "Club",
        "",
        "Club",
    ],
    DO: [
        "Double",
        "Doppelsitzer",
        "",
        "Tweezitter",
        "",
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