const fs = require("fs")
const slugify = require('@sindresorhus/slugify')
const {terms} = require("./terms")

const summary = 
`# Table of contents\n* [Introduction](README.md)\n${terms.map(term => `* [${term}](${slugify(term)}.md)`).join('\n')}
 `
  fs.writeFile(`SUMMARY.md`, summary, err => {
      if (err) {
          console.log(err)
      } else {
          console.log(`SUMMARY.md successfully created!`)
      }
  })