import Category from './Category'

interface Product {
  _id: string
  name: string
  price: number | string | any
  image: File | null
  category: Category | string | any
  desc: string
  bought: number
  viewed: number
}
export default Product
