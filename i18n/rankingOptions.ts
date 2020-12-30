import { i18nStore } from "@/shared/store"

// API error code translation
export const translations = {
    // category
    pilot: [
        "Pilot",
        "Pilot",
        "",
        "",
    ],
    club: [
        "Club",
        "Verein",
        "",
        "",
    ],
    club_total: [
        "Club Total",
        "Verein Gesamt",
        "",
        "",
    ],
    airport_total: [
        "Airport Total",
        "Flugplatz Gesamt",
        "",
        "",
    ],
    // User
    ALL: [
        "All",
        "Alle",
        "",
        "",
    ],
    female: [
        "Women",
        "Frauen",
        "",
        "",
    ],
    junior: [
        "Juniors",
        "Junioren",
        "",
        "",
    ],
    // SC Class
    OP: [
        "Open",
        "Offen",
        "",
        "",
    ],
    18: [
        "18 m",
        "18 m",
        "",
        "",
    ],
    15: [
        "15 m",
        "15 m",
        "",
        "",
    ],
    ST: [
        "Standard",
        "Standard",
        "",
        "",
    ],
    CL: [
        "Club",
        "Club",
        "",
        "",
    ],
    DO: [
        "Double",
        "Doppelsitzer",
        "",
        "",
    ]
}

export function i18nRankingOptions(key: keyof typeof translations): string {
    if (!translations[key]) console.error("Translation not found for", key);
    return translations[key][i18nStore.current];
}