import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrders } from '../model/IOrders';
import { Order } from '../model/Order';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements IOrders{
  orderApiURL = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=99";
  deleteOrderApiURL = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders/";

  orders = new Subject<Order[]>();

  constructor(private http: HttpClient) { }

  getOrders(): void {
    this.http.get(this.orderApiURL).subscribe((data: any) => {
      let apiOrders: Order[] = data.map(orderDetails => {
        const order = new Order();
        order.id = orderDetails.id;
        order.companyId = orderDetails.companyId;
        order.created = orderDetails.created;
        order.createdBy = orderDetails.createdBy;
        order.paymentMethod = orderDetails.paymentMethod;
        order.totalPrice = orderDetails.totalPrice;
        order.status = orderDetails.status;
        order.orderRows = orderDetails.orderRows;

        return order;
      });
      return this.orders.next(apiOrders);
    });
  }

  deleteOrder(id: number){
    this.http.delete(this.deleteOrderApiURL + id).subscribe((data) => {});
  }
}
