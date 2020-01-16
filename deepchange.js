function deepChange(obj, path, val) {
  var nodes = path.split(".");
  var currObj = obj;
  var allObj = [];
  var i = 0;
  for (i = 0; i < nodes.length; i++) {
    allObj[i] = currObj;
    currObj = currObj[nodes[i]];
  }

  currObj = val;
  allObj[i] = currObj;

  for (i = nodes.length; i >= 0; i--) {
    if (i < nodes.length) {
      allObj[i][nodes[i]] = allObj[i + 1];
    }
  }

  if (currObj == null) return obj;
  return allObj[0];
}
