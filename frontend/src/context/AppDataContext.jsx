import { useState } from 'react'
import { AppDataContext } from './appDataStore'

const initialCars = [
  { id: 1, car: 'Serena', model: 'Nissan', year: '2021', color: 'Prata', status: 'Alugado' },
  { id: 2, car: 'Move', model: 'Daihatsu', year: '2017', color: 'Preto', status: 'Alugado' },
  { id: 3, car: 'Voxy', model: 'Toyota', year: '2023', color: 'Prata', status: 'Parado' },
]

const initialClients = [
  { id: 1, name: 'Carlos Oliveira', city: 'Nishio-shi', phone: '0567 5467 231', mobile: '090 4533 6512' },
  { id: 2, name: 'Danilo Gomes', city: 'Takahama-shi', phone: '0567 5489 341', mobile: '090 4533 6512' },
  { id: 3, name: 'Emerson Silva', city: 'Anjo-shi', phone: '0567 5467 327', mobile: '090 4533 6512' },
]

const initialServices = [
  {
    id: 1,
    service: 'Polimento e Higienizacao',
    car: 'Daihatsu Move',
    client: 'Robson',
    startDate: '01/2026',
    endDate: '02/2026',
    status: 'Andamento',
  },
  {
    id: 2,
    service: 'Polimento',
    car: 'Mira',
    client: 'Leandro',
    startDate: '01/2026',
    endDate: '02/2026',
    status: 'Terminado',
  },
  {
    id: 3,
    service: 'Higienizacao e Limpeza do farois',
    car: 'Toyota Prius',
    client: 'Maria',
    startDate: '01/2026',
    endDate: '02/2026',
    status: 'Andamento',
  },
]

const initialRentCars = [
  {
    id: 1,
    car: 'Serena',
    model: 'Nissan',
    client: 'Carlos Oliveira',
    rentDate: '2026-01-10',
    deliveryDate: '2026-01-20',
    price: '85000',
    available: false,
    paid: true,
  },
  {
    id: 2,
    car: 'Move',
    model: 'Daihatsu',
    client: 'Danilo Gomes',
    rentDate: '2026-02-01',
    deliveryDate: '2026-02-12',
    price: '72000',
    available: false,
    paid: false,
  },
  {
    id: 3,
    car: 'Voxy',
    model: 'Toyota',
    client: 'Disponivel',
    rentDate: '-',
    deliveryDate: '-',
    price: '0',
    available: true,
    paid: false,
  },
]

export const AppDataProvider = ({ children }) => {
  const [cars, setCars] = useState(initialCars)
  const [clients, setClients] = useState(initialClients)
  const [services, setServices] = useState(initialServices)
  const [rentCars, setRentCars] = useState(initialRentCars)

  const addCar = (car) => {
    setCars((currentCars) => [...currentCars, { id: Date.now(), ...car }])
  }

  const addClient = (client) => {
    setClients((currentClients) => [...currentClients, { id: Date.now(), ...client }])
  }

  const addService = (service) => {
    setServices((currentServices) => [...currentServices, { id: Date.now(), ...service }])
  }

  const addRentCar = (rentCar) => {
    const selectedCar = cars.find((car) => String(car.id) === String(rentCar.carId))
    const clientName = rentCar.clientName.trim()
    const clientExists = clients.some((client) => client.name.toLowerCase() === clientName.toLowerCase())

    if (!selectedCar || !clientName) {
      return
    }

    if (!clientExists) {
      setClients((currentClients) => [
        ...currentClients,
        {
          id: Date.now(),
          name: clientName,
          city: rentCar.city,
          phone: rentCar.phone,
          mobile: rentCar.mobile,
        },
      ])
    }

    setCars((currentCars) =>
      currentCars.map((car) => (car.id === selectedCar.id ? { ...car, status: 'Alugado' } : car)),
    )

    setRentCars((currentRentCars) => {
      const nextRentCar = {
        id: Date.now(),
        carId: selectedCar.id,
        car: selectedCar.car,
        model: selectedCar.model,
        client: clientName,
        rentDate: rentCar.rentDate,
        deliveryDate: rentCar.deliveryDate,
        price: rentCar.price,
        available: false,
        paid: false,
      }

      const hasAvailableCarRow = currentRentCars.some(
        (currentRentCar) => currentRentCar.car === selectedCar.car && currentRentCar.available,
      )

      if (hasAvailableCarRow) {
        return currentRentCars.map((currentRentCar) =>
          currentRentCar.car === selectedCar.car && currentRentCar.available ? nextRentCar : currentRentCar,
        )
      }

      return [...currentRentCars, nextRentCar]
    })
  }

  const toggleRentPayment = (rentCarId) => {
    setRentCars((currentRentCars) =>
      currentRentCars.map((rentCar) =>
        rentCar.id === rentCarId ? { ...rentCar, paid: !rentCar.paid } : rentCar,
      ),
    )
  }

  return (
    <AppDataContext.Provider
      value={{ cars, clients, services, rentCars, addCar, addClient, addService, addRentCar, toggleRentPayment }}
    >
      {children}
    </AppDataContext.Provider>
  )
}
