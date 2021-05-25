import { interval } from "rxjs";
import { map, take, filter } from "rxjs/operators";

const ob1$ = interval(100).pipe(
    take(6) 
).pipe( 
    map( item => item * 3),
    filter( item => !(item%2) )
)



ob1$.subscribe(resp  => {
    console.log(resp)
})
