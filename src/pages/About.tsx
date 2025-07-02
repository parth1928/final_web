import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  Shield,
  CheckCircle,
  Building2
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Bank Partners' },
    { number: '₹100Cr+', label: 'Loans Facilitated' },
    { number: '99%', label: 'Approval Rate' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We believe in complete transparency throughout the loan process with no hidden charges.'
    },
    {
      icon: Clock,
      title: 'Speed',
      description: 'Quick loan processing and approval to meet your urgent financial requirements.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Their success is our success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in service delivery and maintain the highest professional standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dynamic Teamwork</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We are a trusted loan consulting and facilitation company committed to helping 
              individuals and businesses achieve their financial goals through smart lending solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded with the vision to simplify the loan process for individuals and businesses, 
                  Dynamic Teamwork Pvt. Ltd. has grown to become a trusted name in the financial services industry.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our journey began with a simple idea: to bridge the gap between borrowers and lenders 
                  by providing transparent, efficient, and customer-centric loan facilitation services. 
                  Today, we work with all major private banks and NBFCs to ensure our clients get the 
                  best possible deals for their loan requirements.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Guidance</h4>
                    <p className="text-gray-600">Professional advice tailored to your financial situation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Wide Network</h4>
                    <p className="text-gray-600">Strong partnerships with 50+ banks and NBFCs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Processing</h4>
                    <p className="text-gray-600">Streamlined processes for faster loan approvals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To democratize access to financial services by providing transparent, 
                  efficient, and customer-centric loan facilitation services that empower 
                  individuals and businesses to achieve their financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To democratize access to financial services by providing transparent, efficient, 
                and customer-centric loan facilitation services that empower individuals and 
                businesses to achieve their financial goals with confidence and ease.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become India's most trusted and preferred loan facilitation company, 
                known for our integrity, innovation, and commitment to customer success. 
                We envision a future where accessing credit is simple, transparent, and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide us in everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <value.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">We're here to serve you with our professional services</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        215, Highway Mall, Nr, Satyamev Hospital,<br />
                        Highway Road, Chandkheda,<br />
                        Ahmedabad - 382424, Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
                      <p className="text-gray-600">+91 9978522542</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Address</h4>
                      <p className="text-gray-600">dhyeychavda63@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Schedule a Consultation
              </Link>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5234567890!2d72.627856!3d23.075856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8332b5555555%3A0x7777777777777777!2sHighway%20Mall%2C%20Chandkheda%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dynamic Teamwork Office Location"
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Highway Mall, Chandkheda</h4>
                <p className="text-gray-600 text-sm">
                  Easily accessible location with ample parking facility. 
                  Located near Satyamev Hospital on Highway Road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have successfully obtained their loans through our services.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Start Your Loan Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;