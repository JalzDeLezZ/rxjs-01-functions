import { from } from "rxjs";
import { map, reduce, filter } from "rxjs/operators"; 
/* 
pipe(): todos los operadores creacionales tienen este método, genera una cadena de operadores que se pueden enlazar uno tras otro.
map(): itera sobre los valores que obtenemos del observable transformándolos.
filter(): filtra los valores de un observable dada una condición.
reduce(): combina todos los valores emitidos por un observable a través de una función acumuladora.
*/

const number$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
    // map(nro => nro * 10),
    // reduce((acc, nro) => acc + nro, 0)
    filter(nro => nro % 2 === 0)
)

number$.subscribe(console.log);