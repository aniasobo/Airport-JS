describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane()
  })

  it('create an instance of airport', function() {
    var airport = new Airport()
    expect(airport).toEqual(jasmine.anything());
  })

  it('makes an airplane landing', function() {
    expect(airport.land(plane)).toEqual([plane])
  })
})