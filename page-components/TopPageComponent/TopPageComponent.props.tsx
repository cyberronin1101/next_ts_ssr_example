import { TopLevelCategory, TopPageModel } from "../../types/Page.type";
import { ProductModel } from "../../types/Product.type";

export type TopPageComponentProps = {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
};
