"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1fd6f4a6-89ec-4fb1-ae29-885f113aa340.png"
            alt="Modern professional software development company hero background with sleek typography and clean layout"
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/844cf3cb-dad5-4913-aef5-91391836a00b.png"; 
            }}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to <span className="text-blue-400">xotoro.pvt.ltd</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            We craft innovative software solutions that drive your business forward. 
            From web applications to mobile apps, we deliver excellence.
          </p>
          <Button 
            size="lg" 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              About xotoro.pvt.ltd
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-600 mb-6">
                  Founded with a vision to transform businesses through technology, xotoro.pvt.ltd 
                  has been at the forefront of software innovation for over a decade.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team of experienced developers, designers, and strategists work collaboratively 
                  to deliver solutions that not only meet your current needs but also scale with your future growth.
                </p>
                <p className="text-lg text-gray-600">
                  We believe in building long-term partnerships with our clients, ensuring their success 
                  through reliable, efficient, and cutting-edge software solutions.
                </p>
              </div>
              <div>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c585687e-594b-46a0-af9a-28d24fce7487.png"
                  alt="Professional software development team collaboration workspace with modern office environment"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec35deb7-2b78-4e41-b2da-38ae582f8256.png"; 
                  }}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive software development services tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </div>
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Modern, responsive websites and web applications built with the latest technologies
                </CardDescription>
                <Button variant="outline" className="mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded"></div>
                </div>
                <CardTitle>Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Native and cross-platform mobile applications for iOS and Android devices
                </CardDescription>
                <Button variant="outline" className="mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded"></div>
                </div>
                <CardTitle>Cloud Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Scalable cloud infrastructure and deployment solutions for modern applications
                </CardDescription>
                <Button variant="outline" className="mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-orange-600 rounded"></div>
                </div>
                <CardTitle>Custom Software</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tailored software solutions designed specifically for your business requirements
                </CardDescription>
                <Button variant="outline" className="mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing some of our recent projects and successful implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46f8ae88-456e-4a10-a35a-d9022078e14b.png"
                  alt="E-commerce Platform showing a modern online shopping website with clean design and user-friendly interface"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7ae4c13-4ae7-473b-9fd8-4eb016303fa3.png"; 
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>
                  A comprehensive online shopping platform with advanced features and seamless user experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0da3c477-f2ce-4a9b-944f-5dbea31cf979.png"
                  alt="Healthcare Management System showing a medical software dashboard with patient data and analytics"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7ae4c13-4ae7-473b-9fd8-4eb016303fa3.png"; 
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Healthcare Management System</CardTitle>
                <CardDescription>
                  Digital solution for healthcare providers to manage patient records and streamline operations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c205ae5-8b28-402a-88f7-09d6c9d3deda.png"
                  alt="Financial Analytics Dashboard showing data visualization with charts and financial metrics"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7ae4c13-4ae7-473b-9fd8-4eb016303fa3.png"; 
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Financial Analytics Dashboard</CardTitle>
                <CardDescription>
                  Real-time financial data visualization and analytics platform for investment firms
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5a574f2f-bc0c-4982-ac03-40248cf3d761.png"
                  alt="Mobile Banking App showing smartphone financial interface with modern UI design"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7ae4c13-4ae7-473b-9fd8-4eb016303fa3.png"; 
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Mobile Banking App</CardTitle>
                <CardDescription>
                  Secure and user-friendly mobile banking application with advanced security features
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93cddaa3-76b1-49b0-b175-1c063bdfbeb1.png"
                  alt="Logistics Management Platform showing supply chain tracking and warehouse management interface"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7ae4c13-4ae7-473b-9fd8-4eb016303fa3.png"; 
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Logistics Management Platform</CardTitle>
                <CardDescription>
                  Comprehensive supply chain and logistics management solution for enterprise clients
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1e829a7-f915-4dad-86db-4d3e34c45db5.png"
                  alt="Educational Learning Platform showing online courses interface with interactive learning modules"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7ae4c13-4ae7-473b-9fd8-4eb016303fa3.png"; 
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Educational Learning Platform</CardTitle>
                <CardDescription>
                  Interactive online learning platform with course management and student tracking
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600">
                Ready to start your next project? Let's discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@xotoro.pvt.ltd</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">123 Tech Street<br />Innovation City, IC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
