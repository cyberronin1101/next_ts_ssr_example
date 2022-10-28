import { ReviewFormProps, ReviewFormType } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<ReviewFormType>();

  const onSubmit = (data: ReviewFormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input {...register("name")} placeholder={"Имя"} />
        <Input
          {...register("title")}
          className={styles.title}
          placeholder={"Заголовок отзыва"}
        />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Controller
            control={control}
            render={({ field }) => {
              return (
                <Rating
                  rating={field.value}
                  isEditable={true}
                  setRating={field.onChange}
                  ref={field.ref}
                />
              );
            }}
            name={"rating"}
          />
        </div>
        <Textarea
          {...register("description")}
          className={styles.description}
          placeholder={"Текст отзыва"}
        />
        <div className={styles.submit}>
          <Button appearance={"primary"}>Отправить</Button>
          <span className={styles.info}>
            * Преред отправкой отзыв пройдет модерацию и проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div className={styles.successDescription}>
          Ваш отзыв будет опубликован после проверки.
        </div>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
};
