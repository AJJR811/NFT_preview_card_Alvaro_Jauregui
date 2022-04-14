import { createCard } from './assets/createCard.js'
import { createButton } from './assets/createButton.js'
import { buttonDisabled } from './assets/buttonDisabled.js'

const maxCards = 10
const state={
    quantity: maxCards,
}

createButton("Add Card", "addCard")
createButton("Remove Card", "removeCard")

for (var i = 0; i < state.quantity; i++) {
    createCard()
 }
 
buttonDisabled(state.quantity)

const addCard=document.querySelector("#addCard")
addCard.addEventListener('click',()=>{
    createCard()
    state.quantity++
    buttonDisabled(state.quantity)
})

const removeCard=document.querySelector("#removeCard")
removeCard.addEventListener('click',()=>{
    const parent = document.querySelector('#app')
    parent.removeChild(parent.lastElementChild)
    state.quantity--
    buttonDisabled(state.quantity)
})