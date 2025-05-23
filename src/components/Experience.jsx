"use client"
import { experiences } from "@/data"
import { Calendar } from "lucide-react"

export default function Experience() {
	return (
		<section id="experience" className="py-20 bg-gray-50 text-gray-900">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
							Experience
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							My Journey
						</h2>
						<div className="mx-auto h-1 w-20 bg-primary"></div>
					</div>
					<p className="max-w-[700px] text-gray-500 md:text-lg">
						Here is a summary of my professional experience and education.
					</p>
				</div>
				<div className="relative border-l-2 border-primary/20 pl-6">
					{experiences.map((exp, idx) => (
						<div key={idx} className="mb-12 flex items-start group">
							<div className="absolute -left-5 flex items-center justify-center bg-primary/10 rounded-full h-10 w-10">
								{exp.icon}
							</div>
							<div className="ml-6">
								<div className="flex items-center gap-2 mb-1">
									<h3 className="text-xl font-bold">{exp.title}</h3>
									<span className="text-primary text-sm font-semibold">
										{exp.company}
									</span>
								</div>
								<div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
									<Calendar className="h-4 w-4" />
									<span>{exp.period}</span>
									<span>•</span>
									<span>{exp.location}</span>
								</div>
								<p className="text-gray-600">{exp.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}