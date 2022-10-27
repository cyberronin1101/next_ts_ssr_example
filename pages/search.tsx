import { withLayout } from "../layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../types/Menu.type";

function Search() {
  return <>Search PAge</>;
}

export default withLayout(Search);

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
