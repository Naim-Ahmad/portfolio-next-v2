import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/data"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {


  return (
    <section id="portfolio" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Work</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Projects</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg group dark:bg-background/50 dark:backdrop-blur-sm"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="outline" className="rounded-full bg-white/20 backdrop-blur-sm" asChild>
                    <Link href={project.demoLink} target="_blank">
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full bg-white/20 backdrop-blur-sm" asChild>
                    <Link href={project.githubLink} target="_blank">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub Repository</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">{project.category}</div>
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.short}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
