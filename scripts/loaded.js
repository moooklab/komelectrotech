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


// Search
dialogSearch = document.querySelector('dialog[data-modal-name=search] form.search')
dialogResults = search?.querySelector('dialog[data-modal-name=search] div.results')

dialogSearch?.addEventListener('input', checkSearch)
dialogSearch?.querySelector('input').addEventListener('focus', event => {
    dialogSearch.classList.add('focus')
})
dialogSearch?.querySelector('input').addEventListener('blur', event => {
    setTimeout(function(){
        dialogSearch.classList.remove('focus')
    }, 100)
})

function checkSearch () {
    length = dialogSearch.querySelector('input').value.length
    length < 3 ? dialogSearch.classList.remove('open') : dialogSearch.classList.add('open')
}