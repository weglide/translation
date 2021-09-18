import { useI18nStore } from '../store/i18n.store'
import { Translations } from './translation.types'

// API error code translation
export const translations: Translations = {
  ALL: [
    'All',
    'Alle',
    'Tous',
    'Alle',
    'Všichni',
    'Tutti',
    'Wszystko',
    'Todas'
  ],
  summer: [
    'Summer',
    'Sommer',
    "L'été",
    'Zomer',
    'Léto',
    'Estate',
    'Lato',
    'Verano'
  ],
  winter: [
    'Winter',
    'Winter',
    "L'hiver",
    'Winter',
    'Zima',
    'Inverno',
    'Zima',
    'Invierno'
  ],
  // category
  pilot: [
    'Pilot',
    'Pilot*in',
    'Pilote',
    'Vlieger',
    'Pilot',
    'Pilota',
    'Pilot',
    'Piloto'
  ],
  club: [
    'Club',
    'Verein',
    'Club',
    'Club',
    'Klub',
    'Club',
    'Klub',
    'Club'
  ],
  club_total: [
    'Club total',
    'Verein gesamt',
    'Club total',
    'Club totaal',
    'Klub celkem',
    'Club totali',
    'Klub suma',
    'Club total'
  ],
  airport_total: [
    'Airport Total',
    'Flugplatz Gesamt',
    'Aérodrome total',
    'Vliegveld Totaal',
    'Letiště celkem',
    'Aereoporti totali',
    'Lotnisko suma',
    'Aeropuerto total'
  ],
  pilot_total: [
    'Pilot Total',
    'Pilot*in Gesamt',
    'Pilote total',
    'Vlieger Totaal',
    'Pilot celkem',
    'Pilota totali',
    'Pilot suma',
    'Piloto total'
  ],
  // User
  female: [
    'Women',
    'Frauen',
    'Femmes',
    'Vrouw',
    'Ženy',
    'Femmine',
    'Kobiety',
    'Mujer'
  ],
  junior: [
    'Juniors',
    'Junior*innen',
    'Juniors',
    'Junior',
    'Junioři',
    'Bambini',
    'Juniorzy',
    'Juniors'
  ],
  // SC Class
  OP: [
    'Open',
    'Offen',
    'Libre',
    'Open',
    'Open',
    'Apri',
    'Open',
    'Abierto'
  ],
  18: [
    '18m',
    '18m',
    '18m',
    '18m',
    '18m',
    '18m',
    '18m',
    '18m'
  ],
  15: [
    '15m',
    '15m',
    '15m',
    '15m',
    '15m',
    '15m',
    '15m',
    '15m'
  ],
  ST: [
    'Standard',
    'Standard',
    'Standard',
    'Standaard',
    'Standart',
    'Standard',
    'Standard',
    'Estándar'
  ],
  CL: [
    'Club',
    'Club',
    'Club',
    'Club',
    'Klub',
    'Club',
    'Klub',
    'Club'
  ],
  DO: [
    'Double',
    'Doppelsitzer',
    'Biplace',
    'Tweezitter',
    'Dojmístné',
    'Doppio',
    'Podwójne',
    'Doble'
  ]
}

export function i18nRankingOptions (key: keyof typeof translations): string {
  const i18nStore = useI18nStore()

  if (!translations[key]) {
    // pass trough in case of e.g. numbers
    return String(key)
  } else if (translations[key][i18nStore.languageIndex] === '') {
    // english
    return translations[key][0]
  } else {
    return translations[key][i18nStore.languageIndex]
  }
}
