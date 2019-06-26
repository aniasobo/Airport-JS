describe('Airport', function() {
  let plane;
  let airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('create an instance of airport', function() {
    expect(airport).toEqual(jasmine.anything());
  })

  it('makes an airplane landing', function() {
    expect(airport.land(plane)).toEqual([plane])
  })

  it('tells plane to fly and checks it left airport', function() {
    airport.land(plane)
    expect(airport.takeoff(plane)).toEqual([])
  })

  it('responds to method that returns current planes', function() {
    airport.land(plane)
    expect(airport.planes()).toEqual([plane])
  })
})