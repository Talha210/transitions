let section1 = document.getElementById('section1')
let div1 = document.getElementById('div1')

window.addEventListener('scroll', function() {
  console.log(window.scrollY)
  if (window.scrollY > 300) {
    section1.classList.remove('hidden')
    section1.classList.add('show')
  }

})


// let part = document.getElementsById('part')
// let div2 = document.getElementsById('div2')
//
// window.addEventListener('scroll', function() {
//   console.log(window.scrollY)
//   if (window.scrollY > 300) {
//     part1.classList.remove('hidden')
//     part1.classList.add('show')
//   }
//
// })
