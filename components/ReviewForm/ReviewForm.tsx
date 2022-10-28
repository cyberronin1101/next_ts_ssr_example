import {
  ReviewFormProps,
  ReviewFormType,
  ReviewSentResponseType,
} from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReviewFormType>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: ReviewFormType) => {
    try {
      const { data } = await axios.post<ReviewSentResponseType>(
        API.review.createDemo,
        { ...formData, productId }
      );
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Что то пошло не так");
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          placeholder={"Имя"}
          error={errors.name}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          className={styles.title}
          placeholder={"Заголовок отзыва"}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Controller
            control={control}
            name={"rating"}
            rules={{
              required: { value: true, message: "Укажите рейтинг" },
            }}
            render={({ field }) => {
              return (
                <Rating
                  rating={field.value}
                  error={errors.rating}
                  isEditable={true}
                  setRating={field.onChange}
                  ref={field.ref}
                />
              );
            }}
          />
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          className={styles.description}
          placeholder={"Текст отзыва"}
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance={"primary"}>Отправить</Button>
          <span className={styles.info}>
            * Преред отправкой отзыв пройдет модерацию и проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={styles.success}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div className={styles.successDescription}>
            Ваш отзыв будет опубликован после проверки.
          </div>
          <CloseIcon
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          />
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <div className={styles.errorDescription}>
            Что то пошло не так, попробуйте обновить страницу
          </div>
          <CloseIcon
            className={styles.errorClose}
            onClick={() => setError(undefined)}
          />
        </div>
      )}
    </form>
  );
};
