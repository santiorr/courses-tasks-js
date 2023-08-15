  class Animal {
     constructor(name, age) {
       this.name = name;
       this.age = age;

  get name() {
    return this._name;
  }

  set name(newValue) {
    this._name = newValue;
  }

  get age() {
    return this._age;
  }
  set age(newValue) {
    this._age= newValue;
  }


 	 }

    walk() {
      alert(`${this.name} runs!`);
    }
}

 class Rabbit extends Animal {
    constructor() {
      super("Rabbit");
    }
    walk() {
    	  super.walk();
    	  alert(`${this.name} jumps!`);
	 }
}
new Rabbit("White Rabbit").walk();


 class Cat extends Animal {
    constructor() {
      super("Cat");
    }
    walk() {
    	  super.walk();
    	  alert(`${this.name} purrs!`);
	 }
}
new Cat("Black Cat").walk();

 class Dog extends Animal {
    constructor() {
      super("Dog");
    }
    walk() {
    	  super.walk();
    	  alert(`${this.name} barks!`);
	 }
}
new Dog("Brown Dog").walk();