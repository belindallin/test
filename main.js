//彈出視窗
//選擇目標
const input = document.querySelector('#action__input_1')
//新增名為toggleMenu的方法
const toggleMenu = event => {
  console.log(event.target)
  const menu = event.target.parentElement.children[1]
  menu.classList.toggle('hidden')
}
//監聽事件
input.addEventListener('click', toggleMenu)

//切換夜間模式
//選擇目標
const darkModeToggle = document.querySelector('#dark__mode__toggle')
//新增名為darkModeToggleHandler的方法
const darkModeToggleHandler = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}
//監聽事件
darkModeToggle.addEventListener('change', darkModeToggleHandler)

//選取項目，被選到的呈現橘色
const tableBody = document.querySelector('tbody')
const selectedHandler = event => {
  const tr = event.target.parentElement.parentElement
  tr.classList.toggle('selected')
}
tableBody.addEventListener('change', selectedHandler)
