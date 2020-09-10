import { Category } from './Category';

export class Movie{
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  amount: number;
  productCategory: Category[];
}
