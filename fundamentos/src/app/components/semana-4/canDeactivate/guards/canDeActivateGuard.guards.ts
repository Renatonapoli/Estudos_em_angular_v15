import { Injectable } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { CanDeActivateComponent } from '../utils/canDeActivateComponent';
import { Observable } from 'rxjs';

export const CanDeActivateGuard: CanDeactivateFn<CanDeActivateComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canExit ? component.canExit() : true;
};
