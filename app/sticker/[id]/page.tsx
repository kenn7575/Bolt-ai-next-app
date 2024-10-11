import StickerDetails from './StickerDetails'

  const stickers = {
  'javascript': { name: 'JavaScript', price: 3.99, description: 'Show your love for JavaScript with this sleek sticker.' },
  'python': { name: 'Python', price: 3.99, description: 'Perfect for Python enthusiasts and snake charmers alike.' },
  'react': { name: 'React', price: 4.99, description: 'React to this awesome sticker for your favorite library.' },
  'nodejs': { name: 'Node.js', price: 4.99, description: 'Node your way through servers with this cool sticker.' },
}

export function generateStaticParams() {
  return Object.keys(stickers).map((id) => ({ id }))
}

export default function StickerPage({ params }: { params: { id: string } }) {
  const sticker = stickers[params.id as keyof typeof stickers]

  if (!sticker) {
    return <div className="container mx-auto mt-10 text-center">Sticker not found</div>
  }

  return <StickerDetails sticker={sticker} id={params.id} />
}