


const ClientList = () => {
  return (
    <div
      className="flex flex-col gap-4 h-full w-full bg-[#01131f] px-4 items-center"
    >
      <div className="w-full px-6 py-4 mt-4 flex items-center justify-between">
        <h1 className="text-xl text-orange-400">Lista de Clientes</h1>

        <div className="">
          <button className="p-2 bg-orange-400 rounded-md">
            Registrar novo Clientes
          </button>
        </div>
      </div>

      <table className="border-separate border-spacing-2 bg-slate-700/50 rounded-sm p-2 w-full text-white"> 

        <thead className="">
          <tr className="">
            <th className="rounded-xs">Nome Completo</th>
            <th className="rounded-xs">Cidade</th>
            <th className="rounded-xs">Telefone</th>
            <th className="rounded-xs">Celular</th>
           
            
          </tr>
        </thead>

        <tbody className="bg-slate-700 p-2 w-full">
          <tr className="h-8 text-center">
            <td>Carlos Oliveira</td>
            <td>Nishio-shi</td>
            <td>0567 5467 231</td>
            <td>090 4533 6512</td>
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
            <td>Danilo Gomes</td>
            <td>Takahama-shi</td>
            <td>0567 5489 341</td>
            <td>090 4533 6512</td>
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
            <td>Emerson Silva</td>
            <td>Anjo-shi</td>
            <td>0567 5467 327</td>
            <td>090 4533 6512</td>
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

export default ClientList
