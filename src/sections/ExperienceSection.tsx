
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { TimelineItem } from "@/components/TimelineItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample work experience data
const workExperience = [
  {
    id: 1,
    title: "Senior MERN Stack Developer",
    company: "TechCorp Inc.",
    date: "Jan 2021 - Present",
    description:
      "Leading development of enterprise web applications using the MERN stack. Architecting scalable solutions and mentoring junior developers.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Team Leadership"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    date: "Mar 2019 - Dec 2020",
    description:
      "Developed and maintained multiple web applications for clients across various industries. Implemented CI/CD pipelines and improved code quality.",
    tags: ["React", "Express", "MongoDB", "Docker", "AWS"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "WebCreative Agency",
    date: "Jun 2017 - Feb 2019",
    description:
      "Designed and built responsive user interfaces for client websites and web applications. Collaborated with UX/UI designers and backend developers.",
    tags: ["React", "Redux", "SASS", "JavaScript", "Bootstrap"],
  },
];

// Sample education data
const education = [
  {
    id: 1,
    title: "Master of Computer Science",
    company: "Tech University",
    date: "2015 - 2017",
    description:
      "Specialized in Software Engineering with a focus on web technologies and distributed systems.",
    tags: ["Algorithms", "System Design", "Web Development"],
  },
  {
    id: 2,
    title: "Bachelor of Computer Science",
    company: "State College",
    date: "2011 - 2015",
    description:
      "Graduated with honors. Completed projects in web development, database design, and software engineering.",
    tags: ["Programming", "Data Structures", "Database Systems"],
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    company: "Code Academy",
    date: "Summer 2016",
    description:
      "Intensive 12-week program focused on modern web development technologies and practices.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
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
