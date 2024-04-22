coord = "[54.218747, 45.186472]"
adress = "г. Саранск, ул. Энергетическая, 37"
phone = "+7 (8342) 24-15-36"
email = "komelectrotex@mail.ru"

ymaps.ready(function(){
    var map = new ymaps.Map('map', {
        center: JSON.parse( coord ),
        zoom: 16,
        controls: ["zoomControl"]
    })
    var placemark = new ymaps.Placemark(JSON.parse( coord ), {
        hintContent: 'Офис',
        balloonContent: `
            <span>адрес:</span>
            <strong>` + adress + `</strong>
            <span>Телефон:</span>
            <strong><a href="tel:` + phone + `">` + phone + `</a></strong>
            <span>Почта:</span>
            <strong><a href="mailto:` + email + `">` + email + `</a></strong>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../images/icons/Pin_Filled.svg',
        iconImageSize: [50, 50],
        iconImageOffset: [-30, -45]
    });
    map.geoObjects.add(placemark);
    map.behaviors.disable('scrollZoom')
})