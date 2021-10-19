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
    'Всі'
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
    'Літо'
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
    'Зима'
  ],
  // category
  pilot: [
    'Pilot',
    'Pilot',
    'Pilote',
    'Vlieger',
    'Pilot',
    'Pilota',
    'Pilot',
    'Piloto',
    'Пілот'
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
    'Клуб'
  ],
  club_total: [
    'Club total',
    'Vereinssumme',
    'Club total',
    'Club totaal',
    'Klub celkem',
    'Club totali',
    'Klub suma',
    'Club total',
    'Підсумок клубу'
  ],
  airport_total: [
    'Airport',
    'Flugplatz',
    'Aérodrome',
    'Vliegveld',
    'Letiště',
    'Aereoporti',
    'Lotnisko',
    'Aeropuerto',
    'Aеропорту'
  ],
  pilot_total: [
    'Total',
    'Summe',
    'Total',
    'Totaal',
    'Celkem',
    'Totali',
    'Suma',
    'Total',
    'Всього'
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
    'Жінки'
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
    'Юніори'
  ],
  // SC Class
  OP: [
    'Open',
    'Offen',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  18: [
    '18',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  15: [
    '15',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  ST: [
    'Std',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  CL: [
    'Club',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  DO: [
    'Double',
    'Doppel',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
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
