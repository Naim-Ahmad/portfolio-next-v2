"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Get unique categories from projects and add "All" tab at the beginning
const baseCategories = [...new Set(projects.map((p) => p.category || "Other"))];
const categories = ["All", ...baseCategories];

const PROJECTS_PER_PAGE = 6;

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(
    Object.fromEntries(categories.map((cat) => [cat, PROJECTS_PER_PAGE]))
  );

  const handleLoadMore = (cat) => {
    setVisibleCount((prev) => ({
      ...prev,
      [cat]: prev[cat] + PROJECTS_PER_PAGE,
    }));
  };

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

        <Tabs defaultValue={categories[0]} className="w-full mt-12">
          <TabsList className="flex justify-center mb-8 gap-4 bg-transparent mx-auto flex-wrap h-auto md:h-9 md:flex-nowrap">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="px-6 py-2 md:text-lg md:px-8 md:py-6 cursor-pointer rounded-full font-semibold
                  data-[state=active]:bg-primary
                  data-[state=active]:text-white
                  shadow
                  w-fit
                  border-primary
                  bg-white text-black hover:bg-primary hover:text-white transition"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((cat) => {
            // If "All", show all projects, otherwise filter by category
            const filtered =
              cat === "All"
                ? projects
                : projects.filter((p) => (p.category || "Other") === cat);
            const showCount = visibleCount[cat] || PROJECTS_PER_PAGE;
            return (
              <TabsContent key={cat} value={cat}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.slice(0, showCount).map((project, idx) => (
                    <Card
                      key={project.title + idx}
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
                {filtered.length > showCount && (
                  <div className="flex justify-center mt-8">
                    <Button onClick={() => handleLoadMore(cat)}>
                      Load More
                    </Button>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
