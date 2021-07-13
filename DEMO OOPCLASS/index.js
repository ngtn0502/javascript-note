/*/ Lap trinh huong doi tuong OOP
        -KE THUA (INHERITANCE)
        -DONG GOI (ENCAPSULATION)
        -DA HINH (POLYMORPHISM)
        -TRUU TUONG (ABSTRACTION)
*/

class Parent {
  // Thuoc tinh cua class
  constructor(_name, _age, _skin) {
    (this.name = _name), (this.age = _age), (this.skin = _skin);
  }
  //   Phuong thuc cua class
  say() {
    console.log("Hi, i am parent");
  }
}

const p = new Parent("Nguyen Van A", 30, "vang");
// console.log(typeof p);

class Child extends Parent {
  // Method cua Child se ghi de method inherited from parent
  //   => Tinh da hinh => POLYMORPHISM
  say() {
    console.log("Hi, i am children");
  }
  // Thuoc tinh cua class
  constructor(_name, _age, _skin, _eyes) {
    //   Khong can khai bao lai - chi ke thua thuoc tinhs
    // (this.name = _name),
    //   (this.age = _age),
    //   (this.skin = _skin),
    // Ke thua thuoc tinh cua parent => INHERITANCE
    super(_name, _age, _skin); //super() <==> constructor parent

    //   Thuoc tinh moi
    this.eyes = _eyes;
  }
  //   Phuong thuc cua class
}

const c1 = new Child("Nguyen Van B", 18, "Vang", "Den");
console.log(c1);
console.log(c1.skin);
c1.say(); //Do Child extend tu Parent => inheritance prototype from their parent
console.log(Parent.isPrototypeOf(Child));
