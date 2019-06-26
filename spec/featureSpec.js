describe('Airport App', function() {
  let plane;
  let airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('tells a plane to land', function() {
    expect(airport.clearToLand(plane)).toEqual([plane])
  })

  it('tells plane to fly and checks it left airport', function() {
    airport.clearToLand(plane)
    expect(airport.takeoff(plane)).toEqual([])
  })

  it('responds to method that returns current planes', function() {
    airport.clearToLand(plane)
    expect(airport.planes()).toEqual([plane])
  })

  it('tells plane to take off', function() {
    plane.landAt(airport);
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  });

})