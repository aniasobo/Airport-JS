describe('Plane', function() {
  let plane;

  beforeEach(function(){
    plane = new Plane();
  })

  it('creates an instance of a plane', function() {
    expect(plane).toBeDefined();
  })

  it('changes default status to Grounded', function() {
    plane.changeToGrounded();
    expect(plane.status).toEqual('Grounded');
  })
})