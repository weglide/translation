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
    ],
    club: [
        "Club",
        "Verein",
        "",
        "Club",
        "Klub",
    ],
    club_total: [
        "Club Total",
        "Verein Gesamt",
        "",
        "Club Totaal",
        "Klub celkem",
    ],
    airport_total: [
        "Airport Total",
        "Flugplatz Gesamt",
        "",
        "Vliegveld Totaal",
        "Letiště celkem",
    ],
    // User
    ALL: [
        "All",
        "Alle",
        "",
        "Alle",
        "Všichni",
    ],
    female: [
        "Women",
        "Frauen",
        "",
        "Vrouw",
        "Ženy",
    ],
    junior: [
        "Juniors",
        "Junior*innen",
        "",
        "Junior",
        "Junioři",
    ],
    // SC Class
    OP: [
        "Open",
        "Offen",
        "",
        "Open",
        "Open",
    ],
    18: [
        "18m",
        "18m",
        "18m",
        "18m",
        "18m",
    ],
    15: [
        "15m",
        "15m",
        "15m",
        "15m",
        "15m",
    ],
    ST: [
        "Standard",
        "Standard",
        "",
        "Standaard",
        "Standart",
    ],
    CL: [
        "Club",
        "Club",
        "",
        "Club",
        "Klub",
    ],
    DO: [
        "Double",
        "Doppelsitzer",
        "",
        "Tweezitter",
        "Dojmístné",
    ]
}

export function i18nRankingOptions(key: keyof typeof translations): string {
    if (!translations[key]) console.error("Translation not found for", key);
    if (translations[key][i18nStore.current] === "")
        return translations[key][0]; // english
    else
        return translations[key][i18nStore.current];
}