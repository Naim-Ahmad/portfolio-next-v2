import logo from "@/assets/logo.jpg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import personalInfo from "@/data"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-12 border-t">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="font-bold text-2xl flex items-center">
              <Image
                src={logo}
                alt="Naim Ahmad"
                width={60}
                height={60}
                className="rounded-full"
                priority
              />
              Naim Ahmad
            </Link>
            <p className="text-muted-foreground">
              A passionate web developer creating beautiful and functional websites.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href={personalInfo.github} target="_blank">
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
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={personalInfo.linkedin} target="_blank">
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
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              {/* facebook */}
              <Button variant="ghost" size="icon" asChild>
                <Link href={personalInfo.facebook} target="_blank">
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
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v10h4V15h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">More</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">
                Reviews
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
             
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to my newsletter to receive updates on my latest projects and blog posts.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
