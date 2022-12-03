import { from, of, asyncScheduler } from 'rxjs'

const fruits$ = from(['apple', 'tangerine', 'pear', 'banana']);

fruits$.subscribe(console.log);

const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

numbers$.subscribe(console.log);

// test asyncScheduler

const alphabet$ = from(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], asyncScheduler);
alphabet$.subscribe(console.log);