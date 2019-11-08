Sugar.extend()

let cat_sitters = [
    new CatSitter({
        name: "Katie Catt", 
        bio: "I love cats. I'm an art student and I have three cats. Or rather, three cats have meeee! LOL.",
        photo: "1.jpg",
        location: "New York, NY",
        rating: 4.0,
        rates: 10.00
    }),
    new CatSitter({
        name: "Katherine Catt", 
        bio: "I have been a cat owner for over 30 years. Me and my current cats, Snowglobe and Cornwall, have pleasant evenings together.",
        photo: "2.jpg",
        location: "Westchester, NY",
        rating: 5.0,
        rates: 20.00
    }),
    new CatSitter({
        name: "Kat Catt", 
        bio: "KITTIES ARE THE BEST!!! Like if you agree!",
        photo: "3.jpg",
        location: "Hempstead, NY",
        rating: 3.0,
        rates: 7.00
    })
]

let approved_sitters = []

let login_form = document.querySelector('#login')
let approve_sitters_view = document.querySelector('#approve_sitters')
let check_availability_view = document.querySelector('#availability_check')

login_form.querySelector('#login_button').addEventListener('click', () => {
  login_form.style.display = 'none'
  approve_sitters_view.style.display = ''
})

approve_sitters_view.querySelector('#check_availability_button').addEventListener('click', () => {
  approve_sitters_view.style.display = 'none'
  check_availability_view.style.display = ''

  approved_sitters.forEach( (sitter) => {
    let view = new CatSitterView(sitter)
    check_availability_view.querySelector('cat-sitters').appendChild(view.element)
  })
})

cat_sitters.forEach((cat_sitter) => {
  let view = new CatSitterView(cat_sitter)
  approve_sitters_view.appendChild(view.element)
})