import { forkJoin } from "rxjs";
import { merge } from "rxjs";
import { of } from "rxjs";
import { interval, from } from "rxjs";
import { map, take, filter } from "rxjs/operators";

const obs3$ = interval(100).pipe(take(3))
const obs4$ = from(['a', 'b', 'c', ])

const obs1$ = of('API 1')
const obs2$ = of(['a', 'b', 'c', ])

forkJoin([obs1$, obs2$]).subscribe(
    resp => {console.log(resp[0], resp[1] )}
)

merge([obs3$, obs4$]).subscribe(
    resp => {console.log(resp[0], resp[1] )}
)