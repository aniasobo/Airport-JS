describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport()
  })

  it('create an instance of airport', function() {
    var airport = new Airport()
    expect(airport).toEqual(jasmine.anything());
  })

})