import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Icon } from "../Icon/Icon";
import { InputField } from "../InputField/InputField";
import { StatusField } from "../StatusField/StatusField";

import defaultImg1 from "../../assets/images/default-img@1x.webp";
import defaultImg2 from "../../assets/images/default-img@2x.webp";
import { bookStatuses } from "../../constants";
import { bookFormSchema } from "../../schemas";
import { createBook, updateBook, updateCoverBook } from "../../redux";
import { checkObjectEquality, getFileResizer, getFormattedData } from "../../helpers";

export const BookForm = ({ item, toggle }) => {
  const filePicker = useRef(null);
  const [selectedCover, setSelectedCover] = useState(null);
  const [status, setStatus] = useState(item ? item.status : bookStatuses[0]);
  const [coverError, setCoverError] = useState(false);
  const dispatch = useDispatch();

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
      .catch((error) => console.log(error));
  };

  return (
    <form className="flex h-auto flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-6">
            <InputField
              label="Book Title"
              name="title"
              placeholder="Enter the book title"
              register={register}
              errors={errors}
            />
            <div>
              <label className="label">
                Book Description
                <textarea
                  className="field scrollbar h-[202px] w-[400px] resize-none"
                  type="text"
                  placeholder="Enter the book description"
                  {...register("description")}
                />
              </label>
              <p className="field-error">{errors["description"]?.message}</p>
            </div>
            <div className="flex gap-4">
              <InputField
                label="Pages"
                name="pageCount"
                type="number"
                placeholder="Amount pages"
                register={register}
                errors={errors}
              />

              <InputField
                label="Year"
                name="publicationYear"
                type="number"
                placeholder="Year of publishing"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <InputField
              label="Author"
              name="author"
              placeholder="Enter the author"
              register={register}
              errors={errors}
            />
            <div>
              <label className="label">
                About the author
                <textarea
                  className="field scrollbar h-[202px] w-[400px] resize-none"
                  type="text"
                  placeholder="Enter information about author"
                  {...register("aboutAuthor")}
                />
              </label>
              <p className="field-error">{errors["aboutAuthor"]?.message}</p>
            </div>
            <div className="flex gap-4">
              <InputField
                label="Genre"
                name="genre"
                placeholder="Enter the genre"
                register={register}
                errors={errors}
              />
              <InputField
                label="Quantity"
                name="quantity"
                type="number"
                placeholder="Enter the quantity"
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </div>
        <div className="flex w-[220px] flex-col gap-6">
          <StatusField statuses={bookStatuses} status={status} setStatus={handleChangeStatus} />
          <input
            className="hidden"
            type="file"
            name="images"
            ref={filePicker}
            accept="image/*,.png,.jpg,.gif,.web"
            onChange={selectFiles}
          />
          <div className="pt-[27px]">
            {!selectedCover ? (
              <picture
                onClick={handlePick}
                className="flex h-[306px] w-fit cursor-pointer items-center justify-center rounded-[10px] bg-white shadow-md"
              >
                <source srcSet={`${defaultImg1} 1x, ${defaultImg2} 2x`} type="image/webp" />
                <img width={205} height={119} src={defaultImg1} alt="upload img" />
              </picture>
            ) : (
              <div className="relative rounded-[10px] shadow-md">
                {typeof selectedCover === "string" ? (
                  <img
                    src={selectedCover}
                    alt="existing cover"
                    className="max-h-[306px] rounded-[10px] object-cover shadow-md"
                    width={220}
                  />
                ) : (
                  <img
                    src={URL.createObjectURL(selectedCover)}
                    alt="upload"
                    className="max-h-[306px] rounded-[10px] object-cover shadow-md"
                    width={220}
                  />
                )}
                <button
                  type="button"
                  className="absolute right-0 top-0 flex h-[25px] w-[25px] -translate-y-1/4 translate-x-1/4 transform items-center justify-center rounded-full bg-red-500 shadow-md hover:bg-red-700"
                  onClick={handleDeleteImage}
                >
                  <Icon name="close" className="h-[12px] w-[12px]" />
                </button>
              </div>
            )}
            {coverError && <p className="field-error top-[485px]">Add cover for book</p>}
          </div>
        </div>
      </div>
      <div className="mx-auto flex gap-6">
        <button className="primaryBtn h-[56px] w-[185px]" type="button" onClick={toggle}>
          Cancel
        </button>
        <button className="primaryBtn h-[56px] w-[185px]" type="submit">
          {item ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
};
