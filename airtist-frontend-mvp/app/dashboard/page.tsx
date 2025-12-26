'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Dashboard() {
  const router = useRouter()
  const [username, setUsername] = useState('')

  useEffect(() => {
    const logged = sessionStorage.getItem('logged')
    if (logged !== 'true') {
      router.replace('/login')
      return
    }

    setUsername(sessionStorage.getItem('username') || 'Artista')
  }, [router])

  return (
    <main className="
      min-h-screen flex flex-col
      bg-gradient-to-br from-black via-zinc-950 to-zinc-900
      text-white
    ">

      {/* HEADER */}
      <header className="
        w-full px-8 py-5
        flex justify-between items-center
        border-b border-zinc-800
        backdrop-blur
      ">
        <h1 className="text-xl font-semibold tracking-tight">
          AIrtist
        </h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-300">
            {username}
          </span>
          <img
            src="https://i.pravatar.cc/40"
            className="w-9 h-9 rounded-full ring-2 ring-purple-500/40"
            alt="avatar"
          />
        </div>
      </header>

      {/* CENTRO */}
      <div className="flex-1 flex items-center justify-center px-6">

        <div className="
          w-full max-w-4xl
          bg-zinc-900/60 backdrop-blur-xl
          border border-zinc-800
          rounded-3xl p-10
          shadow-[0_0_80px_-20px_rgba(168,85,247,0.25)]
        ">

          <h2 className="
            text-2xl font-semibold text-center mb-2
          ">
            Criar novo modelo
          </h2>

          <p className="
            text-center text-zinc-400 mb-10
          ">
            Escolha o tipo de IA que deseja criar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* ESCRITA */}
            <Link
              href="/dashboard/models/writing"
              className="
                group relative overflow-hidden
                rounded-2xl p-6
                border border-zinc-800
                bg-zinc-950
                transition-all duration-300
                hover:-translate-y-1
                hover:border-purple-500/70
              "
            >
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-br from-purple-500/10 to-transparent
                transition
              " />

              <div className="relative space-y-3">
                <div className="text-4xl">✍️</div>
                <h3 className="text-lg font-medium">
                  IA de Escrita
                </h3>
                <p className="text-sm text-zinc-400">
                  Letras, poemas e textos artísticos
                </p>
              </div>
            </Link>

            {/* IMAGEM */}
            <Link
              href="/dashboard/models/image"
              className="
                group relative overflow-hidden
                rounded-2xl p-6
                border border-zinc-800
                bg-zinc-950
                transition-all duration-300
                hover:-translate-y-1
                hover:border-pink-500/70
              "
            >
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-br from-pink-500/10 to-transparent
                transition
              " />

              <div className="relative space-y-3">
                <div className="text-4xl">🎨</div>
                <h3 className="text-lg font-medium">
                  IA de Imagem
                </h3>
                <p className="text-sm text-zinc-400">
                  Arte visual e estilos únicos
                </p>
              </div>
            </Link>

            {/* INSTRUMENTAL */}
            <Link
              href="/dashboard/models/instrumental"
              className="
                group relative overflow-hidden
                rounded-2xl p-6
                border border-zinc-800
                bg-zinc-950
                transition-all duration-300
                hover:-translate-y-1
                hover:border-indigo-500/70
              "
            >
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-br from-indigo-500/10 to-transparent
                transition
              " />

              <div className="relative space-y-3">
                <div className="text-4xl">🎧</div>
                <h3 className="text-lg font-medium">
                  IA Instrumental
                </h3>
                <p className="text-sm text-zinc-400">
                  Beats, trilhas e atmosferas
                </p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </main>
  )
}
