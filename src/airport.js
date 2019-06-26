function Airport() {
  this._hangar = []
};

function arrayRemove(arr, value) {
  return arr.filter(function(ele){
      return ele != value;
  });
};

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearToLand = function(plane) {
  this._hangar.push(plane);
  return this._hangar;
};

Airport.prototype.clearToTakeoff = function(plane) {
  result = arrayRemove(this._hangar, plane);
  return result; 
};