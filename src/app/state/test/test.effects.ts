import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';



@Injectable()
export class TestEffects {


  constructor(private actions$: Actions) {}
}
