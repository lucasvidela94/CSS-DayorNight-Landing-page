const toggleSwitch = document.querySelector('input[type="checkbox"]')
const navBar = document.getElementById("nav")
const toggleIcon = document.getElementById("toggle-icon")
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const textBox = document.getElementById("text-box")

function changeMode(color) {
  image1.src = `img/undraw_dev_productivity_idea_${color}.svg`
  image2.src = `img/undraw_static_website_idea_${color}.svg`
  image3.src = `img/undraw_proud_coder_idea_${color}.svg`
}

// Checks if the toggle input its dark while using a ternary
// and changes the main theme-- Chequea el input de switch y verifica que este en en posicion ON

function toggleInput(isDark) {
  navBar.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 /50%)"
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 /50%)"
    : "rgb(0 0 0 /50%)"
  toggleIcon.children[0].textContent = isDark ? "Modo nocturno" : "Modo diurno"
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
  isDark ? changeMode("dark") : changeMode("light")
}

//this changes  the theme based on the event in the input--Funcion que chechea el switch y en caso
//de estar activado cambia de modo
function changeTheme(event) {
  const themeChecker = event.target.checked
  if (themeChecker) {
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("theme", "dark")
    toggleInput(true)
  } else {
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
    toggleInput(false)
  }
}

//Event listener del switch

toggleSwitch.addEventListener("change", changeTheme)

//Set current theme in the local storage--Cambia el tema principal en el local Storage y almacena
//los cambios en la memoria

const currentTheme = localStorage.getItem("theme")
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme)

  if (currentTheme === "dark") {
    toggleSwitch.checked = true
    toggleInput(true)
  }
}
