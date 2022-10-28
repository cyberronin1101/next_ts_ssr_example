import { withLayout } from "../layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../types/Menu.type";
import { API } from "../helpers/api";

function Search() {
  return <>Search PAge</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });

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
