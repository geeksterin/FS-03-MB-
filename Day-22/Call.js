// call,apply,bind - > Methods in js that will allow us to manipulate the context and args

const person1 = {
  name: 'Ayush',
  temp: function () {
    console.log('hello ' + this.name + ' ' + this.age) // this refers to current obj
  },
}

const person2 = {
  name: 'John',
  age: 23,
}

person1.temp()
person1.temp.call(person2) // use of anotther object  -> person2.temp()
