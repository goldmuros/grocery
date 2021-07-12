import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { IProductInfo } from "@/types/Product.types";

import DataService from "@/services/DataService";

export interface ProductState {
  items: IProductInfo[];
}

@Module({
  name: "product",
  namespaced: true,
})
export class ProductStore extends VuexModule implements ProductState {
  public items: IProductInfo[] = [];

  get fetchProducts(): IProductInfo[] {
    return this.items;
  }

  get fetchFavorite(): IProductInfo[] {
    return this.items.filter((item) => item.favorite === "1");
  }

  @Mutation
  setItems(items: IProductInfo[]): void {
    this.items = items;
  }

  @Action
  async fetchItems(): Promise<void> {
    const list = await DataService.getAll();
    this.setItems(list);
  }

  @Action
  async updateStock(product: IProductInfo): Promise<void> {
    await DataService.update(product.id, product);
  }
}
