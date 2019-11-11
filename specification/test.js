require('sugar').extend()
const { Before, Given, When, Then, After } = require("cucumber")
const { expect } = require("chai")
const puppeteer  = require('puppeteer')
const fetch      = require('node-fetch')
const url        = require('url')

let server = 'http://localhost:3000'

let bios = [
  "I love cats. I'm an art student and I have three cats. Or rather, three cats have meeee! LOL.",
  "KITTIES ARE THE BEST!!! Like if you agree!"
]

Before(async function () {
  this.browser = await puppeteer.launch({ 
    // headless: false, slowMo: 250 /* ms */ 
  })
  this.page    = await this.browser.newPage()
})

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
    console.log("Created ", sitter.name)
  }
})

When('I log in', async function (){
  await this.page.goto(server)
  await this.page.click('#login_button')
  this.page.on('console', msg => console.log('PAGE LOG:', msg.text()));

})

When('I look at cat sitters', async function () {
  // Based on consultation by Diana Stoeva: 
  // test must wait for the appropriate elements to be present before proceeding.
  await this.page.waitFor('cat-sitter')
  this.sitters = await this.page.$$eval('cat-sitter', async (sitter_elements) => {
    console.log("SITTERS", sitter_elements.length)

    return sitter_elements.map((el) => { 
      return {
            name: el.querySelector('.name'    ).innerText,
        location: el.querySelector('.location').innerText,
             bio: el.querySelector('.bio'     ).innerText,
      }
    })
  })
  console.log("SITTERS", this.sitters)

})

When('I fetch cat sitters', async function () {
  let response = await fetch(`${server}/sitters`)
  this.sitters = await response.json()
})

Then('I should see a cat sitter named {string}', function (name) {
  expect(this.sitters.map((sitter) => sitter.name)).to.include(name)
})

After(async function(){
  await this.browser.close()
})