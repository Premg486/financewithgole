export function AboutPage() {
  const certifications = [
    'Government Certified Auditor of Co-Operative Societies',
    'Trust Authorised Auditor',
    'Registered Tax Consultant',
    'Bachelor of Commerce (B.Com)',
    'Government Diploma in Co-operation & Accountancy (GDC & A)',
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Accuracy',
      desc: 'We ensure precision in every audit, filing, and financial document we prepare.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      desc: 'Honesty and transparency are at the core of all our client relationships.',
    },
    {
      icon: '⏱️',
      title: 'Timeliness',
      desc: 'We understand the importance of deadlines and always deliver on time.',
    },
    {
      icon: '💡',
      title: 'Expertise',
      desc: 'Our team stays updated with the latest tax laws and compliance requirements.',
    },
    {
      icon: '👥',
      title: 'Client-Centric',
      desc: 'Every client receives personalized attention and tailored solutions.',
    },
    {
      icon: '🔒',
      title: 'Confidentiality',
      desc: 'Your financial information is always kept secure and confidential.',
    },
  ];

  const timeline = [
    { year: '2009', event: 'Establishment of GOLE & ASSOCIATES' },
    { year: '2012', event: 'Government Certification as Co-Operative Society Auditor' },
    { year: '2015', event: 'Trust Authorised Auditor Certification' },
    { year: '2018', event: 'Expanded services to include GST consultancy' },
    { year: '2020', event: 'Digital transformation and online services' },
    { year: '2024', event: 'Serving 500+ satisfied clients' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GOLE & ASSOCIATES</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              A trusted name in audit and tax consultancy, serving businesses, societies, and trusts 
              across Navi Mumbai with professional financial services since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Your Trusted Partner in Financial Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                GOLE & ASSOCIATES was founded with a vision to provide reliable, accurate, and timely 
                financial services to businesses and organizations in the Navi Mumbai region. Over the 
                years, we have established ourselves as a go-to firm for society audits, trust audits, 
                tax consultancy, and various registration services.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our commitment to excellence, combined with deep expertise in Indian financial regulations, 
                has helped us build lasting relationships with our clients. We take pride in our government 
                certifications, which authorize us to conduct official audits for co-operative societies 
                and trusts.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you need assistance with income tax filing, GST registration, or a comprehensive 
                society audit, GOLE & ASSOCIATES is here to guide you every step of the way.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    RG
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Rajaram S. Gole</h3>
                    <p className="text-gray-600">Proprietor & Lead Consultant</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 font-medium">Educational Qualifications:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-accent-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Bachelor of Commerce (B.Com)
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-accent-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      GDC & A (Govt. Diploma in Co-operation & Accountancy)
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-700 font-medium mb-3">Certifications & Authorizations:</p>
                  <ul className="space-y-2">
                    {certifications.slice(0, 3).map((cert, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our humble beginnings to becoming a trusted name in audit and tax consultancy, 
              here's how we've grown over the years.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-white p-6 rounded-xl shadow-md inline-block ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <span className="text-2xl font-bold text-primary-600">{item.year}</span>
                      <p className="text-gray-700 mt-2">{item.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary-600 rounded-full items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at GOLE & ASSOCIATES
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-primary-200 max-w-2xl mx-auto">
              We are proud to hold these government-recognized certifications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent-600 to-accent-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-accent-100 text-lg mb-8">
            Experience the difference of working with a certified, experienced, and dedicated team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9029994768"
              className="inline-flex items-center gap-2 bg-white text-accent-700 hover:bg-accent-50 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/918425854768"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-800 hover:bg-accent-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
