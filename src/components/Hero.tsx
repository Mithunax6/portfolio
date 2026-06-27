import { motion } from 'framer-motion';
import { MapPin, Download, ExternalLink, ChevronDown, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import profilePhoto from '../assets/profile.jpg';

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Java Programmer',
  'Python Developer',
  'Full-Stack Enthusiast',
];

const PROFILE_PHOTO: string = profilePhoto;

export function Hero() {
  const typewriterText = useTypewriter(roles, 100, 50, 2000);

  const name = 'Mithuna R';
  const nameLetters = name.split('');

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-50 dark:bg-[#0A0A0F] pt-16">
      {/* Floating background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-blob-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-blob-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-blob-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
        {/* Left side - Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-2"
          >
            Hi, I'm
          </motion.p>

          {/* Name with animated letters */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4"
          >
            <span className="flex flex-wrap justify-center lg:justify-start">
              {nameLetters.map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  className="gradient-text"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6 h-8"
          >
            <span className="text-accent-500">
              {typewriterText}
              <span className="animate-blink">|</span>
            </span>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 dark:text-gray-500 mb-8"
          >
            <MapPin className="w-5 h-5" />
            <span>Coimbatore, Tamil Nadu, India</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.a
              href="https://drive.google.com/file/d/1r0xnYpVanUrKhSgX4Aa1VlTCNqbAGG36/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg shadow-lg shadow-accent-500/25 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.button
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-500 text-accent-500 hover:bg-accent-500/10 font-medium rounded-lg transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              View Projects
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-6 justify-center lg:justify-start"
          >
            <a
              href="https://www.linkedin.com/in/mithuna-r-3b78a233b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-accent-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Mithunax6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-accent-500 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=mithuna0673@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-accent-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="tel:+916383163419"
              className="flex items-center gap-2 text-gray-500 hover:text-accent-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Phone</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Profile photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative">
            <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full profile-ring p-1">
              <div className="w-full h-full rounded-full bg-gray-50 dark:bg-[#0A0A0F] flex items-center justify-center overflow-hidden">
                <img
                  src={PROFILE_PHOTO}
                  alt="Mithuna R"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-accent-500" />
      </motion.div>
    </section>
  );
}
