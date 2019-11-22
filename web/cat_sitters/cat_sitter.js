class CatSitter extends EventEmitter2 {
  constructor(data){
    super()
    
    this.values = {}

    this.properties = {
      name: String,
      bio: String,
      photo: String,
      location: String,
      rating: Number,
      rates: Number,
      availability: Object
    }

    Object.keys(this.properties).forEach((property_name) => {
      Object.defineProperty(this, property_name, {
        get: () => {
          return this.values[property_name]
        },
        set: (new_value) => {
          this.values[property_name] = new_value
          this.emit('change')
        }
      })
      this[property_name] = data[property_name]

    })
  }

  isAvailable(dates){
    return dates.from.isAfter(this.availability.from) && dates.to.isBefore(this.availability.to)
  }
}