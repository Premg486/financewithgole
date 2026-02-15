export function ServicesPage() {
  const services = [
    {
      category: 'Registration Services',
      items: [
        {
          title: 'Society Registration',
          icon: '🏢',
          desc: 'Complete assistance in registering Co-Operative Housing Societies, Credit Societies, and other types of societies under the Maharashtra Co-Operative Societies Act.',
          features: ['Documentation preparation', 'Application filing', 'Follow-up with authorities', 'Registration certificate'],
        },
        {
          title: 'Trust Registration',
          icon: '📋',
          desc: 'Professional assistance in registering Public Trusts and Private Trusts under the Bombay Public Trusts Act and Indian Trusts Act.',
          features: ['Trust deed drafting', 'Documentation support', 'Registration process', 'Compliance guidance'],
        },
        {
          title: 'GST Registration & Filing',
          icon: '📄',
          desc: 'End-to-end GST services including registration, monthly/quarterly returns filing, annual returns, and compliance management.',
          features: ['GST registration', 'GSTR-1, GSTR-3B filing', 'Annual returns', 'GST audit support'],
        },
        {
          title: 'PAN & TAN Registration',
          icon: '🆔',
          desc: 'Quick and hassle-free PAN and TAN registration services for individuals, businesses, trusts, and societies.',
          features: ['New PAN application', 'PAN correction', 'TAN registration', 'Document verification'],
        },
        {
          title: 'PT Registration & Filing',
          icon: '📝',
          desc: 'Professional Tax registration and monthly/annual filing services for businesses and employers in Maharashtra.',
          features: ['PT registration', 'Monthly returns', 'Annual returns', 'Compliance management'],
        },
        {
          title: 'Gumasta & Aadhaar Udyog',
          icon: '🏪',
          desc: 'Shop and Establishment Act registration (Gumasta License) and Udyam Registration (formerly Udyog Aadhaar) for MSMEs.',
          features: ['Gumasta license', 'Udyam registration', 'License renewal', 'Modification services'],
        },
      ],
    },
    {
      category: 'Audit Services',
      items: [
        {
          title: 'Society Accounts & Audit',
          icon: '📊',
          desc: 'Comprehensive audit services for Co-Operative Housing Societies as per Maharashtra Co-Operative Societies Act. Government certified auditor.',
          features: ['Statutory audit', 'Account maintenance', 'Compliance check', 'Audit report preparation'],
        },
        {
          title: 'Trust Accounts & Audit',
          icon: '📈',
          desc: 'Authorised audit services for Public and Private Trusts. Complete accounts maintenance and statutory compliance.',
          features: ['Trust audit', 'Account preparation', 'IT returns', 'Compliance certification'],
        },
        {
          title: 'Tax Audit',
          icon: '🏛️',
          desc: 'Tax audit services under Section 44AB of Income Tax Act for businesses exceeding the prescribed turnover limits.',
          features: ['Form 3CA/3CB', 'Form 3CD preparation', 'Tax audit report', 'Compliance verification'],
        },
      ],
    },
    {
      category: 'Tax & Filing Services',
      items: [
        {
          title: 'Income Tax Filing',
          icon: '💰',
          desc: 'Accurate and timely Income Tax Return filing for individuals, HUFs, firms, companies, trusts, and societies.',
          features: ['ITR preparation', 'Tax planning', 'Refund tracking', 'Assessment support'],
        },
        {
          title: 'TDS Filing',
          icon: '📑',
          desc: 'TDS return filing services including quarterly returns, TDS certificates, and compliance with TDS regulations.',
          features: ['Quarterly TDS returns', 'Form 16/16A', 'TDS certificates', 'Correction statements'],
        },
        {
          title: 'PF & ESIC Registration & Consultancy',
          icon: '👥',
          desc: 'Complete PF and ESIC registration, monthly filing, and compliance consultancy for employers.',
          features: ['PF registration', 'ESIC registration', 'Monthly filing', 'Compliance support'],
        },
      ],
    },
    {
      category: 'Other Services',
      items: [
        {
          title: 'Loan Consultancy',
          icon: '💳',
          desc: 'Expert guidance on various loan options including home loans, business loans, and society loans. Documentation and processing support.',
          features: ['Loan assessment', 'Documentation help', 'Bank coordination', 'Processing support'],
        },
        {
          title: 'Conveyance Deed',
          icon: '📜',
          desc: 'Complete assistance in obtaining Conveyance or Deemed Conveyance for Co-Operative Housing Societies.',
          features: ['Document preparation', 'Application filing', 'Authority follow-up', 'Registration support'],
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive audit, tax, and financial services tailored to meet your needs. 
              From society registration to tax filing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive range of services covers all your audit and tax needs. 
              Click on any service to learn more about how we can help you.
            </p>
          </div>

          {services.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 flex-1 bg-gradient-to-r from-primary-600 to-transparent rounded"></div>
                <h3 className="text-2xl font-bold text-primary-700">{category.category}</h3>
                <div className="h-1 flex-1 bg-gradient-to-l from-primary-600 to-transparent rounded"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary-300 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-accent-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/918425854768"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      Enquire Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures you get the best service with minimum hassle
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Share your requirements with us via call or WhatsApp' },
              { step: '02', title: 'Documentation', desc: 'We guide you on the required documents' },
              { step: '03', title: 'Processing', desc: 'Our team handles the complete process' },
              { step: '04', title: 'Delivery', desc: 'Receive your completed work on time' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Competitive & Transparent Pricing</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We believe in fair and transparent pricing. Our fees are competitive and we provide clear 
              estimates before starting any work. No hidden charges, no surprises.
            </p>
            <a
              href="tel:9029994768"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent-600 to-accent-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Service Not Listed?</h2>
          <p className="text-accent-100 text-lg mb-8">
            Contact us to discuss your specific requirements. We offer customized solutions for unique needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9029994768"
              className="inline-flex items-center gap-2 bg-white text-accent-700 hover:bg-accent-50 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 9029994768
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
