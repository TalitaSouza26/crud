

products = []

var addProduct = function(){
    var product = {
        id: document.querySelector('#productId').value,
        name: document.querySelector('#productName').value,
        price: document.querySelector('#productPrice').value
    }
    products.push(product)
    
}