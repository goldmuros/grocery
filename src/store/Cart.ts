import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { IProductCartInfo } from "@/types/Product.types";

export interface CartState {
  items: IProductCartInfo[];
}

@Module({
  name: "cart",
  namespaced: true,
})
export class CartStore extends VuexModule implements CartState {
  public items: IProductCartInfo[] = [];

  get fetchCart(): IProductCartInfo[] {
    return this.items;
  }

  get totalCartItems(): number {
    return this.items.length;
  }

  get totalAmount(): number {
    return this.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  }

  @Mutation
  addItem(product: IProductCartInfo): void {
    const index = this.items.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      this.items[index].quantity++;
      this.items[index].totalPrice = this.items[index].quantity * product.price;
    } else {
      this.items.push({...product});
    }
  }

  @Mutation
  reduceItem(product: IProductCartInfo): void {
    const index = this.items.findIndex((item) => item.id === product.id);

    if (index >= 0) {
      this.items[index].quantity--;
      if (this.items[index].quantity <= 0) {
        this.items = this.items.filter(item => item.id !== product.id);
      } else {
        this.items[index].totalPrice =
          this.items[index].quantity * product.price;
      }
    }
  }

  @Mutation
  clearCart(): void {
    this.items = [];
  }

  @Action
  async addProductToCart(product: IProductCartInfo): Promise<void> {
    this.addItem(product);
  }

  @Action
  increase(product: IProductCartInfo): void {
    this.addItem(product);
  }

  @Action
  reduce(product: IProductCartInfo): void {
    this.reduceItem(product);
  }

  @Action
  async checkout(): Promise<void> {
    console.log("Checkout")
    await this.clearCart();
  }
}
