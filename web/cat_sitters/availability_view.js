class AvailabilityView extends EventEmitter2{
  constructor(element){
    super()
    this.element = element
    
  }

  update(approved_sitters){
    approved_sitters.forEach( (sitter) => {
      let view = new CatSitterView(sitter)
      view.element.classList.add('booking')
      this.element.querySelector('cat-sitters').appendChild(view.element)
    })
  }

  show(){ this.element.style.display = ''     }
  hide(){ this.element.style.display = 'none' }
}