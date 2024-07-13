/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      // cambios del color de fondo y sombreado
      ringColor: {
        'amarillo_esv': '#fed700'
      },
      colors: {
        'cart-light-start': '#ffdfab',
        'cart-light-end': '#fed700',
        'cart-dark-start': '#d4af37',
        'cart-dark-end': '#ca8a04',
      },
      backgroundColor: {
        'amarillo_theader': '#ca8a04',
        'amarillo_tbody': '#e8af1d0d',
        'crear': '#eec4a5db',

        'nav': '#333333',
        'nav-dark': '#1a1a1a',
        'catalog_light': '#f5f5dc',
        'catalog_dark': '#2c2c2c',
        'card': '#e0e0da',
        'card_dark': '#3d3d3d',
      },
      textColor: {
        'editar': '#FA9907',
        'borrar': '#FA5A07',
        'editar_hover': '#FBB955',
        'borrar_hover': '#FA4607',
        'primary': '#333333',
        'primary-dark': '#ffffff',
        'secondary': '#666666',
        'secondary-dark': '#cccccc',
      },
    },
  },
  plugins: [],
}

    // const colores = [
    //     #F0AB56
    //     #F5CB1D
    //     #F0BF56
    //     #F09056
    //     #F0E44F
    //     #FED700
    // ]