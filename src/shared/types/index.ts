export type TProduct = {
  id: string
  code: string
  name: string
  price: number
  orders: number
  image: string
}

export type TOrder = {
  id: string
  product: number
  quantity: number
  date: string
}

export type TSettings = {
  companyName: string
  salesGoal: number
}
