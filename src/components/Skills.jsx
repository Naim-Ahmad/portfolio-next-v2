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
        <h2 className="text-[3rem] sm:text-[4rem] font-bold text-black text-shadow-[white_0px_0px_2px]">
          SKILLS
        </h2>
        <div className="relative inline-block text-center font-extrabold text-xl mb-10">
          Technical Skills
        </div>
        <Tabs defaultValue="Frontend" className="w-full">
          <TabsList className="flex justify-center mx-auto mb-8 gap-4 bg-transparent">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.key}
                value={cat.key}
                className="py-2 px-4 md:px-8 md:py-6 md:text-lg rounded-full font-semibold
                  data-[state=active]:bg-white
                  data-[state=active]:text-black
                  data-[state=active]:shadow
                  bg-[#222] text-white hover:bg-[#444] transition"
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