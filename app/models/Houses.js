import { generateId } from "../utils/generateId.js"


export class House {
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }


  get HouseTemplate() {
    return `
    <div id="houseListings" class="container-fluid">
      <div class="row">
        <div class="col-12">
          <section class="row bg-light elevation-5">
            <div class="col-4 p-0">
              <img class="img-fluid house-img"
                src="${this.imgUrl}">
            </div>
            <div class="col-8">
              <h1>Price: ${this.price}</h1>
              <h2>${this.year}</h2>
              <h4>${this.bedrooms}</h4>
              <h4>${this.bathrooms}</h4>
              <h5>${this.sqft}</h5>
              <p>${this.description}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  `
  }
}