function Cat(name, breed, weight, age) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.age = age;
  this.img = "";
  this.speak = function() {
    return "Meow! My name is " + this.name;
  };
}

function Dog(name, breed, weight, age) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.age = age;
  this.speak = function() {
    return "Bark! My name is " + this.name;
  };
}

function Bird(name, breed, weight, age) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.age = age;
  this.speak = function() {
    return "Tweet! My name is " + this.name;
  };
}

var animals = [new Cat(), new Dog(), new Bird()];
var names = ["Gracious Milkshake", "Ferocious Cranberry", "Regal Roger"];

function generateRandomAnimal() {
    var randomIdx = Math.floor(Math.random() * animals.length);
    var randomAnimal = animals[randomIdx];
    if (randomAnimal instanceof Cat) {
        return new Cat(generateRandomName());
    } else if (randomAnimal instanceof Dog) {
        return new Dog(generateRandomName());
    } else if (randomAnimal instanceof Bird) {
        return new Bird(generateRandomName());
    }
}

function generateRandomName() {
    var randomIdx = Math.floor(Math.random() * names.length);
    var randomName = names[randomIdx];
    return randomName;
}

$(document).ready(function() {
    var animal = generateRandomAnimal();
    // console.log(localStorage.getItem("animal"));

    $("#animal-name").text(animal.name);
    $("#animal-speak").text(animal.speak());

    // fill in the html
    if (animal instanceof Cat) {
        $("#animal-img").attr("src", "cat.png");
    } else if (animal instanceof Dog) {
        $("#animal-img").attr("src", "dog.png");
    } else if (animal instanceof Bird) {
        $("#animal-img").attr("src", "bird.png");
    }

    $("#save-animal").click(function() {
        console.log(animal);
        localStorage.setItem("animal", JSON.stringify(animal));
    });
});