import { motion } from 'framer-motion';
import { Cloud, Code, Cpu, Sparkles, FlaskConical, ExternalLink } from 'lucide-react';
import { QuoteBanner } from './QuoteBanner';

const certifications = [
  {
    platform: 'NPTEL',
    name: 'Introduction to Cloud Computing',
    icon: Cloud,
    color: 'amber',
    pdfPath: '/certificates/nptelcloud.pdf',
  },
  {
    platform: 'NPTEL',
    name: 'Python for Data Science',
    icon: Code,
    color: 'amber',
    pdfPath: '/certificates/nptelpython.pdf',
  },
  {
    platform: 'Udacity',
    name: 'Introducing Generative AI with AWS',
    icon: Cpu,
    color: 'blue',
    pdfPath: '/certificates/udacity.pdf',
  },
  {
    platform: 'Coursera',
    name: 'Generative AI',
    icon: Sparkles,
    color: 'green',
    pdfPath: '/certificates/coursera.pdf',
  },
];

const workshops = [
  {
    title: 'Hands-on Practice on React.js',
    venue: 'Kongu Engineering College',
    icon: FlaskConical,
    pdfPath: '/certificates/workshop.pdf',
  },
];

const colorMap: Record<string, string> = {
  amber: 'border-amber-500/50 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  blue: 'border-blue-500/50 bg-blue-500/10 text-blue-600 dark:text-blue-400',
  green: 'border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400',
  teal: 'border-teal-500/50 bg-teal-500/10 text-teal-600 dark:text-teal-400',
};

function CertCard({
  platform,
  name,
  icon: Icon,
  color,
  index,
  pdfPath,
}: {
  platform: string;
  name: string;
  icon: React.ElementType;
  color: string;
  index: number;
  pdfPath: string;
}) {
  return (
    <motion.a
      href={pdfPath}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group p-6 bg-white dark:bg-[#13131A] rounded-xl border-t-4 ${colorMap[color].split(' ')[0]} border-gray-200 dark:border-gray-800 hover:border-accent-500/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer block`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colorMap[color].split(' ').slice(1).join(' ')}`}>
            <Icon className="w-5 h-5" />
          </div>
          <span className={`text-xs font-medium ${colorMap[color].split(' ').slice(2).join(' ')}`}>
            {platform}
          </span>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="text-gray-800 dark:text-white font-medium">{name}</p>
      <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        Click to view certificate →
      </p>
    </motion.a>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-2"
        >
          Certifications & Workshops
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-accent-500 rounded-full mb-8"
        />

        <QuoteBanner quote="Learning never exhausts the mind. — Leonardo da Vinci" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <CertCard key={cert.name} {...cert} index={idx} />
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Workshops</h3>
            {workshops.map((workshop, idx) => (
              <motion.a
                key={workshop.title}
                href={workshop.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-6 bg-white dark:bg-[#13131A] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-accent-500/50 hover:shadow-lg hover:-translate-y-1 transition-all block"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg border-teal-500/50 bg-teal-500/10">
                      <workshop.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30">
                      Workshop
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-800 dark:text-white font-medium mb-1">{workshop.title}</p>
                <p className="text-sm text-gray-500">{workshop.venue}</p>
                <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view certificate →
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
