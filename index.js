function b() {
  let myLet;
  console.log(myLet);
}

function a() {
  let myLet = 2;
  console.log(myLet);
  b();
}

let myLet = 1;
console.log(myLet);
a();
console.log(myLet);
