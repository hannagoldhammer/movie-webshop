import { Order } from './Order';
import { Subject } from 'rxjs';

export interface IOrders{
  orders: Subject<Order[]>;

  getOrders(): void;
}
