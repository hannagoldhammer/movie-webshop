import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMovieComponent } from './one-movie.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('OneMovieComponent', () => {
  let component: OneMovieComponent;
  let fixture: ComponentFixture<OneMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneMovieComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, HttpClientModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
