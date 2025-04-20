document.addEventListener('DOMContentLoaded', () => {
  // Traducciones
  const translations = {
    es: {
      'nav.about': 'Acerca',
      'nav.services': 'Servicios',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      'hero.intro': '¡Hola! Somos',
      'hero.name': 'Cam - Diseño y Desarrollo de Páginas Web',
      'hero.role': 'en Villavicencio, Colombia',
      'hero.description': 'Creamos sitios web modernos, responsivos y optimizados que impulsan tu negocio. Especializados en diseño web, desarrollo front-end y soluciones personalizadas con HTML, CSS, JavaScript y WordPress; ayudamos a empresas en Villavicencio y toda Colombia a destacar en línea. ¿Listo para llevar tu presencia digital al siguiente nivel?',
      'hero.cta': 'Explora Nuestros Proyectos',
      'about.title': 'Sobre Nosotros',
      'about.text1': 'Somos Cam, desarrollo web y diseño con base en Villavicencio, Colombia. Apasionados por crear experiencias digitales únicas. Con nuestros años de experiencia, diseñamos y desarrollamos sitios web responsivos, rápidos y optimizados para SEO que ayudan a negocios locales a destacar en el mercado digital. Nuestro enfoque combina creatividad, tecnología moderna y un profundo entendimiento de las necesidades de nuestros clientes.',
      'about.text2': 'Trabajamos con tecnologías de vanguardia para ofrecer soluciones personalizadas, desde páginas web corporativas hasta tiendas en línea. Nuestro objetivo es que cada proyecto no solo sea visualmente atractivo, sino también funcional y fácil de usar. Estamos ubicados en Villavicencio, pero atendemos clientes en toda Colombia, siempre con un enfoque en la calidad y la satisfacción del cliente.',
      'about.text3': 'Algunas de las tecnologías con las que trabajamos:',
      'about.cta': '¿Quieres un sitio web que realmente conecte con tu audiencia? Contáctanos hoy y hablemos sobre tu proyecto.',
      'about.btn': 'Contáctanos hoy',
      'services.title': 'Servicios de Diseño y Desarrollo Web en Villavicencio',
      'services.design.title': 'Diseño Web Personalizado',
      'services.design.text': 'Creamos sitios web únicos y responsivos que reflejan la identidad de tu marca. Utilizando HTML, CSS y JavaScript, diseño interfaces modernas y optimizadas para todos los dispositivos, perfectas para negocios en Villavicencio y más allá.',
      'services.development.title': 'Desarrollo Front-End',
      'services.development.text': 'Desarrollamos interfaces interactivas y accesibles con tecnologías como React y JavaScript moderno. Nuestras soluciones garantizan una experiencia de usuario fluida, ideal para startups y empresas que buscan destacar en línea.',
      'services.wordpress.title': 'Sitios Web con WordPress',
      'services.wordpress.text': 'Construimos sitios web profesionales con WordPress, optimizados con Yoast SEO y personalizados con Elementor. Desde blogs hasta tiendas en línea, ofrecemos soluciones escalables para empresas en Villavicencio y todo Colombia.',
      'services.seo.title': 'Optimización SEO',
      'services.seo.text': 'Mejoramos la visibilidad de tu sitio web en Google con estrategias de SEO local y técnico. Desde la optimización de palabras clave hasta la velocidad de carga; nos aseguramos de que tu negocio en Villavicencio sea encontrado fácilmente.',
      'services.cta': '¿Listo para transformar tu presencia digital? Solicita una Cotización',
      'services.btn': 'Contáctanos hoy',
      'projects.title': 'Proyectos de Diseño y Desarrollo Web',
      'projects.portfolio.title': 'Portafolio',
      'projects.portfolio.description': 'Diseñamos y desarrollamos nuestro propio sitio web como portafolio, un proyecto responsivo que muestra nuestras habilidades en HTML, CSS y JavaScript. Este sitio está optimizado para SEO y ofrece una experiencia de usuario fluida, ideal para destacar en Villavicencio.',
      'projects.wonder.title': 'Wonder Nails - Spa',
      'projects.wonder.description': 'Desarrollamos un sitio web moderno y responsivo para Wonder Nails Spa en Villavicencio. Con un diseño atractivo, animaciones suaves y una API de reservas integrada, este proyecto mejora la presencia digital del negocio y facilita la interacción con los clientes.',
      'projects.bloom.title': 'Bloom Luxury - Spa',
      'projects.bloom.description': 'Creamos una landing page elegante y responsiva para Bloom Luxury Spa en Villavicencio. Este proyecto destaca por su diseño limpio, navegación intuitiva y optimización para dispositivos móviles, ayudando al spa a atraer más clientes locales.',
      'projects.live': 'Ver en Vivo',
      'contact.title': 'Contáctanos Hoy',
      'contact.text': '¿Buscas desarrolladores web en Villavicencio para crear o mejorar tu sitio web? Estamos aquí para ayudarte. Ofrecemos soluciones personalizadas de diseño y desarrollo web que impulsan tu negocio. Escríbenos por correo o WhatsApp y empecemos a trabajar en tu proyecto. ¡Responderemos lo antes posible!',
      'contact.cta': 'Inicia Tu Proyecto',
      'contact.email': 'Enviar Correo',
      'contact.whatsapp': 'Enviar Mensaje por WhatsApp',
      'contact.info': 'Web Dev By Cam<br>Villavicencio, Meta, Colombia',
      'contact.form.title': 'Envíanos un Mensaje Directo',
      'contact.form.name': 'Nombre *',
      'contact.form.email': 'Correo Electrónico *',
      'contact.form.phone': 'Teléfono *',
      'contact.form.message': 'Mensaje *',
      'contact.form.submit': 'Enviar Mensaje',
      'contact.form.success': '¡Mensaje enviado con éxito! Te contactaremos pronto.',
      'contact.form.error': 'Por favor, completa todos los campos requeridos o intenta de nuevo.',
      'footer.text': 'Diseñado y Desarrollado por Web Dev By Cam | Villavicencio, Colombia'
    },
    en: {
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.intro': 'Hi, my name is',
      'hero.name': 'Cam - Web Designer and Developer',
      'hero.role': 'I craft stunning front-end experiences.',
      'hero.description': 'I’m a front-end web developer based in Villavicencio, Colombia, passionate about creating interactive, accessible, and smooth web interfaces.',
      'hero.cta': 'Check out my work',
      'about.title': 'About Me',
      'about.text1': 'I’m a front-end developer who loves building elegant web experiences using HTML, CSS, and JavaScript. I enjoy setting up clean interfaces and smooth animations that enhance user engagement.',
      'about.text2': 'Technologies I work with:',
      'about.text3': 'Technologies I work with:',
      'about.cta': 'Want a website that truly connects with your audience? Contact me today and let’s talk about your project.',
      'services.title': 'Web Development Services',
      'services.design.title': 'Custom Web Design',
      'services.design.text': 'I create unique, responsive websites that reflect your brand’s identity. Using HTML, CSS, and JavaScript, I design modern interfaces optimized for all devices.',
      'services.development.title': 'Front-End Development',
      'services.development.text': 'I develop interactive and accessible interfaces with technologies like React and modern JavaScript, ensuring a seamless user experience.',
      'services.wordpress.title': 'WordPress Websites',
      'services.wordpress.text': 'I build professional WordPress sites optimized with Yoast SEO and customized with Elementor, from blogs to online stores.',
      'services.seo.title': 'SEO Optimization',
      'services.seo.text': 'I improve your website’s visibility on Google with local and technical SEO strategies, ensuring your business is easily found.',
      'services.cta': 'Ready to transform your digital presence? Request a Quote',
      'projects.title': 'Some Projects I’ve Built',
      'projects.portfolio.title': 'Portfolio Website',
      'projects.portfolio.description': 'A clean personal portfolio site showcasing my skills in HTML, CSS, and JavaScript.',
      'projects.wonder.title': 'Wonder Nails - Spa',
      'projects.wonder.description': 'An eye-catching spa website with a modern UI, smooth animations, and integrated booking API.',
      'projects.bloom.title': 'Bloom Luxury - Spa',
      'projects.bloom.description': 'A neat, responsive, and user-friendly spa landing page optimized for mobile devices.',
      'projects.live': 'Live',
      'contact.title': 'Get In Touch',
      'contact.text': 'I’m always open to collaborating on interesting projects or just having a friendly tech chat. Whether you have a question or just want to say hi, I’ll try my best to get back to you!',
      'contact.cta': 'Say Hello!',
      'contact.email': 'Email Me',
      'contact.whatsapp': 'Text Me',
      'contact.info': 'Web Dev By Cam<br>Villavicencio, Meta, Colombia',
      'contact.form.title': 'Send Me a Direct Message',
      'contact.form.name': 'Name *',
      'contact.form.email': 'Email *',
      'contact.form.phone': 'Phone (Optional)',
      'contact.form.message': 'Message *',
      'contact.form.submit': 'Send Message',
      'contact.form.success': 'Message sent successfully! I’ll get back to you soon.',
      'contact.form.error': 'Please fill in all required fields or try again.',
      'footer.text': 'Designed & Built by WebDevByCam'
    }
  };

  // Función para cambiar el idioma
  function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (key === 'contact.info' || key === 'about.cta' || key === 'services.cta') {
          element.innerHTML = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });

    // Actualizar metaetiquetas dinámicamente
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'es' ?
      'Servicios expertos de diseño y desarrollo web en Villavicencio, Colombia. Crea sitios web responsivos y rápidos con HTML, CSS y JavaScript. ¡Contáctame hoy!' :
      'Expert web design and development services in Villavicencio, Colombia. Build responsive, fast websites with HTML, CSS, and JavaScript. Contact me today!'
    );
    document.querySelector('title').textContent = lang === 'es' ?
      'Web Dev By Cam | Diseño y Desarrollo Web en Villavicencio' :
      'Web Dev By Cam | Web Design & Development Services';

    // Actualizar Open Graph y Twitter Card
    document.querySelector('meta[property="og:title"]').setAttribute('content', lang === 'es' ?
      'Web Dev By Cam - Diseño y Desarrollo Web en Villavicencio' :
      'Web Dev By Cam - Expert Web Design & Development'
    );
    document.querySelector('meta[property="og:description"]').setAttribute('content', lang === 'es' ?
      'Cam crea sitios web responsivos y personalizados en Villavicencio, Colombia, con HTML, CSS y JavaScript. ¡Explora mi portafolio!' :
      'Cam builds responsive, custom websites with HTML, CSS, and JavaScript. Explore my portfolio!'
    );
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', lang === 'es' ?
      'Web Dev By Cam - Diseño y Desarrollo Web en Villavicencio' :
      'Web Dev By Cam - Expert Web Design & Development'
    );
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', lang === 'es' ?
      'Cam crea sitios web responsivos y personalizados en Villavicencio, Colombia, con HTML, CSS y JavaScript. ¡Explora mi portafolio!' :
      'Cam builds responsive, custom websites with HTML, CSS, and JavaScript. Explore my portfolio!'
    );

    // Actualizar el atributo lang del HTML
    document.documentElement.setAttribute('lang', lang);

    // Guardar preferencia en localStorage
    localStorage.setItem('language', lang);
  }

  // Cargar idioma predeterminado (español) o el guardado
  const savedLang = localStorage.getItem('language') || 'es';
  setLanguage(savedLang);
  document.getElementById('language-switch').value = savedLang;
  document.getElementById('language-switch-desktop').value = savedLang;

  // Event listeners para el cambio de idioma
  document.getElementById('language-switch').addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
  document.getElementById('language-switch-desktop').addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });

  // Smooth scroll para enlaces internos
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animaciones de revelado al hacer scroll
  const animatedSections = document.querySelectorAll("section, .hero");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.15 });

  animatedSections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    observer.observe(section);
  });

  // Actualizar año en el footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Animación del preloader
  window.addEventListener('load', () => {
    const timeline = anime.timeline({
      easing: 'easeInOutQuart'
    });
    timeline
      .add({
        targets: '#hex-path',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500
      })
      .add({
        targets: '#hex-letter',
        opacity: 1,
        duration: 800
      })
      .add({
        targets: '#preloader',
        opacity: 0,
        duration: 1000,
        delay: 500,
        complete: () => {
          document.getElementById('preloader').style.display = 'none';
        }
      });
  });

  // Resaltar navegación al hacer scroll
  const allSections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    allSections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Menú móvil
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });

  const mobileNavLinks = document.querySelectorAll('#mobileNav .nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
    });
  });

  // Botón de contacto
  const sayHelloBtn = document.getElementById('say-hello');
  const options = document.getElementById('contact-options');
  sayHelloBtn.addEventListener('click', (e) => {
    e.preventDefault();
    options.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!sayHelloBtn.contains(e.target) && !options.contains(e.target)) {
      options.classList.remove('active');
    }
  });

  // Validación y manejo del formulario
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  contactForm.addEventListener('submit', (e) => {

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validación de campos requeridos
    if (!name || !email || !phone || !message) {
      e.preventDefault();
      formMessage.textContent = translations[savedLang]['contact.form.error'];
      formMessage.className = 'form-message error';
      return;
    }
  });
});