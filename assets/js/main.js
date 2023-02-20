const instagram = document.querySelector('.insta')

instagram.addEventListener('mouseover', ()=>{
    instagram.src = 'assets/img/icons/instagram-color.svg'
    console.log('Passou')
})
instagram.addEventListener('mouseout', ()=>{
    instagram.src = 'assets/img/icons/instagram-pb.svg'
})