
import React from 'react'

const Services = () => {
  return (
    <div  className="flex flex-col gap-4 h-full w-full bg-[#01131f] px-4 items-center">
      
      <div className="w-full px-6 py-4 mt-4 flex items-center justify-between">
        <h1 className="text-xl text-orange-400">Servicos Disponiveis</h1>

        <div className="">
          <button className="p-2 bg-orange-400 rounded-md">
            Registrar novo servicos
          </button>
        </div>
      </div>

      <table className="border-separate border-spacing-2 bg-slate-700/50 rounded-sm p-2 w-full text-white"> 

        <thead className="">
          <tr className="">
            <th className="rounded-xs text-orange-400">Servicos</th>
            <th className="rounded-xs text-orange-400">Carro</th>
            <th className="rounded-xs text-orange-400">Cliente</th>
            <th className="rounded-xs text-orange-400">Data Entrada</th>
            <th className="rounded-xs text-orange-400">Data Entrega</th>
            <th className="rounded-xs text-orange-400">Status</th>
          </tr>
        </thead>

        <tbody className="bg-slate-700 p-2 w-full">
          <tr className="h-8 text-center">
            <td>Polimento e Higienizacao</td>
            <td>Daihatsu Move</td>
            <td>Robson</td>
            <td>01/2026</td>
            <td>02/2026</td>
            <td>Andamento</td>
             {/*<td className="flex gap-2 items-center justify-center">
              <button 
                className="cursor-pointer"
                onClick={() => {}}
              >
                <Trash size="18" />
              </button>
              <button
                className="p-2 cursor-pointer"
                onClick={() => {}}
              >
                <SquarePen size="18" />
              </button>
            </td>   */}
          </tr>

          <tr className="h-8 text-center">
            <td>Polimento</td>
            <td>Mira</td>
            <td>Leandro</td>
            <td>01/2026</td>
            <td>02/2026</td>
            <td>Terminado</td>
            {/*  <td className="flex gap-2 items-center justify-center">
             <button 
                className="cursor-pointer"
                onClick={() => {}}
              >
                <Trash size="18" />
              </button>
              <button
                className="p-2 cursor-pointer"
                onClick={() => {}}
              >
                <SquarePen size="18" />
              </button> 
            </td>  */}
          </tr>

          <tr className="h-8 text-center">
            <td>Higienizacao e Limpeza do farois</td>
            <td>Toyota Prius</td>
            <td>Maria</td>
            <td>01/2026</td>
            <td>02/2026</td>
            <td>Andamento</td>
           {/* <td className="flex gap-2 items-center justify-center">
               <button 
                className="cursor-pointer"
                onClick={() => {}}
              >
                <Trash size="18" />
              </button>
              <button
                className="p-2 cursor-pointer"
                onClick={() => {}}
              >
                <SquarePen size="18" />
              </button> 
            </td>  */}
          </tr>

        </tbody>

      </table>
    </div>
  )
}

export default Services
