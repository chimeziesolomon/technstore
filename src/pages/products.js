//global import
import '../toggleSidebar'
import '../cart/toggleCart'
import '../cart/setupCart'

//filter imports
import setupSearch from '../filter/search'
import setupCompanies from '../filter/companies'
import setupPrice from '../filter/price'

//specific imports
import { store, setupStore } from '../store'
import display from '../displayProducts'
import { getElement } from '../utils'
//import fetch products
import fetchProducts from '../displayProducts'

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