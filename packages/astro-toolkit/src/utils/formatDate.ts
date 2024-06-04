export default function formatDate(dateString: string | Date): string {
  // Parse the date string
  const date = new Date(dateString)

  // Months array for mapping month index to month name
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // Get month, day, and year from the parsed date
  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  // Form the new date string in the desired format
  const formattedDate = `${month} ${day}, ${year}`

  return formattedDate
}
