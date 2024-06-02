import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../InputField/InputField';
import { Icon } from '../Icon/Icon';
import newsImg1 from '../../assets/images/news-img@1x.jpg';
import newsImg2 from '../../assets/images/news-img@2x.jpg';
// import { getFromattedData } from '../../helpers/getFromattedData';
import { StatusField } from '../StatusField/StatusField';
import { bookStatuses } from '../../constants';

export const BookForm = ({ toggle }) => {
  const filePicker = useRef(null);
  const [selectedCover, setSelectedCover] = useState(null);
  const [status, setStatus] = useState(bookStatuses[0]);
  // const [coverError, setCoerError] = useState(false);
  // const dispatch = useDispatch();

  const { register, handleSubmit, reset, setValue } = useForm();

  const selectFiles = e => {
    setSelectedCover(e.target.files[0]);
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

  const onSubmit = data => {
    console.log(data);
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
            />
            <label className="label">
              Book Description:
              <textarea
                className="field resize-none overflow-auto h-[172px] w-[400px]"
                type="text"
                placeholder="Enter the book description"
                {...register('description')}
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Amount of pages"
                name="pageCount"
                type="number"
                placeholder="Amount pages"
                register={register}
              />
              <InputField
                label="Year of publishing"
                name="publicationYear"
                type="number"
                placeholder="Year of publishing"
                register={register}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <InputField
              label="Author"
              name="author"
              placeholder="Enter the author"
              register={register}
            />
            <label className="label">
              About the author:
              <textarea
                className="field resize-none overflow-auto h-[172px] w-[400px]"
                type="text"
                placeholder="Enter information about author"
                {...register('aboutAuthor')}
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Genre"
                name="genre"
                placeholder="Enter the genre"
                register={register}
              />
              <InputField
                label="Quantity"
                name="quantity"
                type="number"
                placeholder="Enter the quantity"
                register={register}
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
                className="w-fit rounded-[10px] bg-white flex justify-center items-center h-[280px] cursor-pointer"
              >
                <source
                  srcSet={`${newsImg1} 1x, ${newsImg2} 2x`}
                  type="image/png"
                />
                <img width={220} height={119} src={newsImg1} alt="upload img" />
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
