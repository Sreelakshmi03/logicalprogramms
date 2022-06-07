var values = [-0.9, -0.08, -12.3,];
var positivenumber = values.map(value => +value)
    .filter(value => value < 0).sort((x,y) =>x-y).shift()
console.log(positivenumber);
   

   