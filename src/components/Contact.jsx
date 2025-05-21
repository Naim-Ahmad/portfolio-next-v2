"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import personalInfo from "@/data"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or email service
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get In Touch</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Feel free to reach out if you have any questions or want to work together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="bg-muted/30 dark:bg-background/50 dark:backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Location</h3>
              <p className="text-muted-foreground">{personalInfo.location}</p>
            </CardContent>
          </Card>

          <Card className="bg-muted/30 dark:bg-background/50 dark:backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-muted-foreground">{personalInfo.email}</p>
            </CardContent>
          </Card>

          <Card className="bg-muted/30 dark:bg-background/50 dark:backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-muted-foreground">{personalInfo.phone}</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-8 mt-12 ">
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d58960.521867817115!2d91.8295113!3d22.5404509!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1670678585616!5m2!1sen!2sbd"
              style={{ border: 0, height: "100%", width: "100%" }}
              loading="lazy"
            ></iframe>
          </div>

          <Card className="dark:bg-background/50 dark:backdrop-blur-sm flex-1">
            <CardContent className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to talk about..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
