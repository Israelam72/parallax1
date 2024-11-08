const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function () {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value*1.5 + 'px'

    leaf1.style.marginLeft = -value*0.5 + 'px'
    leaf2.style.marginRight = -value*0.6 + 'px'

    bush2.style.marginBottom = -value*1.1 + 'px'

    mount1.style.marginBottom = -value*1.3 + 'px'
    mount2.style.marginBottom = -value*1.5 + 'px'
})
