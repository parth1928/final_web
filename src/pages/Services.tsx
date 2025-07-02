import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Building, 
  Briefcase, 
  CreditCard, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  Calculator
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'home-loan',
      icon: HomeIcon,
      title: 'Home Loans',
      description: 'Turn your dream of owning a home into reality with our comprehensive home loan solutions.',
      color: 'from-blue-500 to-blue-600',
      forWhom: 'First-time home buyers, those looking to upgrade, or investors',
      benefits: [
        'Competitive interest rates starting from 8.5%',
        'Loan amount up to ₹10 crores',
        'Tenure up to 30 years',
        'Minimal processing fees',
        'Quick approval process'
      ],
      eligibility: [
        'Age: 21-65 years',
        'Minimum income: ₹25,000/month',
        'CIBIL Score: 750+',
        'Employment: Salaried/Self-employed'
      ],
      documents: [
        'Identity & Address Proof',
        'Income Documents',
        'Bank Statements (6 months)',
        'Property Documents',
        'Photos of Property'
      ]
    },
    {
      id: 'mortgage-loan',
      icon: Building,
      title: 'Mortgage Loans',
      description: 'Leverage your property value to meet your financial requirements with secured mortgage loans.',
      color: 'from-green-500 to-green-600',
      forWhom: 'Property owners needing funds for business, education, or personal needs',
      benefits: [
        'Lower interest rates due to collateral',
        'High loan amounts up to 80% of property value',
        'Flexible repayment options',
        'Multi-purpose usage',
        'Tax benefits available'
      ],
      eligibility: [
        'Age: 21-70 years',
        'Property ownership mandatory',
        'CIBIL Score: 700+',
        'Clear property title'
      ],
      documents: [
        'Property Papers',
        'Identity & Income Proof',
        'Bank Statements',
        'Property Valuation Report',
        'NOC from Society/Builder'
      ]
    },
    {
      id: 'project-financing',
      icon: TrendingUp,
      title: 'Project Financing',
      description: 'Fund your business projects and expansion plans with tailored project financing solutions.',
      color: 'from-purple-500 to-purple-600',
      forWhom: 'Businesses planning expansion, new projects, or infrastructure development',
      benefits: [
        'Large ticket financing',
        'Structured repayment based on cash flows',
        'Competitive rates for viable projects',
        'Professional project evaluation',
        'Long-term financing options'
      ],
      eligibility: [
        'Established business (2+ years)',
        'Viable project with clear ROI',
        'Good credit history',
        'Adequate collateral'
      ],
      documents: [
        'Project Report & DPR',
        'Financial Statements',
        'Business Registration',
        'Collateral Documents',
        'Environmental Clearances'
      ]
    },
    {
      id: 'business-loan',
      icon: Briefcase,
      title: 'Business Loans',
      description: 'Fuel your business growth with working capital and expansion loans tailored to your needs.',
      color: 'from-orange-500 to-orange-600',
      forWhom: 'SMEs, startups, and established businesses needing working capital',
      benefits: [
        'Quick disbursement in 48-72 hours',
        'Minimal documentation',
        'Flexible repayment terms',
        'No collateral for amounts up to ₹50 lakhs',
        'Competitive interest rates'
      ],
      eligibility: [
        'Business vintage: 1+ year',
        'Annual turnover: ₹10 lakhs+',
        'CIBIL Score: 650+',
        'Profit for last 2 years'
      ],
      documents: [
        'Business Registration',
        'GST Returns',
        'Bank Statements',
        'ITR for 2 years',
        'Financial Statements'
      ]
    },
    {
      id: 'personal-loan',
      icon: CreditCard,
      title: 'Personal Loans',
      description: 'Meet your personal financial needs with our quick and hassle-free personal loan solutions.',
      color: 'from-red-500 to-red-600',
      forWhom: 'Individuals needing funds for weddings, travel, medical emergencies, or other personal needs',
      benefits: [
        'Instant approval and disbursement',
        'No collateral required',
        'Flexible loan amounts',
        'Competitive interest rates',
        'Minimal documentation'
      ],
      eligibility: [
        'Age: 21-60 years',
        'Minimum income: ₹20,000/month',
        'CIBIL Score: 700+',
        'Employment stability (1+ year)'
      ],
      documents: [
        'Identity & Address Proof',
        'Income Proof',
        'Bank Statements (3 months)',
        'Employment Certificate',
        'Recent Photographs'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Loan Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive loan solutions designed to meet your diverse financial needs. 
            From home loans to business financing, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-12`}>
                {/* Service Info */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-gray-600">{service.forWhom}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Key Benefits
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105`}
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Service Details Card */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
                    {/* Eligibility */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Users className="h-5 w-5 text-blue-500 mr-2" />
                        Eligibility Criteria
                      </h4>
                      <ul className="space-y-2">
                        {service.eligibility.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Documents */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FileText className="h-5 w-5 text-orange-500 mr-2" />
                        Required Documents
                      </h4>
                      <ul className="space-y-2">
                        {service.documents.map((doc, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* EMI Calculator CTA */}
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <Calculator className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-3">Calculate your EMI and plan your finances</p>
                      <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        Use EMI Calculator
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Simple Process</h2>
            <p className="text-xl text-gray-600">Get your loan approved in just 4 easy steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', desc: 'Fill out our simple application form' },
              { step: '02', title: 'Document Verification', desc: 'Our team will verify your documents' },
              { step: '03', title: 'Loan Processing', desc: 'We process your loan with our bank partners' },
              { step: '04', title: 'Disbursement', desc: 'Get your loan amount disbursed quickly' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:shadow-lg transition-shadow">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply for a Loan?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Choose the loan that best fits your needs and start your application process today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;