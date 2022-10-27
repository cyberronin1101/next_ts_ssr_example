import styles from "./TopPageComponent.module.css";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Advantages, HhData, Htag, Tag } from "../../components";
import { TopLevelCategory } from "../../types/Page.type";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={"h1"}>{page.title}</Htag>
        {products && (
          <Tag color={"gray"} size={"m"}>
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>

      <div>
        {products &&
          products.map((product) => {
            return <div key={product._id}>{product.title}</div>;
          })}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag={"h2"}>Вакансии - {page.category}</Htag>
        <Tag color={"red"} size={"m"}>
          hh.ru
        </Tag>
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag={"h2"}>Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag tag={"h2"}>Получаемые навыки</Htag>
      {page.tags.map((tag) => {
        return <Tag color={"primary"}>{tag}</Tag>;
      })}
    </div>
  );
};
