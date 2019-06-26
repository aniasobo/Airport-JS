describe('Plane', function() {
  let plane;
  let airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearToLand', 'clearToTakeoff']);
  })

  it('creates an instance of a plane', function() {
    expect(plane).toBeDefined();
  })

  it('can land at airport', function() {
    plane.landAt(airport);
    expect(airport.clearToLand(plane)).toHaveBeenCalledWith(plane);
  })

  it('changes default status to Grounded', function() {
    plane.changeToGrounded();
    expect(plane.status).toEqual('Grounded');
  })

})