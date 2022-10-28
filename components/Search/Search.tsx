import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState, KeyboardEvent } from "react";
import SearchIcon from "./search.svg";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: { q: search },
    });
  };

  const handlerKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      return goToSearch();
    }
  };

  return (
    <div className={cn(styles.search, className)} {...props}>
      <Input
        placeholder={"Поиск..."}
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handlerKeyDown}
      />
      <Button
        appearance={"primary"}
        className={styles.button}
        onClick={() => goToSearch()}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
