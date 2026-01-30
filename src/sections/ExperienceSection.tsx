import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { TimelineItem } from "@/components/TimelineItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample work experience data
const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Qbent Technologies Pvt. Ltd.",
    date: "Aug 2022 - Present",
    description:
      "Leading development of enterprise web applications using the MERN stack. Architecting scalable solutions and mentoring developers.",
    tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Git"],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Webhibe Technologies Pvt. Ltd.",
    date: "Feb 2021 - Aug 2022",
    description:
      "Developed and maintained multiple web applications for clients across various industries.Improved code quality.",
    tags: ["React", "Firebase", "Node.js", "Git"],
  },
];

// Sample education data
const education = [
  {
    id: 1,
    title: "Full Stack Web Development",
    company: "Simplilearn",
    date: "2025",
    description:
      "Intensive 9 months program focused on modern web development technologies and practices.",
    tags: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "Git",
      "Agile",
    ],
  },
  {
    id: 2,
    title: "Master of Computer Applications",
    company: "Jaipur Engineering College & Research Centre University",
    date: "2021 - 2023",
    description:
      "Specialized in Software Engineering with a focus on web technologies and distributed systems.",
    tags: ["Software Engineering", "Web Technologies", "Distributed Systems"],
  },
  {
    id: 3,
    title: "Bachelor of Computer Applications",
    company: "Maulana Abul Kalam Azad University of Technology",
    date: "2015 - 2019",
    description:
      "Graduated with honors. Completed projects in web development, database design, and software engineering.",
    tags: ["Web Development", "Database Design", "Software Engineering"],
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-muted/30">
      <SectionTitle
        title="Experience & Education"
        subtitle="My professional journey and academic background"
      />

      <Tabs defaultValue="work" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="work">Work Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        <TabsContent value="work" className="animate-fade-in">
          <div className="space-y-0">
            {workExperience.map((item) => (
              <TimelineItem
                key={item.id}
                title={item.title}
                company={item.company}
                date={item.date}
                description={item.description}
                tags={item.tags}
                type="work"
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="education" className="animate-fade-in">
          <div className="space-y-0">
            {education.map((item) => (
              <TimelineItem
                key={item.id}
                title={item.title}
                company={item.company}
                date={item.date}
                description={item.description}
                tags={item.tags}
                type="education"
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}
