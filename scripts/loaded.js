quantity = document.querySelector('dialog div.quantity')

if ( quantity ) {
    new Quantity(quantity)
}

productQuantity = document.querySelector('section.product div.quantity input')
priceElement = document.querySelector('section.product span.price')
orderQuantity = document.querySelector('dialog div.quantity input')
price = parseInt( priceElement?.textContent.replace(/ /g, '') )

if( orderQuantity ) {
    events = ['input', 'change', 'click']
    orderQuantity.value = productQuantity.value
    changeTotal(productQuantity.value)
    events.forEach( event => {
        orderQuantity.parentNode.addEventListener(event, e => {
            productQuantity.value = orderQuantity.value
            changeTotal(orderQuantity.value)
        })
    })
}

var changeTotal = (count) => {
    total = document.querySelector('dialog div.total strong')
    total.textContent = (count * price).toLocaleString("ru-RU") + ' ₽'
}