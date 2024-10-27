import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { LuCalendar } from 'react-icons/lu';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';

import { Icon } from '../Icon/Icon';
import { InputField } from '../InputField/InputField';
import { StatusField } from '../StatusField/StatusField';

import newsImg1 from '../../assets/images/news-img@1x.jpg';
import newsImg2 from '../../assets/images/news-img@2x.jpg';
import { newsStatuses } from '../../constants';
import { newsFormSchema } from '../../schemas';
import { createOneNews, updateOneNews } from '../../my-redux';
import {
  checkObjectEquality,
  getFileResizer,
  getFromattedData,
} from '../../helpers';
import 'react-datepicker/dist/react-datepicker.css';

export const NewsForm = ({ item, toggle }) => {
  const filePicker = useRef(null);
  const [selectedImages, setSelectedImages] = useState(new Array(3).fill(0));
  const [status, setStatus] = useState(item ? item.status : newsStatuses[0]);
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();

  const hasNonZeroElement = selectedImages.some(element => element !== 0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(newsFormSchema),
  });

  useEffect(() => {
    if (item) {
      setValue('title', item.title);
      setValue('content', item.content);
      setStatus(item.status);
      setValue('btnLink', item.btnLink);
    }
  }, [item, setValue]);

  useEffect(() => {
    setValue('publishDate', item ? item.publishDate : new Date());
    setValue('status', item ? item.status : newsStatuses[0]);
  }, [item, setValue]);

  useEffect(() => {
    if (imageError && hasNonZeroElement) {
      setImageError(false);
    }
  }, [imageError, hasNonZeroElement]);

  const selectFiles = async e => {
    let selectedFiles = Array.from(e.target.files);

    // Check for duplicates in selectedImages and remove them from selectedFiles
    selectedFiles = selectedFiles.filter(file => {
      const isDuplicate = selectedImages.some(
        image => image.name === file.name
      );
      if (isDuplicate) {
        toast.warn(
          `The image "${file.name}" cannot be added as it is already present`
        );
      }
      return !isDuplicate;
    });

    // Check the remaining slots after removing duplicates
    const maxImagesToAdd = selectedImages.filter(image => image === 0).length;
    if (selectedFiles.length > maxImagesToAdd) {
      toast.warn(`You cannot upload more than three images`);
    }

    setSelectedImages(prevImages => {
      const newImages = [...prevImages];

      selectedFiles.forEach(file => {
        const index = newImages.indexOf(0);
        if (index !== -1) {
          newImages[index] = file;
        }
      });
      return newImages;
    });

    e.target.value = null;
  };

  const handleResizeImages = async images => {
    try {
      const resizedImagesPromises = images.map(file =>
        getFileResizer(file, 600, 400)
      );

      const resizedImages = await Promise.all(resizedImagesPromises);

      return resizedImages;
    } catch (error) {
      return false;
    }
  };

  const handleDeleteImage = image => {
    setSelectedImages(prevImages => {
      const newImages = prevImages.filter(item => item !== image);
      newImages.push(0);
      return newImages;
    });
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const handleChangeStatus = status => {
    setStatus(status);
    setValue('status', status);
  };

  const handleChangeDate = date => {
    setValue('publishDate', date, { shouldValidate: true });
  };

  const onSubmit = async data => {
    if (!hasNonZeroElement && !item) {
      setImageError(true);
      return;
    }

    const resizedImages = await handleResizeImages(
      selectedImages.filter(image => image !== 0)
    );

    if (!resizedImages) {
      return toast.error('Error while resizing images');
    }

    let action;
    if (!item) {
      const fd = getFromattedData(resizedImages, 'photos', data, 'news');
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
      // TODO
      // eslint-disable-next-line
      const { photoUrls, ...itemData } = item;

      const isEqual = checkObjectEquality(data, itemData);

      if (item && isEqual) {
        toggle();
        return;
      }
    }

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success(
          item ? 'News updated successfully' : 'News created successfully'
        );

        setSelectedImages(new Array(3).fill(0));
        reset();
        toggle();
      })
      .catch(e => {
        toast.error(e);
      });
  };

  return (
    <form
      className="flex flex-col gap-6 h-auto w-[1100px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Article Title"
          name="title"
          placeholder="Enter the article title"
          register={register}
          errors={errors}
        />
        <div className="flex gap-4">
          <div className="flex-1">
            <StatusField
              statuses={newsStatuses}
              status={status}
              setStatus={handleChangeStatus}
            />
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
                    className="field cursor-pointer w-[263px]"
                    showPopperArrow={false}
                    selected={field.value}
                    placeholderText="mm/dd/yyyy"
                    onChange={date => {
                      field.onChange(date);
                      handleChangeDate(date);
                    }}
                    calendarClassName="fixed-height-calendar"
                  />
                  <LuCalendar className="size-5 absolute top-[18px] right-[18px] cursor-pointer" />
                  <p className="field-error">
                    {errors['publishDate']?.message}
                  </p>
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
            className="field resize-none overflow-auto h-[200px] scrollbar"
            type="text"
            placeholder="Enter the article text"
            {...register('content')}
          />
        </label>
        <p className="field-error">{errors['content']?.message}</p>
      </div>
      <div className="flex gap-4">
        <InputField
          wrapperClass="w-1/2"
          label="Button Text"
          name="btnText"
          placeholder="Enter the button text"
          register={register}
          defaultValue={`${item?.btnText ? item.btnText : 'Read more'}`}
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
      <div className="flex flex-col gap-6 items-start relative">
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
              className="flex flex-col flex-shrink-0 relative rounded-[10px] shadow-md"
            >
              {image === 0 ? (
                <picture className="h-auto w-fit rounded-[10px]">
                  <source
                    srcSet={`${newsImg1} 1x, ${newsImg2} 2x`}
                    type="image/png"
                  />
                  <img
                    width={185}
                    height={119}
                    src={newsImg1}
                    alt="upload img"
                    className="rounded-[10px] cursor-pointer"
                    onClick={handlePick}
                  />
                </picture>
              ) : (
                <>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="upload"
                    className="rounded-[10px] shadow-md max-h-[119px] max-w-[185px]"
                  />
                  <button
                    type="button"
                    className="flex justify-center items-center absolute w-[25px] h-[25px] rounded-full top-0 right-0 transform translate-x-1/4 -translate-y-1/4 shadow-md bg-red-500 hover:bg-red-700"
                    onClick={() => handleDeleteImage(image)}
                  >
                    <Icon name="close" className="h-[12px] w-[12px]" />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
        {imageError && (
          <p className="field-error mt-[120px] top-[120px]">
            Add at least one image
          </p>
        )}
        <div className="flex gap-6 mx-auto">
          <button
            className="primaryBtn w-[185px] h-[56px]"
            type="button"
            onClick={toggle}
          >
            Cancel
          </button>
          <button className="primaryBtn w-[185px] h-[56px]" type="submit">
            {item ? 'Save' : 'Add'}
          </button>
        </div>
      </div>
    </form>
  );
};
