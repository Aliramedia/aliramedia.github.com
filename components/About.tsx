import { Award, Users, Target, Lightbulb } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients to understand and exceed their expectations.',
    },
    {
      icon: Target,
      title: 'Quality',
      description: 'We deliver excellence in every line of code and every feature.',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Our team brings decades of combined experience to your project.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Aliramedia</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're passionate about transforming ideas into exceptional digital experiences.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Founded in 2019, Aliramedia has been at the forefront of digital innovation in Indonesia. We specialize in creating bespoke software solutions, mobile applications, and websites that drive real business value.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Our team of talented developers, designers, and strategists work collaboratively to understand your unique challenges and deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              With a track record of successful projects across various industries, we're committed to helping businesses leverage technology to achieve their goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-gray-600 dark:text-gray-400">Projects Delivered</p>
            </div>
            <div className="card p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">30+</p>
              <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
            </div>
            <div className="card p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">5+</p>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
            <div className="card p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-gray-600 dark:text-gray-400">Satisfied Customers</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our <span className="gradient-text">Core Values</span></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
