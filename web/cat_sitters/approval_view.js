class ApprovalView extends EventEmitter2 {
  constructor(element){
    super()
    this.element = element
    this.go_to_availability_button = this.element.querySelector('#check_availability_button')
    this.go_to_availability_button.addEventListener('click', () => this.emit('go_to_availability'))
  }

  update(cat_sitters){
    cat_sitters.forEach((cat_sitter) => {
      let view = new CatSitterView(cat_sitter)
      this.element.querySelector('cat-sitters').appendChild(view.element)
    })
  }

  get approved_sitters(){ return cat_sitters.filter((sitter) => sitter.approved) }

  show(){ this.element.style.display = ''     }
  hide(){ this.element.style.display = 'none' }
}