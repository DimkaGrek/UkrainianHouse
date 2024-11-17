import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { createNewsPhoto, createOneNews, deleteNewsPhoto, updateOneNews } from "../redux";
import { checkObjectEquality, getFileResizer, getFormattedData } from "../helpers";
import { newsStatuses } from "../constants";
import { newsFormSchema } from "../schemas";

export const useNewsFrom = (item, toggle) => {
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

  return {
    selectedImages,
    imageError,
    status,
    filePicker,
    register,
    control,
    errors,
    handleSubmit,
    onSubmit,
    selectFiles,
    handlePick,
    handleChangeStatus,
    handleChangeDate,
    handleDeleteImage,
  };
};
