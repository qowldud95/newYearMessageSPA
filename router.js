// template
const homeTemplate = require('./pages/home.hbs')
const detailTemplate = require('./pages/detail.hbs')
const newRegTemplate = require('./pages/newReg.hbs')

const Home = homeTemplate()
const Detail = detailTemplate()
const NewReg = newRegTemplate()

const routes = {
  '/': Home,
  '/home': Home,
  '/detail': Detail,
  '/newReg' : NewReg
}

// entry point
function initialRoutes (el) {
    renderHTML(el, routes['/'])

    window.addEventListener('hashchange', () => {
        return renderHTML(el, getHashRoute())
    })
 
}

// get hash history route
function getHashRoute () {
  let route = '/'

  Object.keys(routes).forEach(hashRoute => {
    if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
      route = routes[hashRoute]
    }
  })

  return route
}

// set hash history
function hashRouterPush (pathName, el) {
  renderHTML(el, getHashRoute())
}

// render
function renderHTML (el, route) {
  el.innerHTML = route
}

module.exports = {
  initialRoutes,
  hashRouterPush
}