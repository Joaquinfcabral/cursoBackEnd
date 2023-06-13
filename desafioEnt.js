class ProductManager {

    constructor() {
        this.products = [];
    }



    addProduct(data) {
        if (!data.title
            || !data.description
            || !data.price
            || !data.thumbnail
            || !data.stock
            || !data.code) {
            return "Error: Campos incorrectos"
        }

        const productsExists = this.products.findIndex((product) => product.code === data.code) 

        if(productsExists !== -1) {
            return "Error: El código de producto ya está en uso"
        }

        const product = {
            id: this.products.length + 1,
            title: data.title,
            description: data.description,
            price: data.price,
            thumbnail: data.thumbnail,
            code: data.code,
            stock: data.stock
        }

        this.products.push(product)
        return product
    }

    getProducts () { 
        return this.products
    }

    getProductsById (id) {
        const productsExists = this.products.find((product) => product.id === id);
        if (!productsExists) { 
            const error = 'not found'
            console.log(error)
            return error
        }
        return productsExists
    }
}

const manager = new ProductManager()

const body1 = { 
    id: 1,
    title: 'Iphone 14',
    description:'Nuevo Iphone 14, lo mejor de Apple' ,
    price: `${1100}`,
    thumbnail: 'ruta a imagen',
    code: 3,
    stock: 100,
}

const body2 = {
    id: 2,
    title: 'Iphone 8',
    description:'Un modelo antiguo pero confiable' ,
    price: `${300}`,
    thumbnail: 'ruta a imagen',
    code: 2,
    stock: 15,
    } 

const body3 = {
    id: 3,
    title: 'Iphone 13',
    description:'No es distinto al 14 pero es más viejo' ,
    price: `${800}`,
    thumbnail: 'ruta a imagen',
    code: 4,
    stock: 100,
    } 

manager.addProduct(body1);
manager.addProduct(body2);
manager.addProduct(body3);


