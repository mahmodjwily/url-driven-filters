import { type ChangeEvent, useLayoutEffect, useState } from "react";

import { useSearchParams } from "react-router";

import { useDebounce } from "./useDebounce";
export const useFilter = (data: any[]) => {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  useLayoutEffect(() => {
    setValue(query);
  }, []);

  const debounce = useDebounce((v: string) => {
    searchParams.set("q", v);
    setSearchParams(searchParams);
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debounce(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title
      .toLocaleLowerCase()
      .trim()
      .includes(query.toLocaleLowerCase().trim()),
  );

  return { filteredData, value, handleSearch };
};
