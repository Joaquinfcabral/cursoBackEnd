class ProductManager {

constructor() {
    this.products = []; 
}



addProduct (producto) {
    this.products.push(producto);
}

}

const cargandoProductos = new ProductManager();

const producto1 = {
    title: 'Iphone 14',
    description:'Nuevo Iphone 14, lo mejor de Apple' ,
    price: `${1100}`,
    thumbnail: 'ruta a imagen',
    code: 3,
    stock: 100,
    } 

    const producto2 = {
        title: 'Iphone 8',
        description:'Un modelo antiguo pero confiable' ,
        price: `${300}`,
        thumbnail: 'ruta a imagen',
        code: 2,
        stock: 15,
        } 

    const producto3 = {
            title: 'Iphone 13',
            description:'No es distinto al 14 pero es más viejo' ,
            price: `${800}`,
            thumbnail: 'ruta a imagen',
            code: 4,
            stock: 100,
            } 
    const producto4 = {
                title: 'Iphone 11',
                description:'Buen smartphone, lindo, bonito y barato' ,
                price: `${500}`,
                thumbnail: 'ruta a imagen',
                code: 6,
                stock: 50,
                } 

cargandoProductos.addProduct(producto1)
cargandoProductos.addProduct(producto2)
cargandoProductos.addProduct(producto3)
cargandoProductos.addProduct(producto4)

console.log(cargandoProductos.products)