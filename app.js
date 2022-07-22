const about = document.querySelector('.about')
const buttons = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function (e) {
  //console.log(e.target.dataset.id)
  const id = e.target.dataset.id
  if (id) {
    //remover active dos outros botoes
    buttons.forEach(function (button) {
      button.classList.remove('active')
      e.target.classList.add('active')
    })
    //hide outros articles
    articles.forEach(function (article) {
      article.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active')
  }
})
