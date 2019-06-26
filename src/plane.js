function Plane() {
  this.status = 'In Air';
 }

Plane.prototype.changeToGrounded = function(){
  this.status = 'Grounded';
};