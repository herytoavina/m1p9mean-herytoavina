import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDelivererComponent } from './board-deliverer.component';

describe('BoardDelivererComponent', () => {
  let component: BoardDelivererComponent;
  let fixture: ComponentFixture<BoardDelivererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardDelivererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDelivererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
