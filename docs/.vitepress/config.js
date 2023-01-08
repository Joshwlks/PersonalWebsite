import { SearchPlugin } from 'vitepress-plugin-search'

export default {
  title: 'Home',
  titleTemplate: 'PersonalWebsite',
  description: 'Joshwilkins.co.uk',
  lang: 'en-UK',
  base: '/',
  cleanUrls: 'with-subfolders',
  themeConfig: {
    logo: '/ninja-laptop.png',
    socialLinks: [
      { icon: 'linkedin', link: 'https://uk.linkedin.com/in/jsh-wilkins/' },
      { icon: 'github', link: 'https://github.com/Joshwlks' }
    ],
    nav: [
      { text: 'Tech Blog', link: '/techblog/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'About Me', link: '/aboutme/' },
    ],
    footer: {
      copyright: '© 2022 Joshua Wilkins'
    },
    sidebar: {
      '/techblog/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Recent Posts', link: '/techblog/' },
          ]
        },
        {
          text: 'Documentation',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'AzureML Series: Part 1 an Introduction to Cloud ML', link: '/learning/docs/azureml-part1' }
          ]
        }
      ],
      '/projects/': [
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