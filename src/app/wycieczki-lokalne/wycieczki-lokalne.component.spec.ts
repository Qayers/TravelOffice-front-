import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WycieczkiLokalneComponent } from './wycieczki-lokalne.component';

describe('WycieczkiLokalneComponent', () => {
  let component: WycieczkiLokalneComponent;
  let fixture: ComponentFixture<WycieczkiLokalneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WycieczkiLokalneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WycieczkiLokalneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
