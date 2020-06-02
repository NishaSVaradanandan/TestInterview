import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssayTopicsComponent } from './essay-topics.component';

describe('EssayTopicsComponent', () => {
  let component: EssayTopicsComponent;
  let fixture: ComponentFixture<EssayTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssayTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssayTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
