import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../InputField/InputField';
import { Icon } from '../Icon/Icon';
import newsImg1 from '../../assets/images/news-img@1x.jpg';
import newsImg2 from '../../assets/images/news-img@2x.jpg';
import { getFromattedData } from '../../helpers/getFromattedData';

export const BookForm = () => {
  const filePicker = useRef(null);
  const initialCover = null;
  const [selectedCover, setSelectedCover] = useState(initialCover);

  const { register, handleSubmit, reset } = useForm();

  const selectFiles = e => {
    setSelectedCover(e.target.files[0]);
  };

  const handleDeleteImage = () => {
    setSelectedCover(null);
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="flex flex-row gap-[16px] h-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 grow">
        <div className="grid grid-cols-2 gap-4 w-[899px]">
          <div className="flex flex-col gap-4">
            <InputField
              label="Book Title"
              name="title"
              placeholder="...."
              register={register}
            />
            <label className="label">
              Book Description:
              <textarea
                className="field resize-none overflow-auto h-[172px]"
                type="text"
                placeholder="..."
                {...register('content')}
              />
            </label>
          </div>
          <div className="flex flex-col gap-4">
            <InputField
              label="Author"
              name="author"
              placeholder="..."
              register={register}
            />
            <label className="label">
              About the author:
              <textarea
                className="field resize-none overflow-auto h-[172px]"
                type="text"
                placeholder="..."
                {...register('authorInfo')}
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <InputField
            label="Amount of pages"
            name="pages"
            type="number"
            placeholder="..."
            register={register}
          />
          <InputField
            label="Year of publishing"
            name="year"
            type="number"
            placeholder="..."
            register={register}
          />
          <InputField
            label="Genre"
            name="genre"
            placeholder="..."
            register={register}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 pt-7">
        <input
          className="hidden"
          type="file"
          name="images"
          ref={filePicker}
          accept="image/*,.png,.jpg,.gif,.web"
          onChange={selectFiles}
        />
        <div>
          {!selectedCover ? (
            <picture
              onClick={handlePick}
              className="w-fit rounded-[10px] bg-white flex justify-center items-center h-[298px] cursor-pointer"
            >
              <source
                srcSet={`${newsImg1} 1x, ${newsImg2} 2x`}
                type="image/png"
              />
              <img width={185} height={119} src={newsImg1} alt="upload img" />
            </picture>
          ) : (
            <div className="relative rounded-[10px] shadow-sm">
              <img
                src={URL.createObjectURL(selectedCover)}
                alt="upload"
                className="rounded-[10px] shadow-sm"
                width={185}
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
        </div>
        <button className="primaryBtn w-full h-[54px]" type="submit">
          Publish
        </button>
      </div>
    </form>
  );
};
