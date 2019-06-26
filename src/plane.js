function Plane() {
  this.status = 'In Air';
 };

Plane.prototype.changeToGrounded = function(){
  this.status = 'Grounded';
};

Plane.prototype.landAt = function(airport) {
  airport.clearToLand(this);
  this.changeToGrounded;
  return this.status;
};