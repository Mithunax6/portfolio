import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { QuoteBanner } from './QuoteBanner';

const education = [
  {
    institution: 'Hindusthan College of Engineering and Technology, Coimbatore',
    degree: 'B.Tech in Information Technology',
    period: '2023 – 2027',
    status: 'Pursuing',
    score: 'CGPA: 8.33 (Up to 5th Semester)',
    badgeColor: 'accent',
  },
  {
    institution: 'Namakkal Kongu Matric Hr. Sec. School, Namakkal',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2021 – 2023',
    status: '',
    score: '84.3%',
    badgeColor: 'gray',
  },
  {
    institution: 'Namakkal Kongu Matric Hr. Sec. School, Namakkal',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2020 – 2021',
    status: 'Passed',
    score: '',
    badgeColor: 'gray',
  },
];

function EducationItem({ institution, degree, period, status, score, badgeColor, index }: { institution: string; degree: string; period: string; status: string; score: string; badgeColor: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 sm:pl-12"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3 }}
        className={`absolute left-0 top-0 w-4 h-4 rounded-full ${
          badgeColor === 'accent'
            ? 'bg-accent-500 animate-pulse'
            : 'bg-gray-400 dark:bg-gray-600'
        } border-4 border-gray-50 dark:border-[#0A0A0F]`}
      />

      {/* Card */}
      <div className="p-6 bg-white dark:bg-[#13131A] rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          {status && (
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                badgeColor === 'accent'
                  ? 'bg-accent-500/10 text-accent-500 border border-accent-500/30'
                  : 'bg-gray-500/10 text-gray-500 border border-gray-500/30'
              }`}
            >
              {status}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
          {institution}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">{degree}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
          {score && (
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-accent-500" />
              <span className="text-accent-500 font-medium">{score}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-[#0A0A0F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-2"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-accent-500 rounded-full mb-8"
        />

        <QuoteBanner quote="Education is the most powerful weapon you can use to change the world. — Nelson Mandela" />

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-gray-300 to-gray-200 dark:via-gray-700 dark:to-gray-800" />

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <EducationItem key={edu.institution + edu.degree} {...edu} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
