"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function StickerDetails({ sticker, id }: { sticker: { name: string, price: number, description: string }, id: string }) {
  const [quantity, setQuantity] = useState(1)

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