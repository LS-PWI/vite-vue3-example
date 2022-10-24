export default class ExampleService {
  constructor(constructorValue) {
    this.constructorProperty = constructorValue;
  }

  declareAVariable() {
    let myVar = 2; // Do not user "var". See https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
    console.log("myVar is: " + myVar);
  }

  declareAnArray() {
    let myArray = [1, 2, 3];
    console.log(`myArray is: ${myArray}`);
  }

  declareAnObject() {
    let myObject = {
      productName: "pencil",
      price: 2.79,
      id: 5,
    };
    console.log("myObject is:");
    console.log(myObject);
  }

  doAForLoop() {
    let array = [1, 2, 3];
    console.log("For loop");
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  doAForeach() {
    let array = [1, 2, 3];
    console.log("ForEach");
    array.forEach((e) => {
      console.log(e);
    });
  }

  doAMap() {
    let array = [1, 2, 3];
    console.log("Map");
    array
      .map((e) => e + 2)
      .forEach((e) => {
        console.log(e);
      });
  }
}
