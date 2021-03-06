// dish interface
import { Comment } from './comments';

// follow the data logic from the DB
export interface Dish {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  featured: boolean;
  description: string;
  comments: Comment[];
}
