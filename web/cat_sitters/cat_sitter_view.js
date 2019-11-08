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