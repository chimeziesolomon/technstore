import { allProductsUrl } from './utils'

const fetchProducts = async () => {
    const response = await fetch(allProductsUrl).catch((error) => console.log(err))
    if (response) {
        return response.json()
    }
    return response
}
export default fetchProducts