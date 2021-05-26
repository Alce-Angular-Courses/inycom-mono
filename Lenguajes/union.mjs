import { forkJoin, merge, of, zip } from "rxjs";

import { interval, from } from "rxjs";
import { take } from "rxjs/operators";

const obs1$ = interval(100).pipe(take(5))
const obs2$ = from(['a', 'b', 'c', 'd'])

// Combina valores segun se van emitiendo, mientras los dos emitan
zip([obs1$, obs2$]).subscribe(
    resp => console.log('Zip', resp[0], resp[1] )
)

// combina las ultimas emisiones de cada 1
forkJoin([obs1$, obs2$]).subscribe(
    resp => console.log('forkJoin', resp[0], resp[1] )
)

// Combina los observables segun su secuencia temporal
merge(obs1$, obs2$).subscribe(
    resp => console.log('Merge', resp )
) 

const obs_uni1$ = of(['API 1', 'x', 'y', 'z'])
const obs_uni2$ = of(['a', 'b', 'c', ])

forkJoin([obs_uni1$, obs_uni2$]).subscribe(
    resp => console.log('forkJoin', resp[0], resp[1] )
) 

zip([obs_uni1$, obs_uni2$]).subscribe(
    resp => console.log('Zip', resp[0], resp[1] )
) 

