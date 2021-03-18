import { i18nStore } from "@/weglide/store"

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
        "Pilot",
    ],
    club: [
        "Club",
        "Verein",
        "Club",
        "Club",
        "Klub",
        "Club",
        "Klub",
    ],
    club_total: [
        "Club Total",
        "Verein Gesamt",
        "Club total",
        "Club Totaal",
        "Klub celkem",
        "Club Totali",
        "Klub suma",
    ],
    airport_total: [
        "Airport Total",
        "Flugplatz Gesamt",
        "Aérodrome total",
        "Vliegveld Totaal",
        "Letiště celkem",
        "Aereoporti totali",
        "Lotnisko suma",
    ],
    pilot_total: [
        "Pilot Total",
        "Pilot*in Gesamt",
        "Pilote total",
        "Vlieger Totaal",
        "Pilot celkem",
        "Pilota totali",
        "Pilot suma",
    ],
    // User
    ALL: [
        "All",
        "Alle",
        "Tous",
        "Alle",
        "Všichni",
        "Tutti",
        "Wszystko",
    ],
    female: [
        "Women",
        "Frauen",
        "Femmes",
        "Vrouw",
        "Ženy",
        "Femmine",
        "Kobiety",
    ],
    junior: [
        "Juniors",
        "Junior*innen",
        "Junior",
        "Junior",
        "Junioři",
        "Bambini",
        "Juniorzy",
    ],
    // SC Class
    OP: [
        "Open",
        "Offen",
        "Libre",
        "Open",
        "Open",
        "Apri",
        "Open",
    ],
    18: [
        "18m",
        "18m",
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
        "15m",
        "15m",
    ],
    ST: [
        "Standard",
        "Standard",
        "Standard",
        "Standaard",
        "Standart",
        "Standard",
        "Standard",
    ],
    CL: [
        "Club",
        "Club",
        "Club",
        "Club",
        "Klub",
        "Club",
        "Klub",
    ],
    DO: [
        "Double",
        "Doppelsitzer",
        "Biplace",
        "Tweezitter",
        "Dojmístné",
        "Doppio",
        "Podwójne",
    ]
}

export function i18nRankingOptions(key: keyof typeof translations): string {
    if (!translations[key]) console.error("Translation not found for", key);
    if (translations[key][i18nStore.current] === "")
        return translations[key][0]; // english
    else
        return translations[key][i18nStore.current];
}