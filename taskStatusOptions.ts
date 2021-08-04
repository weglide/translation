import { i18nStore } from "@/weglide/store"
import { Translations } from "./translation.types";

// API live competition task status translation
export const translations: Translations = {
    planned: [
        "Planned",
        "Geplant",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    not_planned: [
        "Not planned",
        "Nicht geplant",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    scoring: [
        "Scoring active",
        "Wertung läuft",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    preliminary_result: [
        "Preliminary result",
        "Vorläufiges Ergebnis",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    inofficial_result: [
        "Inofficial result",
        "Inoffizielles Ergebnis",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    final_result: [
        "Final result",
        "Finales Ergebnis",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    neutralized: [
        "Neutralized",
        "Neutralisiert",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
}

export function i18nTaskStatusOptions(key: keyof typeof translations): string {
    if (!translations[key]) {
        console.error("Translation not found for", key);
        return "";
    }
    if (translations[key][i18nStore.current] === "")
        return translations[key][0]; // english
    else
        return translations[key][i18nStore.current];
}