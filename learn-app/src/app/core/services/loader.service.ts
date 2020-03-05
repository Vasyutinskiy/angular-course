import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject: Subject<boolean> = new Subject();
  loading: Observable<boolean> = this.loadingSubject.asObservable() 

  constructor() { }

  hide(): void {
    this.loadingSubject.next(false);
    // Why I have such strange duration???
    console.log('Done hide');
  }

  show(): void {
    this.loadingSubject.next(true);
    // Why I have such strange duration???
    console.log('Done show');
  }

}
