import http from "./config";
import { IProductInfo } from "../types/Product.types";

class DataService {
  getAll(): Promise<IProductInfo[]> {
    return http.get("/grocery").then((response) => response.data);
  }

  update(id: string, data: IProductInfo): Promise<void> {
    return http.patch(`/grocery/:${id}`, data);
  }
}

export default new DataService();
