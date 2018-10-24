import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesnavComponent } from './tablesnav.component';

describe('TablesnavComponent', () => {
  let component: TablesnavComponent;
  let fixture: ComponentFixture<TablesnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
