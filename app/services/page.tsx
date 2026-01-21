'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FiCode, 
  FiLayers, 
  FiSettings, 
  FiUsers, 
  FiDatabase, 
  FiCloud,
  FiCheckCircle,
  FiArrowRight 
} from 'react-icons/fi';

const services = [
  {
    icon: FiLayers,
    title: 'Microservices Architecture',
    description: 'Design and implement scalable, distributed systems that grow with your business.',
    longDescription: 'We specialize in breaking down monolithic applications into manageable, scalable microservices. Our approach ensures proper service boundaries, data consistency, and efficient inter-service communication.',
    features: [
      'Domain-driven design and service boundaries',
      'API Gateway and service mesh implementation',
      'Event-driven architecture patterns',
      'Container orchestration with Kubernetes',
      'Service monitoring and observability',
      'Distributed transaction management'
    ],
    technologies: ['Kotlin', 'Spring Boot', 'Docker', 'Kubernetes', 'Apache Kafka'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiCode,
    title: 'Full-Stack Development',
    description: 'Modern web applications using React, Kotlin, and industry best practices.',
    longDescription: 'End-to-end application development from responsive frontends to robust backend APIs. We focus on creating maintainable, testable, and performant applications.',
    features: [
      'React frontend with modern hooks and state management',
      'Kotlin backend with Spring Boot framework',
      'RESTful API design and implementation',
      'Database design and optimization',
      'Authentication and authorization systems',
      'Responsive design and mobile optimization'
    ],
    technologies: ['React', 'TypeScript', 'Kotlin', 'Spring Boot', 'PostgreSQL'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiUsers,
    title: 'Technical Leadership',
    description: 'Experienced team management and technical guidance for your development projects.',
    longDescription: 'Proven expertise in leading development teams, making architectural decisions, and ensuring project success through effective technical leadership.',
    features: [
      'Team management and mentoring',
      'Architecture design and decision making',
      'Code review processes and quality assurance',
      'Agile methodology implementation',
      'Risk assessment and mitigation strategies',
      'Cross-functional team collaboration'
    ],
    technologies: ['Agile', 'Scrum', 'Git', 'CI/CD', 'Code Review Tools'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: FiDatabase,
    title: 'Financial & Compliance Systems',
    description: 'Specialized expertise in financial systems and regulatory compliance solutions.',
    longDescription: 'Deep understanding of financial workflows, compliance requirements, and document management systems for regulated industries.',
    features: [
      'VAT and tax calculation systems',
      'Financial document processing',
      'Compliance reporting and audit trails',
      'Secure data handling and encryption',
      'Integration with accounting systems',
      'Automated compliance checking'
    ],
    technologies: ['Kotlin', 'PostgreSQL', 'PDF Processing', 'Security Frameworks'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: FiSettings,
    title: 'Legacy System Modernization',
    description: 'Transform legacy applications into modern, maintainable systems.',
    longDescription: 'Systematic approach to modernizing legacy systems while minimizing business disruption and ensuring data integrity throughout the migration process.',
    features: [
      'Legacy system analysis and assessment',
      'Migration strategy and roadmap development',
      'Gradual migration with minimal downtime',
      'Data migration and validation',
      'API integration and wrapper services',
      'Training and knowledge transfer'
    ],
    technologies: ['Spring Boot', 'Database Migration Tools', 'API Gateways'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: FiCloud,
    title: 'DevOps & Cloud Infrastructure',
    description: 'Streamlined deployment pipelines and scalable cloud infrastructure.',
    longDescription: 'Complete DevOps solutions including CI/CD pipelines, infrastructure as code, monitoring, and cloud-native deployment strategies.',
    features: [
      'CI/CD pipeline setup and optimization',
      'Infrastructure as Code (IaC)',
      'Container orchestration and management',
      'Cloud platform deployment and scaling',
      'Monitoring and alerting systems',
      'Security and compliance automation'
    ],
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS/GCP', 'Terraform'],
    gradient: 'from-teal-500 to-blue-500',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Comprehensive technology consulting services designed to drive your business forward. 
              From architecture design to full implementation and team leadership.
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mr-4`}>
                        <service.icon size={28} />
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                      {service.description}
                    </p>
                    
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                      {service.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
                      <h3 className="text-xl font-semibold mb-4">Key Capabilities</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <FiCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-200 dark:border-indigo-800"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help transform your business with modern technology solutions. 
                Get in touch for a free consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors group"
              >
                Start a Conversation
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}