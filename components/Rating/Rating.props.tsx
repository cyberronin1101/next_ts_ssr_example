import { DetailedHTMLProps, HTMLAttributes } from "react";

export type RatingProps = {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
