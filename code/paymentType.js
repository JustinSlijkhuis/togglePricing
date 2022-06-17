const type = document.getElementById('type')
let prices = document.querySelectorAll('.price')

type.checked = false

const changeCostValues = _ => {
    prices = document.querySelectorAll('.price')
    prices.forEach(element => {
        if(type.checked === true) {
            let number = element.innerHTML
            let slicedNumber = number.slice(1, number.length)
            let newNumber = (Number(slicedNumber) * 10 +0.09).toFixed(2)
            element.innerHTML = `$${newNumber}`
        } else {
            let number = element.innerHTML
            let slicedNumber = number.slice(1, number.length)
            let newNumber = ((Number(slicedNumber) -0.09) / 10).toFixed(2)
            element.innerHTML = `$${newNumber}`
        }
    })
}

type.addEventListener('click', changeCostValues)