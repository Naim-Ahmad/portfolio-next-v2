import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { skillsData } from '@/data';
import Image from 'next/image';

function SkillCard({ technology, techIcon }) {
  return (
    <Card className="bg-white text-gray-900 transition-transform hover:scale-105 hover:shadow-lg cursor-pointer p-6 rounded-lg border border-gray-200">
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
    <section id="skills" className="py-12 text-center bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 text-primary py-1 text-sm font-semibold">My Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Do</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
          <p className="max-w-[700px] text-gray-500 md:text-lg">
            I specialize in a range of technologies and skills to deliver high-quality web solutions.
          </p>
        </div>
        <Tabs defaultValue="Frontend" className="w-full mt-8">
          <TabsList className="mx-auto rounded-full mb-6 bg-gray-100 border border-gray-200 p-1 flex gap-2 w-fit">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.key}
                value={cat.key}
                className="data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-gray-600 rounded-full px-4 py-2 font-medium transition-colors border border-transparent data-[state=active]:border-primary"
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