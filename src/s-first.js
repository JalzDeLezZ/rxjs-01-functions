import { Observable } from "rxjs";

const observableAlpha$ = new Observable((subcriber) => {
  subcriber.next("Alpha");
//   a=b;
  subcriber.next("Beta");
  subcriber.complete();
  subcriber.next("Gamma");
  subcriber.next("Delta");
  subcriber.complete();
});

const observador = {
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("Complete");
  },
  error: (e) => {
    console.log('Error: ');
    // console.error(e);
  },
};

observableAlpha$.subscribe(observador);
