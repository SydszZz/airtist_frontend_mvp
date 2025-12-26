'use client'

type Props = {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function PageWrapper({
  title,
  subtitle,
  children
}: Props) {
  return (
    <main
      className="
        min-h-screen flex items-center justify-center p-6
        bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white
      "
    >
      <div
        className="
          w-full max-w-xl space-y-6
          bg-zinc-900/70 backdrop-blur
          border border-zinc-800
          rounded-2xl p-6 shadow-xl
        "
      >
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>

          {subtitle && (
            <p className="text-sm text-zinc-400">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </main>
  )
}
