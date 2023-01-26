import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsShowComponent } from './boots-show.component';

describe('BootsShowComponent', () => {
  let component: BootsShowComponent;
  let fixture: ComponentFixture<BootsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootsShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
