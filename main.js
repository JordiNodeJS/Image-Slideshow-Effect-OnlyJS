let indexImgs = 0
const imgs = document.querySelectorAll('img')
const slideShow = () => {
  imgs.forEach(img => (img.className = 'no-visible'))
  imgs[indexImgs].className = 'visible'
  indexImgs++
  if (indexImgs >= imgs.length) indexImgs = 0
  setTimeout(slideShow, 2000)
}
slideShow()
