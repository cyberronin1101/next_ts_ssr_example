import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReviewModel } from "../../types/Product.type";

export type ReviewProps = {
  review: ReviewModel;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
