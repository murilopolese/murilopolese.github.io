const markdown = require('./utils/markdown.js')
const documentTemplate = require('./components/document.js')
const headerTemplate = require('./components/header.js')
const listTemplate = require('./components/list.js')

module.exports = function(page, posts) {
  const header = headerTemplate()
  const pageContent = markdown(page.matter.content)

  return documentTemplate({
    title: page.matter.data.title,
    content: `
      <div class="container">
        ${header}
        <div class="body">
          <div class="title">
            <h2>${page.matter.data.title}</h2>
            <div class="description">
              ${page.matter.data.subtitle}
            </div>
          </div>
          <div class="content">
            ${pageContent}
            ${listTemplate(posts)}
          </div>
        </div>
      </div>
    `
  })
}
