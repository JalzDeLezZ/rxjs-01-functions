import { Observable, Subject } from "rxjs";


const observable1 = {
  next: (value) => {
    console.log(value);
  }
}

const observable2 = {
  next: (value) => {
    console.log(value);
  }
}

// %%%%%%%%%%%%%%%%%% Observable %%%%%%%%%%%%%%%%%% 
const number$ = new Observable((subscriber) => {
  subscriber.next(Math.round(Math.random()*100));
});
number$.subscribe(observable1);
number$.subscribe(observable2);


// %%%%%%%%%%%%%%%%%% Subject %%%%%%%%%%%%%%%%%% 1
const numberRandom$ = new Subject();
numberRandom$.subscribe(observable1);
numberRandom$.subscribe(observable2);

// %%%%%%%%%%%%%%%%%% Subject.next %%%%%%%%%%%%%%%%%% 1.1
numberRandom$.next(Math.round(Math.random()*100));
numberRandom$.next(111111);

// %%%%%%%%%%%%%%%%%% Anidation %%%%%%%%%%%%%%%%%% 1.2
number$.subscribe(numberRandom$);

