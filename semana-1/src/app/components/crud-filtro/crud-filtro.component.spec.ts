import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFiltroComponent } from './crud-filtro.component';

describe('CrudFiltroComponent', () => {
  let component: CrudFiltroComponent;
  let fixture: ComponentFixture<CrudFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
