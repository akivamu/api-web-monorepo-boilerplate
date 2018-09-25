import 'bootstrap/dist/css/bootstrap.css'

console.log('I\'m a silly entry point')

document.addEventListener('DOMContentLoaded', function () {
  const hello = document.createElement('p')
  hello.classList.add('text-primary')
  hello.innerHTML = 'Hello from webpack'
  document.body.appendChild(hello)
})