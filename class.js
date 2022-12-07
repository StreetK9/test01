class products{
    constructor(name, category, price) {
        this.name = name
        this.category = category
        this.price = price
    }
    getName(){
        return this.name
    }
    getCategory(){
        return this.category
    }
    getPrice(){
        return this.price
    }
    getProduct(){
        return {name: this.name, category: this.category, price: this.price}
    }
}
class productList {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        this.products.push(product)
        return this.products
    }

    deleteProduct(prod_name) {
        this.products = this.products.filter(item => item.name !== prod_name)
        return this.products
    }

    getAllProducts() {
        return this.products
    }

    getProductByName(name) {
        return this.products.filter((item) => item.name.includes(name))
    }

    getProductByCategory(category) {
        return this.products.filter((item) => item.category === category)
    }

    getProductByPrice(price) {
        return this.products.filter((item) => item.price <= price)
    }
}

let pd1 = new products('iphone 14', 'mobile', '25900')
let pd2 = new products('iphone 14 pro', 'mobile', '25900')
let pd3 = new products('Samsung TV', 'tv', '15900')
let pd4 = new products('LG TV', 'tv', '11900')
let pd5 = new products('AsusZen Book', 'laptop', '45900')
let pd6 = new products('MSI Katana', 'laptop', '55900')

let prodList = new productList();
prodList.addProduct(pd1.getProduct())
prodList.addProduct(pd2.getProduct())
prodList.addProduct(pd3.getProduct())
prodList.addProduct(pd4.getProduct())
prodList.addProduct(pd5.getProduct())
prodList.addProduct(pd6.getProduct())

console.log("========GET ALL PROD===========")
console.log(prodList.getAllProducts())
console.log("===============================")

console.log("========GET Product By Name===========")
console.log(prodList.getProductByName('iphone 14'))
console.log("======================================")

console.log("========GET Product By Category===========")
console.log(prodList.getProductByCategory('laptop'))
console.log("==========================================")

console.log("========GET Product By Price==============")
console.log(prodList.getProductByPrice(25900))
console.log("==========================================")

