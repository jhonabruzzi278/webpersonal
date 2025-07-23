// src/utils/i18n.ts
export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.education': 'Educación',
    'hero.greeting': 'Hola, soy Jonathan 👋',
    'hero.description': 'Desarrollador web y Soporte IT. De Cuba, actualmente en Chile. Me apasiona crear aplicaciones web modernas y eficientes.',
    'hero.years': '+2 Años de experiencia',
    'hero.cta': 'Aquí encontrarás mis proyectos y experiencia. Si quiere colaborar o charlar sobre tecnología, ¡contácteme!',
    'about.title': 'Sobre mí',
    'about.description': 'A finales de 2023, decidí enfocarme completamente en el desarrollo web y soporte IT tras migrar de Cuba a Chile.',
    'experience.title': 'Experiencia laboral',
    'education.title': 'Educación',
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Descubre mis últimas creaciones',
    'projects.description': 'Cada proyecto que desarrollo combina diseño moderno, funcionalidad avanzada y las mejores prácticas de desarrollo. Te invito a explorar mi trabajo y ver cómo puedo ayudarte a materializar tu próxima idea.',
    'projects.cta': '¿Interesado en colaborar en un proyecto?',
    'projects.contact': 'Contactar para proyectos',
    'projects.view-all': 'Ver todos los proyectos',
    'projects.back': 'Volver a proyectos',
    'projects.back-home': 'Volver al inicio',
    'projects.site': 'Sitio Web',
    'projects.code': 'Código',
    'social.cv': 'CV',
    'footer.made-with': 'Hecho con',
    'meta.title': 'Jonathan Guerra - Desarrollador Web Full Stack | Portfolio',
    'meta.description': 'Desarrollador web especializado en Astro, Next.js, React y Node.js. Más de 2 años creando aplicaciones web modernas y eficientes. Contrata servicios de desarrollo web profesional.',
    'meta.projects-title': 'Proyectos Web | Jonathan Guerra - Portfolio de Desarrollador',
    'meta.projects-description': 'Descubre mis proyectos web más destacados: aplicaciones con Astro, Next.js, React y Node.js. Desarrollo frontend y backend con las mejores tecnologías modernas.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'hero.greeting': 'Hello, I\'m Jonathan 👋',
    'hero.description': 'Web Developer & IT Support specialist from Cuba, now based in Chile. I\'m passionate about crafting modern, efficient web applications that make a difference.',
    'hero.years': '2+ Years of Experience',
    'hero.cta': 'Here you\'ll discover my projects and professional journey. Looking to collaborate or discuss tech? Let\'s connect!',
    'about.title': 'About Me',
    'about.description': 'In late 2023, I made the decision to fully commit to web development and IT support after my journey from Cuba to Chile.',
    'experience.title': 'Professional Experience',
    'education.title': 'Education',
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Explore My Latest Work',
    'projects.description': 'Every project I build combines cutting-edge design, robust functionality, and industry best practices. Take a look at my work and discover how I can help bring your next big idea to life.',
    'projects.cta': 'Ready to collaborate on something amazing?',
    'projects.contact': 'Let\'s Work Together',
    'projects.view-all': 'View All Projects',
    'projects.back': 'Back to Projects',
    'projects.back-home': 'Back Home',
    'projects.site': 'Live Demo',
    'projects.code': 'Source Code',
    'social.cv': 'Download Resume',
    'footer.made-with': 'Crafted with',
    'meta.title': 'Jonathan Guerra - Full Stack Web Developer | Professional Portfolio',
    'meta.description': 'Experienced web developer specializing in Astro, Next.js, React, and Node.js. 2+ years building modern, scalable web applications. Available for freelance projects and full-time opportunities.',
    'meta.projects-title': 'Web Development Projects | Jonathan Guerra - Portfolio Showcase',
    'meta.projects-description': 'Explore my collection of web development projects featuring Astro, Next.js, React, and Node.js. Full-stack solutions built with modern technologies and best practices.'
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
