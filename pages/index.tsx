import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../types/Menu.type";

function Home({ menu, firstCategory }: HomeProps) {
  return (
    <>
      <Htag tag={"h1"}>Текст</Htag>
      <Button appearance={"primary"} arrow={"right"}>
        Кнопка
      </Button>
      <Button appearance={"ghost"} arrow={"right"}>
        Кнопка
      </Button>
      <P size={"l"}>Большой</P>
      <P size={"m"}>Средний</P>
      <P size={"s"}>Маленький</P>

      <Tag size={"s"} color={"ghost"}>
        Ghost
      </Tag>
      <Tag size={"m"} color={"red"}>
        Red
      </Tag>
      <Tag size={"m"} color={"green"}>
        Green
      </Tag>
      <Tag color={"primary"}>Primary</Tag>
      <Rating rating={2} isEditable={true} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

type HomeProps = {
  menu: MenuItem[];
  firstCategory: number;
} & Record<string, unknown>;
