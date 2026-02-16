// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'InspectaPro',
  tagline: 'Hybrid Modeling for SaaS Inspections',
  favicon: 'img/favicon.ico',

  // URL de producción (ajusta con tu usuario de GitHub si vas a desplegar)
  url: 'https://tu-usuario.github.io',
  baseUrl: '/',

  // Configuración de GitHub (Rod, ajusta estos dos campos)
  organizationName: 'tu-usuario',
  projectName: 'inspecta-pro-modeling',

  onBrokenLinks: 'warn', // Cambiado a warn para que no falle si falta una imagen
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // HABILITA MERMAID AQUÍ
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Quitamos el link de "Edit this page" para que se vea más limpio
        },
        blog: false, // DESACTIVAMOS el blog porque no lo usamos
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark', // Por defecto en modo oscuro se ve más pro
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'InspectaPro',
        logo: {
          alt: 'InspectaPro Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/tu-usuario/inspecta-pro-modeling',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project Sections',
            items: [
              {
                label: 'Business Case',
                to: '/docs/01-business-interpretation',
              },
              {
                label: 'Architecture Justification',
                to: '/docs/06-architecture-justification',
              },
            ],
          },
          {
            title: 'Team Crudzaso',
            items: [
              { label: 'Hector Rios', href: '#' },
              { label: 'Daniela Quinto', href: '#' },
              { label: 'Juan José', href: '#' },
              { label: 'Mateo Rico', href: '#' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} InspectaPro. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
