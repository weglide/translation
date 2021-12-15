import { bitnerContestName } from '@/flightdetail/types/flightDetail.types'

// Contest name translation
const translations = {
  free: 'Free',
  triangle: 'Triangle',
  out: 'Out',
  out_return: 'O&R',
  sprint: 'Sprint',
  declaration: 'Task',
  dmst: 'DMSt',
  nsfw: 'NSFW',
  au: 'IRC',
  za: 'BC',
  bi: 'Bitner'
}

export function i18nContestNames (key: keyof typeof translations): string {
  if (key.startsWith('bi')) { key = 'bi' }
  if (!translations[key]) {
    console.error('Translation not found for', key)
    return ''
  } else {
    return translations[key as keyof typeof translations]
  }
}
