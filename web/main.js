Sugar.extend()

let login_form        = document.querySelector('#login')
let approval_view     = new ApprovalView(document.querySelector('#approve_sitters'))
let availability_view = new AvailabilityView(document.querySelector('#availability_check'))

login_form.querySelector('#login_button').addEventListener('click', async () => {
  login_form.style.display = 'none'

  let response = await fetch('/sitters')
  let cat_sitters = await response.json()
  approval_view.update(cat_sitters)
  approval_view.show()
})

approval_view.on('go_to_availability', () => {
  approval_view.hide()
  availability_view.update(approval_view.approved_sitters)
  availability_view.show()
})
