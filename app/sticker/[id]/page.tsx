"use client"
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const stickers = {
  'javascript': { name: 'JavaScript', price: 3.99, description: 'Show your love for JavaScript with this sleek sticker.' },
  'python': { name: 'Python', price: 3.99, description: 'Perfect for Python enthusiasts and snake charmers alike.' },
  'react': { name: 'React', price: 4.99, description: 'React to this awesome sticker for your favorite library.' },
  'nodejs': { name: 'Node.js', price: 4.99, description: 'Node your way through servers with this cool sticker.' },
}

export function generateStaticParams() {
  return Object.keys(stickers).map((id) => ({ id }))
}

export default function StickerDetails() {
  const { id } = useParams()
  const sticker = stickers[id as keyof typeof stickers]
  const [quantity, setQuantity] = useState(1)

  if (!sticker) {
    return <div className="container mx-auto mt-10 text-center">Sticker not found</div>
  }

  return (
    <div className="container mx-auto mt-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>{sticker.name} Sticker</CardTitle>
          <CardDescription>{sticker.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-square bg-muted rounded-md mb-4"></div>
          <p className="text-2xl font-bold mb-4">${sticker.price.toFixed(2)}</p>
          <div className="flex items-center space-x-4">
            <Label htmlFor="quantity">Quantity:</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Add to Cart - ${(sticker.price * quantity).toFixed(2)}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}