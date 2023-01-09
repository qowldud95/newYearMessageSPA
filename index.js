
// css
require('./css/style.css')

// router
const {
  initialRoutes,
  hashRouterPush
} = require('./router')

// app division
const homeAppDiv = document.querySelector('#home-app')

// Hash History
initialRoutes(homeAppDiv)

window.onload = () => {
  const hashLinker = document.querySelectorAll('button.w-btn-outline')

  hashLinker.forEach(el => {
    el.addEventListener('click', (evt) => {
      const pathName = evt.target.getAttribute('route')

      hashRouterPush(pathName, homeAppDiv)
    })
  })
}

const entryPoint=document.querySelector('#home-app')
console.log(entryPoint);

const btn = document.querySelector('#newRegBtn')
console.log(btn);


