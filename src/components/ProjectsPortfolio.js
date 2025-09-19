import React, { useState } from 'react';
import Button from './Button';
import project1 from '../assets/images/resource/project-1.png';
import project5 from '../assets/images/resource/project-5.jpg';
import projectThumb11 from '../assets/images/resource/project-thumb-11.png';
import projectThumb12 from '../assets/images/resource/project-thumb-5.jpg';
import projectThumb13 from '../assets/images/resource/project-4.png';
import projectThumb14 from '../assets/images/resource/investify.jpeg';
import '../styles/ProjectsPortfolio.css';

const ProjectsPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Logo Design',
      category: 'brandings',
      image: project1,
      description: 'A comprehensive gaming tournament platform with live streaming, user registration, and tournament management system.',
      technologies: ['React', 'Node.js', 'WebRTC', 'Real-time Features']
    },
    {
      id: 2,
      title: 'Multiplayer Fashion Platform',
      category: 'web-design',
      image: project5,
      description: 'An interactive multiplayer gaming platform with real-time gameplay, leaderboards, and social features.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WebSocket', 'Game Development']
    },
    {
      id: 3,
      title: 'Gaming Legend Platform',
      category: 'web-design',
      image:projectThumb12,
      description: 'A legendary gaming experience platform with advanced features, community tools, and competitive gameplay.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Gaming APIs']
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      category: 'brandings',
      image: projectThumb11,
      description: 'Complete brand identity package including logo, color palette, typography, and brand guidelines for consistent application across all touchpoints.',
      technologies: ['Adobe Creative Suite', 'Typography', 'Color Theory']
    },
    {
      id: 5,
      title: 'Mobile App UI',
      category: 'web-design',
      image: projectThumb13,
      description: 'User interface design for a mobile application focusing on intuitive navigation and engaging user experience across different screen sizes.',
      technologies: ['Figma', 'Adobe XD', 'UI/UX Design']
    },
    {
      id: 6,
      title: 'Admin Dashboard',
      category: 'web-design',
      image:projectThumb14,
      description: 'A comprehensive admin dashboard with data visualization, user management, and analytics tools for efficient business operations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js']
    },
    {
      id: 7,
      title: 'Motion Graphics',
      category: 'animation',
      videoUrl: 'https://www.youtube.com/embed/J7uNHzGT2jE',
      description: 'Dynamic motion graphics and visual effects for video content, creating engaging and professional animations.',
      technologies: ['Adobe After Effects', 'Cinema 4D', 'Motion Design']
    },
    {
      id: 8,
      title: 'Character Animation',
      category: 'animation',
      videoUrl: 'https://www.youtube.com/embed/K1-tnTN7Vr8',
      description: 'Custom character animation bringing stories to life with expressive movements and personality-driven design.',
      technologies: ['Adobe Animate', 'Character Design', 'Animation']
    },
    {
      id: 9,
      title: '3D Animation',
      category: 'animation',
      videoUrl: 'https://www.youtube.com/embed/EY5bk5SzsV4',
      description: 'High-quality 3D animation and modeling work for product visualization and immersive experiences.',
      technologies: ['Blender', 'Maya', '3D Modeling', 'Rendering']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'brandings', label: 'Brandings' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'animation', label: 'Animation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeOverlay = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-portfolio-section">
      <div className="container">
        <div className="sec-title">
          <span className="sub-title">Our Portfolio</span>
          <h2>Latest Projects We've Completed</h2>
        </div>
        
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {filters.map(filter => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'style-one' : 'style-three'}
              size="small"
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? 'active' : ''}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-item" data-category={project.category}>
              <div className="project-block">
                <div className="inner-box" onClick={() => handleProjectClick(project)}>
                  <div className="image-box">
                    {project.videoUrl ? (
                      <div className="video-container">
                        <iframe
                          src={project.videoUrl}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <figure className="image">
                        <img src={project.image} alt={project.title} />
                      </figure>
                    )}
                    <div className="info-box">
                      <span className="cat">{project.category.replace('-', ' ').toUpperCase()}</span>
                      <h6 className="title">{project.title}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Overlay */}
      {selectedProject && (
        <div className="project-overlay active" onClick={closeOverlay}>
          <div className="project-overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-overlay-close" onClick={closeOverlay}>
              <i className="fas fa-times"></i>
            </button>
            {selectedProject.videoUrl ? (
              <div className="video-container">
                <iframe
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img src={selectedProject.image} alt={selectedProject.title} className="project-overlay-image" />
            )}
            <div className="project-overlay-info">
              <span className="category">{selectedProject.category.replace('-', ' ').toUpperCase()}</span>
              <h3>{selectedProject.title}</h3>
              <p className="description">{selectedProject.description}</p>
              <div className="technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsPortfolio; 