import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { bookStatuses } from "../constants";
import { bookFormSchema } from "../schemas";
import { createBook, updateBook, updateCoverBook } from "../redux";
import { checkObjectEquality, getFileResizer, getFormattedData } from "../helpers";

export const useBookForm = (item, toggle) => {
  const filePicker = useRef(null);
  const dispatch = useDispatch();

  const [selectedCover, setSelectedCover] = useState(null);
  const [status, setStatus] = useState(item ? item.status : bookStatuses[0]);
  const [coverError, setCoverError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(bookFormSchema),
  });

  useEffect(() => {
    if (item) {
      setValue("title", item.title);
      setValue("content", item.content);
      setStatus(item.status);
      setValue("btnLink", item.btnLink);
    }
    setValue("publishDate", item ? item.publishDate : new Date());
    setValue("status", item ? item.status : bookStatuses[0]);
  }, [item, setValue]);

  useEffect(() => {
    if (item) {
      setValue("title", item.title);
      setValue("description", item.description);
      setValue("pageCount", item.pageCount);
      setValue("publicationYear", item.publicationYear);
      setValue("author", item.author);
      setValue("aboutAuthor", item.aboutAuthor);
      setValue("genre", item.genre);
      setValue("quantity", item.quantity);
      setStatus(item.status);
    }

    setValue("status", item ? item.status : bookStatuses[0]);
  }, [item, setValue]);

  useEffect(() => {
    if (item?.coverImageUrl) {
      setSelectedCover(item.coverImageUrl);
    }
  }, [item?.coverImageUrl]);

  useEffect(() => {
    if (coverError && selectedCover) {
      setCoverError(false);
    }
  }, [coverError, selectedCover]);

  const selectFiles = async (e) => {
    setSelectedCover(e.target.files[0]);

    if (item) {
      const resizedCover = await handleResizeCover(e.target.files[0]);

      if (!resizedCover) {
        toast.error("Error resizing images.");
        return;
      }

      const fd = getFormattedData(resizedCover, "cover");

      await dispatch(updateCoverBook({ bookId: item.id, cover: fd }))
        .unwrap()
        .then(() => {
          toast.success("Cover was uploaded successfully.");
        })
        .catch((error) => toast.error(`Error uploading images: ${error.message}`));
    }

    e.target.value = null;
  };

  const handleDeleteImage = () => {
    setSelectedCover(null);
  };

  const handleChangeStatus = (status) => {
    setStatus(status);
    setValue("status", status);
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const handleResizeCover = async (cover) => {
    try {
      const resizedCover = await getFileResizer(cover, 385, 622);

      return resizedCover;
    } catch (error) {
      return false;
    }
  };

  const onSubmit = async (data) => {
    if (!selectedCover) {
      setCoverError(true);
      return;
    }

    let action;

    if (!item) {
      const resizedCover = await handleResizeCover(selectedCover);

      if (!resizedCover) {
        return toast.error("Error while resizing cover");
      }

      const fd = getFormattedData(resizedCover, "cover", data, "book");
      action = createBook(fd);
    } else {
      data = {
        ...data,
        id: item.id,
      };
      action = updateBook(data);
    }

    if (item) {
      // eslint-disable-next-line
      const { coverImageUrl, deleted, deletedAt, ...itemData } = item;
      const isEqual = checkObjectEquality(data, itemData);

      if (item && isEqual) {
        toggle();
        return;
      }
    }

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success(item ? "The book updated successfully" : "The book created successfully");
        setSelectedCover(null);
        reset();
        toggle();
      })
      .catch((error) => toast.error(error));
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    selectFiles,
    handleDeleteImage,
    handlePick,
    handleChangeStatus,
    filePicker,
    selectedCover,
    status,
    coverError,
    setCoverError,
  };
};
