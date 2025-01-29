import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChampionsComponent } from './add-champions.component';

describe('AddChampionsComponent', () => {
  let component: AddChampionsComponent;
  let fixture: ComponentFixture<AddChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddChampionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
