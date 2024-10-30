import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryCardComponent } from './directory-card.component';

describe('DirectoryCardComponent', () => {
  let component: DirectoryCardComponent;
  let fixture: ComponentFixture<DirectoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectoryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
