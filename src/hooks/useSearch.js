import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useSearchParams } from "react-router-dom";

export const useSearch = (setQuery) => {
  const { watch, register, setValue, reset, handleSubmit } = useForm();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    reset();
  }, [location.pathname, reset]);

  useEffect(() => {
    const keyword = searchParams.get("keyword");
    if (keyword) {
      setValue("query", keyword);
    }
  }, [searchParams, setValue]);

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
    register,
    handleSubmit,
    onSubmit,
    handleClearClick,
  };
};
