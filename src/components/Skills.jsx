import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

import { skillsData } from '@/data';

function SkillCard({ technology, techIcon }) {
  return (
    <Card className="bg-[#202020] text-white transition-transform hover:scale-110 hover:bg-[#383535] cursor-pointer p-6 rounded-lg">
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <Image src={techIcon} alt={technology} width={80} height={80} className="mx-auto" />
        <p className="font-semibold">{technology}</p>
      </CardContent>
    </Card>
  );
}

const categories = [
  { key: 'Frontend', label: 'Front-end' },
  { key: 'Backend', label: 'Back-end' },
  { key: 'Tools', label: 'Tools' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-10 text-center bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 text-black py-1 text-sm">My Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Do</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            I specialize in a range of technologies and skills to deliver high-quality web solutions.
          </p>
        </div>
        <Tabs defaultValue="Frontend" className="w-full mt-6">
          {/* <TabsList className="mx-auto rounded-full">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="data-[state=active]:bg-white data-[state=active]:text-black rounded-full px-3 cursor-pointer py-2 bg-[#222] text-white hover:bg-[#444] transition"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList> */}
          <TabsList className="mx-auto rounded-full mb-6">

            {categories.map((cat) => (
              <TabsTrigger
                key={cat.key}
                value={cat.key}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-3 cursor-pointer py-2"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((cat) => (
            <TabsContent key={cat.key} value={cat.key}>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {skillsData
                  .filter(skill => skill.category === cat.key)
                  .map((data) => (
                    <SkillCard key={data.id} {...data} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}