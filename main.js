let index = 0
const imgs = document.querySelectorAll('img')
const slideShow = () => {
  imgs.forEach(img => (img.className = 'no-visible'))
  imgs[index].className = 'visible'
  index++
  if (index >= imgs.length) index = 0
  setTimeout(slideShow, 2000)
}
slideShow()
