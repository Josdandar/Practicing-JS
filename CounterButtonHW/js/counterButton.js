//Creando el elemento y agregando clases

const divContainer = document.createElement('div');
divContainer.classList.add('divContainer')

const addButton = document.createElement('button');
addButton.classList.add('btn');
addButton.classList.add('btn-primary');
addButton.textContent = '+'

const divText = document.createElement('div');

const pText = document.createElement('p');

const subsButton = document.createElement('button');
subsButton.classList.add('btn')
subsButton.classList.add('btn-danger')
subsButton.textContent = '-'

let numCounter = 0


const numDisplay = document.createTextNode(numCounter)

//Heredando al elemento

divContainer.appendChild(addButton)
divContainer.appendChild(divText)

divText.appendChild(pText)
pText.appendChild(numDisplay)
divContainer.appendChild(subsButton)


document.body.appendChild(divContainer)

addButton.addEventListener('click', (event)=>{
    pText.textContent = numCounter++

    console.log(numCounter)
})

subsButton.addEventListener('click', (event)=>{
    pText.textContent = numCounter--
    console.log(numCounter)
})


