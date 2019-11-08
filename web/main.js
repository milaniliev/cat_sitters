class CatSitter {
  constructor(data){
      this.name = data.name
      this.bio = data.bio
      this.photo = data.photo
      this.location = data.location
      this.rating = data.rating
      this.rates  = data.rates
  }
}

let cat_sitters = [
    new CatSitter({
        name: "Katie Catt", 
        bio: "I love cats. I'm an art student and I have three cats. Or rather, three cats have meeee! LOL.",
        photo: "head.jpg",
        location: "New York, NY",
        rating: 4.0,
        rates: 10.00
    }),
    new CatSitter({
        name: "Katherine Catt", 
        bio: "I love cats. I'm an art student and I have three cats. Or rather, three cats have meeee! LOL.",
        photo: "head.jpg",
        location: "New York, NY",
        rating: 5.0,
        rates: 20.00
    }),
    new CatSitter({
        name: "Kat Catt", 
        bio: "I love cats. I'm an art student and I have three cats. Or rather, three cats have meeee! LOL.",
        photo: "head.jpg",
        location: "New York, NY",
        rating: 3.0,
        rates: 7.00
    })
]

approved_sitters = []

let cat_sitter_template = `
    <img class="photo"/> 
    <h2 class="name"></h2>
    <p class="bio"></p>
    <div class="location"></div>
    <div class="rating">★★★★☆</div>
    <div class="rates">$10/hr</div>
    <button class="approve">💜</button>
`

class CatSitterView {
  constructor(cat_sitter){
    this.element = document.createElement('cat-sitter')
    this.element.innerHTML = cat_sitter_template

    this.photo = this.element.querySelector('.photo')
    this.name  = this.element.querySelector('.name')
    this.bio  = this.element.querySelector('.bio')
    this.location  = this.element.querySelector('.location')
    this.rating  = this.element.querySelector('.rating')
    this.rates  = this.element.querySelector('.rates')
    this.approve_button = this.element.querySelector('button.approve')
    this.model = cat_sitter

    this.approve_button.addEventListener('click', () => {
      approved_sitters.push(cat_sitter)
      this.element.classList.add('approved')
    })

  }

  set model(cat_sitter){
    this.name.innerText = cat_sitter.name
    this.photo.src = cat_sitter.photo
    this.bio.innerHTML = cat_sitter.bio
    this.location = cat_sitter.location
  }
}

let approve_sitters_view = document.querySelector('#approve_sitters')
let check_availability_view = document.querySelector('#availability_check')

cat_sitters.forEach((cat_sitter) => {
  let view = new CatSitterView(cat_sitter)
  approve_sitters_view.appendChild(view.element)
})

approve_sitters_view.querySelector('#check_availability_button').addEventListener('click', () => {
  approve_sitters_view.style.display = 'none'
  check_availability_view.style.display = ''

  approved_sitters.forEach( (sitter) => {
    let view = new CatSitterView(sitter)
    check_availability_view.querySelector('cat-sitters').appendChild(view.element)
  })

})