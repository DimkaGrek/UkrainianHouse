import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { LuCalendar } from 'react-icons/lu';

import { Icon } from '../Icon/Icon';
import { InputField } from '../InputField/InputField';
import { StatusField } from '../StatusField/StatusField';

import { getFromattedData } from '../../helpers/getFromattedData';
import newsImg1 from '../../assets/images/news-img@1x.jpg';
import newsImg2 from '../../assets/images/news-img@2x.jpg';
import 'react-datepicker/dist/react-datepicker.css';
import { newsStatuses } from '../../constants';

export const NewsForm = ({ toggle }) => {
  const filePicker = useRef(null);
  const [selectedImages, setSelectedImages] = useState(new Array(3).fill(0));
  const [status, setStatus] = useState(newsStatuses[0]);

  const { register, handleSubmit, reset, setValue, control } = useForm();

  useEffect(() => {
    setValue('publishDate', new Date());
  }, [setValue]);

  const selectFiles = e => {
    let selectedFiles = Array.from(e.target.files);

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

  const onSubmit = data => {
    console.log(data);

    const fd = getFromattedData(selectedImages, 'photos', data, 'news');

    for (const pair of fd.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    setSelectedImages(initialImages);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-4 h-auto w-[1100px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <InputField
            label="Article Title"
            name="title"
            placeholder="Enter the article title"
            register={register}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <StatusField
              statuses={newsStatuses}
              status={status}
              setStatus={handleChangeStatus}
            />
          </div>
          <label className="label">
            Date
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
                </div>
              )}
            />
          </label>
        </div>
      </div>
      <label className="label">
        Article Text:
        <textarea
          className="field resize-none overflow-auto h-[265px]"
          type="text"
          placeholder="Enter the article text"
          {...register('content')}
        />
      </label>
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Button Text"
          name="btnText"
          placeholder="Enter the button text"
          register={register}
          defaultValue="Read more"
        />
        <InputField
          label="Button Link "
          name="btnLink"
          placeholder="https//www..."
          register={register}
        />
      </div>
      <div className="flex flex-col gap-6 items-start">
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
          {selectedImages &&
            selectedImages.map((image, index) => (
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
      </div>
    </form>
  );
};
