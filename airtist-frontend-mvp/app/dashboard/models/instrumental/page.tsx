import PageWrapper from '@/components/PageWrapper'

export default function InstrumentalPage() {
  return (
    <PageWrapper
      title="IA Instrumental"
      subtitle="Criação de beats e trilhas"
    >
      <button className="w-full py-3 rounded-xl
        bg-gradient-to-r from-purple-500 to-pink-500">
        Gerar instrumental
      </button>
    </PageWrapper>
  )
}
