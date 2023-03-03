export const checkIfDateIsToday = (dateString: string) => {
  const today = new Date()
  const date = new Date(dateString)

  const isToday =
    today.getDay() === date.getDay() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()

  return isToday
}
