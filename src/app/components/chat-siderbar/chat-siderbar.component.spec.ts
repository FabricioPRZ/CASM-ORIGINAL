import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSiderbarComponent } from './chat-siderbar.component';

describe('ChatSiderbarComponent', () => {
  let component: ChatSiderbarComponent;
  let fixture: ComponentFixture<ChatSiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSiderbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
