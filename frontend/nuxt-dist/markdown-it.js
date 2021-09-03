import MarkdownIt from 'markdown-it'

export default ({ app }, inject) => {
  const md = new MarkdownIt({"preset":"default","linkify":true,"breaks":true,"html":true})

  md.use(require('markdown-it-div'))

  md.use(require('markdown-it-attrs'))

  md.use(require('markdown-it-abbr'))

  md.use(require('markdown-it-container'))

  md.use(require('markdown-it-deflist'))

  md.use(require('markdown-it-emoji'))

  md.use(require('markdown-it-footnote'))

  md.use(require('markdown-it-ins'))

  md.use(require('markdown-it-mark'))

  md.use(require('markdown-it-sub'))

  md.use(require('markdown-it-sup'))

  inject('md', md)
}
