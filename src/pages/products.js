//global import
import '../toggleSidebar.js'
import '../cart/toggleCart.js'
import '../cart/setupCart.js'

//filter imports
import setupSearch from '../filter/search.js'
import setupCompanies from '../filter/companies.js'
import setupPrice from '../filter/price.js'

//specific imports
import { store, setupStore } from '../store.js'
import display from '../displayProducts.js'
import { getElement } from '../utils.js'
//import fetch products
import fetchProducts from '../displayProducts.js'

const init = async () => {
    const loading = getElement('.page-loading')
    if (store.length < 1) {
        const products = await fetchProducts()
        setupStore(products)
    }
    display(store, getElement('.products-container'))

    setupSearch(store)
    setupCompanies(store)
    setupPrice(store)
    loading.style.display = 'none'
}
init()