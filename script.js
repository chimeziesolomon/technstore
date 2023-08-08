import './src/toggleSidebar'
import './src/cart/toggleCart'
import './src/cart/setupCart'

import fetchProducts from './src/fetchProducts'
import { setupStore, store } from './src/store'
import display from './src/displayProducts'
import { getElement } from './src/utils'

const init = async () => {
    const products = await fetchProducts()
    if (products) {
        //product to the store
        setupStore(products)
        const featured = store.filter((product) => product.featured === true)
        display(featured, getElement('.featured-center'))
    }
}

window.addEventListener('DOMContentLoaded', init)