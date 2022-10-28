import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ReviewFormProps = {
  productId: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
