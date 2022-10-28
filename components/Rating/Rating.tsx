import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
} from "react";
import StarIcon from "./Star.svg";

export const Rating = forwardRef(
  (
    {
      isEditable = false,
      rating,
      setRating,
      className,

      ...props
    }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );

    useEffect(() => {
      constructRating(rating);
    }, [rating]);

    const changeDisplay = (idx: number) => {
      if (!isEditable) {
        return;
      }
      constructRating(idx);
    };

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((el: JSX.Element, idx) => {
        return (
          <span
            className={cn(styles.star, {
              [styles.filled]: idx < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(idx + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(idx + 1)}
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                isEditable && handleSpace(idx + 1, e)
              }
            />
          </span>
        );
      });

      setRatingArray(updatedArray);
    };

    const onClick = (idx: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(idx);
    };

    const handleSpace = (idx: number, e: KeyboardEvent<SVGElement>) => {
      if (!isEditable || e.code != "Space" || !setRating) {
        return;
      }

      setRating(idx);
    };

    return (
      <div className={cn(className)} {...props} ref={ref}>
        {ratingArray.map((el, idx) => (
          <span key={idx}>{el}</span>
        ))}
      </div>
    );
  }
);
