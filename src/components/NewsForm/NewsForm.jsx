import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from '../Icon/Icon';
import { StatusField } from '../StatusField/StatusField';

export const NewsForm = ({ news }) => {
  const filePicker = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const statuses = ['Draft', 'Published', 'Archived', 'Announce'];

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

  const handleSetStatus = status => {
    setValue('status', status);
  };

  const onSubmit = data => {
    // data.photoUrls = selectedImages;
    // console.log(data);

    // console.log(new Date());

    data.publishDate = new Date();

    const formData = new FormData();
    // formData.append('title', data.title);
    // formData.append('content', data.content);
    // formData.append('publishDate', new Date());
    // formData.append('status', data.status);
    // formData.append('btnText', data.btnText);
    // formData.append('btnLink', data.btnLink);
    formData.append('news', data);
    formData.append('photos', selectedImages);

    reset();
  };

  return (
    <form
      className="flex flex-row gap-[16px] h-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-[16px]">
        <div>
          <label className="labelStyles">
            Title:
            <input
              className="fieldStyles"
              type="text"
              name="title"
              placeholder="Enter the title"
              {...register('title')}
            />
          </label>
        </div>
        <div>
          <label className="labelStyles">
            Content:
            <textarea
              className="fieldStyles resize-none overflow-auto h-[254px]"
              type="text"
              name="content"
              placeholder="Enter the content"
              {...register('content')}
            />
          </label>
        </div>
        <StatusField
          statuses={statuses}
          setStatus={handleSetStatus}
          status={news ? news.status : statuses[0]}
        />
        <div>
          <label className="labelStyles">
            Button text:
            <input
              className="fieldStyles"
              type="text"
              name="btnText"
              placeholder="Enter text for button"
              {...register('btnText')}
            />
          </label>
        </div>
        <div>
          <label className="labelStyles">
            Button link:
            <input
              className="fieldStyles"
              type="text"
              name="btnLink"
              placeholder="Enter link for button"
              {...register('btnLink')}
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col items-start w-fit">
        <p className="font-istok font-normal text-[16px] leading-[22px] mb-[4px]">
          Images
        </p>
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
          className={`w-full mb-[16px] font-istok font-normal text-[20px] leading-[32px] flex justify-center items-center gap-[6px] px-[10px] h-[54px] border border-solid border-[#1C1C1C] rounded-[10px] hover:bg-[#FFD437] ${
            selectedImages.length === 3
              ? 'cursor-not-allowed'
              : 'cursor-pointer'
          }`}
          onClick={handlePick}
          disabled={selectedImages.length >= 3}
        >
          &#43; Add images
        </button>
        <div className="flex flex-col gap-[10px] p-[15px] h-[500px] w-[250px] overflow-auto bg-white mb-[16px] border border-solid border-[#1C1C1C] rounded-[10px]">
          {selectedImages &&
            selectedImages.map((image, index) => (
              <div
                key={index}
                className="flex flex-col flex-shrink-0 mb-[10px] relative rounded-[10px]"
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt="upload"
                  className="h-auto w-fit rounded-[10px] shadow-xl"
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
        <button className="primaryBtn w-full" type="submit">
          Publish
        </button>
      </div>
    </form>
  );
};
