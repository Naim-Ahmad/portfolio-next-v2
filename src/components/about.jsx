import { Button } from "@/components/ui/button"
import personalInfo from "@/data"
import { yearCountFrom } from "@/utilities/dateCountFrom"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 bg-primary/10 text-primary text-sm">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Know Me More</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
          <div className="relative">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg border-8 border-muted">
              <Image src="/assets/naim_using_pc-min.jpg" alt="About Me" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <p className="text-4xl font-bold">{yearCountFrom(personalInfo.careerStartDate)}+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">I'm {personalInfo.name}, a Web Developer</h3>
            <p className="text-muted-foreground">
              I help businesses and individuals bring their ideas to life on the web. With over {yearCountFrom(personalInfo.careerStartDate)} years of experience in
              web development, I've worked with clients from various industries to create beautiful, functional, and
              user-friendly websites.
            </p>
            <p className="text-muted-foreground">
              My journey in web development started when I was in college, and since then, I've been passionate about
              creating digital experiences that make a difference. I specialize in frontend development with React and
              Next.js, but I'm also proficient in backend technologies.
            </p>

            <div className="grid  sm:grid-cols-2 gap-4 pt-4">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">{personalInfo.name}</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">{personalInfo.email}</p>
              </div>
              <div>
                <p className="font-medium">Age:</p>
                <p className="text-muted-foreground">{yearCountFrom(personalInfo.dateOfBirth)}</p>
              </div>
              <div>
                <p className="font-medium">From:</p>
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </div>
            </div>

            <Button size="lg" className="mt-4" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
