import React from 'react'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

export default function CartList() {
  const temasTeoria = [
    { id: 1, title: "imagenes", description: "Aprenda os conceitos fundamentais do React 19.",to:"/imagenes" },
    { id: 2, title: "use effect", description: "Entenda como criar e utilizar componentes.", to: "/useeffect" },
    { id: 3, title: "rutas anidadas", description: "Entenda como criar e utilizar componentes.", to: "/rutasanidadas" },
  
  ];
  return (
    <div className='flex flex-col gap-4'>
      {
        temasTeoria.map((tema) => (
          <Link to={tema.to} key={tema.id} className="group w-full bg-[#151515] p-5 rounded-xl border-3 border-[#333] flex justify-between hover:border-[#ecafaf] ">
            <h2 className="text-xl font-semibold">{tema.title}</h2>
            <Icon className="group-hover:text-[#ecafaf]" icon="weui:arrow-filled" width="12" height="24" />
          </Link>
        ))
      }
      </div>
  )
}
