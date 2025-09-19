import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/ProjectsSectionTwo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bgImg from "../assets/images/background/2.jpg";

const projects = [
  {
    id: 1,
    img: require("../assets/images/project-6.jpg"),
    cat: "Web Design",
    title: "Modern E-commerce Platform",
    description: "A fully responsive e-commerce website with advanced shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal user experience and conversion rates.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Responsive Design"]
  },
  {
    id: 2,
    img: require("../assets/images/project-thumb-11.png"),
    cat: "Mobile App",
    title: "Cross-Platform Mobile App",
    description: "A feature-rich mobile application developed for both iOS and Android platforms. Includes real-time notifications, offline functionality, and seamless user experience across devices.",
    technologies: ["React Native", "Firebase", "Redux", "Native APIs", "Push Notifications"]
  },
  {
    id: 3,
    img: require("../assets/images/p1.jpg"),
    cat: "Logo Design",
    title: "Brand Identity Package",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines. Created to establish a strong visual presence and brand recognition.",
    technologies: ["Adobe Illustrator", "Color Theory", "Typography", "Brand Strategy", "Vector Graphics"]
  },
  {
    id: 4,
    img: require("../assets/images/p3.jpg"),
    cat: "Logo Design",
    title: "Corporate Logo Design",
    description: "Professional corporate logo design with multiple variations and applications. Includes business card design, letterhead, and digital assets for comprehensive brand implementation.",
    technologies: ["Adobe Creative Suite", "Corporate Design", "Brand Guidelines", "Print & Digital", "Scalable Graphics"]
  },
  {
    id: 5,
    img: require("../assets/images/project-thumb-1.webp"),
    cat: "Web Design",
    title: "Portfolio Website",
    description: "A stunning portfolio website showcasing creative work with smooth animations, interactive elements, and modern design principles. Built for maximum visual impact and user engagement.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP Animations", "Responsive Design"]
  },
];

const ProjectsSectionTwo = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-section-two p-0" id="projects">
      <div className="bg-image" style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className="auto-container">
        <div className="upper-box">
          <div className="counter-column" data-aos="fade-right">
            <div className="count-box">
              <span className="title">Work Completed</span>
              <div className="numbers">86900+</div>
            </div>
          </div>
          <div className="text-column" data-aos="fade-left">
            <div className="text">
              With over 86,900 successful projects delivered, our portfolio reflects our commitment to quality, efficiency, and client satisfaction. Each completed job stands as a testament to our expertise and reliability.
            </div>
          </div>
        </div>
        <div className="sec-title text-center light" data-aos="fade-down">
          <span className="sub-title">Recent Work</span>
          <h2>Work showcase</h2>
        </div>
        <div className="carousel-outer" data-aos="fade-up">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              1023: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="projects-carousel"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={project.id}>
                <div className="project-block" data-aos="zoom-in" data-aos-delay={idx * 100}>
                  <div className="inner-box" onClick={() => handleProjectClick(project)}>
                    <div className="image-box">
                      <figure className="image"><img src={project.img} alt={project.title} /></figure>
                      <div className="info-box">
                        <span className="cat">{project.cat}</span>
                        <h6 className="title">{project.title}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="project-modal-image">
              <img src={selectedProject.img} alt={selectedProject.title} />
            </div>
            <div className="project-modal-info">
              <span className="category">{selectedProject.cat}</span>
              <h3 className="title">{selectedProject.title}</h3>
              <p className="description">{selectedProject.description}</p>
              <div className="technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSectionTwo; 