import { ArrowRight, Code2, Smartphone, Globe } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-dark dark:to-gray-900">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build Your Digital
            <span className="gradient-text block"> Future With Us</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Aliramedia is a specialist mobile apps, custom software and websites development company based in Makassar, Indonesia. We partner with companies to develop simple solutions for tough problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:+6285157944600" className="btn-primary inline-flex items-center justify-center">
              Get Started <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#portfolio" className="btn-outline inline-flex items-center justify-center">
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div>
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className="text-gray-600 dark:text-gray-400">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">30+</p>
              <p className="text-gray-600 dark:text-gray-400">Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">5+</p>
              <p className="text-gray-600 dark:text-gray-400">Years</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden md:grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="card p-8 flex flex-col items-center justify-center min-h-64 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <Code2 size={48} className="mb-4" />
            <p className="font-semibold text-center">Custom Software</p>
          </div>
          <div className="card p-8 flex flex-col items-center justify-center min-h-64 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white mt-6">
            <Smartphone size={48} className="mb-4" />
            <p className="font-semibold text-center">Mobile Apps</p>
          </div>
          <div className="card p-8 flex flex-col items-center justify-center min-h-64 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
            <Globe size={48} className="mb-4" />
            <p className="font-semibold text-center">Web Development</p>
          </div>
          <div className="card p-8 flex flex-col items-center justify-center min-h-64 bg-gradient-to-br from-indigo-500 to-blue-600 text-white mt-6">
            <Code2 size={48} className="mb-4" />
            <p className="font-semibold text-center">Full Stack Solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
