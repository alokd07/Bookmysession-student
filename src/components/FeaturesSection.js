import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Expert Tutors',
      description: 'Hand-picked educators with proven teaching experience and qualifications across all subjects.',
      icon: '👨‍🎓',
      color: 'bg-blue-100',
    },
    {
      title: 'Flexible Schedule',
      description: 'Book sessions that fit your schedule. Learn at your own pace with no long-term commitments.',
      icon: '⏰',
      color: 'bg-green-100',
    },
    {
      title: 'Personalized Learning',
      description: 'Customized curriculum tailored to your learning goals and pace. One-on-one attention guaranteed.',
      icon: '🎯',
      color: 'bg-purple-100',
    },
    {
      title: 'Affordable Pricing',
      description: 'Transparent pricing with flexible payment options. No hidden fees or surprise charges.',
      icon: '💰',
      color: 'bg-orange-100',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold text-primary">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Makes Us <span className="text-primary">Different</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing the best learning experience through quality educators, flexible scheduling, and affordable pricing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
