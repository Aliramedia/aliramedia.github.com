import { Code2, Smartphone, Globe, Zap, Shield, TrendingUp } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software',
      description: 'Tailored software solutions built to solve your unique business challenges and drive growth.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that engage users and enhance your brand presence.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications that convert visitors into customers.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Fast-loading, efficient applications optimized for speed and user experience.',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your data and user privacy.',
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Solutions that grow with your business, handling increased demand seamlessly.',
    },
  ]

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive solutions to transform your ideas into powerful digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="card p-8 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
