header = document.querySelector('header')
search = document.querySelector('form.search')
results = search?.querySelector('div.results')

window.addEventListener('scroll', event => {
    this.scrollY > 10 ? header.classList.add("sticky") : header.classList.remove("sticky")
})


search?.addEventListener('input', checkSearch)
search?.querySelector('input').addEventListener('focus', event => {
    search.classList.add('focus')
})
search?.querySelector('input').addEventListener('blur', event => {
    setTimeout(function(){
        search.classList.remove('focus')
    }, 100)
})

function checkSearch () {
    length = search.querySelector('input').value.length
    length < 3 ? results.parentNode.classList.remove('open') : results.parentNode.classList.add('open')
}