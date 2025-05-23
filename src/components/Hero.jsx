import profileImage from "@/assets/naim_ahmad.jpg"
import { Button } from "@/components/ui/button"
import personalInfo from "@/data"
import Image from "next/image"
import Link from "next/link"
import TypeEffect from "./TypeEffect"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-3 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg px-3 py-1 text-sm bg-primary/10 text-primary">Web Developer</div>
            <h1 className="text-4xl h-18 sm:h-auto font-bold tracking-tighter md:text-5xl">
              Hello, I'm <TypeEffect titles={['Naim Ahmad', 'a full stack developer']}/>
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              A passionate web developer creating beautiful and functional websites. I specialize in frontend
              development with React and Next.js, and in backend development with Node.js and Express.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#portfolio">View My Work</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href={personalInfo.github} target="_blank" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link href={personalInfo.linkedin} target="_blank" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href={personalInfo.facebook} className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </Link>
            </div>
          </div>
          <div className="relative lg:ml-auto">
            <div className="relative w-full aspect-square md:w-[400px] rounded-full overflow-hidden border-4 border-primary/20">
              <Image src={profileImage} alt="Profile" fill className="object-cover" placeholder="blur" priority />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/25 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  )
}
