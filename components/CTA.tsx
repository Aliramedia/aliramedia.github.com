import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let's work together to bring your digital vision to life. Contact us today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+6285157944600"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Call Us Now <ArrowRight size={20} />
          </a>
          <a
            href="mailto:info@aliramedia.com"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
