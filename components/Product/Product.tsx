import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNumber, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import Image from "next/image";
import cn from "classnames";

export const Product = ({ product }: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <Image
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
          width={70}
          height={70}
        />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && (
          <Tag className={styles.oldPrice} color={"green"}>
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}
        <span className={styles.month}>/мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((cat) => {
          return (
            <Tag key={cat} color={"ghost"} className={styles.category}>
              {cat}
            </Tag>
          );
        })}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>
        {product.reviewCount}&nbsp;
        {declOfNumber(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>

      <Divider className={styles.hr} />

      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>
        {product.characteristics.map((c) => {
          return (
            <div key={c.name} className={styles.char}>
              <span className={styles.charName}>{c.name}</span>
              <span className={styles.charDots}></span>
              <span className={styles.charValue}>{c.value}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.advBlock}>
        {product.advantages && (
          <div className={styles.advantages}>
            <div className={styles.advTitle}>Преимущества</div>
            <div>{product.advantages}</div>
          </div>
        )}
        {product.disadvantages && (
          <div className={styles.disadvantages}>
            <div className={styles.advTitle}>Недостатки</div>
            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>

      <Divider className={cn(styles.hr, styles.hr2)} />

      <div className={styles.actions}>
        <Button appearance={"primary"}>Узнать подробнее</Button>
        <Button
          appearance={"ghost"}
          arrow={"right"}
          className={styles.reviewButton}
        >
          Чиать отзывы
        </Button>
      </div>
    </Card>
  );
};
