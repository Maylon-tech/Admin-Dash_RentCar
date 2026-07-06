import { useState } from 'react'
import { useAppData } from '../context/useAppData'
import Button from '../components/ui/Button'
import DataTable from '../components/ui/DataTable'
import Modal from '../components/ui/Modal'

const columns = [
  { key: 'car', label: 'Carro' },
  { key: 'model', label: 'Modelo' },
  { key: 'year', label: 'Ano' },
  { key: 'color', label: 'Cor' },
  { key: 'status', label: 'Status' },
]

const fields = [
  { name: 'car', label: 'Carro', placeholder: 'Ex: Serena' },
  { name: 'model', label: 'Modelo', placeholder: 'Ex: Nissan' },
  { name: 'year', label: 'Ano', placeholder: 'Ex: 2024' },
  { name: 'color', label: 'Cor', placeholder: 'Ex: Branco' },
  { name: 'status', label: 'Status', placeholder: 'Ex: Disponivel' },
]

const emptyForm = fields.reduce((form, field) => ({ ...form, [field.name]: '' }), {})

const CarsList = () => {
  const { cars, addCar } = useAppData()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState(emptyForm)

  const handleChange = (field, value) => {
    setFormData((currentData) => ({ ...currentData, [field]: value }))
  }

  const handleConfirm = () => {
    addCar(formData)
    setFormData(emptyForm)
    setIsModalOpen(false)
  }

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-lg bg-[var(--color-darkblue)] p-6">
      <div className="flex w-full items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[var(--color-gold)]">Lista de Carros</h1>
        <Button onClick={() => setIsModalOpen(true)}>Registrar novo carro</Button>
      </div>

      <DataTable columns={columns} data={cars} />

      {isModalOpen && (
        <Modal
          title="Registrar novo carro"
          fields={fields}
          formData={formData}
          confirmTitle="Adicionar carro"
          cancelTitle="Cancelar cadastro"
          onChange={handleChange}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  )
}

export default CarsList
