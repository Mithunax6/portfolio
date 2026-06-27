import { motion } from 'framer-motion';
import { Briefcase, Calendar, Github } from 'lucide-react';
import { QuoteBanner } from './QuoteBanner';

const experiences = [
  {
    role: 'Java Programming Intern',
    company: 'CodSoft',
    duration: '2026',
    github: 'https://github.com/Mithunax6/CODSOFT',
    showGithub: true,
    bullets: [
      'Engineered multiple Java desktop utilities utilizing core OOP principles to enforce modularity.',
      'Implemented system logic, input validation metrics, and dynamic application states to optimize structural flow.',
      'Conducted iterative debugging, application performance profiling, and codebase testing routines.',
    ],
  },
  {
    role: 'Python Programming Intern',
    company: 'InternPe',
    duration: '2025',
    github: '#',
    showGithub: false,
    bullets: [
      'Developed lightweight Python applications utilizing structured functional loops, logic controls, and custom classes.',
      'Maintained features for score tracking, user verification profiles, and dynamic difficulty increments.',
      'Managed systemic testing parameters to debug errors and resolve application edge cases smoothly.',
    ],
  },
];

function TimelineItem({ role, company, duration, github, showGithub, bullets, index }: { role: string; company: string; duration: string; github: string; showGithub: boolean; bullets: string[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 sm:pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-accent-500 border-4 border-gray-50 dark:border-[#0A0A0F]" />

      {/* Card */}
      <div className="p-6 bg-white dark:bg-[#13131A] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-accent-500/50 transition-colors">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-accent-500/10 text-accent-500 border border-accent-500/30">
            {role}
          </span>
          {showGithub && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </a>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>{company}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        <ul className="space-y-2">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-accent-500">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0A0A0F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-2"
        >
          Internship Experience
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-accent-500 rounded-full mb-8"
        />

        <QuoteBanner quote="The expert in anything was once a beginner. — Helen Hayes" />

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <TimelineItem key={exp.company} {...exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
