import { withLayout } from "../../layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuItem } from "../../types/Menu.type";
import { firstLevelMenu } from "../../helpers/helpers";
import { ParsedUrlQuery } from "querystring";

function Type({ firstCategory }: TypeProps) {
  return <>type : {firstCategory}</>;
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((menuItem) => "/" + menuItem.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find(
    (menuItem) => menuItem.route === params.type
  );

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory: firstCategoryItem.id }
  );

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

type TypeProps = {
  menu: MenuItem[];
  firstCategory: number;
} & Record<string, unknown>;
