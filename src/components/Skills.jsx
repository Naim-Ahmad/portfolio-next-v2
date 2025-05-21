'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';

import bootstrap from '@/assets/icons/bootstrap.svg';
import css from '@/assets/icons/css3.svg';
import express from '@/assets/icons/expressjs.svg';
import git from '@/assets/icons/git.svg';
import github from '@/assets/icons/github-mark.svg';
import html from '@/assets/icons/html5.svg';
import javaScript from '@/assets/icons/javascript.svg';
import materialui from '@/assets/icons/Material UI.svg';
import mongodb from '@/assets/icons/mongodb.svg';
import mongoose from '@/assets/icons/Mongoose.js.svg';
import next from '@/assets/icons/Next.js.svg';
import nodejs from '@/assets/icons/node-js.svg';
import react from '@/assets/icons/react.svg';
import redux from '@/assets/icons/Redux.svg';
import scss from '@/assets/icons/Sass.svg';
import tailwind from '@/assets/icons/tailwindcss.svg';
import vscode from '@/assets/icons/vscode.svg';

const skillsData = [
  // Frontend
  { id: 1, technology: 'HTML', techIcon: html, category: 'Frontend' },
  { id: 2, technology: 'CSS', techIcon: css, category: 'Frontend' },
  { id: 3, technology: 'JavaScript', techIcon: javaScript, category: 'Frontend' },
  { id: 4, technology: 'React JS', techIcon: react, category: 'Frontend' },
  { id: 5, technology: 'Bootstrap', techIcon: bootstrap, category: 'Frontend' },
  { id: 6, technology: 'Next JS', techIcon: next, category: 'Frontend' },
  { id: 7, technology: 'Tailwind CSS', techIcon: tailwind, category: 'Frontend' },
  { id: 8, technology: 'Material UI', techIcon: materialui, category: 'Frontend' },
  { id: 9, technology: 'Redux Toolkit', techIcon: redux, category: 'Frontend' },
  { id: 11, technology: 'SCSS', techIcon: scss, category: 'Frontend' },

  // Backend
  { id: 12, technology: 'Node JS', techIcon: nodejs, category: 'Backend' },
  { id: 13, technology: 'Express JS', techIcon: express, category: 'Backend' },
  { id: 14, technology: 'MongoDB', techIcon: mongodb, category: 'Backend' },
  { id: 15, technology: 'Mongoose', techIcon: mongoose, category: 'Backend' },

  // Tools
  { id: 16, technology: 'VS Code', techIcon: vscode, category: 'Tools' },
  { id: 17, technology: 'Git', techIcon: git, category: 'Tools' },
  { id: 18, technology: 'GitHub', techIcon: github, category: 'Tools' },
];

function SkillCard({ technology, techIcon }) {
  return (
    <Card className="bg-[#202020] text-white transition-transform hover:scale-110 hover:bg-[#383535] cursor-pointer p-6 rounded-lg">
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <Image src={techIcon} alt={technology} width={80} height={80} className="mx-auto" />
        <p className=" font-semibold">{technology}</p>
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
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <section id="skills" className="py-10 text-center bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[3rem] sm:text-[4rem] font-bold text-black text-shadow-[white_0px_0px_2px]">
          SKILLS
        </h2>
        <div className="relative inline-block text-center font-extrabold text-xl mb-10">
          Technical Skills
        </div>
        {/* Tab Buttons */}
        <div className="flex justify-center mb-8 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-6 py-2 rounded-full font-semibold transition 
                ${activeTab === cat.key ? 'bg-white text-black shadow' : 'bg-[#222] text-white hover:bg-[#444]'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="mb-12">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {skillsData
              .filter(skill => skill.category === activeTab)
              .map((data) => (
                <SkillCard key={data.id} {...data} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}