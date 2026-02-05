


const Home = () => {
  return (
    <div
      className="flex flex-col gap-12 w-full h-full bg-[#01131f] px-4 items-center"
    >
      <div className="flex items-center justify-between border border-orange-400 mt-4 p-2 w-full">
        <h1 className="text-2xl text-orange-400">Painel Geral do Sistema</h1>

        <div className="p-2 border border-slate-200/80 rounded-xl">
          <input
            type="text"
            placeholder="Procurar...."
            className="text-white"
          />
        </div>
      </div>

      <table className="border-separate border-spacing-2 bg-slate-700/50 rounded-sm p-2 w-full text-white"> 

        <thead className="">
          <tr className="">
            <th className="rounded-xs text-orange-400">Carros Disponivel</th>
            <th className="rounded-xs text-orange-400">Carros Alugados</th>
            <th className="rounded-xs text-orange-400">Servicos em Andamento</th>
           
            
          </tr>
        </thead>

        <tbody className="bg-slate-700 p-2 w-full">
          <tr className="h-8 text-center">
            <td>Nissan Note</td>
            <td>2017</td>
            <td>Azul</td>
            
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
            <td>Toyota Voxy</td>
            <td>2023</td>
            <td>Preto</td>
            
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
            <td>Daihatsu Movie</td>
            <td>2020</td>
            <td>Chumbo</td>
            
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

export default Home
