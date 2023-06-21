import { Car } from "./models/Car.js"
import { House } from "./models/Houses.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Car.js').Car[]} */
  cars = loadState('cars', [Car])

  // NOTE Used to load initial data
  init() {

  }

  houses = [
    new House({
      year: '1974',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 350000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg',
    }),
    new House({
      year: '1974',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 350000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg',
    }),
    new House({
      year: '1974',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 350000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg',
    }),
    new House({
      year: '1974',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 350000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg',
    }),
    new House({
      year: '1974',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 350000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg',
    }),
    new House({
      year: '1974',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 350000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg',
    }),
  ]



}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
