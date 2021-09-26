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
    'Todas',
    'Всі',
  ],
  summer: [
    'Summer',
    'Sommer',
    "L'été",
    'Zomer',
    'Léto',
    'Estate',
    'Lato',
    'Verano',
    'Літо',
  ],
  winter: [
    'Winter',
    'Winter',
    "L'hiver",
    'Winter',
    'Zima',
    'Inverno',
    'Zima',
    'Invierno',
    'Зима',
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
    'Piloto',
    'Пілот',
  ],
  club: [
    'Club',
    'Verein',
    'Club',
    'Club',
    'Klub',
    'Club',
    'Klub',
    'Club',
    'Клуб',
  ],
  club_total: [
    'Club total',
    'Verein gesamt',
    'Club total',
    'Club totaal',
    'Klub celkem',
    'Club totali',
    'Klub suma',
    'Club total',
    'Підсумок клубу',
  ],
  airport_total: [
    'Airport Total',
    'Flugplatz Gesamt',
    'Aérodrome total',
    'Vliegveld Totaal',
    'Letiště celkem',
    'Aereoporti totali',
    'Lotnisko suma',
    'Aeropuerto total',
    'Підсумок аеропорту',
  ],
  pilot_total: [
    'Pilot Total',
    'Pilot*in Gesamt',
    'Pilote total',
    'Vlieger Totaal',
    'Pilot celkem',
    'Pilota totali',
    'Pilot suma',
    'Piloto total',
    'Підсумок пілота',
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
    'Mujer',
    'Жінки',
  ],
  junior: [
    'Juniors',
    'Junior*innen',
    'Juniors',
    'Junior',
    'Junioři',
    'Bambini',
    'Juniorzy',
    'Juniors',
    'Юніори',
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
    'Abierto',
    'Відкритий',
  ],
  18: [
    '18m',
    '18m',
    '18m',
    '18m',
    '18m',
    '18m',
    '18m',
    '18m',
    '18м',
  ],
  15: [
    '15m',
    '15m',
    '15m',
    '15m',
    '15m',
    '15m',
    '15m',
    '15m',
    '15м',
  ],
  ST: [
    'Standard',
    'Standard',
    'Standard',
    'Standaard',
    'Standart',
    'Standard',
    'Standard',
    'Estándar',
    'Стандартний',
  ],
  CL: [
    'Club',
    'Club',
    'Club',
    'Club',
    'Klub',
    'Club',
    'Klub',
    'Club',
    'Клубний',
  ],
  DO: [
    'Double',
    'Doppelsitzer',
    'Biplace',
    'Tweezitter',
    'Dojmístné',
    'Doppio',
    'Podwójne',
    'Doble',
    'Двомісний',
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
