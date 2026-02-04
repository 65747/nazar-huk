'use strict';

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
    project_overview: "Aperçu du Projet",
    project_desc_full: "Une application web complète pour la gestion des soutenances et des alternances à l'Université Clermont Auvergne. Ce projet comprend des interfaces de tableau de bord pour les enseignants et les administrateurs, des outils d'analyse de données, la gestion des enregistrements et des grilles d'évaluation.",
    features: "Fonctionnalités",
    feature_1: "Interfaces de tableau de bord pour enseignants et administrateurs",
    feature_2: "Analyse de données avancée et rapports",
    feature_3: "Gestion des grilles d'évaluation",
    feature_4: "Administration des ressources",
    feature_5: "Système d'authentification sécurisé",
    feature_6: "Conception de base de données relationnelle",
    screenshots: "Captures d'écran",
    view_github: "Voir sur GitHub",
    
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
    project_overview: "Project Overview",
    project_desc_full: "A comprehensive web application for managing thesis defenses and internships at the University Clermont Auvergne. This project includes dashboard interfaces for teachers and administrators, data analysis tools, record management, and evaluation grids.",
    features: "Features",
    feature_1: "Teacher and administrator dashboard interfaces",
    feature_2: "Advanced data analysis and reporting",
    feature_3: "Evaluation grids management",
    feature_4: "Resource administration",
    feature_5: "Secure authentication system",
    feature_6: "Relational database design",
    screenshots: "Screenshots",
    view_github: "View on GitHub",
    
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
// LANGUAGE SWITCHING
// =============================================

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
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
  
  // Update navigation links data-page matching
  updateNavLinks();
  
  // Save preference
  localStorage.setItem('preferredLanguage', lang);
}

function updateNavLinks() {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  navLinks.forEach(link => {
    const key = link.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      link.textContent = translations[currentLang][key];
    }
  });
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
  setLanguage(savedLang);
});

// Language button click handlers
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    setLanguage(lang);
  });
});



// =============================================
// SIDEBAR TOGGLE
// =============================================

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
};

sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});



// =============================================
// PAGE NAVIGATION
// =============================================

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

function navigateToPage(pageName) {
  pages.forEach(page => {
    if (page.dataset.page === pageName) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });
  
  navigationLinks.forEach(link => {
    const linkKey = link.getAttribute('data-i18n');
    if (linkKey === pageName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  
  window.scrollTo(0, 0);
}

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const pageName = this.getAttribute('data-i18n');
    navigateToPage(pageName);
  });
});



// =============================================
// PROJECT CARD CLICK - OPEN DETAIL VIEW
// =============================================

const projectCards = document.querySelectorAll('.project-card');
const aboutPage = document.querySelector('[data-page="about"]');
const projectDetailPage = document.querySelector('[data-page="project-detail"]');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    // Hide about page
    aboutPage.classList.remove('active');
    
    // Show project detail page
    projectDetailPage.classList.add('active');
    
    // Update navigation (remove active from About)
    navigationLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    window.scrollTo(0, 0);
  });
});



// =============================================
// BACK BUTTON - RETURN TO ABOUT
// =============================================

const backBtn = document.querySelector('[data-back-btn]');

if (backBtn) {
  backBtn.addEventListener('click', () => {
    // Hide project detail page
    projectDetailPage.classList.remove('active');
    
    // Show about page
    aboutPage.classList.add('active');
    
    // Update navigation
    navigationLinks.forEach(link => {
      if (link.getAttribute('data-i18n') === 'about') {
        link.classList.add('active');
      }
    });
    
    window.scrollTo(0, 0);
  });
}



// =============================================
// IMAGE MODAL (Gallery)
// =============================================

const imageModal = document.querySelector('[data-image-modal]');
const modalOverlay = document.querySelector('[data-modal-overlay]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalImage = document.querySelector('[data-modal-image]');
const modalCaption = document.querySelector('[data-modal-caption]');
const galleryItems = document.querySelectorAll('.gallery-item');

function openImageModal(imgSrc, caption) {
  modalImage.src = imgSrc;
  modalCaption.textContent = caption;
  imageModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  imageModal.classList.remove('active');
  document.body.style.overflow = '';
}

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');
    openImageModal(img.src, caption ? caption.textContent : '');
  });
});

if (modalOverlay) {
  modalOverlay.addEventListener('click', closeImageModal);
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeImageModal);
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && imageModal.classList.contains('active')) {
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
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}
