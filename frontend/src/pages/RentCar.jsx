import { useState } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { MdPaid } from 'react-icons/md'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import Button from '../components/ui/Button'
import DataTable from '../components/ui/DataTable'
import Modal from '../components/ui/Modal'
import { useAppData } from '../context/useAppData'

const emptyForm = {
  carId: '',
  clientName: '',
  city: '',
  phone: '',
  mobile: '',
  rentDate: '',
  deliveryDate: '',
  price: '',
}

const RentCar = () => {
  const { cars, clients, rentCars, addRentCar, toggleRentPayment } = useAppData()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState(emptyForm)

  const availableCars = cars.filter((car) => car.status !== 'Alugado')

  const fields = [
    {
      name: 'carId',
      label: 'Carro',
      type: 'select',
      placeholder: 'Escolha um carro',
      options: availableCars.map((car) => ({
        value: String(car.id),
        label: `${car.car} - ${car.model}`,
      })),
    },
    {
      name: 'clientName',
      label: 'Cliente',
      placeholder: 'Digite ou escolha um cliente',
      list: 'registered-clients',
      options: clients.map((client) => ({ value: client.name })),
    },
    { name: 'city', label: 'Cidade', placeholder: 'Ex: Nishio-shi' },
    { name: 'phone', label: 'Telefone', placeholder: 'Ex: 0567 0000 000' },
    { name: 'mobile', label: 'Celular', placeholder: 'Ex: 090 0000 0000' },
    { name: 'rentDate', label: 'Data de aluguel', type: 'date' },
    { name: 'deliveryDate', label: 'Data de entrega', type: 'date' },
    { name: 'price', label: 'Valor em yen', type: 'number', placeholder: 'Ex: 85000', min: '0', step: '1000' },
  ]

  const handleChange = (field, value) => {
    const registeredClient = clients.find((client) => client.name.toLowerCase() === value.toLowerCase())

    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
      ...(field === 'clientName' && registeredClient
        ? {
            city: registeredClient.city,
            phone: registeredClient.phone,
            mobile: registeredClient.mobile,
          }
        : {}),
    }))
  }

  const handleConfirm = () => {
    addRentCar(formData)
    setFormData(emptyForm)
    setIsModalOpen(false)
  }

  const handleClose = () => {
    setFormData(emptyForm)
    setIsModalOpen(false)
  }

  const formatYen = (value) => {
    const price = Number(value)

    if (!price) {
      return '-'
    }

    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const columns = [
    { key: 'car', label: 'Carro' },
    { key: 'model', label: 'Modelo' },
    { key: 'client', label: 'Cliente' },
    { key: 'rentDate', label: 'Data aluguel' },
    { key: 'deliveryDate', label: 'Data entrega' },
    {
      key: 'price',
      label: 'Valor',
      render: (rentCar) => formatYen(rentCar.price),
    },
    {
      key: 'available',
      label: 'Disponibilidade',
      render: (rentCar) => (
        <span
          className={`inline-flex items-center gap-2 font-semibold ${
            rentCar.available ? 'text-emerald-400' : 'text-red-400'
          }`}
        >
          {rentCar.available ? <FaCheckCircle /> : <FaTimesCircle />}
          {rentCar.available ? 'Disponivel' : 'Em uso'}
        </span>
      ),
    },
    {
      key: 'paid',
      label: 'Pagamento',
      render: (rentCar) => (
        <button
          type="button"
          onClick={() => toggleRentPayment(rentCar.id)}
          className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] ${
            rentCar.paid
              ? 'bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25'
              : 'bg-red-500/15 text-red-300 hover:bg-red-500/25'
          }`}
        >
          {rentCar.paid ? <MdPaid size={18} /> : <RiMoneyDollarCircleLine size={18} />}
          {rentCar.paid ? 'Pago' : 'Nao pago'}
        </button>
      ),
    },
  ]

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-lg bg-[var(--color-darkblue)] p-6">
      <div className="flex w-full items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[var(--color-gold)]">Controle de Aluguel</h1>
        <Button onClick={() => setIsModalOpen(true)}>Adicionar aluguel</Button>
      </div>

      <DataTable columns={columns} data={rentCars} />

      {isModalOpen && (
        <Modal
          title="Novo aluguel"
          fields={fields}
          formData={formData}
          confirmTitle="Adicionar aluguel"
          cancelTitle="Cancelar"
          onChange={handleChange}
          onClose={handleClose}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  )
}

export default RentCar
