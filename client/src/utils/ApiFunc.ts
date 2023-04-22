import Category from './Category'
import Product from './Product'
import axios from 'axios'

async function request<TResponse>(url: string, config: Object = {}): Promise<TResponse> {
  const res = await fetch(url, config)
  const dataJson = await res.json()
  return dataJson.data as TResponse
}

export async function getCategoriesFun() {
  const data = await request<Category[]>('http://localhost:3000/api/categories')
  return data
}

export async function getProductsFun() {
  const data = await request<Product[]>('http://localhost:3000/api/products')
  return data
}

//!POST
export async function buyProductFun(id: string | string[] | undefined) {
  const data = await request<Product>(`http://localhost:3000/api/products/${id}`, {
    method: 'POST'
  })
  return data
}

export async function createProductFun(formData: FormData) {
  await axios
    .post('http://localhost:3000/api/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
