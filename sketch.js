var marks = [30,40,45,35];

var x = 0
function setup() {
  createCanvas(400, 400);

}
for (var i = 0;i < marks.length;i++)
{
  console.log(marks[i])
  x = x + marks[i]
}
console.log(x/marks.length)
function draw() {
  background(150);
}