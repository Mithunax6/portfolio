import { Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-gray-50 dark:bg-[#13131A] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#hero" className="text-3xl font-bold text-accent-500 hover:opacity-80 transition-opacity">
            MR.
          </a>

          {/* Social links */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/mithuna-r-3b78a233b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-accent-500/10 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-accent-500" />
            </a>
            <a
              href="https://github.com/Mithunax6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-accent-500/10 transition-colors group"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-accent-500" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=mithuna0673@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-accent-500/10 transition-colors group"
            >
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-accent-500" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with React + Tailwind by Mithuna R &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
