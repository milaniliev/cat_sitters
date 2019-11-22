let cat_sitter_template = `
  <img class="photo"/> 
  <input type="text" class="name"/>
  <p class="bio"></p>
  <div class="location"></div>
  <div class="rating"></div>
  <div class="rates"><span class="amount"></span>/hr</div>
  <button class="approve">💜</button>
  <button class="book">Book</button>
`

class CatSitterView extends EventEmitter2 {
  constructor(cat_sitter){
    super()
    this.element = document.createElement('cat-sitter')
    this.element.innerHTML = cat_sitter_template

    this.photo          = this.element.querySelector('.photo')
    this.name           = this.element.querySelector('.name')
    this.bio            = this.element.querySelector('.bio')
    this.location       = this.element.querySelector('.location')
    this.rating         = this.element.querySelector('.rating')
    this.rates          = this.element.querySelector('.rates .amount')
    this.approve_button = this.element.querySelector('button.approve')
    this.book_button    = this.element.querySelector('button.book')

    this.sitter = cat_sitter

    this.name.addEventListener('input', () => {
      this.sitter.name = this.name.value
    })

    this.approve_button.addEventListener('click', () => {
      if(this.sitter.approved){
        this.sitter.approved = false
        this.emit('approval_changed', this.sitter)
        this.element.classList.remove('approved')
      } else {
        this.sitter.approved = true
        this.emit('approval_changed', this.sitter)
        this.element.classList.add('approved')
      }
    })

    this.book_button.addEventListener('click', () => {
      this.emit('book', this.sitter)
      this.element.classList.add('booked')
    })

    this.sitter.on('change', () => this.update_data())
  }

  get sitter(){ return this._sitter }

  set sitter(cat_sitter){
    this._sitter = cat_sitter
    this.update_data()
  }

  update_data(){
    this.name.value = this.sitter.name
    this.photo.src = `photos/${btoa(this.sitter["@rid"])}`
    this.bio.innerText = this.sitter.bio
    this.location.innerText = this.sitter.location
    this.rates.innerText = `$${this.sitter.rates}`

    // There are obviously better ways to do this. :)
    // I'm keeping the code simple for teaching purposes.
    if(this.sitter.rating === 5) this.rating.innerText = "★★★★★"
    if(this.sitter.rating === 4) this.rating.innerText = "★★★★☆"
    if(this.sitter.rating === 3) this.rating.innerText = "★★★☆☆"
    if(this.sitter.rating === 2) this.rating.innerText = "★★☆☆☆"
    if(this.sitter.rating === 1) this.rating.innerText = "★☆☆☆☆"

  }

  update_availability(dates){
    if(this.sitter.isAvailable(dates)){
      this.element.classList.add('available')
    } else {
      this.element.classList.remove('available')
    }
  }
}