import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {tap} from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  isLoading: boolean;

  constructor(private loaderService: LoaderService,
              private cdRef: ChangeDetectorRef){}

  ngOnInit(): void {
    // PLEASE EXPLAIN THIS WHOLE STRUCTURE
    this.loaderService.loading.pipe(
      tap(isLoading => {
        this.isLoading = isLoading;
        this.cdRef.detectChanges();
      })
    ).subscribe();
  }
  
}
