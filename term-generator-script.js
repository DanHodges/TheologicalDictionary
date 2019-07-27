const fs = require("fs")
const slugify = require('@sindresorhus/slugify')
const {terms} = require("./terms")
  
terms.forEach(term => {
  const def = 
`# ${term}
Definition of ${term} coming soon.
`
  fs.writeFile(`${slugify(term)}.md`, def, err => {
      if (err) {
          console.log(err)
      } else {
          console.log(`${term} successfully created!`)
      }
  })
})
