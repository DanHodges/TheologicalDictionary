const fs = require("fs")
const {terms} = require("./terms")
terms.map(term => ` * [${term}](${term}.md)`)

const summary = 
`# Table of contents\n* [Initial page](README.md)\n${terms.map(term => `* [${term}](${term}.md)`).join('\n')}
 `
  fs.writeFile(`SUMMARY.md`, summary, err => {
      if (err) {
          console.log(err)
      } else {
          console.log(`SUMMARY.md successfully created!`)
      }
  })