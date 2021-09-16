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
    ''
  ],
  not_planned: [
    'Not planned',
    'Nicht geplant',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  scoring: [
    'Scoring active',
    'Wertung läuft',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  preliminary_result: [
    'Preliminary result',
    'Vorläufiges Ergebnis',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  inofficial_result: [
    'Inofficial result',
    'Inoffizielles Ergebnis',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  final_result: [
    'Final result',
    'Finales Ergebnis',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  neutralized: [
    'Neutralized',
    'Neutralisiert',
    '',
    '',
    '',
    '',
    '',
    ''
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
