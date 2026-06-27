import { motion } from 'framer-motion';
import { Code, Globe, Server, Wrench, Brain } from 'lucide-react';
import { QuoteBanner } from './QuoteBanner';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    icon: Globe,
    title: 'Frontend Technologies',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    icon: Server,
    title: 'Backend & Databases',
    skills: ['Node.js', 'Python', 'Java', 'MySQL', 'DBMS'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab'],
  },
  {
    icon: Brain,
    title: 'Core CS Concepts',
    skills: ['Data Structures & Algorithms', 'OOP'],
  },
];

function SkillCard({ icon: Icon, title, skills, delay }: { icon: React.ElementType; title: string; skills: string[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className="p-6 bg-white dark:bg-[#13131A] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-accent-500/50 transition-colors"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-accent-500/10">
          <Icon className="w-6 h-6 text-accent-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span
            key={skill}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + idx * 0.05, duration: 0.3 }}
            className="px-3 py-1 text-sm rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/30"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-2"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-accent-500 rounded-full mb-8"
        />

        <QuoteBanner quote="An investment in knowledge pays the best interest. — Benjamin Franklin" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={category.title} {...category} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
