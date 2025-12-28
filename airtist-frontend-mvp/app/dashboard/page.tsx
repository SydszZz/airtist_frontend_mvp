'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/app/lib/supabaseClient'

export default function Dashboard() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [activeTab, setActiveTab] = useState<'create' | 'search'>('create')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getSession()

      if (!data.session) {
        router.replace('/login')
        return
      }

      setUsername(data.session.user.email ?? 'Artista')
      setLoading(false)
    }

    checkAuth()
  }, [router])

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center text-zinc-400">
        Carregando dashboard...
      </main>
    )
  }

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

      {/* ABAS */}
      <div className="w-full flex justify-center px-4 pt-4 border-b border-zinc-800/60">
        <nav className="
          relative inline-flex items-center gap-1
          rounded-full border border-zinc-800
          bg-zinc-900/80
          px-1 py-1
        ">
          <button
            onClick={() => setActiveTab('create')}
            className={`
              rounded-full px-5 py-2 text-sm font-medium transition
              ${activeTab === 'create'
                ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white'
                : 'text-zinc-400 hover:text-white'}
            `}
          >
            ✨ Criar modelos
          </button>

          <button
            onClick={() => setActiveTab('search')}
            className={`
              rounded-full px-5 py-2 text-sm font-medium transition
              ${activeTab === 'search'
                ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white'
                : 'text-zinc-400 hover:text-white'}
            `}
          >
            🔍 Buscar modelos
          </button>
        </nav>
      </div>

      {/* CONTEÚDO CENTRAL */}
      <div className="flex-1 flex items-center justify-center px-6 pb-10">

        {/* CRIAR MODELOS */}
        {activeTab === 'create' && (
          <div className="
            w-full max-w-4xl
            bg-zinc-900/60 backdrop-blur-xl
            border border-zinc-800
            rounded-3xl p-10
          ">
            <h2 className="text-2xl font-semibold text-center mb-2">
              Criar novo modelo
            </h2>

            <p className="text-center text-zinc-400 mb-10">
              Escolha o tipo de IA que deseja criar
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* ESCRITA */}
              <Link
                href="/dashboard/models/writing"
                className="
                  group rounded-2xl p-6
                  border border-zinc-800 bg-zinc-950
                  transition hover:-translate-y-1 hover:border-purple-500/70
                "
              >
                <div className="space-y-3">
                  <div className="text-4xl">✍️</div>
                  <h3 className="text-lg font-medium">IA de Escrita</h3>
                  <p className="text-sm text-zinc-400">
                    Letras, poemas e textos artísticos
                  </p>
                </div>
              </Link>

              {/* IMAGEM */}
              <Link
                href="/dashboard/models/image"
                className="
                  group rounded-2xl p-6
                  border border-zinc-800 bg-zinc-950
                  transition hover:-translate-y-1 hover:border-pink-500/70
                "
              >
                <div className="space-y-3">
                  <div className="text-4xl">🎨</div>
                  <h3 className="text-lg font-medium">IA de Imagem</h3>
                  <p className="text-sm text-zinc-400">
                    Arte visual e estilos únicos
                  </p>
                </div>
              </Link>

              {/* INSTRUMENTAL */}
              <Link
                href="/dashboard/models/instrumental"
                className="
                  group rounded-2xl p-6
                  border border-zinc-800 bg-zinc-950
                  transition hover:-translate-y-1 hover:border-indigo-500/70
                "
              >
                <div className="space-y-3">
                  <div className="text-4xl">🎧</div>
                  <h3 className="text-lg font-medium">IA Instrumental</h3>
                  <p className="text-sm text-zinc-400">
                    Beats, trilhas e atmosferas
                  </p>
                </div>
              </Link>

            </div>
          </div>
        )}

        {/* BUSCAR MODELOS */}
        {activeTab === 'search' && (
          <div className="
            w-full max-w-4xl
            bg-zinc-900/60 backdrop-blur-xl
            border border-zinc-800
            rounded-3xl p-10
          ">
            <h2 className="text-2xl font-semibold text-center mb-2">
              Buscar modelos
            </h2>
            <p className="text-center text-zinc-500 text-sm">
              Em breve você poderá pesquisar modelos aqui.
            </p>
          </div>
        )}

      </div>
    </main>
  )
}
