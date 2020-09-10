import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Order } from 'src/app/model/Order';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  listOfPlacedOrders: Order[] = [];

  constructor(private orderService: AdminService) { }

  ngOnInit(): void {
    this.orderService.getOrders();

    this.orderService.orders.subscribe((orderList: Order[]) => {
      this.listOfPlacedOrders = orderList,
      (error: any) => {console.log("Ett fel uppstod: " + error)},
      console.log(this.listOfPlacedOrders);
    });
  }

  deleteOrder(order: Order){
    this.orderService.deleteOrder(order.id);

    let indexOf: number = this.listOfPlacedOrders.indexOf(order);
    this.listOfPlacedOrders.splice(indexOf, 1);
  }
}
