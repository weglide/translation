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
    ],
    club: [
        "Club",
        "Verein",
        "",
        "Club",
        "",
    ],
    club_total: [
        "Club Total",
        "Verein Gesamt",
        "",
        "Club Totaal",
        "",
    ],
    airport_total: [
        "Airport Total",
        "Flugplatz Gesamt",
        "",
        "Vliegveld Totaal",
        "",
    ],
    // User
    ALL: [
        "All",
        "Alle",
        "",
        "Alle",
        "",
    ],
    female: [
        "Women",
        "Frauen",
        "",
        "Vrouw",
        "",
    ],
    junior: [
        "Juniors",
        "Junior*innen",
        "",
        "Junior",
        "",
    ],
    // SC Class
    OP: [
        "Open",
        "Offen",
        "",
        "Open",
        "",
    ],
    18: [
        "18m",
        "18m",
        "18m",
        "18m",
        "",
    ],
    15: [
        "15m",
        "15m",
        "15m",
        "15m",
        "",
    ],
    ST: [
        "Standard",
        "Standard",
        "",
        "Standaard",
        "",
    ],
    CL: [
        "Club",
        "Club",
        "",
        "Club",
        "",
    ],
    DO: [
        "Double",
        "Doppelsitzer",
        "",
        "Tweezitter",
        "",
    ]
}

export function i18nRankingOptions(key: keyof typeof translations): string {
    if (!translations[key]) console.error("Translation not found for", key);
    if (translations[key][i18nStore.current] === "")
        return translations[key][0]; // english
    else
        return translations[key][i18nStore.current];
}