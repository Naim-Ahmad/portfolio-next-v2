import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Figma, FileCode2, Globe, Layers } from "lucide-react"

export default function Services() {
  const skills = [
    {
      icon: <FileCode2 className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and MongoDB.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "JavaScript / TypeScript",
      description: "Proficient in modern JavaScript and TypeScript for building scalable web applications.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "End-to-end development from database design to frontend implementation.",
    },
    {
      icon: <Figma className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces and experiences.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Performance",
      description: "Optimizing websites for speed, accessibility, and search engine visibility.",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Do</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            I specialize in a range of technologies and skills to deliver high-quality web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-background/50 dark:backdrop-blur-sm"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-4xl font-bold text-primary">90%</div>
            <p className="text-muted-foreground text-center">HTML/CSS</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-4xl font-bold text-primary">85%</div>
            <p className="text-muted-foreground text-center">JavaScript</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-4xl font-bold text-primary">80%</div>
            <p className="text-muted-foreground text-center">React/Next.js</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-4xl font-bold text-primary">75%</div>
            <p className="text-muted-foreground text-center">Node.js</p>
          </div>
        </div>
      </div>
    </section>
  )
}
