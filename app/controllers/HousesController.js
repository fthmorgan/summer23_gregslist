import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";


function _drawCars() {
  const houses = AppState.houses
  let template = ''

  houses.forEach(house => template += houses.HouseTemplate)

  setHTML('houseListings', template)
}


export class HousesController {
  constructor() {
    console.log('house controller live');

  }
}