const fs = require('fs')

const terms = [
    "2nd Temple Judaism",
    "Adoption",
    "Adoptionism",
    "Alexander",
    "Angels",
    "Apollinaris",
    "Apollinarianism",
    "Apostolic Fathers, The",
    "Arius",
    "Arianism",
    "Athanasius",
    "Atonement",
    "Atonement, Vicarious Nature Of",
    "Atonement—its Nature",
    "Augustine",
    "Baptism",
    "Basil Great, The",
    "Blasphemy Of Sirmium, The",
    "Boethius",
    "Canonization Of The Old And New Testaments, The",
    "Change In Godhead (Humanity Joined With Eternal Deity), The",
    "Christ, Messiah",
    "Communicatio Idiomatum",
    "Communicatio Idiomatum.",
    "Council Of Alexandria (See Synod Of Alexandria 362 A.D.)",
    "Council Of Chalcedon (451 A.D.)",
    "Council Of Constantinople (381 A.D.), First.",
    "Council Of Constantinople (553 A.D.), Second",
    "Council Of Constantinople (680-681 A.D.), Third",
    "Council Of Ephesus",
    "Council Of Ephesus (431 A.D.), First",
    "Council Of Nicaea (325 A.D.), First",
    "Council Of Nicaea (787 A.D.), Second",
    "Creation, Nature Of",
    "Cyril Of Alexandria",
    "Darkness, The",
    "Death Of Jesus, The",
    "Deification (see Theosis), The",
    "Divine Immanance",
    "Divine Name, The",
    "Divine Self-existence",
    "Divine Transcendence",
    "Docetism",
    "Dualism",
    "Dynamic Monarchianism",
    "Ebionitism",
    "Enoch",
    "Eschatology",
    "Eternal Generation Of Son, The",
    "Eternal Generation Of The Son, The",
    "Eternal Life",
    "Eusebius Of Caesarea.",
    "Eusebius Of Nicomedia",
    "Eustathius Of Antioch",
    "Eutychus",
    "Eutychus/ Eutychianism",
    "Evil, Devil, Satan",
    "Faith",
    "Filioque, The",
    "Flesh",
    "Gender In Trinity?, The",
    "Gnosticism",
    "God, Theology, The",
    "God: “what” Or “who”?",
    "Gregory Of Nazianzus",
    "Gregory Of Nyssa",
    "Heaven",
    "Hell",
    "Heteroousios",
    "Hilary",
    "Hilary Of Poitiers",
    "Holy Spirit, The",
    "Homoiousios",
    "Homoousios",
    "Hypostases",
    "Hypostatic Union, The",
    "I Am",
    "Incarnation",
    "Inerrancy",
    "Irenaeus",
    "Jesus Nature-divine",
    "Jesus, One Of Us  (Humanity Of Jesus)",
    "Jesus- Reflection Of The Father, The",
    "Jesus’ Consubstantial Deity",
    "Jesus’ Consubstantial Humanity",
    "Jesus’ Nature- Human",
    "Jesus’ Vicarious Humanity",
    "Jewish Binitarianism, Trinitarianism",
    "John Zizilouas",
    "Justification",
    "Justin Martyr",
    "Karl Barth",
    "Karl Rahner",
    "Lamb Of God",
    "Light, The",
    "Logos-flesh Christology",
    "Logos-human Chrstology",
    "Lord",
    "Lord’s Supper, The",
    "Love And Nature Of God, The",
    "Lucian Of Antioch",
    "Macedonianism",
    "Marcellus Of Ancyra,",
    "Melchizedek",
    "Messiah/anointed One",
    "Modalism (Sabellianism, Noetianism, Patripassionism)",
    "Modalistic Monarchianism",
    "Monopheliteitism",
    "Monophysitism",
    "Mutual Indwelling",
    "Neo-platonism",
    "Nephilim",
    "Nestorius",
    "Nestorius/nestorianism",
    "New Birth",
    "Nicene Constantinopolitan Creed (381)",
    "Nicene Creed (325)",
    "On Incarnation., The",
    "Origen",
    "Ousia",
    "Paradise",
    "Partialism",
    "Perichoresis",
    "Platonism",
    "Procession Of Spirit, The",
    "Rabbinic Judaism",
    "Reconciliation",
    "Redemption",
    "Regeneration",
    "Repentance",
    "Salvation",
    "Salvation (Participation In Life Of God), The",
    "Scripture",
    "Shema, The",
    "Sin",
    "Social Trinitarianism",
    "Son Of God",
    "Son Of Man",
    "Son- The Creator, The",
    "Son- The Sustainer Of Creation, The",
    "Sophia, Wisdom",
    "Synod Of Alexandria (A.D. 362), The",
    "Temple Theology, The",
    "Tertullian",
    "Theosis",
    "Thomas Torrance",
    "Three Cappadocians, The",
    "Trinity & Personhood, The",
    "Trinity As Interpersonal Relationship(s), The",
    "Trinity In The Oid Testament, The",
    "Trinity, The",
    "Tritheism, The",
    "Union With Christ",
    "Vicarious Humanity Of Christ",
    "Word, The",
    "World, The",
    "Worship",
    "Wrath Of God"
  ]
  
  terms.forEach(term => {
    const def = 
`# ${term}
Definition of ${term} coming soon
`
    fs.writeFile(`${term}.md`, def, err => {
        if (err) {
            console.log("err")
        } else {
            console.log(term + "successfully created!")
        }
    })
})
