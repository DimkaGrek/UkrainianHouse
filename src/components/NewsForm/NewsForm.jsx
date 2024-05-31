import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Icon } from '../Icon/Icon';
import { InputField } from '../InputField/InputField';

import { getFromattedData } from '../../helpers/getFromattedData';
import newsImg1 from '../../assets/images/news-img@1x.jpg';
import newsImg2 from '../../assets/images/news-img@2x.jpg';
import { StatusField } from '../StatusField/StatusField';

export const NewsForm = () => {
  const filePicker = useRef(null);
  const initialImages = [0, 0, 0];
  const [selectedImages, setSelectedImages] = useState(initialImages);
  const statuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED', 'ANNOUNCE'];
  const [status, setStatus] = useState('DRAFT');

  const { register, handleSubmit, reset } = useForm();

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
  };

  const onSubmit = data => {
    data.publishDate = new Date();

    const fd = getFromattedData(selectedImages, 'photos', data, 'news');

    for (const pair of fd.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

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
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Date"
            name="publishDate"
            type="date"
            register={register}
          />
          <StatusField
            statuses={statuses}
            status={status}
            setStatus={handleChangeStatus}
          />
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
                      className="rounded-[10px] shadow-md max-h-[119px]"
                      width={185}
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
          <button className="primaryBtn w-[185px] h-[56px]" type="button">
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
