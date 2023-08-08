import { getElement } from '../utils'
import display from '../displayProducts'
const setupSearch = (store) => {
    const form = getElement('.input-form')
    const nameInput = getElement('.search-input')
    form.addEventListener('keyup', function () {
        const value = nameInput.value
        if (value) {
            const newSore = store.filter((product) => {
                let { name } = product
                name = name.toLowerCase()
                if (name.startsWith(value)) {
                    return product
                }
            })
            display(newSore, getElement('.products-container'), true)
            if (newSore.length < 1) {
                const products = getElement('.product-container')
                products.innerHTML = `<h3 class="filter-error">
                sorry, no products matched your search
                </h3>`
            }
        } else {
            display(store, getElement('.products-container'), true)
        }
    })
}

export default setupSearch