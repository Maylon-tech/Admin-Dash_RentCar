


const CarsList = () => {
  return (
    <div
      className="flex flex-col gap-4 h-full w-full bg-[#01131f] px-4 items-center"
    >
      <div className="w-full px-6 py-4 mt-4 flex items-center justify-between">
        <h1 className="text-xl text-orange-400">Lista de Carros</h1>

        <div className="">
          <button className="p-2 bg-yellow-800 text-slate-300 rounded-md">
            Registrar novo Carro
          </button>
        </div>
      </div>

      <table className="border-separate border-spacing-2 bg-slate-700/50 rounded-sm p-2 w-full text-white"> 

        <thead className="">
          <tr className="">
            <th className="rounded-xs text-orange-400">Carro</th>
            <th className="rounded-xs text-orange-400">Modelo</th>
            <th className="rounded-xs text-orange-400">Ano</th>
            <th className="rounded-xs text-orange-400">Cor</th>
            <th className="rounded-xs text-orange-400">Status</th>
            
          </tr>
        </thead>

        <tbody className="bg-slate-700 p-2 w-full">
          <tr className="h-8 text-center">
            <td>Serena</td>
            <td>Nissan</td>
            <td>2021</td>
            <td>Prata</td>
            <td>Alugado</td>
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
            <td>Move</td>
            <td>Daihatsu</td>
            <td>2017</td>
            <td>Preto</td>
            <td>Alugado</td>
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
            <td>Voxy</td>
            <td>Toyota</td>
            <td>2023</td>
            <td>Prata</td>
            <td>Parado</td>
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

export default CarsList
