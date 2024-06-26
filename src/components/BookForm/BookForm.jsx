import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Icon } from '../Icon/Icon';
import { InputField } from '../InputField/InputField';
import { StatusField } from '../StatusField/StatusField';

import newsImg1 from '../../assets/images/news-img@1x.jpg';
import newsImg2 from '../../assets/images/news-img@2x.jpg';
import { bookStatuses } from '../../constants';
import { bookFormSchema } from '../../schemas';
import { createBook } from '../../my-redux/Books/operations';
import { getFileResizer, getFromattedData } from '../../helpers';

export const BookForm = ({ toggle }) => {
  const filePicker = useRef(null);
  const [selectedCover, setSelectedCover] = useState(null);
  const [status, setStatus] = useState(bookStatuses[0]);
  const [coverError, setCoverError] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(bookFormSchema),
  });

  useEffect(() => {
    setValue('status', bookStatuses[0]);
  }, [setValue]);

  useEffect(() => {
    if (coverError && selectedCover) {
      setCoverError(false);
    }
  }, [coverError, selectedCover]);

  const selectFiles = e => {
    setSelectedCover(e.target.files[0]);

    e.target.value = null;
  };

  const handleDeleteImage = () => {
    setSelectedCover(null);
  };

  const handleChangeStatus = status => {
    setStatus(status);
    setValue('status', status);
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const handleResizeCover = async cover => {
    try {
      const resizedImages = await getFileResizer(cover, 385, 622);

      return resizedImages;
    } catch (error) {
      return false;
    }
  };

  const onSubmit = async data => {
    if (!selectedCover) {
      setCoverError(true);
      return;
    }

    const resizedCover = await handleResizeCover(selectedCover);

    if (!resizedCover) {
      return toast.error('Error while resizing cover');
    }

    const fd = getFromattedData(resizedCover, 'cover', data, 'book');
    dispatch(createBook(fd));

    setSelectedCover(null);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-6 h-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row gap-4">
        <div className="grid grid-cols-2 gap-4">
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
                  className="field resize-none overflow-auto h-[172px] w-[400px]"
                  type="text"
                  placeholder="Enter the book description"
                  {...register('description')}
                />
              </label>
              <p className="field-error">{errors['description']?.message}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Amount of pages"
                name="pageCount"
                type="number"
                placeholder="Amount pages"
                register={register}
                errors={errors}
              />

              <InputField
                label="Year of publishing"
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
                  className="field resize-none overflow-auto h-[172px] w-[400px]"
                  type="text"
                  placeholder="Enter information about author"
                  {...register('aboutAuthor')}
                />
              </label>
              <p className="field-error">{errors['aboutAuthor']?.message}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
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
        <div className="flex flex-col gap-6 w-[220px]">
          <StatusField
            statuses={bookStatuses}
            status={status}
            setStatus={handleChangeStatus}
          />
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
                className="w-fit rounded-[10px] bg-white flex justify-center items-center h-[280px] cursor-pointer shadow-md"
              >
                <source
                  srcSet={`${newsImg1} 1x, ${newsImg2} 2x`}
                  type="image/png"
                />
                <img width={205} height={119} src={newsImg1} alt="upload img" />
              </picture>
            ) : (
              <div className="relative rounded-[10px] shadow-md">
                <img
                  src={URL.createObjectURL(selectedCover)}
                  alt="upload"
                  className="rounded-[10px] shadow-md"
                  width={220}
                />
                <button
                  type="button"
                  className="flex justify-center items-center absolute w-[25px] h-[25px] rounded-full top-0 right-0 transform translate-x-1/4 -translate-y-1/4 shadow-md bg-red-500 hover:bg-red-700"
                  onClick={handleDeleteImage}
                >
                  <Icon name="close" className="h-[12px] w-[12px]" />
                </button>
              </div>
            )}
            {coverError && (
              <p className="field-error top-[460px]">Add cover for book</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-6 mx-auto">
        <button
          className="primaryBtn w-[185px] h-[56px]"
          type="button"
          onClick={toggle}
        >
          Cancel
        </button>
        <button className="primaryBtn w-[185px] h-[56px]" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};
