import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Campus Tutor Connect',
  description: 'IS117-005 Group Business research and decision history',
  base: '/is117-group-business/',
  cleanUrls: true,
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'Research', link: '/research/' }, { text: 'Review', link: '/review/' }],
    sidebar: [
      { text: 'Project', items: [{ text: 'Overview', link: '/' }, { text: 'Research', link: '/research/' }, { text: 'Decisions & Checks', link: '/research/decisions' }, { text: 'Review & Contributions', link: '/review/' }] }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/davidjimen2008-spec/is117-group-business' }]
  }
})
