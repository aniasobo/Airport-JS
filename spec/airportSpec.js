describe('Airport', function() {
  let plane;
  let airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['landAt']);
  });

  it('tells a plane to land', function() {
    expect(airport.clearToLand(plane)).toEqual([plane])
  })

  it('tells plane to fly and checks it left airport', function() {
    airport.clearToLand(plane)
    expect(airport.clearToTakeoff(plane)).toEqual([])
  })

})