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


let login_form        = document.querySelector('#login')
let approval_view     = new ApprovalView(document.querySelector('#approve_sitters'))
let availability_view = new AvailabilityView(document.querySelector('#availability_check'))

login_form.querySelector('#login_button').addEventListener('click', () => {
  login_form.style.display = 'none'
  approval_view.update(cat_sitters)
  approval_view.show()
})

approval_view.on('go_to_availability', () => {
  approval_view.hide()
  availability_view.update(approval_view.approved_sitters)
  availability_view.show()
})
