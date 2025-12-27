'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  function handleLogin() {
    const mockUser = process.env.NEXT_PUBLIC_MOCK_USER
    const mockPass = process.env.NEXT_PUBLIC_MOCK_PASS

    if (
      user.trim() === mockUser &&
      pass.trim() === mockPass
    ) {
      sessionStorage.setItem('logged', 'true')
      sessionStorage.setItem('username', user)
      router.push('/dashboard')
    } else {
      alert('Login inválido')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">

      <div className="w-full max-w-sm space-y-4
        bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6">

        <h1 className="text-2xl font-bold">Login</h1>

        <input
          className="w-full p-3 rounded-xl bg-zinc-800"
          placeholder="Usuário"
          value={user}
          onChange={e => setUser(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 rounded-xl bg-zinc-800"
          placeholder="Senha"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl
            bg-gradient-to-r from-purple-500 to-pink-500 font-medium">
          Entrar
        </button>
      </div>
    </main>
  )
}
