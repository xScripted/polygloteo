import { writable } from 'svelte/store'

// Obtener el valor inicial del localStorage o false por defecto
const storedDarkMode = typeof window !== 'undefined' ? localStorage.getItem('darkMode') === 'true' : false

// Crear la store
const darkMode = writable<boolean>(storedDarkMode)

// Suscribirse a cambios para actualizar localStorage
darkMode.subscribe((value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', String(value))
    // Actualizar la clase en el documento
    if (value) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }
})

export default darkMode
