import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsF1Component } from './champions-f1.component';

describe('ChampionsF1Component', () => {
  let component: ChampionsF1Component;
  let fixture: ComponentFixture<ChampionsF1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChampionsF1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampionsF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
