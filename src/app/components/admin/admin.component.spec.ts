import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { combineLatest } from 'rxjs';
import { By } from 'protractor';
import { Order } from 'src/app/model/Order';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, HttpClientModule ],
      providers: [ AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('spy on deleteOrder', function () {
    let order = new Order();
    order.id = 100;
    order.companyId = 99;
    order.created = new Date();
    order.createdBy = "Hanna";
    order.orderRows = [];
    order.paymentMethod = "Visa";
    order.status = 2;
    order.totalPrice = 700;

    let spy = spyOn(component, "deleteOrder");

    component.deleteOrder(order);

    expect(spy).toHaveBeenCalled();
  });
});
