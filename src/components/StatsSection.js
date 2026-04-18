import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      number: '10,000+',
      label: 'Verified Tutors',
      description: 'Qualified educators across all subjects and levels',
    },
    {
      number: '50,000+',
      label: 'Active Students',
      description: 'Learners achieving their educational goals',
    },
    {
      number: '1M+',
      label: 'Sessions Completed',
      description: 'Successful learning moments created',
    },
    {
      number: '4.9/5',
      label: 'Average Rating',
      description: 'Based on 25,000+ verified reviews',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
