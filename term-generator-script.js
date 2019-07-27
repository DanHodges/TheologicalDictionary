const fs = require("fs")
const {terms} = require("./terms")
  
terms.forEach(term => {
  const def = 
`# ${term}
Definition of ${term} coming soon.
`
  fs.writeFile(`${term}.md`, def, err => {
      if (err) {
          console.log(err)
      } else {
          console.log(`${term} successfully created!`)
      }
  })
})
