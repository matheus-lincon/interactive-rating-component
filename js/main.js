/* ------ SELECTORS */

const submitButton = document.querySelector('#submit-button')
const choosenRating = document.querySelector('#rating-choosen')
const cardContainer = document.querySelector('.card-container')
const thankyouState = document.querySelector('.thankyou-state')
const ratingNumbers = document.querySelectorAll('.rating-number')

let hasSelected = false

/* ------ EVENTS */

ratingNumbers.forEach((number, index) => {
  number.addEventListener('click', () => {
    console.log(number, index)
    if (!number.classList.contains('selected')) {
      clearSelections()
      number.classList.add('selected')
      hasSelected = true

      updateSelectedRating(index + 1)
    }
  })
})

submitButton.addEventListener('click', () => {
  if (hasSelected) {
    clearSelections()
    showThankYouState()
  }
})

/* ------ FUNCTIONS */

function clearSelections() {
  ratingNumbers.forEach((number) => {
    number.classList.remove('selected')
  })
  hasSelected = false
}

function showThankYouState() {
  cardContainer.classList.toggle('toggle')
  setTimeout(() => {
    thankyouState.classList.toggle('toggle')
  }, 500)
}

function updateSelectedRating(index) {
  choosenRating.innerText = index
}
