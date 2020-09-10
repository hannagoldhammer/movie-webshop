import { OrderRow } from './OrderRow';

export class Order{
  id: number;
  companyId = 99;
  created: Date;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: OrderRow[];
}
