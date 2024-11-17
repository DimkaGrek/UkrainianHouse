import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useSearchParams } from "react-router-dom";

import { useWindowSizeHook } from "../hooks";

export const useSearch = (setQuery) => {
  const [placeholder, setPlaceholder] = useState("Search...");

  const { watch, register, setValue, reset, handleSubmit } = useForm();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { innerWidth } = useWindowSizeHook();

  useEffect(() => {
    reset();
  }, [location.pathname, reset]);

  useEffect(() => {
    const keyword = searchParams.get("keyword");
    if (keyword) {
      setValue("query", keyword);
    }
  }, [searchParams, setValue]);

  useEffect(() => {
    if (location.pathname === "/library" && innerWidth < 1440) {
      setPlaceholder("Search book...");
    } else if (location.pathname === "/library" && innerWidth >= 1440) {
      setPlaceholder("Search by title, author, or genre...");
    } else {
      setPlaceholder("Search...");
    }
  }, [innerWidth, location.pathname]);

  const onSubmit = ({ query }) => {
    if (!query) return;
    setQuery(query.trim());
  };

  const handleClearClick = () => {
    reset();
    setQuery("");
    setSearchParams({});
  };

  const query = watch("query");

  return {
    query,
    placeholder,
    register,
    handleSubmit,
    onSubmit,
    handleClearClick,
  };
};
