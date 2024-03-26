import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../services/firebase';
import { TiDelete } from 'react-icons/ti';

export const NewsForm = ({ news }) => {
  const filePicker = useRef(null);
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [imagesURLs, setImagesURLs] = useState([]);

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (news) {
      const { title, content, images } = news;
      setValue('title', title);
      setValue('content', content);
      setImagesURLs(images);
    }
  }, [news, setValue]);

  const uploadImages = async e => {
    const images = Array.from(e.target.files);

    const uploadedImages = []; // Create an array to store the URL of uploaded images

    for (let i = 0; i < images.length; i++) {
      setIsLoadingImages(true);
      const image = images[i];
      const imageRef = ref(storage, `/news/${image.name}`);

      try {
        // Uploading the image to the server
        await uploadBytes(imageRef, image);

        // Get uploaded image URL
        const downloadURL = await getDownloadURL(imageRef);

        // Adding the URL to the array
        uploadedImages.push(downloadURL);
        setIsLoadingImages(false);
      } catch (error) {
        console.log('Ошибка при загрузке изображения:', error);
        setIsLoadingImages(false);
      }
    }

    // After loading all the images, we save the URL in the state
    setImagesURLs(prevImages => [...prevImages, ...uploadedImages]);
  };

  const handleDeleteImage = image => {
    setImagesURLs(imagesURLs.filter(item => item !== image));
  };

  const onSubmit = data => {
    if (isLoadingImages) return;

    data.images = imagesURLs;
    setImagesURLs([]);
    console.log(data);

    reset();
  };

  const handlePick = () => {
    filePicker.current.click();
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
      <div className="w-full flex items-center gap-[20px]">
        <input
          className="hidden"
          type="file"
          name="images"
          ref={filePicker}
          multiple
          accept="image/*,.png,.jpg,.gif,.web"
          onChange={uploadImages}
        />
        <button
          type="button"
          onClick={handlePick}
          className="w-[160px] font-istok font-normal text-[20px] leading-[32px] flex justify-center items-center gap-[6px] py-[5px] px-[10px] border border-solid border-[#1C1C1C] rounded-[10px] bg-[#e4e7eb]"
        >
          {!isLoadingImages ? <>&#43; Add images</> : 'Loading...'}
        </button>
        {imagesURLs.length !== 0 && (
          <h2>Total uploading images: {imagesURLs.length}</h2>
        )}
      </div>
      <div className="flex flex-nowrap gap-[20px] w-full overflow-x-auto">
        {imagesURLs.length !== 0 &&
          imagesURLs.map((image, index) => (
            <div key={index} className="flex flex-col flex-shrink-0 mb-[10px]">
              <img src={image} alt="upload" className="h-[200px]" />
              <div className="flex flex-row justify-between px-[5px] bg-[#e4e7eb]">
                <p>{index + 1}</p>
                <button type="button" onClick={() => handleDeleteImage(image)}>
                  <TiDelete className=" w-[25px] h-[25px] fill-red-500 hover:fill-red-700" />
                </button>
              </div>
            </div>
          ))}
      </div>
      <Button type="submit">Add News</Button>
    </form>
  );
};
