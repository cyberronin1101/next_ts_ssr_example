import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type RatingProps = {
  isEditable?: boolean;
  rating: number;
  error?: FieldError;
  setRating?: (rating: number) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
