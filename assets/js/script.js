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
    mes_projets: "Mes projets",
    projets_principaux: "Projets principaux",
    autres_projets: "Autres projets",
    project_title: "Plateforme de Gestion des Soutenances — UCA",
    project_subtitle: "Gestion et analyse des soutenances et alternances",
    project_planner_title: "Android Planner",
    project_planner_desc: "Application de planification et gestion des tâches pour Android.",
    project_brawl_title: "Contrôleur automatique pour Brawl Stars",
    project_brawl_desc: "Assistant IA avec détection d'objets en temps réel (YOLOv8) pour Brawl Stars.",
    project_db_title: "Conception et réalisation de bases de données",
    project_category_personal: "Projet personnel",
    brawl_title: "Contrôleur automatique pour Brawl Stars",
    brawl_subtitle: "Assistant IA et vision par ordinateur (YOLOv8)",
    brawl_context: "Projet personnel d'assistant IA et de contrôleur automatique basé sur la vision par ordinateur, appliqué au jeu Brawl Stars. Le jeu est lancé sur un émulateur Android sur ordinateur ; l'application desktop Python capture une zone d'écran en temps réel, détecte les objets avec YOLOv8 et envoie des commandes (WASD) selon la position des objets — démonstration de vision par ordinateur et d'automatisation dans un cadre ludique.",
    brawl_obj1: "Réaliser un assistant IA avec détection d'objets en temps réel (YOLOv8)",
    brawl_obj2: "Capturer une zone d'écran configurable et générer des commandes (WASD) selon la position des objets",
    brawl_obj3: "Proposer une interface graphique (Tkinter) avec prévisualisation et réglages",
    brawl_obj4: "Structurer le projet en modules (capture, détection, mouvement, GUI) pour la maintenabilité",
    brawl_mission1: "Développement du module de capture d'écran (ScreenCapture) avec réglage de la zone",
    brawl_mission2: "Intégration de YOLOv8 (BulletDetector) pour la détection d'objets sur le flux",
    brawl_mission3: "Module de commandes clavier (Movement) et logique de pilotage selon position des objets",
    brawl_mission4: "Interface graphique (GUI) : Start/Stop, réglage des touches, prévisualisation avec boîtes de détection",
    brawl_mission5: "Point d'entrée et boucle principale (main.py), tests et ajustements",
    brawl_step1_title: "Choix des outils et structure du projet",
    brawl_step1_desc: "Python, Tkinter, Ultralytics YOLOv8, mss, PyAutoGUI. Création de la structure des fichiers et des modules.",
    brawl_step2_title: "Module de capture et détection",
    brawl_step2_desc: "ScreenCapture pour la zone d'écran, BulletDetector pour charger le modèle YOLOv8 et effectuer l'inférence sur chaque frame.",
    brawl_step3_title: "Module de mouvement et logique de contrôle",
    brawl_step3_desc: "Movement pour l'envoi des touches WASD, définition du centre de référence et des règles (position objet → commande).",
    brawl_step4_title: "Interface graphique et intégration",
    brawl_step4_desc: "Fenêtre Tkinter avec prévisualisation en direct, boîtes de détection, réglage de la zone de capture et boucle d'évaluation par timer.",
    brawl_arch_title: "Architecture et modules",
    brawl_mod1: "ScreenCapture — capture d'une zone d'écran configurable (coordonnées, dimensions), sortie prête pour le modèle.",
    brawl_mod2: "BulletDetector — chargement du modèle YOLOv8, inférence sur le flux, entraînement possible sur dataset personnalisé.",
    brawl_mod3: "Movement — envoi des commandes haut/bas/gauche/droite via clavier (WASD), arrêt propre.",
    brawl_mod4: "GUI — fenêtre principale (Start/Stop), réglage des touches, prévisualisation en direct avec boîtes de détection, réglage de la zone de capture.",
    brawl_mod5: "main.py — point d'entrée : initialisation détecteur, capture, mouvement et boucle principale.",
    brawl_logic: "Logique de contrôle : un centre de référence est défini dans l'image ; la position de chaque objet détecté est comparée à ce centre et génère les commandes de mouvement correspondantes (gauche/droite/haut/bas), réalisant un contrôle automatique basé sur la position des objets dans le cadre.",
    brawl_skill1: "Détection d'objets en temps réel avec YOLOv8",
    brawl_skill2: "Vision par ordinateur (OpenCV, flux vidéo)",
    brawl_skill3: "Architecture modulaire (capture, détection, contrôle, GUI)",
    brawl_skill4: "Interface graphique Tkinter et boucle asynchrone",
    brawl_skill5: "Capture d'écran performante (mss) et automatisation clavier (PyAutoGUI)",
    brawl_conclusion: "Ce projet m'a permis de mettre en pratique la vision par ordinateur et l'automatisation dans un contexte concret. J'ai consolidé l'utilisation de YOLOv8, la capture d'écran et l'architecture modulaire. Les principaux défis ont été la synchronisation du flux de détection avec l'interface et le réglage de la zone de capture. Cette expérience renforce mon intérêt pour l'IA et l'automatisation.",
    brawl_img_capture: "Application en cours d'exécution — capture d'écran et zone de détection",
    brawl_img_console: "Sortie console avec mises à jour en temps réel",
    brawl_img_structure: "Structure des fichiers du projet",
    project_coming_soon: "Page détaillée à venir.",
    // Database project
    db_title: "Conception et réalisation de bases de données",
    db_subtitle: "Modélisation, schémas relationnels et implémentation SQL",
    db_context: "Je conçois et réalise des bases de données : de l'analyse des besoins au schéma relationnel (MCD, MLD) jusqu'à l'implémentation en SQL. Ce portfolio présente des exemples de projets (interfaces de gestion, schémas) ainsi qu'un modèle de données structuré pour une application de suivi patients (HospitalData, C#/JSON) — conception d'entités, relations et couche de stockage.",
    db_obj1: "Élaborer des schémas de données cohérents et normalisés",
    db_obj2: "Implémenter les bases en SQL (tables, contraintes, requêtes)",
    db_obj3: "Mettre en place une couche de stockage fiable (SQL ou structuré type JSON)",
    db_mission1: "Analyse des besoins et identification des entités et relations",
    db_mission2: "Conception du modèle conceptuel (MCD) et logique (MLD / tables)",
    db_mission3: "Implémentation (scripts SQL, gestionnaires de données), tests et documentation",
    db_step1_title: "Analyse des besoins et recueil des données",
    db_step1_desc: "Identification des entités, attributs et règles métier ; définition des contraintes et des relations entre les données.",
    db_step2_title: "Modèle conceptuel (MCD)",
    db_step2_desc: "Construction du schéma conceptuel : entités, associations, cardinalités, pour une vision indépendante du SGBD.",
    db_step3_title: "Modèle logique et physique",
    db_step3_desc: "Passage au schéma relationnel (MLD), choix des clés, normalisation ; définition des tables et types de données.",
    db_step4_title: "Implémentation et tests",
    db_step4_desc: "Écriture des scripts SQL (CREATE, contraintes, vues), mise en place des accès données (ORM, managers, JSON) et tests de cohérence.",
    db_skill1: "Conception de schémas relationnels (MCD, MLD) et normalisation",
    db_skill2: "SQL : requêtes, jointures, contraintes, vues",
    db_skill3: "Couche de stockage structuré (C#, JSON, managers) pour modèles riches",
    db_img1: "Capture d'écran — projet de base de données",
    db_img2: "Capture d'écran — interface ou schéma",
    db_img_model: "Modèle de données HospitalData (patients, expériences, sessions, superviseurs)",
    db_conclusion: "La conception de bases de données est au cœur de mes projets : que ce soit en SQL pour des applications web (UCA, projets universitaires) ou en modèle structuré (HospitalData), j'applique une démarche rigoureuse — analyse, modélisation, implémentation et tests — pour des données fiables et maintenables.",
    // My Skills
    my_skills: "Mes compétences",
    skill_web: "Développement Web (HTML, CSS, JavaScript, PHP)",
    skill_sql: "SQL / Bases de données",
    skill_kotlin: "Kotlin (Android)",
    skill_git: "Git / Collaboration",
    skill_roblox: "Roblox Studio",
    skill_python: "Python",
    skill_unity: "Unity",
    skill_cpp: "C++",
    skill_ui: "UI / UX Design",
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
    mes_projets: "My Projects",
    projets_principaux: "Main Projects",
    autres_projets: "Other Projects",
    project_title: "Defense Management Platform — UCA",
    project_subtitle: "Management and analysis of thesis defenses and internships",
    project_planner_title: "Android Planner",
    project_planner_desc: "Task planning and management app for Android.",
    project_brawl_title: "Automatic controller for Brawl Stars",
    project_brawl_desc: "AI assistant with real-time object detection (YOLOv8) for Brawl Stars.",
    project_db_title: "Database design and implementation",
    project_category_personal: "Personal project",
    brawl_title: "Automatic controller for Brawl Stars",
    brawl_subtitle: "AI assistant and computer vision (YOLOv8)",
    brawl_context: "Personal project of an AI assistant and automatic controller based on computer vision, applied to the game Brawl Stars. The game runs on an Android emulator on the computer ; the Python desktop application captures a screen region in real time, detects objects with YOLOv8 and sends commands (WASD) based on object position — demonstrating computer vision and automation in a game context.",
    brawl_obj1: "Build an AI assistant with real-time object detection (YOLOv8)",
    brawl_obj2: "Capture a configurable screen region and generate commands (WASD) based on object position",
    brawl_obj3: "Provide a graphical interface (Tkinter) with live preview and settings",
    brawl_obj4: "Structure the project into modules (capture, detection, movement, GUI) for maintainability",
    brawl_mission1: "Development of the screen capture module (ScreenCapture) with region settings",
    brawl_mission2: "Integration of YOLOv8 (BulletDetector) for object detection on the stream",
    brawl_mission3: "Keyboard command module (Movement) and control logic based on object position",
    brawl_mission4: "Graphical interface (GUI): Start/Stop, key settings, preview with detection boxes",
    brawl_mission5: "Entry point and main loop (main.py), testing and tuning",
    brawl_step1_title: "Tool selection and project structure",
    brawl_step1_desc: "Python, Tkinter, Ultralytics YOLOv8, mss, PyAutoGUI. Creating file structure and modules.",
    brawl_step2_title: "Capture and detection module",
    brawl_step2_desc: "ScreenCapture for screen region, BulletDetector to load YOLOv8 model and run inference on each frame.",
    brawl_step3_title: "Movement module and control logic",
    brawl_step3_desc: "Movement for sending WASD keys, defining reference center and rules (object position → command).",
    brawl_step4_title: "Graphical interface and integration",
    brawl_step4_desc: "Tkinter window with live preview, detection boxes, capture region settings and evaluation loop via timer.",
    brawl_arch_title: "Architecture and modules",
    brawl_mod1: "ScreenCapture — capture of a configurable screen region (coordinates, size), output ready for the model.",
    brawl_mod2: "BulletDetector — YOLOv8 model loading, inference on the stream, optional training on custom dataset.",
    brawl_mod3: "Movement — sending up/down/left/right commands via keyboard (WASD), clean stop.",
    brawl_mod4: "GUI — main window (Start/Stop), key binding, live preview with detection boxes, capture area adjustment.",
    brawl_mod5: "main.py — entry point: detector, capture, movement initialization and main loop.",
    brawl_logic: "Control logic: a reference center is defined in the image; each detected object's position is compared to this center and generates the corresponding movement commands (left/right/up/down), implementing automatic control based on object position in the frame.",
    brawl_skill1: "Real-time object detection with YOLOv8",
    brawl_skill2: "Computer vision (OpenCV, video stream)",
    brawl_skill3: "Modular architecture (capture, detection, control, GUI)",
    brawl_skill4: "Tkinter GUI and asynchronous loop",
    brawl_skill5: "Efficient screen capture (mss) and keyboard automation (PyAutoGUI)",
    brawl_conclusion: "This project allowed me to apply computer vision and automation in a concrete context. I consolidated the use of YOLOv8, screen capture and modular architecture. The main challenges were synchronizing the detection stream with the interface and tuning the capture region. This experience reinforces my interest in AI and automation.",
    brawl_img_capture: "Application running — screen capture and detection zone",
    brawl_img_console: "Console output with real-time updates",
    brawl_img_structure: "Project file structure",
    project_coming_soon: "Detailed page coming soon.",
    // My Skills
    my_skills: "My Skills",
    skill_web: "Web Development (HTML, CSS, JavaScript, PHP)",
    skill_sql: "SQL / Databases",
    skill_kotlin: "Kotlin (Android)",
    skill_git: "Git / Collaboration",
    skill_roblox: "Roblox Studio",
    skill_python: "Python",
    skill_unity: "Unity",
    skill_cpp: "C++",
    skill_ui: "UI / UX Design",
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
    
    // Database project
    db_title: "Database design and implementation",
    db_subtitle: "Data modelling, relational schemas and SQL implementation",
    db_context: "I design and implement databases: from requirements analysis to relational schema (conceptual and logical models) and SQL implementation. This section shows project examples (management interfaces, schemas) and a structured data model for a patient-tracking application (HospitalData, C#/JSON) — entities, relationships and storage layer.",
    db_obj1: "Design coherent, normalized data schemas",
    db_obj2: "Implement databases in SQL (tables, constraints, queries)",
    db_obj3: "Provide a reliable storage layer (SQL or structured e.g. JSON)",
    db_mission1: "Requirements analysis and identification of entities and relationships",
    db_mission2: "Conceptual model (ER/MCD) and logical model (MLD / tables)",
    db_mission3: "Implementation (SQL scripts, data managers), testing and documentation",
    db_step1_title: "Requirements and data gathering",
    db_step1_desc: "Identify entities, attributes and business rules; define constraints and relationships.",
    db_step2_title: "Conceptual model (MCD)",
    db_step2_desc: "Build the conceptual schema: entities, associations, cardinalities, independent of the DBMS.",
    db_step3_title: "Logical and physical model",
    db_step3_desc: "Translate to relational schema (MLD), keys, normalization; define tables and data types.",
    db_step4_title: "Implementation and testing",
    db_step4_desc: "Write SQL scripts (CREATE, constraints, views), set up data access (ORM, managers, JSON) and consistency tests.",
    db_skill1: "Relational schema design (MCD, MLD) and normalization",
    db_skill2: "SQL: queries, joins, constraints, views",
    db_skill3: "Structured storage layer (C#, JSON, managers) for rich models",
    db_img1: "Screenshot — database project",
    db_img2: "Screenshot — interface or schema",
    db_img_model: "HospitalData data model (patients, experiences, sessions, supervisors)",
    db_conclusion: "Database design is central to my work: whether in SQL for web applications (UCA, university projects) or in a structured model (HospitalData), I follow a rigorous process — analysis, modelling, implementation and testing — for reliable, maintainable data.",
    
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

// Project IDs: 'soutenances-uca', 'brawl' (full detail), 'planner' (simple placeholder)
const PROJECT_DETAIL_PAGES = {
  'soutenances-uca': 'project-detail',
  'brawl': 'project-detail-brawl',
  'database': 'project-detail-database'
};

function openProject(projectId) {
  const aboutPage = document.querySelector('[data-page="about"]');
  const projectDetailPage = document.querySelector('[data-page="project-detail"]');
  const projectDetailBrawl = document.querySelector('[data-page="project-detail-brawl"]');
  const projectDetailDatabase = document.querySelector('[data-page="project-detail-database"]');
  const projectDetailSimple = document.querySelector('[data-page="project-detail-simple"]');
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  
  if (!aboutPage) return;
  
  aboutPage.classList.remove('active');
  if (projectDetailPage) projectDetailPage.classList.remove('active');
  if (projectDetailBrawl) projectDetailBrawl.classList.remove('active');
  if (projectDetailDatabase) projectDetailDatabase.classList.remove('active');
  if (projectDetailSimple) projectDetailSimple.classList.remove('active');
  
  const detailPage = PROJECT_DETAIL_PAGES[projectId];
  if (detailPage === 'project-detail' && projectDetailPage) {
    projectDetailPage.classList.add('active');
  } else if (detailPage === 'project-detail-brawl' && projectDetailBrawl) {
    projectDetailBrawl.classList.add('active');
  } else if (detailPage === 'project-detail-database' && projectDetailDatabase) {
    projectDetailDatabase.classList.add('active');
  } else if (projectDetailSimple) {
    const titleEl = projectDetailSimple.querySelector('[data-simple-title]');
    const descEl = projectDetailSimple.querySelector('[data-simple-desc]');
    const content = getProjectSimpleContent(projectId);
    if (titleEl) titleEl.textContent = content.title;
    if (descEl) descEl.textContent = content.desc;
    projectDetailSimple.classList.add('active');
  }
  
  navigationLinks.forEach(link => link.classList.remove('active'));
  window.scrollTo(0, 0);
}

// Données pour les projets sans page détaillée (à compléter plus tard)
const PROJECTS_SIMPLE = {
  planner: {
    titleKey: 'project_planner_title',
    descKey: 'project_planner_desc'
  },
  brawl: {
    titleKey: 'project_brawl_title',
    descKey: 'project_brawl_desc'
  }
};

function getProjectSimpleContent(projectId) {
  const data = PROJECTS_SIMPLE[projectId];
  if (!data || !translations[currentLang]) return { title: '', desc: '' };
  return {
    title: translations[currentLang][data.titleKey] || data.titleKey,
    desc: translations[currentLang][data.descKey] || data.descKey
  };
}

function goBack() {
  const aboutPage = document.querySelector('[data-page="about"]');
  const projectDetailPage = document.querySelector('[data-page="project-detail"]');
  const projectDetailBrawl = document.querySelector('[data-page="project-detail-brawl"]');
  const projectDetailDatabase = document.querySelector('[data-page="project-detail-database"]');
  const projectDetailSimple = document.querySelector('[data-page="project-detail-simple"]');
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  
  if (projectDetailPage) projectDetailPage.classList.remove('active');
  if (projectDetailBrawl) projectDetailBrawl.classList.remove('active');
  if (projectDetailDatabase) projectDetailDatabase.classList.remove('active');
  if (projectDetailSimple) projectDetailSimple.classList.remove('active');
  if (aboutPage) aboutPage.classList.add('active');
  
  navigationLinks.forEach(link => {
    if (link.getAttribute('data-i18n') === 'about') link.classList.add('active');
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

let galleryImages = [];
let currentImageIndex = 0;

function openImageModal(imgSrc, caption, index) {
  const imageModal = document.querySelector('[data-image-modal]');
  const modalImage = document.querySelector('[data-modal-image]');
  const modalCaption = document.querySelector('[data-modal-caption]');
  const modalCounter = document.querySelector('[data-modal-counter]');
  
  if (modalImage && modalCaption && imageModal) {
    currentImageIndex = index || 0;
    modalImage.src = imgSrc;
    modalCaption.textContent = caption;
    if (modalCounter && galleryImages.length > 1) {
      modalCounter.textContent = (currentImageIndex + 1) + ' / ' + galleryImages.length;
    }
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

function navigateModal(direction) {
  if (galleryImages.length === 0) return;
  
  currentImageIndex += direction;
  
  // Loop around
  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  } else if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }
  
  const modalImage = document.querySelector('[data-modal-image]');
  const modalCaption = document.querySelector('[data-modal-caption]');
  const modalCounter = document.querySelector('[data-modal-counter]');
  
  if (modalImage && galleryImages[currentImageIndex]) {
    modalImage.src = galleryImages[currentImageIndex].src;
    if (modalCaption) {
      modalCaption.textContent = galleryImages[currentImageIndex].caption;
    }
    if (modalCounter) {
      modalCounter.textContent = (currentImageIndex + 1) + ' / ' + galleryImages.length;
    }
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
  
  const galleryItemsList = document.querySelectorAll('.gallery-item');
  const modalOverlay = document.querySelector('[data-modal-overlay]');
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  const modalPrevBtn = document.querySelector('[data-modal-prev]');
  const modalNextBtn = document.querySelector('[data-modal-next]');
  
  // Build gallery images array
  galleryImages = [];
  galleryItemsList.forEach((item, index) => {
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');
    if (img) {
      galleryImages.push({
        src: img.src,
        caption: caption ? caption.textContent : ''
      });
    }
  });
  
  // Add click handlers to gallery items
  galleryItemsList.forEach((item, index) => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      const caption = this.querySelector('.gallery-caption');
      if (img) {
        openImageModal(img.src, caption ? caption.textContent : '', index);
      }
    });
  });
  
  // Modal overlay close
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeImageModal);
  }
  
  // Close button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeImageModal);
  }
  
  // Navigation buttons
  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      navigateModal(-1);
    });
  }
  
  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      navigateModal(1);
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    const imageModal = document.querySelector('[data-image-modal]');
    if (imageModal && imageModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeImageModal();
      } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
      } else if (e.key === 'ArrowRight') {
        navigateModal(1);
      }
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
