import { interval, timer } from "rxjs"; // It is used to handle errors, but in case we want to try it one more time

// const secuenceNumbers$ = interval(1000);
// secuenceNumbers$.subscribe(console.log);


const delayedTimer$ = timer(2000);
delayedTimer$.subscribe(console.log);
