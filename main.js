import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const overlay = document.getElementById('overlay')
const iconHamburger = document.getElementById('icon-hamburger')
const iconClose = document.getElementById('icon-close')
const form = document.getElementById('form')
const emailInput = document.getElementById('email-input')

let isMenuOpen = false

new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination'
  },
  initialSlide: 1,
  grabCursor: true,
  spaceBetween: 16,
  breakpoints: {
    1110: {
      spaceBetween: 30,
      slidesPerView: 'auto',
      centeredSlides: true
    }
  },
  modules: [Pagination]
})

function toggleClass(element, className, condition) {
  if (condition) {
    element.classList.add(className)
  } else {
    element.classList.remove(className)
  }
}

function handleMenuBtnClick() {
  isMenuOpen = !isMenuOpen

  scrollTo(0, 0)
  toggleClass(mobileMenu, 'menu-hidden', !isMenuOpen)
  toggleClass(overlay, 'overlay-hidden', !isMenuOpen)
  toggleClass(iconHamburger, 'hidden', isMenuOpen)
  toggleClass(iconClose, 'hidden', !isMenuOpen)
  toggleClass(document.body, 'overflow-hidden', isMenuOpen)
  menuBtn.ariaExpanded = isMenuOpen
}

function handleSubmit(event) {
  event.preventDefault()
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const matchesEmail = emailInput.value.match(emailRegex)

  toggleClass(form, 'form-error', !matchesEmail)
  if (!matchesEmail) return
  emailInput.value = ''
}

menuBtn.addEventListener('click', handleMenuBtnClick)
form.addEventListener('submit', handleSubmit)
