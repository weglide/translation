import { useI18nStore } from '../store/i18n.store'
import { Translations } from './translation.types'

// API live competition task status translation
export const translations: Translations = {
  planned: [
    'Planned',
    'Geplant',
    '',
    '',
    '',
    '',
    '',
    '',
    'Заплановано',
  ],
  not_planned: [
    'Not planned',
    'Nicht geplant',
    '',
    '',
    '',
    '',
    '',
    '',
    'Не заплановано',
  ],
  scoring: [
    'Scoring active',
    'Wertung läuft',
    '',
    '',
    '',
    '',
    '',
    '',
    'Оцінювання в процесі',
  ],
  preliminary_result: [
    'Preliminary result',
    'Vorläufiges Ergebnis',
    '',
    '',
    '',
    '',
    '',
    '',
    'Попередні результати',
  ],
  inofficial_result: [
    'Inofficial result',
    'Inoffizielles Ergebnis',
    '',
    '',
    '',
    '',
    '',
    '',
    'Неофіційні результати',
  ],
  final_result: [
    'Final result',
    'Finales Ergebnis',
    '',
    '',
    '',
    '',
    '',
    '',
    'Остаточні результати',
  ],
  neutralized: [
    'Neutralized',
    'Neutralisiert',
    '',
    '',
    '',
    '',
    '',
    '',
    'Нейтралізовано',
  ]
}

export function i18nTaskStatusOptions (key: keyof typeof translations): string {
  const i18nStore = useI18nStore()

  if (!translations[key]) {
    console.error('Translation not found for', key)
    return ''
  } else if (translations[key][i18nStore.languageIndex] === '') {
    // english
    return translations[key][0]
  } else {
    return translations[key][i18nStore.languageIndex]
  }
}
