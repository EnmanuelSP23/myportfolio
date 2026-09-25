export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-6 sm:px-12 max-w-4xl mx-auto bg-white scroll-mt-16">
      <div className="w-full space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-gray-600 max-w-xl leading-relaxed">
          Looking for an IT professional? Let&apos;s talk about your next project or infrastructure needs.
        </p>
        <div className="space-y-4">
          <a
            href="mailto:enmanuel@example.com"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            enmanuel@example.com
          </a>
        </div>
        <div className="flex gap-4 pt-2">
          {["GitHub", "LinkedIn", "Resume"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-mono"
            >
              {link} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
