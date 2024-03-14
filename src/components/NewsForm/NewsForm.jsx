import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button/Button';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import { useForm } from 'react-hook-form';

export const NewsForm = ({ news }) => {
  const filePicker = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (news) {
      const { title, content, images } = news;
      setValue('title', title);
      setValue('content', content);
      setValue('images', images);
      setSelectedImages(images);
    }
  }, [news, setValue]);

  const handleImagesChange = e => {
    const images = Array.from(e.target.files);
    setSelectedImages(images);
    setValue('images', images);
  };

  const onSubmit = data => {
    console.log(data);
    console.log(selectedImages);
    reset();
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <form
      className="flex flex-col content-center items-center gap-[20px] w-[500px]"
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
        <input
          className="hidden"
          type="file"
          name="images"
          ref={filePicker}
          multiple
          accept="image/*,.png,.jpg,.gif,.web"
          onChange={handleImagesChange}
        />
        <button
          type="button"
          onClick={handlePick}
          className="font-istok font-normal text-[20px] leading-[32px] flex content-center items-center gap-[6px] py-[5px] px-[10px] border border-solid border-[#1C1C1C] rounded-[10px] bg-[#c0c0c0]"
        >
          <MdOutlineDriveFolderUpload className="h-[24px] w-[24px]" /> Choose
          images
        </button>
        {selectedImages && (
          <ul className="mt-[15px]">
            {selectedImages.map((item, index) => (
              <li key={index}>{item?.name}</li>
            ))}
          </ul>
        )}
      </div>
      <Button type="submit">Add News</Button>
    </form>
  );
};
