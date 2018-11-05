const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', function() {
 it ('should instantate properly', () => { 
    var hotel = new Hotel("Hilton Metropole", "London")
    expect (hotel.name).to.equal ("Hilton Metropole")
    expect (hotel.city).to.equal ("London")
    expect (hotel.reviews).to.deep.equal ([])
 })

 it('should count reviews', () => {
    var hotel = new Hotel("Hilton Metropole", "London")
    var count = hotel.reviewCount()
    expect(count).to.equal(0)
 })

 it('should return no stars rating when no reviews', () => {
    var hotel = new Hotel("Hilton Metropole", "London")
    var count = hotel.ratingAsStars()
    expect(count).to.equal('')
 })

 it('should return the url slug', () => {
   // var hotel = new Hotel("Hilton Metropole", "London")
    hotel.urlSlug() => {("hilton_metropole_london")}
    var count = hotel.urlSlug('one, two, three')
    expect(count).to.equal('one_two_three')
 })

 
})


