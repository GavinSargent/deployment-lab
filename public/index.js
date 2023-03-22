const btn = document.getElementById('hairstyle-button')
const mohawkImg = document.getElementById('mohawk-guy')


const hairstyleBtn = () => {
    alert('Do a Mohawk!')
    mohawkImg.style.visibility = 'visible'
}


btn.addEventListener('click', hairstyleBtn)