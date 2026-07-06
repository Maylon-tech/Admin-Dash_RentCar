import { useAppData } from '../context/useAppData'
import DataTable from '../components/ui/DataTable'

const carColumns = [
  { key: 'car', label: 'Carro' },
  { key: 'model', label: 'Modelo' },
  { key: 'status', label: 'Status' },
]

const clientColumns = [
  { key: 'name', label: 'Cliente' },
  { key: 'city', label: 'Cidade' },
  { key: 'mobile', label: 'Celular' },
]

const Home = () => {
  const { cars, clients } = useAppData()

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-lg bg-[var(--color-darkblue)] p-6">
      <div className="flex w-full items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[var(--color-gold)]">Painel Geral</h1>
      </div>

      <div className="grid w-full gap-6 xl:grid-cols-2">
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-[var(--color-gold)]">Resumo de Carros</h2>
          <DataTable columns={carColumns} data={cars.slice(0, 3)} />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-[var(--color-gold)]">Resumo de Clientes</h2>
          <DataTable columns={clientColumns} data={clients.slice(0, 3)} />
        </section>
      </div>
    </div>
  )
}

export default Home
