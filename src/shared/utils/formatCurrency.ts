export const formatCurrency = (value: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    compactDisplay: 'short',
    maximumFractionDigits: 0
  })

  return formatter.format(value)
}
