import { fromEvent } from "rxjs";

const onMouseMove$ = fromEvent(document, "mousemove");

const observerMouse = {
  next: (event) => {
    // console.log(event);
    console.log(event.clientX);
  },
};

onMouseMove$.subscribe(observerMouse);

const onKeyDown$ = fromEvent(document, "keydown");

const observerKey = {
  next: (event) => {
    console.log(event.key);
  },
};

onKeyDown$.subscribe(observerKey);
