import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameToJoinPageComponent } from './game-to-join-page.component';

describe('GameToJoinPageComponent', () => {
  let component: GameToJoinPageComponent;
  let fixture: ComponentFixture<GameToJoinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameToJoinPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameToJoinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
