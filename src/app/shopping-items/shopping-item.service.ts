import { ShoppingItem } from "./shopping-item.model";

export class ShoppingItemService {
  constructor() { }
  item: ShoppingItem[] = [
    new ShoppingItem('Bolsa A', 'data:image/jpeg;base64,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', 'R$100,00'),
    new ShoppingItem('Bolsa B', 'data:image/jpeg;base64,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', 'R$200,00'),
  ]

}
