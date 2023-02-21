const instagram = document.querySelector('.insta')

instagram.addEventListener('mouseover', ()=>{
    instagram.src = 'assets/img/icons/instagram-color.svg'
    console.log('Passou')
})
instagram.addEventListener('mouseout', ()=>{
    instagram.src = 'assets/img/icons/instagram-pb.svg'
})


const linkedin = document.querySelector('.linked')
linkedin.addEventListener('mouseover', ()=>{
    linkedin.src = 'assets/img/icons/linkedin-color.svg'
    console.log('Passou')
})
linkedin.addEventListener('mouseout', ()=>{
    linkedin.src = 'assets/img/icons/linkedin-pb.svg'
})

const github = document.querySelector('.git')
github.addEventListener('mouseover', ()=>{
    github.src = 'assets/img/icons/github-color.svg'
    console.log('Passou')
})
github.addEventListener('mouseout', ()=>{
    github.src = 'assets/img/icons/github-pb.svg'
})