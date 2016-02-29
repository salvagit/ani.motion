var center = new Point(view.size.width / 2, view.size.height / 2);


var p = new Path({
  strokeColor: 'white',
  strokeWidth: 0.04
});

// for (var i = 0; i < 550; i++) draw(i);

function onFrame (e) {
  draw(e.count);
}

function draw (increment, f) {
  var sin = Math.sin(increment * (30 * Math.PI)) * 100;
  var cos = Math.cos(increment * (30 * Math.PI)) * 100;

  p.rotate(cos, center);
  p.strokeColor.hue += cos / 100;

  var x = increment;
  p.add(new Point(increment + center.x, cos + center.y));
};

function onMouseDown() {
  for (var i = 0; i < 550; i++) draw(i);
}
