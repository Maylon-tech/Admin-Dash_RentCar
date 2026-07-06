import { useEffect, useState } from 'react'
import Button from '../components/ui/Button'

const Settings = () => {
  const [darkTheme, setDarkTheme] = useState(document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkTheme)
  }, [darkTheme])

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-lg bg-[var(--color-darkblue)] p-6">
      <div className="flex w-full items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[var(--color-gold)]">Configuracoes</h1>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button>Editar perfil</Button>
        <Button variant="secondary" onClick={() => setDarkTheme((currentTheme) => !currentTheme)}>
          {darkTheme ? 'Tema claro' : 'Tema escuro'}
        </Button>
      </div>
    </div>
  )
}

export default Settings
