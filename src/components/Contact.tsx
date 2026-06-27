import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { QuoteBanner } from './QuoteBanner';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_o967ws9';
const EMAILJS_TEMPLATE_ID = 'template_3w1jxs9';
const EMAILJS_PUBLIC_KEY = 'zV1L0bV1RetULtFpC';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setIsError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setIsError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0A0A0F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-2"
        >
          Let's Connect
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-accent-500 rounded-full mb-8"
        />

        <QuoteBanner quote="Your network is your net worth. — Porter Gale" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Open to Opportunities
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Feel free to reach out for collaborations, internships, or just a hello!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&to=mithuna0673@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/mithuna-r-3b78a233b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-500 text-accent-500 hover:bg-accent-500/10 font-medium rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              View LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-16 p-8 bg-gray-50 dark:bg-[#13131A] rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4"
              >
                <CheckCircle className="w-10 h-10 text-green-500" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'll get back to you soon.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="p-8 bg-gray-50 dark:bg-[#13131A] rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-colors text-gray-800 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-colors text-gray-800 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-colors text-gray-800 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-colors resize-none text-gray-800 dark:text-white"
                  placeholder="Your message..."
                />
              </div>

              {isError && (
                <p className="text-red-500 text-sm mb-4 text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={isSending || !formData.name || !formData.email || !formData.message}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Mail className="w-5 h-5 text-accent-500" />
            <span>mithuna0673@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Phone className="w-5 h-5 text-accent-500" />
            <span>+91 6383163419</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5 text-accent-500" />
            <span>Coimbatore, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
