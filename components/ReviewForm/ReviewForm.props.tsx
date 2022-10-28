import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ReviewFormProps = {
  productId: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type ReviewFormType = {
  name: string;
  title: string;
  description: string;
  rating: number;
};
