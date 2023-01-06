import { SearchPlugin } from 'vitepress-plugin-search'

export default {
  title: 'Home',
  titleTemplate: 'PersonalWebsite',
  description: 'Joshwilkins.co.uk',
  lang: 'en-UK',
  base: '/',
  //cleanUrls: 'with-subfolders',
  themeConfig: {
    logo: '/ninja-laptop.png',
    socialLinks: [
      { icon: 'linkedin', link: 'https://uk.linkedin.com/in/jsh-wilkins/' },
      { icon: 'github', link: 'https://github.com/Joshwlks' }
    ],
    nav: [
      { text: 'Blog', link: '/learning/' },
      { text: 'Projects', link: '/courses/' },
      { text: 'About Me', link: '/about/' },
    ],
    footer: {
      copyright: '© 2022 Joshua Wilkins'
    },
    editLink: {
      pattern: 'https://github.com/Joshwlks/PersonalWebsite',
      text: 'Edit this page on GitHub'
    },
    sidebar: {
      '/learning/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Recent Posts', link: '/learning/' },
          ]
        },
        {
          text: 'Documentation',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'How this blog was made', link: '/learning/docs/this-blog' },
            { text: 'Tips on Writing', link: '/learning/docs/my-docs' },
          ]
        }
      ],
      '/courses/': [
        {
          text: 'Config',
          items: [
            { text: 'courses', link: '/courses/' },
          ]
        }
      ]
    }
  },
  vite: {
    plugins: [SearchPlugin()]
  }
}