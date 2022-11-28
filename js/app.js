/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navbarlist = document.querySelector('#navbar__list')
const sections = document.querySelectorAll('section')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildnav() {
    for (let i = 0; i < sections.length; i++) {
        const newlist = document.createElement('li')
        newlist.innerHTML = `<a href="#${sections[i].getAttribute('id')}" class="menu__link">${sections[i].getAttribute('data-nav')}</a>`

        scrollevent()

        navbarlist.appendChild(newlist)
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildnav()

// Add class 'active' to section when near top of viewport

const navbarmenu = document.querySelectorAll('li')

function activesection() {
    let i = 0
    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top

        // if the distance to the top is between 0-100px, set the class as active
        if (top >= 0 && top < 100) {
            section.classList.add('your-active-class');
            navbarmenu[i].style.cssText = 'background: green; color: #fff;'

            // else, remove the active 
        } else {
            section.classList.remove('your-active-class');
            navbarmenu[i].style.cssText = 'background: white; color: #fff;'

        }

        i++
    }
    )
}



// Scroll to anchor ID using scrollTO event
function scrollevent() {

    document.querySelectorAll('a[href^="#"]').forEach(e => {
        e.addEventListener("click", function (event) {
            event.preventDefault()
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}


  

/**
 * End Main Functions
 * Begin Events
 *
*/

// Set sections as active
window.addEventListener('scroll', function () {
    activesection()
})


// ref https://dev.to/areeburrub/change-nav-link-s-style-as-you-scroll-4p62

