import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      title: "Real Estate & Development Website for Land & Build UK ",
      category: "Portfolio",
      image: "/assets/projects/landandbuild.jpg?height=300&width=400",
      description: "I designed and developed a modern, responsive portfolio website for Land & Build UK, a company specializing in land acquisition, property sales, and home development. The website showcases their services, featured projects, and company values with a clean and user-friendly interface. The goal was to build trust with potential clients and present their work in a professional and visually appealing way. The site is optimized for performance, accessibility, and seamless navigation across all devices.",
      short: "A modern, responsive portfolio website for Land & Build UK, showcasing their services and projects.",
      demoLink: "https://landandbuild.uk",
      githubLink: "#",
      skills: ["Next.js", "SCSS"],
    },
    {
      title: "Code Sync station - IT consulting company",
      category: "Web Application",
      image: "/assets/projects/codeSync.jpg?height=300&width=400",
      description: "CodeSync Station is an IT consultancy start-up that officially began operations in January 2024. The website serves as more than just a portfolio—it includes a robust management system accessible through a user-friendly dashboard for two types of users: Normal Users and Admins..",
      short: " A management system for an IT consultancy start-up with user-friendly dashboard.",
      demoLink: "https://landandbuild.uk",
      githubLink: "#",
      skills: ["Next.js", "SCSS"],
    },
    {
      title: "Audio Calling Implementation",
      category: "Web Application",
      image: "/assets/projects/calling.jpg?height=300&width=400",
      description: "I developed a custom audio calling system for the client's TeraByte Chat application based on their requirement. The system was implemented using PeerJS for peer-to-peer communication. To ensure reliable connectivity across various network conditions, I also set up a custom TURN server using Coturn. This end-to-end solution was fully tailored to the client's needs and successfully integrated into their application.",
      short: "A custom audio calling system for TeraByte Chat using PeerJS and a custom TURN server.",
      demoLink: "https://chat-app-five-roan.vercel.app/login_page",
      githubLink: "#",
      skills: ["Next.js", "Bootstrap", "PeerJS", "Coturn"],
    },
    {
      title: "Digital Dropout - Learning Management System",
      category: "LMS",
      image: "/assets/projects/dropout.png?height=300&width=400",
      description: `🔍 Overview: I collaborated with Rafayat Rakib, a renowned influencer and freelancer, to develop Digital Dropout, a cutting-edge Learning Management System (LMS). This platform is designed to revolutionize online education by providing a seamless experience for content creators and learners alike.
      🎯 Objective: The goal was to create a user-friendly LMS that allows content creators to easily upload and manage their courses, while providing learners with an intuitive interface for accessing educational materials.`,
      short: "A Learning Management System (LMS) for content creators and learners.",
      demoLink: "https://digitaldropouts.net/",
      githubLink: "#",
      skills: ["Next.js", "SCSS", "Redux Toolkit"],
    },
    {
      title: "Zaras Properties",
      category: "Portfolio",
      image: "/assets/projects/zaras-properties.png?height=300&width=400",
      description: `"Zaras Properties" is a property development company that embraces future home standards. There are smooth animations and also have type effects. and when you message them the message go to Gmail.`,
      demoLink: "https://zarasproperties.co.uk/",
      githubLink: "#",
    },
  
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div>
            <h2 className=" text-[3rem] sm:text-[4rem] font-bold text-white text-shadow-[var(--primary)_0px_0px_4px]">
              PORTFOLIO
            </h2>
            <div className="relative inline-block text-center font-extrabold text-xl">
              My Projects
            </div>
          </div>
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
