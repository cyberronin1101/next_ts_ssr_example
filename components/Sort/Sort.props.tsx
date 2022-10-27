import { DetailedHTMLProps, HTMLAttributes } from "react";

export enum SortEnum {
  Rating,
  Price,
}

export type SortProps = {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
