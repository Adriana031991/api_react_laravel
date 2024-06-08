import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const dataSide = new Map([
        ['Productos', '/admin/productos'],
        ['Categorias', '/admin/categorias'],
        ['Marca', '/admin/marcas'],
        ['Ordenes', '/admin/ordenes'],
    ])

    return (
        <div className="flex sm:justify-left space-x-4 py-2">
            <ul>
                {Array.from(dataSide.entries()).map(([key, value]) => (

                    <li key={key} >
                        <Link to={value} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 hover:text-lg">{key}</Link>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Sidebar