import {animate, state, style, transition, trigger} from '@angular/animations';

export function visibility() {
  return trigger('visibility', [
    state('shown', style({
      transform: 'scale(1.0)',
      opacity: 1
    })),
    state('hidden', style({
      transform: 'scale(.5)',
      opacity: 0
    })),
    transition('*=>*', animate('.5s ease-in-out'))
  ]);
}
