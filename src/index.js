// USING THE DOM TO EDIT ELEMENTS ON THE PAGE (AND ADD NEW ONES)
const data = [
    { heading: 'dog 1'  },
    { heading: 'dog 2'  },
]
// 1- Making a clone of the div.card ad appending it to the div.card-group
const firstCard = document.querySelector('.card')
console.log(firstCard)

const copyOfFirstCard = firstCard.cloneNode(true)
console.log(copyOfFirstCard)

const cardContainer = document.querySelector('.card-group')
console.log(cardContainer)

cardContainer.appendChild(copyOfFirstCard)

const cards = document.querySelectorAll('.card')
const secondCard = cards[1]
cards.forEach((card, index) =>  {
    const h2 = card.querySelector('h2')
    h2.textContent = data[index].heading
})

// 2- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
const header = secondCard.querySelector('header')
const logoTitle = document.querySelector('#logoTitle')
const card = secondCard
const cardImage = secondCard.querySelector('img')
const cardTitle =secondCard.querySelector('h2')
const cardSubtitle = secondCard.querySelector('h3')
const cardText = secondCard.querySelector('p.card-text')
const cardLink1 = secondCard.querySelector('a')
const cardLink2 = secondCard.querySelector('a:nth-of-type(2')

// 3- Changing an element's text content
//  textContent, innerText (subtle differences)
logoTitle.textContent = 'Lambda Dog'
cardTitle.textContent = 'New Title'
cardSubtitle.textContent = 'New Content'
cardText.textContent = 'New text'
cardLink1.textContent = 'new card link'
cardLink2.textContent = 'New Card Link 2'
cardText.textContent = 'I am a new text'
// 4- Accessing and changing element attributes
//  with dot notation
//  setAttribute, getAttribute
cardImage.src = 'https://i.ytimg.com/vi/h5TpJb_jE-M/maxresdefault.jpg'
cardImage.setAttribute('src', 'https://i.ytimg.com/vi/h5TpJb_jE-M/maxresdefault.jpg')
// 5- Changing the style
//  by changing the class names on the element
//  by manipulating inline styles on the element
card.classList.add('sky')
header.classList.add('sky')
header.classList.remove('sky')
setInterval(() => {
    header.classList.toggle('sky)')
}, 1000)

card.style.backgroundColor = 'royalblue'
// 6- Creating new elements and appending them
const newLink = document.createElement('a')
newLink.textContent = 'Blog'
newLink.href = '#'
document.querySelector = ('#mainNav').appendChild(newLink)

// 7- Removing an existing element and putting it back
