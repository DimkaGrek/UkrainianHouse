import { Controller } from "react-hook-form";
import { LuCalendar } from "react-icons/lu";
import DatePicker from "react-datepicker";

import { Icon, InputField, StatusField } from "../../components";

import { useNewsFrom } from "../../hooks";
import { newsStatuses } from "../../constants";
import defaultImg1 from "../../assets/images/default-img@1x.webp";
import defaultImg2 from "../../assets/images/default-img@2x.webp";
import "react-datepicker/dist/react-datepicker.css";

export const NewsForm = ({ item, toggle }) => {
  const {
    selectedImages,
    imageError,
    status,
    filePicker,
    register,
    control,
    errors,
    handleSubmit,
    onSubmit,
    selectFiles,
    handlePick,
    handleChangeStatus,
    handleChangeDate,
    handleDeleteImage,
  } = useNewsFrom(item, toggle);

  return (
    <form
      className="flex h-auto w-full flex-col gap-6 lg:w-[1150px] lg:gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid-cols-2 grid gap-6">
        <InputField
          label="Article Title"
          name="title"
          placeholder="Enter the article title"
          register={register}
          errors={errors}
        />
        <div className="flex gap-6">
          <div className="flex-1">
            <StatusField statuses={newsStatuses} status={status} setStatus={handleChangeStatus} />
          </div>
          <div>
            <p className="label mb-[6px]">Date</p>
            <Controller
              control={control}
              name="publishDate"
              defaultValue={new Date()}
              render={({ field }) => (
                <div className="relative">
                  <DatePicker
                    className="field w-[263px] cursor-pointer"
                    showPopperArrow={false}
                    selected={field.value}
                    placeholderText="mm/dd/yyyy"
                    onChange={(date) => {
                      field.onChange(date);
                      handleChangeDate(date);
                    }}
                    calendarClassName="fixed-height-calendar"
                  />
                  <LuCalendar className="absolute right-[18px] top-[18px] size-5 cursor-pointer" />
                  <p className="field-error">{errors["publishDate"]?.message}</p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <div>
        <label className="label">
          Article Text
          <textarea
            className="field scrollbar h-[130px] resize-none overflow-auto lg:h-[200px]"
            type="text"
            placeholder="Enter the article text"
            {...register("content")}
          />
        </label>
        <p className="field-error">{errors["content"]?.message}</p>
      </div>
      <div className="flex gap-6">
        <InputField
          wrapperClass="w-1/2"
          label="Button Text"
          name="btnText"
          placeholder="Enter the button text"
          register={register}
          defaultValue={`${item?.btnText ? item.btnText : ""}`}
          errors={errors}
        />
        <InputField
          wrapperClass="w-1/2"
          label="Button Link"
          name="btnLink"
          placeholder="https//www..."
          register={register}
          errors={errors}
        />
      </div>
      <div className="relative flex flex-col items-start gap-6">
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
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="relative flex flex-shrink-0 flex-col rounded-[10px] shadow-md"
            >
              {image === 0 ? (
                <picture className="h-auto w-fit rounded-[10px]">
                  <source srcSet={`${defaultImg1} 1x, ${defaultImg2} 2x`} type="image/webp" />
                  <img
                    width={185}
                    height={119}
                    src={defaultImg1}
                    alt="upload img"
                    className="cursor-pointer rounded-[10px]"
                    onClick={handlePick}
                  />
                </picture>
              ) : (
                <>
                  <img
                    src={
                      Array.isArray(item?.photoUrls) && item.photoUrls[index]
                        ? item.photoUrls[index].photoUrls
                        : image instanceof File
                          ? URL.createObjectURL(image)
                          : ""
                    }
                    alt="upload"
                    className="max-h-[100px] max-w-[180px] rounded-[10px] shadow-md lg:max-h-[119px] lg:max-w-full"
                  />

                  <button
                    type="button"
                    className="absolute right-0 top-0 flex h-[25px] w-[25px] -translate-y-1/4 translate-x-1/4 transform items-center justify-center rounded-full bg-red-500 shadow-md hover:bg-red-700"
                    onClick={() => handleDeleteImage(image)}
                  >
                    <Icon name="close" className="h-[12px] w-[12px]" />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
        {imageError && <p className="field-error top-[120px] mt-[120px]">Add at least one image</p>}
        <div className="mx-auto flex gap-6">
          <button
            className="primaryBtn h-[40px] w-[185px] lg:h-[56px]"
            type="button"
            onClick={toggle}
          >
            Cancel
          </button>
          <button className="primaryBtn h-[40px] w-[185px] lg:h-[56px]" type="submit">
            {item ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
};
