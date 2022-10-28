import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModel } from "../../types/Product.type";

export type ProductProps = {
  product: ProductModel;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
