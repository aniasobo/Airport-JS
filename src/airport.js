function Airport() {
  this._hangar = []
}

function arrayRemove(arr, value) {
  return arr.filter(function(ele){
      return ele != value;
  });
}

Airport.prototype.land = function(plane) {
  this._hangar.push(plane)
  return this._hangar
}

Airport.prototype.takeoff = function(plane) {
  result = arrayRemove(this._hangar, plane)
  return result 
}

console.log(this._hangar)
