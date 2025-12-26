import PageWrapper from '@/components/PageWrapper'

export default function WritingPage() {
  return (
    <PageWrapper
      title="IA de Escrita"
      subtitle="Criação de textos artísticos"
    >
      <textarea
        className="w-full h-40 p-4 rounded-xl
          bg-zinc-900 border border-zinc-700 text-white"
        placeholder="Digite seu prompt..."
      />
    </PageWrapper>
  )
}
