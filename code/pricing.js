//Variables cards
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

//Variables inputs
const clickCheck = document.getElementById('click')
const animationCheck = document.getElementById('animation')
const speed = document.getElementById('speed')
const dev = document.getElementById('dev')


//HTML content
let firstHTML
let secondHTML
let thirdHTML

//User variables
let clickOn = false
let animationOn = false
let animationSpeed = 0.4


//Toggle hover effect
const toggleHover = type => {
    [first, third].forEach(element => {
        if(type === "add") {
            element.classList.add('click')
        } else {
            element.classList.remove('click')
        }
    })
}


//Set the HTML content after gathering it
const gatherInnerHTML = _ => {
    firstHTML = first.innerHTML
    secondHTML = second.innerHTML
    thirdHTML = third.innerHTML
}



//Hide all the elements with animation
const hideElements = _ => {
    TweenMax.to(first, animationSpeed, {
        opacity: 0,
    })
    TweenMax.to(second, animationSpeed, {
        opacity: 0,
        onComplete: showElements
    })
    TweenMax.to(third, animationSpeed, {
        opacity: 0,
    })
}

//Show all the elements with animation
const showElements = _ => {
    TweenMax.to(first, animationSpeed, {
        opacity: 1,
    })
    TweenMax.to(second, animationSpeed, {
        opacity: 1,
    })
    TweenMax.to(third, animationSpeed, {
        opacity: 1,
    })
}




//Element switches
const firstElements = _ => {
    first.innerHTML = thirdHTML
    second.innerHTML = firstHTML
    third.innerHTML = secondHTML
}

const thirdElements = _ => {
    first.innerHTML = secondHTML
    second.innerHTML = thirdHTML
    third.innerHTML = firstHTML
}




//Actions for click
const firstClicked = _ => {
    if(clickOn === true) {
        gatherInnerHTML()
        if(animationOn === true) {
            hideElements()
            setTimeout(firstElements, animationSpeed*1000)
        } else {
            firstElements()
        }
    }
}

const thirdClicked = _ => {
    if(clickOn === true) {
        gatherInnerHTML()
        if(animationOn === true) {
            hideElements()
            setTimeout(thirdElements, animationSpeed*1000)
        } else {
            thirdElements()
        }
    }
}



//click check
const clickCheckAction = _ => {
    if(clickCheck.checked === true) {
        clickOn = true
        toggleHover("add")
        animationCheck.disabled = false
    } else {
        clickOn = false
        toggleHover("remove")
        animationCheck.disabled = true
        speed.disabled = true
    }
}
clickCheckAction()


const animationCheckAction = _ => {
    if(animationCheck.checked === true) {
        animationOn = true
        speed.disabled = false
    } else {
        speed.disabled = true
        animationOn = false
    }
}
animationCheckAction()


const setSpeed = _ => {
    animationSpeed = speed.value / 1000
}



//Event listeners for click
first.addEventListener('click', firstClicked)
third.addEventListener('click', thirdClicked)
clickCheck.addEventListener('input', clickCheckAction)
animationCheck.addEventListener('input', animationCheckAction)
speed.addEventListener('input', setSpeed)

dev.addEventListener('click', event => {
    const checkboxes = document.querySelector('.checkboxes')
    if(checkboxes.style.display == 'block') {
        checkboxes.style.display = 'none'
    } else {
        checkboxes.style.display = 'block'
    }
})