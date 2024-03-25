import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../services/firebase';
import { FaPlus } from 'react-icons/fa6';

export const NewsForm = ({ news }) => {
  const filePicker = useRef(null);
  const [loadingImages, setLoadingImages] = useState(false);
  const [imagesURLs, setImagesURLs] = useState([]);

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (news) {
      const { title, content, images } = news;
      setValue('title', title);
      setValue('content', content);
      setValue('images', images);
      // setImages(images);
    }
  }, [news, setValue]);

  const uploadImages = async e => {
    const images = Array.from(e.target.files);

    const uploadedImages = []; // Создаем массив для хранения URL загруженных изображений

    for (let i = 0; i < images.length; i++) {
      setLoadingImages(true);
      const image = images[i];
      const imageRef = ref(storage, `/news/${image.name}`);

      try {
        // Загружаем изображение на сервер
        await uploadBytes(imageRef, image);

        // Получаем URL загруженного изображения
        const downloadURL = await getDownloadURL(imageRef);

        // Добавляем URL в массив
        uploadedImages.push(downloadURL);
        setLoadingImages(false);
      } catch (error) {
        console.log('Ошибка при загрузке изображения:', error);
        setLoadingImages(false);
      }
    }

    // После загрузки всех изображений сохраняем URL в состоянии
    setImagesURLs(uploadedImages);
  };

  const onSubmit = data => {
    console.log(imagesURLs);
    data.images = imagesURLs;
    console.log(data);

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
          onChange={uploadImages}
        />
        <button
          type="button"
          onClick={handlePick}
          className="w-[160px] font-istok font-normal text-[20px] leading-[32px] flex justify-center items-center gap-[6px] py-[5px] px-[10px] border border-solid border-[#1C1C1C] rounded-[10px] bg-[#e4e7eb]"
        >
          {!loadingImages ? <>&#43; Add images</> : 'Loading...'}
        </button>
      </div>
      <Button type="submit">Add News</Button>
    </form>
  );
};
