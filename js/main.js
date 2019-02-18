'use strict'
/* eslint-disable max-len */
const Handlebars = require('handlebars')
const fs = require('fs')


var source = fs.readFileSync('../template/index.hbs', 'utf8', (err, htmlData) => {
  if (err) throw err
})

Handlebars.registerHelper('breaklines', function(text) {
  text = Handlebars.Utils.escapeExpression(text)
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>')
  return new Handlebars.SafeString(text)
})

var context = {
  name: "index",
  title: "Announcing Blockparty - an easy-to-use multi-network SSB client.",
  h2: "What is blockparty?",
  body: "blockparty is going to be an out-of-the-box desktop application that allows users to easily create their own decentralized, encrypted social network and invite others to join.\r\nUnlike Facebook for example, infrastructure and control over the data stay where they belong: in the hands of the users.\r\n\r\nWe use the secure-scuttlebutt protocol as starting point, but with blockparty it will be easier for non-technical people to start their own SSB-based network/group a.k.a blockparty.\r\nFor us, easy setup means a setup with few technical hurdles and good usability, so that anyone can join.\r\n\r\nOur goal is to make decentralized networks user friendly and therefore accessible for more people, even for the less technically savvy!\r\n\r\nblockparty leaves it up to users what they want their block party to be: social network, forum or family room.\r\nWe're building this free and open source project as a community effort because we believe in non-commercial, neutral, and fair mobile communication for everyone."
}

function writeFiles(context) {
  var template = Handlebars.compile(source)
  var generatedHTML = template(context)
  fs.writeFileSync('../' + context.name + '.html', generatedHTML, 'utf8', (err) => {
    if (err) throw err
  })
}


writeFiles(context)
