import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from '../Icon/Icon';

export const NewsForm = ({ news }) => {
  const filePicker = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (news) {
      const { title, content } = news;
      setValue('title', title);
      setValue('content', content);
    }
  }, [news, setValue]);

  const selectFiles = e => {
    let selectedFiles = Array.from(e.target.files);

    if (selectedImages.length + selectedFiles.length > 3) {
      alert(`You can't upload more than 3 images!`);
      const maxAllowed = 3 - selectedImages.length;
      selectedFiles = selectedFiles.slice(0, maxAllowed);
    }

    setSelectedImages(prevImages => [...prevImages, ...selectedFiles]);
  };

  const handleDeleteImage = image => {
    setSelectedImages(selectedImages.filter(item => item !== image));
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const onSubmit = data => {
    data.photoUrls = selectedImages;
    console.log(data);

    reset();
  };

  return (
    <form
      className="flex flex-col content-center items-center gap-[20px] w-[600px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <label className="font-istok font-normal text-[16px] leading-[22px] flex flex-col items-start gap-[4px]">
          Title:
          <input
            className="font-istok font-normal text-[20px] leading-[24px] w-full p-[14px] placeholder:text-[#7C7C7C] border border-solid border-[#1C1C1C] rounded-[10px] focus:outline-none focus:border-[#FFD437]"
            type="text"
            name="title"
            placeholder="Enter the title"
            {...register('title')}
          />
        </label>
      </div>
      <div className="w-full">
        <label className="font-istok font-normal text-[16px] leading-[22px] flex flex-col items-start gap-[4px]">
          Content:
          <textarea
            className="font-istok font-normal text-[20px] leading-[24px] w-full p-[14px] placeholder:text-[#7C7C7C] border border-solid border-[#1C1C1C] rounded-[10px] focus:outline-none focus:border-[#FFD437] resize-none overflow-auto h-[200px]"
            type="text"
            name="content"
            placeholder="Enter the content"
            {...register('content')}
          />
        </label>
      </div>
      <div className="w-full">
        <label className="font-istok font-normal text-[16px] leading-[22px] flex flex-col items-start gap-[4px]">
          News status:
          <select
            name="status"
            {...register('status')}
            className="font-istok font-normal text-[20px] leading-[24px] w-full p-[14px] placeholder:text-[#7C7C7C] border border-solid border-[#1C1C1C] rounded-[10px] focus:outline-none focus:border-[#FFD437]"
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
            <option value="ARCHIVED">Archived</option>
            <option value="ANNOUNCE">Announce</option>
          </select>
        </label>
      </div>
      <div className="w-full">
        <label className="font-istok font-normal text-[16px] leading-[22px] flex flex-col items-start gap-[4px]">
          Button text:
          <input
            className="font-istok font-normal text-[20px] leading-[24px] w-full p-[14px] placeholder:text-[#7C7C7C] border border-solid border-[#1C1C1C] rounded-[10px] focus:outline-none focus:border-[#FFD437]"
            type="text"
            name="btnText"
            placeholder="Enter text for button"
            {...register('btnText')}
          />
        </label>
      </div>
      <div className="w-full">
        <label className="font-istok font-normal text-[16px] leading-[22px] flex flex-col items-start gap-[4px]">
          Button link:
          <input
            className="font-istok font-normal text-[20px] leading-[24px] w-full p-[14px] placeholder:text-[#7C7C7C] border border-solid border-[#1C1C1C] rounded-[10px] focus:outline-none focus:border-[#FFD437]"
            type="text"
            name="btnLink"
            placeholder="Enter link for button"
            {...register('btnLink')}
          />
        </label>
      </div>
      <div className="w-full flex items-center gap-[20px]">
        <input
          className="hidden"
          type="file"
          name="images"
          ref={filePicker}
          multiple
          accept="image/*,.png,.jpg,.gif,.web"
          onChange={selectFiles}
        />
        <button
          type="button"
          className={`w-[160px] font-istok font-normal text-[20px] leading-[32px] flex justify-center items-center gap-[6px] py-[5px] px-[10px] border border-solid border-[#1C1C1C] rounded-[10px] bg-[#e4e7eb] ${
            selectedImages.length === 3
              ? 'cursor-not-allowed'
              : 'cursor-pointer'
          }`}
          onClick={handlePick}
          disabled={selectedImages.length >= 3}
        >
          &#43; Add images
        </button>
      </div>
      <div className="flex flex-nowrap gap-[20px] w-full overflow-x-auto pt-[10px]">
        {selectedImages &&
          selectedImages.map((image, index) => (
            <div
              key={index}
              className="flex flex-col flex-shrink-0 mb-[10px] relative rounded-[10px] h-[200px]"
            >
              <img
                src={URL.createObjectURL(image)}
                alt="upload"
                className="h-[200px] rounded-[10px]"
              />
              <button
                type="button"
                className="flex justify-center items-center absolute w-[25px] h-[25px] rounded-full top-0 right-0 transform translate-x-1/4 -translate-y-1/4 shadow-md bg-red-500 hover:bg-red-700"
                onClick={() => handleDeleteImage(image)}
              >
                <Icon name="close" className="h-[12px] w-[12px]" />
              </button>
            </div>
          ))}
      </div>
      <button className="primaryBtn" type="submit">
        Add News
      </button>
    </form>
  );
};
