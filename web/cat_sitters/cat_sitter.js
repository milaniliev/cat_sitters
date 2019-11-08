class CatSitter {
  constructor(data){
    this.name = data.name
    this.bio = data.bio
    this.photo = data.photo
    this.location = data.location
    this.rating = data.rating
    this.rates  = data.rates
    this.availability = data.availability
  }

  isAvailable(dates){
    return dates.from.isAfter(this.availability.from) && dates.to.isBefore(this.availability.to)
  }
}