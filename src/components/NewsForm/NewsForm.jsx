import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LuCalendar } from "react-icons/lu";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

import { Icon, InputField, StatusField } from "../../components";

import { newsStatuses } from "../../constants";
import { newsFormSchema } from "../../schemas";
import { checkObjectEquality, getFileResizer, getFormattedData } from "../../helpers";
import { createNewsPhoto, createOneNews, deleteNewsPhoto, updateOneNews } from "../../redux";
import defaultImg1 from "../../assets/images/default-img@1x.webp";
import defaultImg2 from "../../assets/images/default-img@2x.webp";
import "react-datepicker/dist/react-datepicker.css";

export const NewsForm = ({ item, toggle }) => {
  const filePicker = useRef(null);
  const [selectedImages, setSelectedImages] = useState(new Array(3).fill(0));
  const [status, setStatus] = useState(item ? item.status : newsStatuses[0]);
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();

  const hasNonZeroElement = selectedImages.some((element) => element !== 0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(newsFormSchema),
  });

  useEffect(() => {
    if (item) {
      setValue("title", item.title);
      setValue("content", item.content);
      setStatus(item.status);
      setValue("btnLink", item.btnLink);
    }
    setValue("publishDate", item ? item.publishDate : new Date());
    setValue("status", item ? item.status : newsStatuses[0]);
  }, [item, setValue]);

  useEffect(() => {
    if (item?.photoUrls) {
      const filledImages = Array(3)
        .fill(0)
        .map((_, index) => item.photoUrls[index] || 0);
      setSelectedImages(filledImages);
    }
  }, [item?.photoUrls]);

  useEffect(() => {
    if (imageError && hasNonZeroElement) {
      setImageError(false);
    }
  }, [imageError, hasNonZeroElement]);

  const selectFiles = async (e) => {
    let selectedFiles = Array.from(e.target.files);

    // Check for duplicates in selectedImages and remove them from selectedFiles
    selectedFiles = selectedFiles.filter((file) => {
      const isDuplicate = selectedImages.some((image) => image.name === file.name);
      if (isDuplicate) {
        toast.warn(`The image "${file.name}" cannot be added as it is already present`);
      }
      return !isDuplicate;
    });

    // Check the remaining slots after removing duplicates
    const maxImagesToAdd = selectedImages.filter((image) => image === 0).length;
    if (selectedFiles.length > maxImagesToAdd) {
      toast.warn(`You cannot upload more than three images`);
    }

    setSelectedImages((prevImages) => {
      const newImages = [...prevImages];

      const processFiles = async () => {
        try {
          selectedFiles.forEach((file) => {
            const newIndex = newImages.indexOf(0);
            if (newIndex !== -1) {
              newImages[newIndex] = file;
            }
          });

          if (item) {
            const resizedFiles = await handleResizeImages(selectedFiles);
            if (!resizedFiles) {
              toast.error("Error resizing images.");
              return;
            }

            const uploadPromises = resizedFiles.map((file) => {
              const fd = getFormattedData(file, "photo");
              return dispatch(createNewsPhoto({ newsId: item.id, fd }));
            });

            await Promise.all(uploadPromises);
            toast.success(
              `${
                uploadPromises.length > 1
                  ? "All images were uploaded successfully."
                  : "Image was uploaded successfully."
              }`
            );
          }
        } catch (error) {
          toast.error(`Error uploading images: ${error.message}`);
        }
      };

      processFiles();
      return newImages;
    });

    e.target.value = null;
  };

  const handleResizeImages = async (images) => {
    try {
      const resizedImagesPromises = images.map((file) => getFileResizer(file, 600, 400));

      const resizedImages = await Promise.all(resizedImagesPromises);

      return resizedImages;
    } catch (error) {
      return false;
    }
  };

  const handleDeleteImage = (image) => {
    if (item && !(image instanceof File)) {
      const ids = { newsId: item.id, photoId: image.id };
      dispatch(deleteNewsPhoto(ids))
        .unwrap()
        .then(() => {
          toast.success("Image was deleted successfully.");
        })
        .catch((e) => toast.error(`Error while deleting the image. ${e.message}`));
    }
    setSelectedImages((prevImages) => {
      const newImages = prevImages.filter((item) => item !== image);
      newImages.push(0);

      return newImages;
    });
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const handleChangeStatus = (status) => {
    setStatus(status);
    setValue("status", status);
  };

  const handleChangeDate = (date) => {
    setValue("publishDate", date, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    if (!hasNonZeroElement) {
      setImageError(true);
      return;
    }

    let action;
    if (!item) {
      const resizedImages = await handleResizeImages(
        selectedImages.filter((image) => image !== 0 && typeof image !== "string")
      );

      if (!resizedImages) {
        return toast.error("Error while resizing images");
      }

      const fd = getFormattedData(resizedImages, "photos", data, "news");
      action = createOneNews(fd);
    } else {
      data = {
        ...data,
        id: item.id,
      };
      action = updateOneNews(data);
    }

    if (item) {
      item = { ...item, publishDate: new Date(item.publishDate) };
      // eslint-disable-next-line
      const { photoUrls, deleted, deletedAt, ...itemData } = item;
      const isEqual = checkObjectEquality(data, itemData);

      if (item && isEqual) {
        toggle();
        return;
      }
    }

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success(item ? "The news updated successfully" : "The news created successfully");

        setSelectedImages(new Array(3).fill(0));
        reset();
        toggle();
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  return (
    <form
      className="flex h-auto w-full flex-col gap-6 lg:w-[1150px] lg:gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid-cols-2 grid gap-4">
        <InputField
          label="Article Title"
          name="title"
          placeholder="Enter the article title"
          register={register}
          errors={errors}
        />
        <div className="flex gap-4">
          <div className="flex-1">
            <StatusField statuses={newsStatuses} status={status} setStatus={handleChangeStatus} />
          </div>
          <div>
            <p className="label mb-[6px]">Date</p>
            <Controller
              control={control}
              name="publishDate"
              defaultValue={new Date()}
              render={({ field }) => (
                <div className="relative">
                  <DatePicker
                    className="field w-[263px] cursor-pointer"
                    showPopperArrow={false}
                    selected={field.value}
                    placeholderText="mm/dd/yyyy"
                    onChange={(date) => {
                      field.onChange(date);
                      handleChangeDate(date);
                    }}
                    calendarClassName="fixed-height-calendar"
                  />
                  <LuCalendar className="absolute right-[18px] top-[18px] size-5 cursor-pointer" />
                  <p className="field-error">{errors["publishDate"]?.message}</p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <div>
        <label className="label">
          Article Text
          <textarea
            className="field scrollbar h-[130px] resize-none overflow-auto lg:h-[200px]"
            type="text"
            placeholder="Enter the article text"
            {...register("content")}
          />
        </label>
        <p className="field-error">{errors["content"]?.message}</p>
      </div>
      <div className="flex gap-4">
        <InputField
          wrapperClass="w-1/2"
          label="Button Text"
          name="btnText"
          placeholder="Enter the button text"
          register={register}
          defaultValue={`${item?.btnText ? item.btnText : ""}`}
          errors={errors}
        />
        <InputField
          wrapperClass="w-1/2"
          label="Button Link"
          name="btnLink"
          placeholder="https//www..."
          register={register}
          errors={errors}
        />
      </div>
      <div className="relative flex flex-col items-start gap-6">
        <input
          className="hidden"
          type="file"
          name="images"
          ref={filePicker}
          multiple
          accept="image/*,.png,.jpg,.gif,.web"
          onChange={selectFiles}
        />
        <div className="flex flex-1 justify-between gap-6">
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="relative flex flex-shrink-0 flex-col rounded-[10px] shadow-md"
            >
              {image === 0 ? (
                <picture className="h-auto w-fit rounded-[10px]">
                  <source srcSet={`${defaultImg1} 1x, ${defaultImg2} 2x`} type="image/webp" />
                  <img
                    width={185}
                    height={119}
                    src={defaultImg1}
                    alt="upload img"
                    className="cursor-pointer rounded-[10px]"
                    onClick={handlePick}
                  />
                </picture>
              ) : (
                <>
                  <img
                    src={
                      Array.isArray(item?.photoUrls) && item.photoUrls[index]
                        ? item.photoUrls[index].photoUrls
                        : image instanceof File
                          ? URL.createObjectURL(image)
                          : ""
                    }
                    alt="upload"
                    className="max-h-[100px] max-w-[180px] rounded-[10px] shadow-md lg:max-h-[119px] lg:max-w-full"
                  />

                  <button
                    type="button"
                    className="absolute right-0 top-0 flex h-[25px] w-[25px] -translate-y-1/4 translate-x-1/4 transform items-center justify-center rounded-full bg-red-500 shadow-md hover:bg-red-700"
                    onClick={() => handleDeleteImage(image)}
                  >
                    <Icon name="close" className="h-[12px] w-[12px]" />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
        {imageError && <p className="field-error top-[120px] mt-[120px]">Add at least one image</p>}
        <div className="mx-auto flex gap-6">
          <button
            className="primaryBtn h-[40px] w-[185px] lg:h-[56px]"
            type="button"
            onClick={toggle}
          >
            Cancel
          </button>
          <button className="primaryBtn h-[40px] w-[185px] lg:h-[56px]" type="submit">
            {item ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
};
