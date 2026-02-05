



const Register = () => {
  return (
    <div className="bg-slate-500 h-screen flex items-center">
      
      <div className="bg-green-500 flex-1 h-screen flex items-center justify-center">
        <form action="" className="w-100 h-120 bg-gray-500/80 rounded-xl p-6">
          <h2 className="mb-6 text-xl">Cadastrar no Sistema</h2>

          <div className="flex flex-col gap-2 mb-2 rounded-md p-2">
            <label htmlFor="">Nome</label>
            <input className="border border-gray-700/40 p-2 rounded-md" type="text" placeholder="Nome"/>
          </div> 

          <div className="flex flex-col gap-2 mb-2 rounded-md p-2">
            <label htmlFor="">Email</label>
            <input className="border border-gray-700/40 p-2 rounded-md" type="text" placeholder="Email ou Username"/>
          </div>

          <div className="flex flex-col gap-2 mb-2 rounded-md p-2">
            <label htmlFor="">Password</label>
            <input className="border border-gray-700/40 p-2 rounded-md" type="text" placeholder="Senha de 8 a 15 digitos"/>
          </div>

          <button className="text-xl text-yellow-200 mt-4 p-2 rounded-md bg-amber-500">Entrar</button>
        </form>
      </div>

      <div className="bg-purple-500 flex-1 h-screen flex items-center justify-center text-2xl">
        First Impression about System of RentCar System
      </div>
    </div>
  )
}

export default Register