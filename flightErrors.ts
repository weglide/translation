import { i18nStore } from "@/shared/store"

// API error code translation
export const translations = {
    NON_INCREASING_TIMES: [
        "Time jump backwards from {} to {}.",
        "Zeitsprung rückwärts von {} nach {}.",
        "",
        "",
    ],
    NON_VALID_FIXES: [
        "The file contains {} non valid fixes.",
        "Die Datei enthält {} ungültige Aufzeichnungen.",
        "",
        "",
    ],
    MULTIPLE_A_RECORDS: [
        "Multiple A Records provided.",
        "Mehrere A Records vorhanden.",
        "",
        "",
    ],
    NO_I_RECORD: [
        "NO I Record provided.",
        "Keine I Records vorhanden.",
        "",
        "",
    ],
    MULTIPLE_I_RECORDS: [
        "Multiple I records provided.",
        "Mehrere I Records vorhanden.",
        "",
        "",
    ],
    INVALID_H_RECORD: [
        "Invalid H record: {}.",
        "Ungültiger H Record: {}.",
        "",
        "",
    ],
    PRESS_ALT_VIOLATIONS: [
        "Pressure altitude range from {} to {} is exceeded in {} fixes.",
        "Gültiger Höhenbereich von {} bis {} wird in {} Aufzeichnungen überschritten.",
        "",
        "",
    ],
    GNSS_ALT_VIOLATIONS: [
        "GNSS altitude range from {} to {} is exceeded in {} GNSS fixes.",
        "Gültiger GPS-Höhenbereich von {} bis {} wird in {} Aufzeichnungen überschritten.",
        "",
        "",
    ],
    C_RECORD_TOO_LONG: [
        "C records contains more than 10 lines, not able to parse task.",
        "C Records enthält mehr als 10 Zeilen, Aufgabe kann nicht ausgelesen werden.",
        "",
        "",
    ],
    NO_LANDING: [
        "Did not detect landing.",
        "Landung nicht erkannt.",
        "",
        "",
    ],
    FUTURE_FLIGHT: [
        "Flight date is from future.",
        "Datum des Fluges liegt in der Zukunft.",
        "",
        "",
    ],
    NO_A_RECORD: [
        "No A Record provided.",
        "Kein A Records vorhanden.",
        "",
        "",
    ],
    INVALID_QNH_VALUE: [
        "Determined QNH of {} hPa (based on altitude provided) is not between limits of {} hPa and {} hPa.",
        "Festgestelltes QNH von {} hPa (basierend auf der gegebenen Höhe) liegt außerhalb der Grenzen von {} hPa und {} hPa.",
        "",
        "",
    ],
    PRESS_ALT_NOT_VALID: [
        "Pressure altitude in file is not valid, maximum value is {} meters.",
        "Druckhöhe in der Datei ist ungültig, maximale Höhe beträgt {} Meter.",
        "",
        "",
    ],
    A_RECORD_TOO_SHORT: [
        "A Record is too short.",
        "A Record ist zu kurz.",
        "",
        "",
    ],
    H_RECORD_NO_DATE: [
        "No date in H Record provided.",
        "Kein Datum im H Record vorhanden.",
        "",
        "",
    ],
    NO_H_RECORD: [
        "No H Record provided.",
        "Kein H Record vorhanden.",
        "",
        "",
    ],
    MAX_GNSS_ALT_REACHED: [
        "Max GNSS sensor altitude is: {}, you reached: {}",
        "Maximale GNSS-Sensorhöhe des Loggers sind {} Meter, du hast {} Meter erreicht.",
        "",
        "",
    ],
    MAX_PRESS_ALT_REACHED: [
        "Maximum pressure sensor altitude is: {}, your reached: {}",
        "Maximale Druck-Sensorhöhe des Loggers sind {} Meter, du hast {} Meter erreicht.",
        "",
        "",
    ],
    AVG_GNSS_ALT_CHANGE: [
        "Average GNSS altitude change between fixes in your file is {}, Minimum is {}.",
        "Durchschnittliche Differenz zwischen GNSS-Höhenwerten ist {}, Minimum sind {} Meter.",
        "",
        "",
    ],
    AVG_PRESS_ALT_CHANGE: [
        "Average pressure altitude change between fixes in your file is {}, Minimum is {}.",
        "Durchschnittliche Differenz zwischen Druck-Höhenwerten ist {}, Minimum sind {} Meter.",
        "",
        "",
    ],
    HIGH_CHANGE_GNSS_ALT: [
        "{} high changes in GNSS altitude (more than {} m/s).",
        "{} hohe Wechsel der GNSS-Höhe (mehr als {} m/s).",
        "",
        "",
    ],
    HIGH_CHANGE_PRESS_ALT: [
        "{} high changes in pressure altitude (more than {} m/s).",
        "{} hohe Wechsel der Druck-Höhe (mehr als {} m/s).",
        "",
        "",
    ],
    RAW_TIME_HARD_LIMIT_EXCEEDED: [
        "Hard time constraint ({} seconds) between fixes exceeded  at {}, interval without logging is {} seconds.",
        "Hartes Zeitlimit ({} Sekunden) zwischen GPS-Werten überschritten um {}, Spanne ohne Aufzeichnung sind {} Sekunden.",
        "",
        "",
    ],
    RAW_TIME_HARD_LIMIT_ALMOST_EXCEEDED: [
        "Hard time constraint ({} seconds) between fixes almost exceeded at {}, interval without logging is {} seconds.",
        "Hartes Zeitlimit ({} Sekunden) zwischen GPS-Werten beinahe überschritten um {}, Spanne ohne Aufzeichnung sind {} Sekunden.",
        "",
        "",
    ],
    RAW_TIME_HARD_LIMIT_EXCEEDED_OUTSIDE_SCORING: [
        "Hard time constraint ({} seconds) between fixes exceeded at {}, interval without logging is {} seconds.",
        "Hartes Zeitlimit ({} Sekunden) zwischen GPS-Werten überschritten um {}, Spanne ohne Aufzeichnung sind {} Sekunden.",
        "",
        "",
    ],
    RAW_TIME_SOFT_LIMIT_EXCEEDED: [
        "{} intervals exceed soft time limit between fixes ({}s), allowed {} intervals.",
        "{} Zeitintervalle zwischen Aufzeichnungen überschreiten das weiche Limit von {} Sekunden, erlaubt sind {} Intervalle.",
        "",
        "",
    ],
    NO_TAKEOFF: [
        "Did not detect takeoff.",
        "Start nicht erkannt.",
        "",
        "",
    ],
    FIXES_BEFORE_TAKEOFF: [
        "Found {} fixes before takeoff, required are {}.",
        "{} Aufzeichnungen vor dem Start gefunden, nötig sind {}.",
        "",
        "",
    ],
    NO_ENGINE_SENSOR: [
        "No engine sensor found, allowed engine sensors: {}.",
        "Kein Motorsensor gefunden, erlaubte Sensoren sind: {}.",
        "",
        "",
    ],
    NO_FES_SENSOR: [
        "No FES sensor found, allowed FES sensors: {}.",
        "Kein FES Sensor gefunden, erlaubte Sensoren sind: {}.",
        "",
        "",
    ],
    NO_SCORING_WINDOWS: [
        "No scoring windows were found.",
        "Keine Wertungsfenster gefunden.",
        "",
        "",
    ]
}

export function i18nFlightErrors(key: keyof typeof translations, params: any[]): string {
    if (!translations[key]) console.error("Translation not found for", key);

    let template = translations[key][i18nStore.current];
    if (template === "") return translations[key][0]; // english
    for (const param of params) template = template.replace("{}", param);


    return template;
}