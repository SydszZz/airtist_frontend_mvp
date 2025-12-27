type Props = {
  imageUrl: string
}

export default function ResultCard({ imageUrl }: Props) {
  return (
    <div className="mt-6 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt="Arte gerada"
        className="w-full object-cover hover:scale-105 transition"
      />
    </div>
  )
}