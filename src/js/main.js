// =============================================================================
// main.js — Lógica de interação do portfólio
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------------------------
    // 1. TOGGLE DE TEMA (Claro / Escuro)
    // -------------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const iconSun  = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');

    themeToggleBtn?.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-mode');
        iconSun.style.display  = isLight ? 'block' : 'none';
        iconMoon.style.display = isLight ? 'none'  : 'block';
    });

    // -------------------------------------------------------------------------
    // 2. NAVEGAÇÃO COM FADE (clique nos links âncora)
    // -------------------------------------------------------------------------
    const FADE_DURATION_MS = 250; // deve ser igual ao transition do CSS (0.25s)
    const mainContent = document.querySelector('main');
    const htmlNode    = document.documentElement;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href     = this.getAttribute('href');
            const targetEl = href && href !== '#' ? document.querySelector(href) : null;

            if (!targetEl || !mainContent) return;

            e.preventDefault();

            mainContent.classList.add('fade-transition');

            setTimeout(() => {
                htmlNode.style.scrollBehavior = 'auto';
                targetEl.scrollIntoView();
                void mainContent.offsetWidth; // força reflow
                htmlNode.style.scrollBehavior = 'smooth';
                mainContent.classList.remove('fade-transition');
            }, FADE_DURATION_MS);
        });
    });

    // -------------------------------------------------------------------------
    // 3. INTERNACIONALIZAÇÃO (PT-BR / EN)
    // -------------------------------------------------------------------------
    const translations = {
        pt: {
            'nav-home':        'HOME',
            'nav-sobre':       'SOBRE',
            'nav-projetos':    'PROJETOS',
            'nav-contato':     'CONTATO',
            'hero-subtitle':   'ENGENHEIRO DE SOFTWARE',
            'btn-projetos':    'Ver Projetos',
            'tech-title':      'TECH ARSENAL (BUT NOT LIMITED TO...)',
            'sobre-title':     'Sobre <span>Mim</span>',
            'sobre-p1':        'Sou um <strong>Engenheiro de Software</strong> apaixonado por criar aplicações de alto desempenho e interfaces dinâmicas. Com base sólida no desenvolvimento backend e frontend, resolvo problemas complexos através de código limpo, arquiteturas robustas e design impactante.',
            'sobre-p2':        'Atualmente estudo na <strong>Jala University</strong>, sempre explorando novas tecnologias e aprimorando meu "Tech Arsenal" através do aprendizado constante. Meu foco está em entregar soluções de ponta, combinando dedicação, disciplina e paixão por inovação. Quando não estou programando, gosto de jogar futebol e assistir animes, atividades que me ajudam a manter o equilíbrio e a criatividade.',
            'stat1-title':     'Código Limpo',
            'stat1-desc':      'Boas Práticas & Arquitetura',
            'stat2-title':     'Soluções Rápidas',
            'stat2-desc':      'Foco em Performance',
            'stat3-title':     'Design Moderno',
            'stat3-desc':      'Visual Impactante',
            'projetos-title':  'Meus <span>Projetos</span>',
            'proj1-title':     'Em Breve',
            'proj1-desc':      'Estou preparando meus melhores projetos para exibir aqui. Volte em breve para ver aplicações escaláveis e interfaces incríveis ganhando vida.',
            'proj2-title':     'Em Construção',
            'proj2-desc':      'Outro projeto focado em performance e arquitetura robusta. Em breve os detalhes completos do repositório estarão disponíveis.',
            'contato-title':   'Entre em <span>Contato</span>',
            'contato-subtitle':'Sinta-se à vontade para me mandar uma mensagem para conversarmos sobre tecnologia, projetos ou oportunidades.',
            'footer-text':     '&copy; 2026 Kaio Ribeiro. Todos os direitos reservados.',
        },
        en: {
            'nav-home':        'HOME',
            'nav-sobre':       'ABOUT',
            'nav-projetos':    'PROJECTS',
            'nav-contato':     'CONTACT',
            'hero-subtitle':   'SOFTWARE ENGINEER',
            'btn-projetos':    'View projects',
            'tech-title':      'TECH ARSENAL (BUT NOT LIMITED TO...)',
            'sobre-title':     'About <span>Me</span>',
            'sobre-p1':        'I am a <strong>Software Engineer</strong> passionate about creating high-performance applications and dynamic interfaces. With a solid foundation in backend and frontend development, I solve complex problems through clean code, robust architectures, and impactful design.',
            'sobre-p2':        'I am currently studying at <strong>Jala University</strong>, always exploring new technologies and improving my "Tech Arsenal" through constant learning. My focus is on delivering cutting-edge solutions, combining dedication, discipline, and passion for innovation. When I\'m not coding, I enjoy playing soccer and watching anime, activities that help me maintain balance and creativity.',
            'stat1-title':     'Clean Code',
            'stat1-desc':      'Best Practices & Architecture',
            'stat2-title':     'Fast Solutions',
            'stat2-desc':      'Focus on Performance',
            'stat3-title':     'Modern Design',
            'stat3-desc':      'Impactful Visuals',
            'projetos-title':  'My <span>Projects</span>',
            'proj1-title':     'Coming Soon',
            'proj1-desc':      'I am preparing my best projects to showcase here. Come back soon to see scalable applications and amazing interfaces coming to life.',
            'proj2-title':     'Under Construction',
            'proj2-desc':      'Another project focused on performance and robust architecture. Full repository details will be available soon.',
            'contato-title':   'Get in <span>Touch</span>',
            'contato-subtitle':'Feel free to send me a message to chat about technology, projects, or opportunities.',
            'footer-text':     '&copy; 2026 Kaio Ribeiro. All rights reserved.',
        },
    };

    /** Mapa chave → seletor CSS do elemento alvo */
    const elementSelectors = {
        'nav-home':         '.nav-links li:nth-child(1) a',
        'nav-sobre':        '.nav-links li:nth-child(2) a',
        'nav-projetos':     '.nav-links li:nth-child(3) a',
        'nav-contato':      '.nav-links li:nth-child(4) a',
        'hero-subtitle':    '.hero-subtitle',
        'btn-projetos':     '.hero-buttons .btn-primary',
        'tech-title':       '.tech-title',
        'sobre-title':      '#sobre .section-title',
        'sobre-p1':         '#sobre .sobre-text:nth-of-type(1)',
        'sobre-p2':         '#sobre .sobre-text:nth-of-type(2)',
        'stat1-title':      '#sobre .stat-item:nth-child(1) h3',
        'stat1-desc':       '#sobre .stat-item:nth-child(1) p',
        'stat2-title':      '#sobre .stat-item:nth-child(2) h3',
        'stat2-desc':       '#sobre .stat-item:nth-child(2) p',
        'stat3-title':      '#sobre .stat-item:nth-child(3) h3',
        'stat3-desc':       '#sobre .stat-item:nth-child(3) p',
        'projetos-title':   '#projetos .section-title',
        'proj1-title':      '#projetos .projeto-card:nth-child(1) h3',
        'proj1-desc':       '#projetos .projeto-card:nth-child(1) p',
        'proj2-title':      '#projetos .projeto-card:nth-child(2) h3',
        'proj2-desc':       '#projetos .projeto-card:nth-child(2) p',
        'contato-title':    '#contato .section-title',
        'contato-subtitle': '.contact-subtitle',
        'footer-text':      '.site-footer p',
    };

    /** Aplica as traduções ao DOM para um dado locale */
    function applyTranslations(lang) {
        const strings = translations[lang];
        Object.entries(elementSelectors).forEach(([key, selector]) => {
            const el = document.querySelector(selector);
            if (el && strings[key]) el.innerHTML = strings[key];
        });
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyTranslations(btn.textContent.trim().toLowerCase());
        });
    });

    // -------------------------------------------------------------------------
    // 4. EVENTOS DE SCROLL (unificados em um único listener)
    // -------------------------------------------------------------------------
    const header      = document.querySelector('.header');
    const topControls = document.querySelector('.top-right-controls');
    const progressBar = document.getElementById('scroll-progress-bar');
    const heroImage   = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');
    const sobreSection = document.querySelector('#sobre');
    const projetosSection = document.querySelector('#projetos');
    const contatoSection = document.querySelector('#contato');
    const allSections = document.querySelectorAll('main > section');
    let lastScrollY   = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // 4a. Header auto-hide ao rolar para baixo
        const isScrollingDown = currentScrollY > 80 && currentScrollY > lastScrollY;
        header?.classList.toggle('header--hidden', isScrollingDown);
        topControls?.classList.toggle('controls--hidden', isScrollingDown);
        lastScrollY = currentScrollY;

        // 4b. Barra de progresso
        if (progressBar) {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            progressBar.style.width = docHeight > 0
                ? `${(currentScrollY / docHeight) * 100}%`
                : '0%';
        }

        // 4c. Fade suave da imagem do hero ao rolar
        if (heroImage) {
            const rect = document.querySelector('.hero').getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            let opacity = 1;
            
            // Fade out apenas quando sai pelo topo (ao descer)
            if (rect.bottom < windowHeight) {
                opacity = Math.max(0, rect.bottom / windowHeight);
            }
            
            heroImage.style.opacity = opacity;
            heroImage.style.visibility = opacity <= 0 ? 'hidden' : 'visible';
        }

        // 4d. Fade suave do conteúdo do hero ao rolar
        if (heroContent) {
            const rect = document.querySelector('.hero').getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            let opacity = 1;
            
            // Fade out apenas quando sai pelo topo (ao descer)
            if (rect.bottom < windowHeight) {
                opacity = Math.max(0, rect.bottom / windowHeight);
            }
            
            heroContent.style.opacity = opacity;
        }

        // 4e. Fade suave da seção "Sobre Mim" ao rolar (só fade out)
        if (sobreSection) {
            const rect = sobreSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.height;
            
            let opacity = 1;
            
            // Fade out apenas quando a seção sai pela parte de baixo (ao rolar para cima)
            if (rect.bottom > 0 && rect.bottom < windowHeight && rect.top < 0) {
                opacity = rect.bottom / windowHeight;
            }
            // Fade out quando sai pelo topo (ao rolar para baixo)
            else if (rect.bottom < windowHeight * 0.3) {
                opacity = Math.max(0, rect.bottom / (windowHeight * 0.3));
            }
            
            sobreSection.style.opacity = Math.max(0, Math.min(1, opacity));
        }

        // 4f. Fade suave da seção "Projetos" ao rolar (só fade out)
        if (projetosSection) {
            const rect = projetosSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            let opacity = 1;
            
            // Fade out apenas quando a seção sai pela parte de baixo (ao rolar para cima)
            if (rect.bottom > 0 && rect.bottom < windowHeight && rect.top < 0) {
                opacity = rect.bottom / windowHeight;
            }
            // Fade out quando sai pelo topo (ao rolar para baixo)
            else if (rect.bottom < windowHeight * 0.3) {
                opacity = Math.max(0, rect.bottom / (windowHeight * 0.3));
            }
            
            projetosSection.style.opacity = Math.max(0, Math.min(1, opacity));
        }

        // 4g. Fade suave da seção "Contato" ao rolar (só fade out)
        if (contatoSection) {
            const rect = contatoSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            let opacity = 1;
            
            // Fade out apenas quando a seção sai pela parte de baixo (ao rolar para cima)
            if (rect.bottom > 0 && rect.bottom < windowHeight && rect.top < 0) {
                opacity = rect.bottom / windowHeight;
            }
            // Fade out quando sai pelo topo (ao rolar para baixo)
            else if (rect.bottom < windowHeight * 0.3) {
                opacity = Math.max(0, rect.bottom / (windowHeight * 0.3));
            }
            
            contatoSection.style.opacity = Math.max(0, Math.min(1, opacity));
        }
    }, { passive: true });

    // Dispara o evento de scroll ao carregar para aplicar o fade inicial
    window.dispatchEvent(new Event('scroll'));

    // -------------------------------------------------------------------------
    // 5. FADE DE ENTRADA DAS SEÇÕES + ACTIVE LINK (IntersectionObserver)
    // -------------------------------------------------------------------------
    const sections = document.querySelectorAll('main > section[id]');
    const navLinks = document.querySelectorAll('.nav-links li a');

    /** Atualiza o link ativo na navbar */
    function setActiveLink(id) {
        navLinks.forEach(link => {
            link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
        });
    }

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('section--visible');
            entry.target.classList.remove('section--exit-top');
            setActiveLink(entry.target.id);
        });
    }, { threshold: 0, rootMargin: '-10% 0px -10% 0px' });

    const exitObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                entry.target.classList.add('section--exit-top');
                entry.target.classList.remove('section--visible');
            }
        });
    }, { threshold: 0 });

    sections.forEach(section => {
        fadeInObserver.observe(section);
        exitObserver.observe(section);
    });

});
