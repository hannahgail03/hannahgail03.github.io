// Exercise 1 filter
String.prototype.filter = function(str) {
    return this.split(' ').filter(elem => !str.includes(elem)).join(' ');
};

// Exercise 2 Sorting
Array.prototype.bubbleSort = function() {
return this.sort();
};
 
// Exercise 3 Inheritance via prototype
var Person = function() {};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
};

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    return this.name + ' is teaching ' + subject;
};
