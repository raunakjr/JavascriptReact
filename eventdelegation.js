const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
let count = 1

// this will remove card but it is not efficent as event listner is applied to each card separetly
addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
  /*  newCard.addEventListener('click',()=>{
        newCard.remove()
       
    })                 */
    container.append(newCard)

})

// we will apply event listner only once on the parent of card list which is container (check html file)
// e.target returns an HTMLElement object.
// here e.target will renturn a div containing class
container.addEventListener('click',(e)=>{
     console.log(e.target)
     if(e.target!=container)
     e.target.remove()
})
