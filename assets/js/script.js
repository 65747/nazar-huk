// =============================================
// TRANSLATIONS
// =============================================

const translations = {
  fr: {
    // Navigation
    about: "À propos",
    contact: "Contact",
    back: "Retour",
    
    // Sidebar
    specialty: "Développeur Full Stack",
    contacts: "Contacts",
    phone: "Téléphone",
    location: "Localisation",
    city: "Clermont-Ferrand, France",
    
    // About section
    about_text_1: "Bienvenue sur mon portfolio. Je suis un développeur passionné, spécialisé dans le développement web et la gestion de bases de données.",
    about_text_2: "Je crée des applications web modernes et performantes, avec un accent sur l'expérience utilisateur et un code propre.",
    
    // Projects
    my_projects: "Mes Projets",
    project_title: "Plateforme de Gestion des Soutenances — UCA",
    project_subtitle: "Gestion et analyse des soutenances et alternances",
    screenshots: "Captures d'écran",
    view_github: "Voir sur GitHub",
    
    // Context
    context_title: "Contexte et Sujet",
    context_text: "Dans le cadre d'un projet universitaire à l'Université Clermont Auvergne, j'ai participé au développement d'une application web de gestion des soutenances et alternances. L'application a été conçue pour répondre aux besoins du corps enseignant qui avait besoin d'un outil centralisé pour gérer les évaluations des étudiants, les grilles d'évaluation et le suivi des stages.",
    
    // Objectives
    objectives_title: "Objectifs du Projet",
    obj_1: "Créer une interface intuitive pour les enseignants et administrateurs",
    obj_2: "Centraliser la gestion des soutenances et alternances",
    obj_3: "Automatiser la génération des grilles d'évaluation",
    obj_4: "Fournir des outils analytiques pour suivre la progression des étudiants",
    obj_5: "Sécuriser l'accès avec un système d'authentification basé sur les rôles",
    
    // Missions
    missions_title: "Missions Principales",
    mission_1: "Conception et modélisation de la base de données relationnelle",
    mission_2: "Développement des interfaces enseignant et administrateur",
    mission_3: "Mise en place du système d'authentification et d'autorisation",
    mission_4: "Création des fonctionnalités de gestion des grilles d'évaluation",
    mission_5: "Développement du module d'analyse de données et statistiques",
    mission_6: "Rédaction de la documentation technique",
    
    // Project Steps
    steps_title: "Étapes du Projet",
    step1_title: "Analyse de la Base de Données",
    step1_desc: "Étude de la structure de la base existante, compréhension des relations entre tables, identification des données nécessaires pour les interfaces",
    step2_title: "Développement de la Page d'Authentification",
    step2_desc: "Création de la page de connexion avec vérification des rôles (enseignant/administrateur), gestion des sessions, sécurisation des accès",
    step3_title: "Développement de l'Interface Enseignant",
    step3_desc: "Création du tableau de bord pour visualiser les soutenances, affichage des informations étudiants, gestion des données personnelles",
    step4_title: "Développement de l'Interface Administrateur",
    step4_desc: "Création du panneau de gestion des grilles d'évaluation, CRUD pour les ressources (ajouter, modifier, supprimer), gestion des utilisateurs",
    step5_title: "Module d'Analyse de Données",
    step5_desc: "Développement de la page statistiques, requêtes SQL pour l'agrégation des données, visualisation des résultats en tableaux et graphiques",
    step6_title: "Tests et Documentation",
    step6_desc: "Tests des fonctionnalités, correction des bugs, rédaction de la documentation technique pour la maintenance future",
    
    // Skills
    skills_title: "Compétences Mobilisées",
    tech_skills: "Compétences Techniques",
    transversal_skills: "Compétences Transversales",
    human_qualities: "Qualités Humaines",
    skill_project_management: "Gestion de Projet",
    skill_teamwork: "Travail en Équipe",
    skill_communication: "Communication",
    skill_analysis: "Analyse des Besoins",
    skill_documentation: "Documentation Technique",
    quality_rigor: "Rigueur",
    quality_autonomy: "Autonomie",
    quality_adaptability: "Adaptabilité",
    quality_curiosity: "Curiosité",
    quality_listening: "Écoute Active",
    
    // Tools
    tools_title: "Outils Utilisés",
    
    // Academic Competencies
    academic_title: "Compétences Académiques Validées",
    ac1: "Développer une interface utilisateur",
    ac2: "Concevoir et gérer une base de données",
    ac3: "Intégrer une solution dans un environnement de production",
    ac4: "Gérer les données du système d'information",
    ac5: "Collaborer au sein d'une équipe informatique",
    
    // Conclusion
    conclusion_title: "Conclusion et Réflexion",
    conclusion_text: "Ce projet m'a permis d'appliquer mes connaissances théoriques à un cas réel. J'ai appris à travailler en équipe, à gérer les délais et à m'adapter aux besoins des utilisateurs. Les principaux défis étaient la conception de la base de données et la gestion des différents rôles utilisateurs. Cette expérience a renforcé mon intérêt pour le développement web et la gestion de données. À l'avenir, j'aimerais explorer des solutions cloud pour ce type d'application.",
    
    // Screenshot captions
    img_login: "Page d'authentification",
    img_teacher: "Interface Enseignant",
    img_admin_grids: "Tableau de bord Administrateur",
    img_admin_manage: "Gestion des Grilles d'évaluation",
    img_resources: "Administration des Ressources",
    img_analytics: "Analyse des Données",
    
    // Contact
    contact_form: "Formulaire de Contact",
    your_name: "Votre nom",
    your_message: "Votre message",
    send: "Envoyer"
  },
  en: {
    // Navigation
    about: "About",
    contact: "Contact",
    back: "Back",
    
    // Sidebar
    specialty: "Full Stack Developer",
    contacts: "Contact",
    phone: "Phone",
    location: "Location",
    city: "Clermont-Ferrand, France",
    
    // About section
    about_text_1: "Welcome to my portfolio. I am a passionate developer specializing in web development and database management.",
    about_text_2: "I create modern, efficient web applications with a focus on user experience and clean code.",
    
    // Projects
    my_projects: "My Projects",
    project_title: "Defense Management Platform — UCA",
    project_subtitle: "Management and analysis of thesis defenses and internships",
    screenshots: "Screenshots",
    view_github: "View on GitHub",
    
    // Context
    context_title: "Context and Subject",
    context_text: "As part of a university project at Université Clermont Auvergne, I participated in the development of a web application for managing thesis defenses and internships. The application was designed to meet the needs of the teaching staff who needed a centralized tool to manage student evaluations, evaluation grids, and tracking of internships.",
    
    // Objectives
    objectives_title: "Project Objectives",
    obj_1: "Create an intuitive interface for teachers and administrators",
    obj_2: "Centralize management of thesis defenses and internships",
    obj_3: "Automate the generation of evaluation grids",
    obj_4: "Provide analytical tools to track student progress",
    obj_5: "Secure access with a role-based authentication system",
    
    // Missions
    missions_title: "Main Missions",
    mission_1: "Design and modeling of the relational database",
    mission_2: "Development of teacher and administrator interfaces",
    mission_3: "Implementation of the authentication and authorization system",
    mission_4: "Creation of evaluation grids management features",
    mission_5: "Development of the data analysis and statistics module",
    mission_6: "Writing technical documentation",
    
    // Project Steps
    steps_title: "Project Steps",
    step1_title: "Database Analysis",
    step1_desc: "Study of the existing database structure, understanding of table relationships, identification of necessary data for interfaces",
    step2_title: "Authentication Page Development",
    step2_desc: "Creation of login page with role verification (teacher/administrator), session management, access security",
    step3_title: "Teacher Interface Development",
    step3_desc: "Dashboard creation for thesis defense viewing, student information display, personal data management",
    step4_title: "Administrator Interface Development",
    step4_desc: "Creation of management panel for evaluation grids, CRUD for resources (add, edit, delete), user management",
    step5_title: "Data Analysis Module",
    step5_desc: "Development of statistics page, SQL queries for data aggregation, visualization of results in tables and charts",
    step6_title: "Testing and Documentation",
    step6_desc: "Functionality testing, bug fixing, writing technical documentation for future maintenance",
    
    // Skills
    skills_title: "Skills Mobilized",
    tech_skills: "Technical Skills",
    transversal_skills: "Transversal Skills",
    human_qualities: "Human Qualities",
    skill_project_management: "Project Management",
    skill_teamwork: "Teamwork",
    skill_communication: "Communication",
    skill_analysis: "Needs Analysis",
    skill_documentation: "Technical Documentation",
    quality_rigor: "Rigor",
    quality_autonomy: "Autonomy",
    quality_adaptability: "Adaptability",
    quality_curiosity: "Curiosity",
    quality_listening: "Active Listening",
    
    // Tools
    tools_title: "Tools Used",
    
    // Academic Competencies
    academic_title: "Validated Academic Competencies",
    ac1: "Develop a user interface",
    ac2: "Design and manage a database",
    ac3: "Integrate a solution in a production environment",
    ac4: "Manage data from the information system",
    ac5: "Collaborate within an IT team",
    
    // Conclusion
    conclusion_title: "Conclusion and Reflection",
    conclusion_text: "This project allowed me to apply my theoretical knowledge to a real-world case. I learned how to work in a team, manage deadlines, and adapt to user needs. The main challenges were database design and managing different user roles. This experience reinforced my interest in web development and data management. In the future, I would like to explore cloud solutions for this type of application.",
    
    // Screenshot captions
    img_login: "Authentication Page",
    img_teacher: "Teacher Interface",
    img_admin_grids: "Administrator Dashboard",
    img_admin_manage: "Evaluation Grids Management",
    img_resources: "Resources Administration",
    img_analytics: "Data Analysis",
    
    // Contact
    contact_form: "Contact Form",
    your_name: "Your name",
    your_message: "Your message",
    send: "Send"
  }
};

let currentLang = 'fr';

// =============================================
// GLOBAL NAVIGATION FUNCTIONS (for onclick)
// =============================================

function navigateTo(pageName) {
  const pages = document.querySelectorAll("[data-page]");
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  
  // Hide all pages
  pages.forEach(page => {
    page.classList.remove("active");
  });
  
  // Show the target page
  pages.forEach(page => {
    if (page.dataset.page === pageName) {
      page.classList.add("active");
    }
  });
  
  // Update nav links
  navigationLinks.forEach(link => {
    link.classList.remove("active");
    const linkKey = link.getAttribute('data-i18n');
    if (linkKey === pageName) {
      link.classList.add("active");
    }
  });
  
  window.scrollTo(0, 0);
}

function openProject() {
  const aboutPage = document.querySelector('[data-page="about"]');
  const projectDetailPage = document.querySelector('[data-page="project-detail"]');
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  
  // Hide about page
  if (aboutPage) {
    aboutPage.classList.remove('active');
  }
  
  // Show project detail page
  if (projectDetailPage) {
    projectDetailPage.classList.add('active');
  }
  
  // Update navigation (remove active from all)
  navigationLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  window.scrollTo(0, 0);
}

function goBack() {
  const aboutPage = document.querySelector('[data-page="about"]');
  const projectDetailPage = document.querySelector('[data-page="project-detail"]');
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  
  // Hide project detail page
  if (projectDetailPage) {
    projectDetailPage.classList.remove('active');
  }
  
  // Show about page
  if (aboutPage) {
    aboutPage.classList.add('active');
  }
  
  // Update navigation
  navigationLinks.forEach(link => {
    if (link.getAttribute('data-i18n') === 'about') {
      link.classList.add('active');
    }
  });
  
  window.scrollTo(0, 0);
}

// =============================================
// LANGUAGE SWITCHING
// =============================================

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  
  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  // Save preference
  localStorage.setItem('preferredLanguage', lang);
}

function switchLanguage(lang) {
  setLanguage(lang);
}

// =============================================
// IMAGE MODAL FUNCTIONS
// =============================================

function openImageModal(imgSrc, caption) {
  const imageModal = document.querySelector('[data-image-modal]');
  const modalImage = document.querySelector('[data-modal-image]');
  const modalCaption = document.querySelector('[data-modal-caption]');
  
  if (modalImage && modalCaption && imageModal) {
    modalImage.src = imgSrc;
    modalCaption.textContent = caption;
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeImageModal() {
  const imageModal = document.querySelector('[data-image-modal]');
  if (imageModal) {
    imageModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// =============================================
// INITIALIZE ON DOM READY
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // =============================================
  // LANGUAGE INITIALIZATION
  // =============================================
  
  const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
  setLanguage(savedLang);
  
  // Language button click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
  
  // =============================================
  // SIDEBAR TOGGLE
  // =============================================
  
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  
  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener("click", function() { 
      sidebar.classList.toggle("active"); 
    });
  }
  
  // =============================================
  // IMAGE MODAL (Gallery) - Click handlers
  // =============================================
  
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modalOverlay = document.querySelector('[data-modal-overlay]');
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      const caption = this.querySelector('.gallery-caption');
      if (img) {
        openImageModal(img.src, caption ? caption.textContent : '');
      }
    });
  });
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeImageModal);
  }
  
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeImageModal);
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    const imageModal = document.querySelector('[data-image-modal]');
    if (e.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
      closeImageModal();
    }
  });
  
  // =============================================
  // CONTACT FORM VALIDATION
  // =============================================
  
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");
  
  if (form && formInputs.length && formBtn) {
    formInputs.forEach(input => {
      input.addEventListener("input", function() {
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    });
  }
});
