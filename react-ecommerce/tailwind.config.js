/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // cambios del color de fondo y sombreado
      ringColor: {
        'amarillo_esv': '#fed700'
      },
      backgroundColor: {
        'amarillo_theader': '#ca8a04',
        'amarillo_tbody': '#e8af1d0d',
        'crear': '#eec4a5db',
      },
      textColor: {
        'editar': '#FA9907',
        'borrar': '#FA5A07',
        'editar_hover': '#FBB955',
        'borrar_hover': '#FA4607'
      },
    },
  },
  plugins: [],
}

