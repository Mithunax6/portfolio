import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase, Rocket } from 'lucide-react';
import { QuoteBanner } from './QuoteBanner';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { icon: GraduationCap, label: 'Hindusthan College Of Engineering And Technology', value: 'B.Tech IT', duration: '2023-2027',count: 0 },
  { icon: MapPin, label: 'Coimbatore', value: 'India', count: 0 },
  { icon: Briefcase, label: 'Internships', value: 'Completed', count: 2 },
  { icon: Rocket, label: 'Projects', value: 'Built', count: 2 },
];

function StatCard({ icon: Icon, label, value, count }: { icon: React.ElementType; label: string; value: string; count: number }) {
  const { count: animatedCount, ref } = useCountUp(count, 1500);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-white dark:bg-[#13131A] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-accent-500/50 transition-colors"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-accent-500/10">
          <Icon className="w-5 h-5 text-accent-500" />
        </div>
        {count > 0 && (
          <span className="text-2xl font-bold text-accent-500">{animatedCount}</span>
        )}
      </div>
      <p className="font-medium text-gray-800 dark:text-white">{label}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{value}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-2"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-accent-500 rounded-full mb-8"
        />

        <QuoteBanner quote="The more that you read, the more things you will know. — Dr. Seuss" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>

          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="border-l-4 border-accent-500 pl-6">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
                Eager to apply foundational technical skills and a collaborative mindset in a professional environment that values innovation, learning, and growth. Committed to contributing to strategic goals, enhancing team performance, and continuously developing both personally and professionally.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
