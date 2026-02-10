import { useState } from 'react';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: 'Alexa Plus',
      subtitle: 'Next-Gen Ambient AI',
      description: 'Pioneered agentic capabilities and platform integrations for Alexa Plus, the next generation of ambient AI. Alexa Plus is the first of its kind to use a model-agnostic architecture, dynamically orchestrating Anthropic, Amazon Nova, and other LLMs to execute multi-step actions across services like Uber, Ticketmaster, and Amazon Fresh. Shipped a partner skill integration, delivered an E2E test skill, built out calendar integrations, engineered a local testing proxy that saved ~60 developer hours/week, resolved critical bugs to ensure high availability for 300M users, and delivered CX for a large-scale Games campaign, supporting launch to 3M+ Alexa Plus users.',
      image: 'https://danimcasas.com/wp-content/uploads/2025/02/Alexa-la-evolucion-del-asistente-de-voz-de-Amazon-con-inteligencia-artificial-generativa-para-interacciones-mas-personalizadas-y-naturales-en-2025.png',
      tech: ['LLM Development', 'Java', 'Lambda', 'API Gateway'],
      role: 'SDE 1',
      impact: '3M+ users',
      period: 'Jan 2025 - Jan 2026',
      link: 'https://www.amazon.com/b?ie=UTF8&node=206207565011'
    },
    {
      title: 'Amazon Q',
      subtitle: 'Enterprise AI Assistant',
      description: 'Amazon Q Business leverages companies’ internal data and industry-leading LLM capabilities to provide tailored assistance, empowering teams to be more data-driven, creative, and productive. Used TypeScript, React, and REST APIs to integrate backend services within a 4.5-month timeline in a startup-like environment. This work is estimated to save enterprises $50k–$200k per year in labor costs and is estimated to have 100+ customers to date, including one Fortune 500 company onboarded at launch.',
      image: 'https://assets.aboutamazon.com/dims4/default/3f368f7/2147483647/strip/false/crop/2000x1125+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F95%2Fbc%2Fb88478784cc19cf09c627968cc06%2Faa-apr2024-amazonq-standard-hero-v5-2000x1125-1.jpg',
      tech: ['TypeScript', 'React', 'REST APIs'],
      role: 'SDE 1',
      impact: '100+ enterprise customers',
      period: 'June 2024 - Jan 2025',
      link: 'https://aws.amazon.com/q/'
    },
    {
      title: 'CodeCatalyst',
      subtitle: 'Developer Tools',
      description: 'Designed and implemented a code coverage feature for developer tools using TypeScript, Lambda, S3, and EC2.',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*gt5UWzFHTv7_eW_aQz2HWA.png',
      tech: ['CDK', 'TypeScript', 'Lambda', 'S3', 'EC2'],
      role: 'SDE Intern',
      impact: '10k+ developers',
      period: 'Summer 2022',
      link: 'https://codecatalyst.aws/'
    },
    {
      title: 'Amazon Lex',
      subtitle: 'NLP',
      description: 'Designed and delivered a regression analysis tool for NLP model performance diagnostics using Python and S3. The delivered tool is estimated to save 200+ developer hours/week across the team. I was awarded Summa Cum Laude, Magna Cum Laude, and a return offer for exceptional delivery and initiative.',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20abstract%203d%20render%20of%20interconnected%20nodes%20and%20neural%20pathways%20with%20soft%20purple%20cyan%20gradient%20glow%20on%20pure%20black%20background%20ultra%20clean%20modern%20aesthetic%20inspired%20by%20apple%20design%20language&width=1200&height=800&seq=codecat-apple1&orientation=landscape',
      tech: ['NLP', 'Python', 'S3'],
      role: 'SDE Intern',
      impact: '200+ developer hours/week',
      period: 'Summer 2021',
      link: 'https://aws.amazon.com/lex/'
    }
  ];

  const goToSlide = (index: number) => {
    if (index < 0) index = projects.length - 1;
    if (index >= projects.length) index = 0;
    setActiveIndex(index);
  };

  const getNextIndex = () => {
    return (activeIndex + 1) % projects.length;
  };

  const getPrevIndex = () => {
    return activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
  };

  return (
    <section id="projects" className="py-16 md:py-32 bg-gray-950 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-10 md:mb-16 text-center">
        <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-2 md:mb-3">
          Projects at Amazon
        </p>
        <h2 className="text-2xl md:text-5xl font-semibold text-white tracking-tight">
          Featured Work
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-[1400px] mx-auto px-16 md:px-24">
        {/* Left Arrow */}
        <button
          onClick={() => goToSlide(activeIndex - 1)}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        >
          <i className="ri-arrow-left-line text-white text-lg md:text-xl"></i>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => goToSlide(activeIndex + 1)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        >
          <i className="ri-arrow-right-line text-white text-lg md:text-xl"></i>
        </button>

        {/* Cards Container */}
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Previous Card (hidden on mobile) */}
            <div className="hidden lg:block flex-shrink-0 w-[200px] opacity-30 scale-[0.67] origin-right transition-all duration-500">
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={projects[getPrevIndex()].image}
                    alt={projects[getPrevIndex()].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] text-gray-500 mb-2">{projects[getPrevIndex()].period}</p>
                  <h3 className="text-xl font-semibold text-white mb-1">{projects[getPrevIndex()].title}</h3>
                  <p className="text-sm text-gray-400">{projects[getPrevIndex()].subtitle}</p>
                </div>
              </div>
            </div>

            {/* Active Card */}
            <div className="flex-shrink-0 w-[300px] md:w-[800px] transition-all duration-500">
              <div className="bg-gray-900 rounded-2xl md:rounded-3xl overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 md:h-80 overflow-hidden">
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <span className="px-2.5 md:px-4 py-1 md:py-2 bg-black/50 backdrop-blur-sm rounded-full text-[10px] md:text-sm font-medium text-cyan-400">
                      {projects[activeIndex].role}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 md:p-12">
                  {/* Period */}
                  <p className="text-[10px] md:text-sm text-gray-500 mb-2 md:mb-3">
                    {projects[activeIndex].period}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl md:text-5xl font-semibold text-white mb-1 md:mb-3 tracking-tight">
                    {projects[activeIndex].title}
                  </h3>
                  <p className="text-sm md:text-xl text-gray-400 mb-4 md:mb-6">
                    {projects[activeIndex].subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs md:text-lg text-gray-500 leading-relaxed mb-5 md:mb-10 max-w-2xl">
                    {projects[activeIndex].description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 md:gap-3 mb-6 md:mb-10">
                    {projects[activeIndex].tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 md:px-4 py-1 md:py-2 bg-gray-800/50 rounded-full text-[9px] md:text-base text-gray-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    {/* Impact */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-cyan-500/10 flex items-center justify-center">
                        <i className="ri-arrow-right-up-line text-cyan-400 text-xs md:text-base"></i>
                      </div>
                      <span className="text-xs md:text-lg font-medium text-white">
                        {projects[activeIndex].impact}
                      </span>
                    </div>

                    {/* View Details Button */}
                    <a 
                      href={projects[activeIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full transition-colors cursor-pointer group/btn whitespace-nowrap"
                    >
                      <span className="text-[10px] md:text-base font-medium text-cyan-400">View Details</span>
                      <i className="ri-arrow-right-line text-cyan-400 text-xs md:text-base transition-transform group-hover/btn:translate-x-0.5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Card Preview */}
            <div className="hidden md:block flex-shrink-0 w-[200px] md:w-[300px] opacity-30 scale-[0.67] origin-left transition-all duration-500">
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <div className="relative h-44 md:h-52 overflow-hidden">
                  <img
                    src={projects[getNextIndex()].image}
                    alt={projects[getNextIndex()].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full text-[10px] font-medium text-cyan-400">
                      {projects[getNextIndex()].role}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] text-gray-500 mb-2">{projects[getNextIndex()].period}</p>
                  <h3 className="text-xl font-semibold text-white mb-1 tracking-tight">{projects[getNextIndex()].title}</h3>
                  <p className="text-sm text-gray-400">{projects[getNextIndex()].subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all cursor-pointer ${
                index === activeIndex 
                  ? 'bg-cyan-400 w-6 md:w-8' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
