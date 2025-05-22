import { services as skills } from "@/data"

export default function Services() {
  

  return (
    <section id="service" className="py-20 bg-black text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-black">My Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Do</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
          <p className="max-w-[700px] text-gray-400 md:text-lg">
            My services
            encompass both frontend and backend development, ensuring a seamless experience for users.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, idx) => (
            <ServiceCategory
              key={idx}
              title={skill.title}
              icon={skill.icon}
              description={skill.description}
            />
          ))}
        </div>

        {/* Service Lists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <ServiceItem title="Responsive Website Design" />
            <ServiceItem title="Web UI Development" />
            <ServiceItem title="Single Page Applications" />
            <ServiceItem title="Performance Optimization" />
            <ServiceItem title="Cross-Browser Compatibility" />
            <ServiceItem title="Accessibility Enhancements" />
            <ServiceItem title="Frontend Testing" />
          </div>

          <div className="space-y-4">
            <ServiceItem title="API Development & Integration" />
            <ServiceItem title="Database Design & Management" />
            <ServiceItem title="Authentication & Authorization" />
            <ServiceItem title="Server-Side Logic" />
            <ServiceItem title="Security Implementation" />
            <ServiceItem title="Backend Testing" />
            <ServiceItem title="Deployment & Environment Setup" />
          </div>

          <div className="space-y-4">
            <ServiceItem title="Full Website Development" />
            <ServiceItem title="MERN/MEVN Stack Projects" />
            <ServiceItem title="Real-Time Features" />
            <ServiceItem title="Authentication Systems" />
            <ServiceItem title="File Upload & Media Handling" />
            <ServiceItem title="API with Front-End Consumption" />
            <ServiceItem title="Deployment & Maintenance" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCategory({ title, icon, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-[#202020] border border-[#232323] shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ServiceItem({ title }) {
  return (
    <div className="flex items-center p-3 rounded-lg border border-[#232323] bg-[#181818] hover:bg-[#232323] transition-colors">
      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="font-medium text-white">{title}</span>
    </div>
  )
}

