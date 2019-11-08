class AvailabilityView extends EventEmitter2{
  constructor(element){
    super()
    this.element = element
    this.views = []
    this.from_date_field = this.element.querySelector("input.from")
    this.to_date_field   = this.element.querySelector("input.to")

    this.from_date_field.value = Date.create('today')
    this.to_date_field.value   = Date.create('today')

    this.from_date_field.addEventListener('change', () => this.update_availability())

    this.to_date_field.addEventListener('change', () => this.update_availability())
  }

  update_availability(){
    this.views.forEach((view) => {
      view.update_availability(this.date_range)
    })
  }

  get date_range(){
    return {
      from: Date.create(this.from_date_field.value),
      to: Date.create(this.to_date_field.value)
    }
  }

  update(approved_sitters){
    approved_sitters.forEach( (sitter) => {
      let view = new CatSitterView(sitter)
      view.element.classList.add('booking')
      this.element.querySelector('cat-sitters').appendChild(view.element)
      this.views.push(view)
    })
  }

  show(){ this.element.style.display = ''     }
  hide(){ this.element.style.display = 'none' }
}