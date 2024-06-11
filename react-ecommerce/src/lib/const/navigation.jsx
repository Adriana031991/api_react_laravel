import React from "react"
import { AiTwotoneTags } from "react-icons/ai"
import { HiOutlineViewGrid } from "react-icons/hi"
import { IoBagHandle } from "react-icons/io5"
import { MdDeliveryDining } from "react-icons/md"
import { TbBrandCodesandbox } from "react-icons/tb"

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/admin',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'productos',
        label: 'Productos',
        path: '/admin/productos',
        icon: <IoBagHandle />
    },
    {
        key: 'categorias',
        label: 'Categorias',
        path: '/admin/categorias',
        icon: <AiTwotoneTags />
    },
    {
        key: 'marca',
        label: 'Marca',
        path: '/admin/marcas',
        icon: <TbBrandCodesandbox />
    },
    {
        key: 'ordenes',
        label: 'Ordenes',
        path: '/admin/ordenes',
        icon: <MdDeliveryDining />
    },
]