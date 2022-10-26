import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout";

function Home() {
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
