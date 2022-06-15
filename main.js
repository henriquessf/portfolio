// DOM Document Object Model
//ABRE E FECHA MENU AO CLICK
const nav = document.querySelector('#header nav') //pega o nav dentro do id header
const toggle = document.querySelectorAll('nav .toggle') //pega todos os toggles dentro do nav

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//QUANDO CLICAR EM UM ITEM DO MENU, REMOVER CLASSE SHOW

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da página ao usar o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight //definindo a altura do height

function changeHeaderWhenScroll() {
  if (this.window.scrollY >= navHeight) {
    //scroll passou da altura do header
    header.classList.add('scroll')
  } else {
    //menor q a altura do header
    header.classList.remove('scroll')
  }
}
/* BOTÃO VOLTAR AO TOPO*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// TESTIMONIALS:  carousel slider swiper (nomes das bibliotecas)

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    //breakpoints funcionam como o @media, funciona para responsividade
    767: {
      //A PARTIR DE 767 PIXEIS, FARÁ A AÇAO
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//SCROLL REVEAL -- MOSTRAR ELEMENTOS ENQUANTO DER SCROLL NA PAGINA
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .contatos,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

//deixar manu ativo na pagina

const sections = document.querySelectorAll('main section[id]') //pega tudo q tiver id dentro das  classes sections

function activateMenuAtCurrentSession() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id') //pega o atributo das ID's das sessões: home, contact...etc

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight //pega toda altura, entre o topo e altura

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') //concatena o sectionId com o href
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') //concatena o sectionId com o href
        .classList.remove('active')
    }
  }
}

/* WHEN SCROLL: */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSession()
})
