export function eventTimestamp(date: string): number {
  if (!date) {
    return Number.NEGATIVE_INFINITY
  }

  const parsed = new Date(date)

  if (Number.isNaN(parsed.getTime())) {
    return Number.NEGATIVE_INFINITY
  }

  return parsed.getTime()
}

const SHORT_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

export function formatShortDate(date: string): string {
  if (!date) {
    return 'Save the Date'
  }

  const parsed = new Date(date)

  if (Number.isNaN(parsed.getTime())) {
    return 'Save the Date'
  }

  return `${SHORT_MONTHS[parsed.getMonth()]} ${parsed.getFullYear()}`
}