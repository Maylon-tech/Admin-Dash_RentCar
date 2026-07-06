import { useState } from 'react'
import { useAppData } from '../context/useAppData'
import Button from '../components/ui/Button'
import DataTable from '../components/ui/DataTable'
import Modal from '../components/ui/Modal'

const columns = [
  { key: 'name', label: 'Nome Completo' },
  { key: 'city', label: 'Cidade' },
  { key: 'phone', label: 'Telefone' },
  { key: 'mobile', label: 'Celular' },
]

const fields = [
  { name: 'name', label: 'Nome completo', placeholder: 'Ex: Maria Silva' },
  { name: 'city', label: 'Cidade', placeholder: 'Ex: Anjo-shi' },
  { name: 'phone', label: 'Telefone', placeholder: 'Ex: 0567 0000 000' },
  { name: 'mobile', label: 'Celular', placeholder: 'Ex: 090 0000 0000' },
]

const emptyForm = fields.reduce((form, field) => ({ ...form, [field.name]: '' }), {})

const ClientList = () => {
  const { clients, addClient } = useAppData()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState(emptyForm)

  const handleChange = (field, value) => {
    setFormData((currentData) => ({ ...currentData, [field]: value }))
  }

  const handleConfirm = () => {
    addClient(formData)
    setFormData(emptyForm)
    setIsModalOpen(false)
  }

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-lg bg-[var(--color-darkblue)] p-6">
      <div className="flex w-full items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[var(--color-gold)]">Lista de Clientes</h1>
        <Button onClick={() => setIsModalOpen(true)}>Registrar novo cliente</Button>
      </div>

      <DataTable columns={columns} data={clients} />

      {isModalOpen && (
        <Modal
          title="Registrar novo cliente"
          fields={fields}
          formData={formData}
          confirmTitle="Adicionar cliente"
          cancelTitle="Cancelar cadastro"
          onChange={handleChange}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  )
}

export default ClientList
