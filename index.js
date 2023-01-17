// Write your code here...

// challenge #1
fetch("http://localhost:3000/menu")
.then(resp => resp.json())
.then(data => renderMenu(data))



// challenge #1, #2 and #3
function renderMenu(data) {
    
      const firstImg = document.querySelector('#dish-image')
      firstImg.src = data[0].image
      firstImg.alt = "photo of the food item"

      const firstDishName = document.querySelector('#dish-name').innerText = data[0].name

      const firstDishDescription = document.querySelector('#dish-description').innerText = data[0].description

      const firstDishPrice = document.querySelector('#dish-price').innerText = data[0].price

    for (const item of data) {
        const span = document.createElement('span')
        const foodName = document.createElement('p')
        const divMenu = document.querySelector("#menu-items")
        foodName.innerText = item.name
        span.appendChild(foodName)
        divMenu.appendChild(span)
        
        
        foodName.addEventListener('click', e => {
            const img = document.querySelector('#dish-image')
            img.src = item.image
            img.alt = "photo of the food item"
            
            const dishName = document.querySelector('#dish-name').innertext = item.name
            
            const dishDescription = document.querySelector('#dish-description').innerText = item.description
            
            const dishPrice = document.querySelector('#dish-price').innerText = item.price
        })
    }



}


// challenge # 4   (not working just yet)
       const form = document.querySelector('#cart-form')
       form.addEventListener('submit', e => {
           
           let cartNumber = parseInt(document.querySelector('#number-in-cart').textContent)
           let userInput= parseInt(document.querySelector("#cart-amount").value)
           document.querySelector('#number-in-cart').textContent = cartNumber + userInput
           
           e.preventDefault()
           form.reset()
       }) 






// fetch("http://localhost:3000/menu")
// .then(resp => resp.json())
// .then(menuItems => {
    //     const divMenu = document.querySelector("#menu-items")
    //     menuItems.forEach(menuItem => {
        //         const span = document.createElement('span')
        //         span.textContent = menuItem.name

//         span.addEventListener('click', () => {
//             displayMenuDetails(menuItem)
//         })
//         divMenu.appendChild(span)
//     })
//     displayMenuDetails(menuItems[0])
// })

// function displayMenuDetails(menuItem) {
//     const img = document.querySelector('#dish-image')
//             img.src = menuItem.image
//             img.alt = "photo of the food item"
            
//             const dishName = document.querySelector('#dish-name')
//             dishName.innertext = menuItem.name
            
//             const dishDescription = document.querySelector('#dish-description')
//             dishDescription.innerText = menuItem.description
            
//             const dishPrice = document.querySelector('#dish-price')
//             dishPrice.innerText = menuItem.price
// }
            


// const form = document.querySelector('#cart-form')
// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const userInput = document.querySelector('#cart-amount').value
//     const cartNumber = document.querySelector('#number-in-cart')
//     let integer = parseInt(userInput)
//     let currentValue = parseInt(cartNumber.textContent)
//     let newValue = currentValue + integer
//     cartNumber.textContent = newValue
// })