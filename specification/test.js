require('sugar').extend()
const { Given, When, Then } = require("cucumber")
const { expect } = require("chai")
let fetch = require('node-fetch')

let server = 'http://localhost:3000'

let bios = [
  "I love cats. I'm an art student and I have three cats. Or rather, three cats have meeee! LOL.",
  "KITTIES ARE THE BEST!!! Like if you agree!"
]

Given('there are no cat sitters', async () => {
  let response = await fetch(`${server}/sitters`, { method: 'DELETE' })
  if(!response.ok){ throw new Error(`Response was ${response.status}`) }
})

Given('the following cat sitters:', async (table) => {
  let cat_sitters = table.hashes()
  
  for (let cat_sitter_info of cat_sitters){ 
    let sitter = { 
      name:     cat_sitter_info.name, 
      bio:      bios.sample(),
      photo:    cat_sitter_info.photo,
      location: cat_sitter_info.location,
      rating:   cat_sitter_info.rating,
      rates:    cat_sitter_info.rates,
      availability: {
        from: Date.create(cat_sitter_info.available_from),
          to: Date.create(cat_sitter_info.available_to  )
      }
    }

    let response = await fetch(`${server}/sitters`, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(sitter)
    })
    if(!response.ok){ throw new Error(`Response was ${response.status}`) }
  }

})

When('I log in', function () {
  return 'pending'
})

When('fetch cat sitters', async function () {
  let response = await fetch(`${server}/sitters`)
  this.sitters = await response.json()
})

Then('I should see a cat sitter named {string}', function (name) {
  expect(this.sitters.map((sitter) => sitter.name)).to.include(name)
})
