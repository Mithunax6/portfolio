import { motion } from 'framer-motion';

interface QuoteBannerProps {
  quote: string;
}

export function QuoteBanner({ quote }: QuoteBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="mb-8 pl-4 border-l-4 border-accent-500 bg-gray-100/50 dark:bg-white/5 py-3 px-4 rounded-r-lg"
    >
      <p className="italic text-gray-600 dark:text-gray-400 font-serif">{quote}</p>
    </motion.div>
  );
}
