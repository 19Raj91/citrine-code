import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  fix_navbar_header = new Subject<boolean>();
  constructor() { }
}
