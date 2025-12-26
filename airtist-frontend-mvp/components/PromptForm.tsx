'use client'

import { useState } from 'react'

type Props = {
  onGenerate: (prompt: string) => void
  loading: boolean
}

export default function PromptForm({ onGenerate, loading }: Props) {
  const [mood, setMood] = useState('dark')
  const [style, setStyle] = useState('grunge')
  const [details, setDetails] = useState('')

  function handleSubmit() {
    const finalPrompt = `
      ${mood} mood,
      ${style} style,
      ${details}
    `
    onGenerate(finalPrompt.trim())
  }

  return (
    <div className="space-y-4">

      <select
        className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      >
        <option value="dark">Dark</option>
        <option value="sad">Sad</option>
        <option value="aggressive">Aggressive</option>
      </select>

      <select
        className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      >
        <option value="grunge">Grunge</option>
        <option value="anime">Anime</option>
        <option value="cyberpunk">Cyberpunk</option>
      </select>

      <textarea
        className="w-full p-4 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500"
        rows={3}
        placeholder="Detalhes extras (opcional)"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="
          w-full py-3 rounded-xl font-medium
          bg-gradient-to-r from-purple-500 to-pink-500
          text-white hover:opacity-90 transition
          disabled:opacity-50
        "
      >
        {loading ? 'Gerando...' : 'Gerar arte'}
      </button>

    </div>
  )
}