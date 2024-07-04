import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://louisescher.github.io',
  base: '/',
  integrations: [starlight({
    locales: { root: {lang: 'es', label: 'español'}},
    title: 'ÓXIDO',
    logo: {
      src: './src/assets/ion-logo.svg'
    },
    social: {
      github: 'https://github.com/comet-analytics/ion-theme'
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
    }, {
      label: '[book] Proyectos',
      autogenerate: {
        directory: 'reference'
      }
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
    },
    customCss: [
      '@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});