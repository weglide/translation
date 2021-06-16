import { i18nStore } from "@/weglide/store"
import { Translations } from "./translation.types";

// API error code translation
export const translations: Translations = {
    // category
    pilot: [
        "Pilot",
        "Pilot*in",
        "Pilote",
        "Vlieger",
        "Pilot",
        "Pilota",
        "Pilot",
        "Piloto",
    ],
    club: [
        "Club",
        "Verein",
        "Club",
        "Club",
        "Klub",
        "Club",
        "Klub",
        "Club",
    ],
    club_total: [
        "Club total",
        "Verein gesamt",
        "Club total",
        "Club totaal",
        "Klub celkem",
        "Club totali",
        "Klub suma",
        "Club total"
    ],
    airport_total: [
        "Airport Total",
        "Flugplatz Gesamt",
        "Aérodrome total",
        "Vliegveld Totaal",
        "Letiště celkem",
        "Aereoporti totali",
        "Lotnisko suma",
        "Aeropuerto total",
    ],
    pilot_total: [
        "Pilot Total",
        "Pilot*in Gesamt",
        "Pilote total",
        "Vlieger Totaal",
        "Pilot celkem",
        "Pilota totali",
        "Pilot suma",
        "Piloto total",
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
        "Todas",
    ],
    female: [
        "Women",
        "Frauen",
        "Femmes",
        "Vrouw",
        "Ženy",
        "Femmine",
        "Kobiety",
        "Mujer",
    ],
    junior: [
        "Juniors",
        "Junior*innen",
        "Juniors",
        "Junior",
        "Junioři",
        "Bambini",
        "Juniorzy",
        "Juniors"
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
        "Abierto",
    ],
    "18": [
        "18m",
        "18m",
        "18m",
        "18m",
        "18m",
        "18m",
        "18m",
        "18m",
    ],
    "15": [
        "15m",
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
        "Estándar",
    ],
    CL: [
        "Club",
        "Club",
        "Club",
        "Club",
        "Klub",
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
        "Podwójne",
        "Doble",
    ]
}

export function i18nRankingOptions(key: keyof typeof translations): string {
    if (!translations[key]) console.error("Translation not found for", key);
    if (translations[key][i18nStore.current] === "")
        return translations[key][0]; // english
    else
        return translations[key][i18nStore.current];
}