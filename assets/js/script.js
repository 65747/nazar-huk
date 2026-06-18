// =============================================
// TRANSLATIONS
// =============================================

const translations = {
  fr: {
    // Navigation
    about: "Compétences",
    contact: "Contact",
    back: "Retour",
    
    // Sidebar
    contacts: "Contacts",
    phone: "Téléphone",
    location: "Localisation",
    city: "Clermont-Ferrand, France",
    
    // About section — competencies
    comp_frontend: "Frontend",
    comp_mobile: "Mobile",
    comp_database: "Base de données",
    comp_languages: "Langages",
    comp_tools: "Outils",
    
    // Projects
    my_projects: "Mes Projets",
    mes_projets: "Mes projets",
    projets_principaux: "Projets principaux",
    autres_projets: "Autres projets",
    project_title: "Plateforme de Gestion des Soutenances — UCA",
    project_subtitle: "Gestion et analyse des soutenances et alternances",
    project_planner_title: "AI Smart Planner",
    project_planner_desc: "App Android : IA (LLM) pour transformer texte/voix en tâches et créneaux.",
    planner_title: "AI Smart Planner",
    planner_subtitle: "App Android : IA (LLM) pour parsing texte/voix en tâches et créneaux",
    planner_context: "App Android dont le cœur est un LLM (Supabase Edge Functions) : l'IA détermine automatiquement l'heure et le type de tâche en s'appuyant sur la mémoire (préférences, habitudes) et les presets. L'utilisateur décrit ses tâches en texte ou à la voix, le modèle renvoie un emploi du temps structuré. Autres fonctions : connexion email/Google, multilingue, thème clair/sombre, widget d'accueil.",
    planner_obj1: "Mettre l'IA (LLM) au cœur du parsing texte/voix → tâches et créneaux horaires",
    planner_obj2: "Intégrer une Edge Function Supabase avec LLM et contexte (presets, mémoire)",
    planner_obj3: "Offrir saisie vocale, presets, mémoire des habitudes (sync), auth email/Google",
    planner_obj4: "Livrer une app native (Compose), multilingue, widget et notifications",
    planner_mission1: "Conception du flux parsing IA : requête vers Edge Function, format requête/réponse (ParseRequest, SchedulePayload)",
    planner_mission2: "Implémentation du client Android (Ktor, AuthenticatedApi), gestion token Bearer et refresh 401",
    planner_mission3: "Écrans Compose (MainScreen, Login, Presets, Memory, Settings), ViewModels et répos (Room, DataStore)",
    planner_mission4: "Auth Supabase (email/Google), mémoire et presets (Room + sync Edge Function memory/sync)",
    planner_mission5: "Widget Glance, WorkManager, notifications, multilingue et thème clair/sombre",
    planner_step1_title: "Choix du stack et architecture",
    planner_step1_desc: "Kotlin, Compose, Hilt, Room, DataStore, Ktor, Supabase. Structure UI → ViewModel → Repository, modèles domaine / DTO / Entity.",
    planner_step2_title: "Edge Function et parsing IA",
    planner_step2_desc: "Edge Function « parse » avec LLM, entrée (texte, presets, mémoire), sortie SchedulePayload. Intégration côté app (AuthenticatedApi).",
    planner_step3_title: "Écrans et couche données",
    planner_step3_desc: "MainScreen (saisie, liste tâches, presets, voix), Login, Presets, Memory, Settings. TaskRepository, MemoryRepository, PresetRepository, SettingsRepository.",
    planner_step4_title: "Auth, widget, i18n et finition",
    planner_step4_desc: "Supabase Auth (email, Google), restauration de session. Glance widget, WorkManager, notifications. Localisation (FR, EN, etc.) et thème.",
    planner_skill1: "Intégration LLM (Edge Functions) et conception du flux parsing IA",
    planner_skill2: "Android natif : Jetpack Compose, Hilt, Room, DataStore, Ktor",
    planner_skill3: "Supabase : Auth, Edge Functions, modèles requête/réponse",
    planner_skill4: "Architecture propre : UI → ViewModel → Repository, domaine / DTO / Entity",
    planner_arch_title: "Architecture",
    planner_arch: "UI (Compose Screens) → ViewModel (StateFlow, répos) → Repository (Room, DataStore, AuthenticatedApi). AuthManager + Supabase Auth ; requêtes protégées via Ktor (Bearer, refresh si 401). Parsing IA : Edge Function « parse » avec LLM, prise en compte des presets et de la mémoire utilisateur. Modèles domaine séparés des DTO/Entity.",
    planner_img1: "Écran principal",
    planner_img2: "Presets",
    planner_img3: "Mémoire",
    planner_img4: "Paramètres",
    planner_img5: "Écran",
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
    db_skill4: "Conception et réalisation de managers (gestionnaires d'accès aux données : lecture/écriture, CRUD, persistance JSON ou SQL)",
    db_hospitaldata_link_label: "Projet HospitalData :",
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
    context_text: "Projet universitaire (UCA) : application web de gestion des soutenances et alternances. Outil centralisé pour les enseignants : évaluations, grilles d'évaluation, suivi des stages.",
    
    // Objectives
    objectives_title: "Objectifs du Projet",
    obj_1: "Interface intuitive enseignants / administrateurs",
    obj_2: "Centralisation soutenances et alternances",
    obj_3: "Génération automatisée des grilles d'évaluation",
    obj_4: "Outils d'analyse et suivi de la progression",
    obj_5: "Authentification et droits par rôle",
    
    // Missions
    missions_title: "Missions Principales",
    mission_1: "Conception et modélisation BDD relationnelle",
    mission_2: "Interfaces enseignant et administrateur",
    mission_3: "Authentification et autorisation",
    mission_4: "Gestion des grilles d'évaluation",
    mission_5: "Module statistiques et analyse de données",
    mission_6: "Documentation technique",
    
    // Project Steps
    steps_title: "Étapes du Projet",
    step1_title: "Analyse BDD",
    step1_desc: "Structure existante, relations entre tables, données nécessaires aux interfaces.",
    step2_title: "Page d'authentification",
    step2_desc: "Connexion, vérification des rôles (enseignant / admin), gestion de session.",
    step3_title: "Interface enseignant",
    step3_desc: "Tableau de bord soutenances, affichage infos étudiants, données personnelles.",
    step4_title: "Interface administrateur",
    step4_desc: "Panneau grilles d'évaluation, CRUD ressources, gestion utilisateurs.",
    step5_title: "Module d'analyse",
    step5_desc: "Page statistiques, requêtes SQL d'agrégation, tableaux et graphiques.",
    step6_title: "Tests et documentation",
    step6_desc: "Tests fonctionnels, corrections, documentation technique.",
    
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
    conclusion_title: "Conclusion",
    conclusion_text: "Application des acquis à un cas réel (équipe, délais, besoins utilisateurs). Défis principaux : conception BDD et gestion des rôles. Piste d'évolution : déploiement cloud.",
    
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
    about: "Skills",
    contact: "Contact",
    back: "Back",
    
    // Sidebar
    contacts: "Contact",
    phone: "Phone",
    location: "Location",
    city: "Clermont-Ferrand, France",
    
    // About section — competencies
    comp_frontend: "Frontend",
    comp_mobile: "Mobile",
    comp_database: "Database",
    comp_languages: "Languages",
    comp_tools: "Tools",
    
    // Projects
    my_projects: "My Projects",
    mes_projets: "My Projects",
    projets_principaux: "Main Projects",
    autres_projets: "Other Projects",
    project_title: "Defense Management Platform — UCA",
    project_subtitle: "Management and analysis of thesis defenses and internships",
    project_planner_title: "AI Smart Planner",
    project_planner_desc: "Android app: AI (LLM) turns text/voice into tasks and time slots.",
    planner_title: "AI Smart Planner",
    planner_subtitle: "Android app: AI (LLM) for parsing text/voice into tasks and time slots",
    planner_context: "Android app built around a server-side LLM (Supabase Edge Functions): the AI automatically determines time and task type using what is in memory (preferences, habits) and presets. The user describes their tasks in text or by voice, the model returns a structured schedule. Other features: email/Google sign-in, multilingual, light/dark theme, home-screen widget.",
    planner_obj1: "Make AI (LLM) the core of text/voice parsing → tasks and time slots",
    planner_obj2: "Integrate a Supabase Edge Function with LLM and context (presets, memory)",
    planner_obj3: "Provide voice input, presets, habit memory (sync), email/Google auth",
    planner_obj4: "Deliver a native app (Compose), multilingual, widget and notifications",
    planner_mission1: "Design of AI parsing flow: request to Edge Function, request/response format (ParseRequest, SchedulePayload)",
    planner_mission2: "Android client implementation (Ktor, AuthenticatedApi), Bearer token and 401 refresh handling",
    planner_mission3: "Compose screens (MainScreen, Login, Presets, Memory, Settings), ViewModels and repos (Room, DataStore)",
    planner_mission4: "Supabase Auth (email/Google), memory and presets (Room + Edge Function memory/sync)",
    planner_mission5: "Glance widget, WorkManager, notifications, multilingual and light/dark theme",
    planner_step1_title: "Stack and architecture choices",
    planner_step1_desc: "Kotlin, Compose, Hilt, Room, DataStore, Ktor, Supabase. UI → ViewModel → Repository structure, domain / DTO / Entity models.",
    planner_step2_title: "Edge Function and AI parsing",
    planner_step2_desc: "Edge Function « parse » with LLM, input (text, presets, memory), output SchedulePayload. App-side integration (AuthenticatedApi).",
    planner_step3_title: "Screens and data layer",
    planner_step3_desc: "MainScreen (input, task list, presets, voice), Login, Presets, Memory, Settings. TaskRepository, MemoryRepository, PresetRepository, SettingsRepository.",
    planner_step4_title: "Auth, widget, i18n and polish",
    planner_step4_desc: "Supabase Auth (email, Google), session restore. Glance widget, WorkManager, notifications. Localisation (FR, EN, etc.) and theme.",
    planner_skill1: "LLM integration (Edge Functions) and AI parsing flow design",
    planner_skill2: "Native Android: Jetpack Compose, Hilt, Room, DataStore, Ktor",
    planner_skill3: "Supabase: Auth, Edge Functions, request/response models",
    planner_skill4: "Clean architecture: UI → ViewModel → Repository, domain / DTO / Entity",
    planner_arch_title: "Architecture",
    planner_arch: "UI (Compose Screens) → ViewModel (StateFlow, repos) → Repository (Room, DataStore, AuthenticatedApi). AuthManager + Supabase Auth; protected requests via Ktor (Bearer, refresh on 401). AI parsing: Edge Function « parse » with LLM, using presets and user memory. Domain models separate from DTO/Entity.",
    planner_img1: "Main screen",
    planner_img2: "Presets",
    planner_img3: "Memory",
    planner_img4: "Settings",
    planner_img5: "Screen",
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
    context_text: "University project (UCA): web application for managing thesis defenses and internships. Centralized tool for teaching staff: evaluations, evaluation grids, internship tracking.",
    
    // Objectives
    objectives_title: "Project Objectives",
    obj_1: "Intuitive interface for teachers and administrators",
    obj_2: "Centralized management of defenses and internships",
    obj_3: "Automated evaluation grid generation",
    obj_4: "Analytics and progress tracking",
    obj_5: "Role-based authentication",
    
    // Missions
    missions_title: "Main Missions",
    mission_1: "Relational database design and modeling",
    mission_2: "Teacher and administrator interfaces",
    mission_3: "Authentication and authorization",
    mission_4: "Evaluation grids management",
    mission_5: "Statistics and data analysis module",
    mission_6: "Technical documentation",
    
    // Project Steps
    steps_title: "Project Steps",
    step1_title: "Database analysis",
    step1_desc: "Existing structure, table relationships, data required for interfaces.",
    step2_title: "Authentication page",
    step2_desc: "Login, role verification (teacher/admin), session management.",
    step3_title: "Teacher interface",
    step3_desc: "Defenses dashboard, student info display, personal data.",
    step4_title: "Administrator interface",
    step4_desc: "Evaluation grids panel, resource CRUD, user management.",
    step5_title: "Analysis module",
    step5_desc: "Statistics page, SQL aggregation queries, tables and charts.",
    step6_title: "Testing and documentation",
    step6_desc: "Functional testing, bug fixes, technical documentation.",
    
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
    conclusion_title: "Conclusion",
    conclusion_text: "Applied skills to a real case (teamwork, deadlines, user needs). Main challenges: database design and role management. Possible evolution: cloud deployment.",
    
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
    db_skill4: "Design and implementation of managers (data access layer: read/write, CRUD, JSON or SQL persistence)",
    db_hospitaldata_link_label: "HospitalData project:",
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
// ROUTING (History API — instant, no reload)
// =============================================

const PROJECT_DETAIL_PAGES = {
  'soutenances-uca': 'project-detail',
  'planner': 'project-detail-planner',
  'brawl': 'project-detail-brawl',
  'database': 'project-detail-database'
};

const DEFAULT_ROUTE = { type: 'page', page: 'about' };
let currentRoute = null;

function parseRouteFromHash() {
  const raw = window.location.hash.replace(/^#/, '').trim();

  if (!raw || raw === 'about' || raw === 'portfolio' || raw === 'skills') {
    return { type: 'page', page: 'about' };
  }
  if (raw === 'contact') {
    return { type: 'page', page: 'contact' };
  }
  if (raw.startsWith('project/')) {
    const projectId = decodeURIComponent(raw.slice(8));
    if (PROJECT_DETAIL_PAGES[projectId]) {
      return { type: 'project', projectId };
    }
  }

  return { ...DEFAULT_ROUTE };
}

function routeToHash(route) {
  if (route.type === 'project') {
    return `#project/${encodeURIComponent(route.projectId)}`;
  }
  return route.page === 'contact' ? '#contact' : '#about';
}

function routesEqual(a, b) {
  if (!a || !b || a.type !== b.type) return false;
  return a.type === 'page' ? a.page === b.page : a.projectId === b.projectId;
}

function showMainPage(pageName) {
  document.querySelectorAll('[data-page]').forEach(page => {
    page.classList.toggle('active', page.dataset.page === pageName);
  });

  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const linkKey = link.getAttribute('data-i18n');
    link.classList.toggle('active', linkKey === pageName);
  });
}

function showProjectPage(projectId) {
  document.querySelectorAll('[data-page]').forEach(page => {
    page.classList.remove('active');
  });

  const detailPage = PROJECT_DETAIL_PAGES[projectId];
  if (detailPage) {
    const el = document.querySelector(`[data-page="${detailPage}"]`);
    if (el) el.classList.add('active');
  } else {
    const projectDetailSimple = document.querySelector('[data-page="project-detail-simple"]');
    if (projectDetailSimple) {
      const titleEl = projectDetailSimple.querySelector('[data-simple-title]');
      const descEl = projectDetailSimple.querySelector('[data-simple-desc]');
      const content = getProjectSimpleContent(projectId);
      if (titleEl) titleEl.textContent = content.title;
      if (descEl) descEl.textContent = content.desc;
      projectDetailSimple.classList.add('active');
    }
  }

  document.querySelectorAll('[data-nav-link]').forEach(link => {
    link.classList.remove('active');
  });
}

function applyRoute(route, options = {}) {
  if (route.type === 'page') {
    showMainPage(route.page);
  } else {
    showProjectPage(route.projectId);
  }

  currentRoute = route;

  if (options.scroll) {
    window.scrollTo(0, 0);
  }
}

function navigateRoute(route, options = {}) {
  const { replace = false } = options;

  if (routesEqual(currentRoute, route) && !replace) {
    window.scrollTo(0, 0);
    return;
  }

  const hash = routeToHash(route);
  const state = { ...route };

  if (replace) {
    history.replaceState(state, '', hash);
  } else {
    history.pushState(state, '', hash);
  }

  applyRoute(route, { scroll: true });
}

function initRouter() {
  const route = parseRouteFromHash();

  if (!routesEqual(route, DEFAULT_ROUTE)) {
    history.replaceState({ ...DEFAULT_ROUTE }, '', routeToHash(DEFAULT_ROUTE));
    history.pushState({ ...route }, '', routeToHash(route));
  } else {
    history.replaceState({ ...route }, '', routeToHash(route));
  }

  applyRoute(route, { scroll: false });

  window.addEventListener('popstate', (event) => {
    const nextRoute = event.state || parseRouteFromHash();
    applyRoute(nextRoute, { scroll: true });
  });
}

// =============================================
// GLOBAL NAVIGATION FUNCTIONS (for onclick)
// =============================================

function navigateTo(pageName) {
  navigateRoute({ type: 'page', page: pageName });
}

function openProject(projectId) {
  if (!PROJECT_DETAIL_PAGES[projectId]) return;
  navigateRoute({ type: 'project', projectId });
}

function goBack() {
  history.back();
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
  
  initRouter();
  
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
