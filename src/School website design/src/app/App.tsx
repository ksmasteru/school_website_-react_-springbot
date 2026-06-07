import { useState } from 'react';
import { Menu, X, BookOpen, Users, Award, Calendar, MapPin, Phone, Mail, GraduationCap, ChevronRight } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const programs = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive curriculum from K-12 with advanced placement courses and honors programs."
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with an average student-to-teacher ratio of 15:1."
    },
    {
      icon: Award,
      title: "Award-Winning Faculty",
      description: "Experienced educators dedicated to nurturing every student's potential."
    },
    {
      icon: GraduationCap,
      title: "College Preparation",
      description: "95% college acceptance rate with comprehensive college counseling services."
    }
  ];

  const events = [
    {
      date: "June 15",
      title: "Open House",
      description: "Tour our campus and meet our faculty"
    },
    {
      date: "June 20",
      title: "Summer Camp Registration",
      description: "Sign up for our enrichment programs"
    },
    {
      date: "July 10",
      title: "Parent Information Session",
      description: "Learn about our curriculum and values"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">Oakwood Academy</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition">Programs</a>
              <a href="#admissions" className="text-gray-700 hover:text-blue-600 transition">Admissions</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
                <a href="#programs" className="text-gray-700 hover:text-blue-600 transition">Programs</a>
                <a href="#admissions" className="text-gray-700 hover:text-blue-600 transition">Admissions</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full">
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Empowering Tomorrow's Leaders
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-8">
                At Oakwood Academy, we provide a nurturing environment where students thrive academically,
                socially, and personally. Join our community of excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  Schedule a Tour <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc4MDc1NzU5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students learning"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">About Oakwood Academy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For over 50 years, we've been committed to providing exceptional education
              that prepares students for success in college and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1561089489-f13d5e730d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc4MDc1NzU5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Classroom learning"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-700">
                We believe in fostering a love of learning, critical thinking, and character development.
                Our holistic approach ensures that every student receives the support and challenge they need to excel.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Excellence in academic achievement</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Respect for diversity and inclusion</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Character development and integrity</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Innovation and creative thinking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Oakwood?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive educational experience that goes beyond the classroom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-blue-600 rounded-lg p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Students Enrolled</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">95%</div>
                <div className="text-blue-100">College Acceptance</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">15:1</div>
                <div className="text-blue-100">Student-Teacher Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Admissions</h2>
              <p className="text-lg text-gray-700 mb-8">
                We welcome families who share our commitment to academic excellence and character development.
                Our rolling admissions process makes it easy to join our community.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Submit Application</h4>
                    <p className="text-gray-600">Complete our online application form</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Campus Visit</h4>
                    <p className="text-gray-600">Tour our facilities and meet our faculty</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Student Interview</h4>
                    <p className="text-gray-600">Get to know us and let us know you</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Enrollment Decision</h4>
                    <p className="text-gray-600">Receive your admissions decision</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Start Application
              </button>
            </div>

            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc4MDc1NzU5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student studying"
                className="rounded-lg shadow-lg w-full h-auto"
              />

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{event.title}</div>
                        <div className="text-sm text-gray-600">{event.date} - {event.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Visit our campus or reach out to learn more about Oakwood Academy.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Education Lane<br />
                Springfield, ST 12345
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                Phone: (555) 123-4567<br />
                Fax: (555) 123-4568
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">
                info@oakwoodacademy.edu<br />
                admissions@oakwoodacademy.edu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6" />
                <span className="font-bold text-lg">Oakwood Academy</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students to reach their full potential through excellence in education.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#programs" className="hover:text-white transition">Programs</a></li>
                <li><a href="#admissions" className="hover:text-white transition">Admissions</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Parent Portal</a></li>
                <li><a href="#" className="hover:text-white transition">Student Portal</a></li>
                <li><a href="#" className="hover:text-white transition">Calendar</a></li>
                <li><a href="#" className="hover:text-white transition">News & Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-sm text-gray-400 mb-4">
                Stay updated with our latest news and events.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <span className="text-xs">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <span className="text-xs">T</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <span className="text-xs">in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Oakwood Academy. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}