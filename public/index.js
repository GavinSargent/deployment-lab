const btn = document.getElementById('hairstyle-button')
const mohawkImg = document.getElementById('mohawk-guy')

let hairstyles = ['Mohawk', 'Buzz', 'Ponytail']

const hairstyleBtn = () => {
    let maxNum = hairstyles.length
    let randomNum = Math.floor(Math.random() * maxNum)
    let randomHairstyle = hairstyles[randomNum]
    alert(`Do a ${randomHairstyle}!`)
   
    if(randomHairstyle === "Mohawk"){
        mohawkImg.style.visibility = 'visible' 
    } 
}


btn.addEventListener('click', hairstyleBtn)