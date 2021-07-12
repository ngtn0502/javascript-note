function b() {
  console.log(myLet);
}

function a() {
  let myLet = 2;
  b();
}

let myLet = 1;
a();


