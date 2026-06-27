import { motion } from 'framer-motion';
import { Github, Star } from 'lucide-react';
import { QuoteBanner } from './QuoteBanner';

const projects = [
  {
    title: 'Cloud File Summarizer',
    description:
      'Built a full-stack web application using React.js and Node.js that allows users to upload text files and receive instant summaries. Implemented multilingual support allowing users to upload documents in any language and receive summaries in their preferred language. Designed drag-and-drop file upload interface with REST API backend deployed on Render cloud platform.',
    tags: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/Mithunax6/cloud-file-summarizer',
    featured: true,
  },
  {
    title: 'Civic Issue Reporting and Resolution System',
    description:
      'Built a web-based reporting application allowing citizens to submit and trace community public utilities complaints. Created unified modules for system registration, operational progress tracking, and secure administrative review. Enhanced code reliability and UI rendering speeds using React.js workflows mapped against MySQL data instances.',
    tags: ['Java', 'React.js', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Mithunax6/CivicConcerns',
    featured: true,
  },
];

function ProjectCard({ title, description, tags, github, featured, index }: { title: string; description: string; tags: string[]; github: string; featured: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-[#13131A] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-accent-500/50 hover:shadow-lg hover:shadow-accent-500/20 transition-all overflow-hidden"
    >
      {/* Featured banner */}
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-cyan-500" />
      )}

      <div className="p-6">
        {featured && (
          <div className="flex items-center gap-1 text-xs font-medium text-accent-500 mb-3">
            <Star className="w-3 h-3 fill-accent-500" />
            Featured
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-accent-500/30 text-accent-500 rounded-lg hover:bg-accent-500/10 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-2"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-accent-500 rounded-full mb-8"
        />

        <QuoteBanner quote="First, solve the problem. Then, write the code. — John Johnson" />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} {...project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
