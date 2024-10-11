import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Sticker, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">StickerCode</h1>
        <p className="text-xl mb-8">Express Your Love for Coding with Our Unique Stickers</p>
        <Button size="lg">Shop Now</Button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose StickerCode?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Code className="w-10 h-10 mb-2" />
                <CardTitle>High-Quality Designs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Crafted by developers for developers</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Sticker className="w-10 h-10 mb-2" />
                <CardTitle>Durable Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Long-lasting stickers for your gear</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 mb-2" />
                <CardTitle>Fast Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Quick delivery to your doorstep</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Stickers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'JavaScript', id: 'javascript' },
              { name: 'Python', id: 'python' },
              { name: 'React', id: 'react' },
              { name: 'Node.js', id: 'nodejs' }
            ].map((tech) => (
              <Card key={tech.id}>
                <CardHeader>
                  <CardTitle>{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted rounded-md mb-4"></div>
                  <Link href={`/sticker/${tech.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Stick Out?</h2>
        <p className="text-xl mb-8">Get your coding stickers today and show off your tech stack!</p>
        <Button size="lg" variant="secondary">Browse All Stickers</Button>
      </section>
    </div>
  );
}