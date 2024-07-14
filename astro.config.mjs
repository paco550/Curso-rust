import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/paco550/Curso-rust',
  base: '/',
  integrations: [starlight({
    locales: {
      root: {
        lang: 'es',
        label: 'español'
      }
    },
    title: 'DevNotes',
    logo: {
      src: './src/assets/cabeza-gorila.png'
    },
    social: {
      github: 'https://github.com/paco550/Curso-rust'
    },
    sidebar: [{
      label: '[home] inicio',
      link: '/'
    }, {
      label: '[list] lista de cursos',
      link: '/lista/'
    }, {
      label: '[box] Guias',
      autogenerate: {
        directory: 'guides'
      }
    },{
      label: '[book] MiniRetos by Moure',
      autogenerate: {
        directory: 'miniretos'
      }
    }, {
      label: '[book] Proyectos',
      autogenerate: {
        directory: 'reference'
      },
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro'
    },
    customCss: ['@fontsource-variable/space-grotesk/index.css', '@fontsource/space-mono/400.css', '@fontsource/space-mono/700.css', './src/styles/theme.css'],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  }), react()],
  output: "static"
});