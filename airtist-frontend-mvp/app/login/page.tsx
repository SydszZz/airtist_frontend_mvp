'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login } from '@/app/actions/login'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin() {
    setLoading(true)
    setError('')

    try {
      await login(email, password)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Login inválido')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="
      min-h-screen flex items-center justify-center
      bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white
    ">
      <div className="
        w-full max-w-sm space-y-4
        bg-zinc-900/70 border border-zinc-800
        rounded-2xl p-6
      ">
        <h1 className="text-2xl font-bold">Login</h1>

        <input
          className="w-full p-3 rounded-xl bg-zinc-800"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 rounded-xl bg-zinc-800"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="
            w-full py-3 rounded-xl font-medium
            bg-gradient-to-r from-purple-500 to-pink-500
            disabled:opacity-50
          "
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </div>
    </main>
  )
}
