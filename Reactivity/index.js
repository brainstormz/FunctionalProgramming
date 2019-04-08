    // observers are functions

const thrush = x => f => f(x)

class Observable {
    constructor () {
        this.cbs = []
    }
    subscribe (cbs){
        this.cbs.push(cbs);
    }
    emit(x) {
        // this.cbs.map(
        //     cb => cb(x)
        // )

        this.cbs.map(thrush(x));
    }
}

const observable = new Observable(); 

// you can subscribe using function
observable.subscribe( x => console.log(x));

// const double = x => x * 2;
// observable.subscribe(
//     x => console.log(double(double(x)))
// )

const pipe = (...fs) => x => f(x)
observable.subscribe(pipe(console.log)) 

observable.emit(10);
observable.emit(1);
observable.emit(2);
observable.emit(3);
observable.emit(4);
