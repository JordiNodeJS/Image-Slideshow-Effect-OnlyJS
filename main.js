let indexImgs = 0
const imgs = document.querySelectorAll('img')
const slideShow = () => {
  for (const img of imgs) img.className = 'no-visible'
  imgs[indexImgs].className = 'visible'
  indexImgs++
  if (indexImgs >= imgs.length) indexImgs = 0
  setTimeout(slideShow, 2000)
}
slideShow()
