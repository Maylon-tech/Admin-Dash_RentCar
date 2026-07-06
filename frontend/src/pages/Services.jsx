import { useState } from 'react'
import { useAppData } from '../context/useAppData'
import Button from '../components/ui/Button'
import DataTable from '../components/ui/DataTable'
import Modal from '../components/ui/Modal'

const columns = [
  { key: 'service', label: 'Servico' },
  { key: 'car', label: 'Carro' },
  { key: 'client', label: 'Cliente' },
  { key: 'startDate', label: 'Data Entrada' },
  { key: 'endDate', label: 'Data Entrega' },
  { key: 'status', label: 'Status' },
]

const fields = [
  { name: 'service', label: 'Servico', placeholder: 'Ex: Polimento' },
  { name: 'car', label: 'Carro', placeholder: 'Ex: Toyota Voxy' },
  { name: 'client', label: 'Cliente', placeholder: 'Ex: Carlos Oliveira' },
  { name: 'startDate', label: 'Data entrada', placeholder: 'Ex: 03/2026' },
  { name: 'endDate', label: 'Data entrega', placeholder: 'Ex: 04/2026' },
  { name: 'status', label: 'Status', placeholder: 'Ex: Andamento' },
]

const emptyForm = fields.reduce((form, field) => ({ ...form, [field.name]: '' }), {})

const Services = () => {
  const { services, addService } = useAppData()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState(emptyForm)

  const handleChange = (field, value) => {
    setFormData((currentData) => ({ ...currentData, [field]: value }))
  }

  const handleConfirm = () => {
    addService(formData)
    setFormData(emptyForm)
    setIsModalOpen(false)
  }

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-lg bg-[var(--color-darkblue)] p-6">
      <div className="flex w-full items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[var(--color-gold)]">Servicos Disponiveis</h1>
        <Button onClick={() => setIsModalOpen(true)}>Registrar novo servico</Button>
      </div>

      <DataTable columns={columns} data={services} />

      {isModalOpen && (
        <Modal
          title="Registrar novo servico"
          fields={fields}
          formData={formData}
          confirmTitle="Adicionar servico"
          cancelTitle="Cancelar cadastro"
          onChange={handleChange}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  )
}

export default Services
