<h5>Spread </h5>

- syntax: `...`
- **it allows an iterable to expand in places where 0+ arguments are expected**
- use case:
  - Copy an array - assign by value between 2 array `arr = ...arr2`
  - `Math.max(...arr);`
  - Insert array `var arr = [1,2, ...arr2 , 4]`
  - String to an array `arr = [...str]`
 
<h5> Reduce </h5>

- syntax: `array.reduce(callback, initialValue)`
  - callback is a reducer function; takes 4 arg
    - accumulator
    - currentValue
    - currentIndex
    - array
  - initial value if supplied, gets assigned to accumulator, but if not then uses first element of array

<h5> Arity </h5>

- numb arg that a function takes
- `pipe(double, console.log)` has arity of 2

<h5> Curried </h5>

- wikipedia: `currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument. ` 
  - WTF? - but it's saying that 
