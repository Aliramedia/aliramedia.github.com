import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmad Wijaya',
      company: 'Tech Startup Indonesia',
      content: 'Aliramedia transformed our vision into reality. Their team was professional, responsive, and delivered beyond our expectations.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Siti Nurhaliza',
      company: 'E-Commerce Solutions',
      content: 'The mobile app they developed increased our customer engagement by 300%. Highly recommend their services!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Bambang Sutrisno',
      company: 'Financial Services Corp',
      content: 'Professional team with excellent technical skills. They understood our security requirements and delivered a robust solution.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Maria Santoso',
      company: 'Healthcare Innovations',
      content: 'Outstanding work on our patient management system. The attention to detail and commitment to quality was impressive.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Rudi Hartono',
      company: 'Manufacturing Corp',
      content: 'Great communication throughout the project. They delivered on time and on budget. Looking forward to future collaborations.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Dewi Lestari',
      company: 'Digital Marketing Agency',
      content: 'Aliramedia built us a website that perfectly represents our brand. Beautiful design and excellent functionality.',
      rating: 5,
      avatar: '👩‍💼',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped succeed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8">
              {/* Rating */}
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
