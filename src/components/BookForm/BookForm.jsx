import { Icon,InputField,StatusField } from "../../components";

import { useBookForm } from "../../hooks";
import { bookStatuses } from "../../constants";
import defaultImg1 from "../../assets/images/default-img@1x.webp";
import defaultImg2 from "../../assets/images/default-img@2x.webp";

export const BookForm = ({ item, toggle }) => {
   const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    selectFiles,
    handleDeleteImage,
    handlePick,
    handleChangeStatus,
    filePicker,
    selectedCover,
    status,
    coverError,
  } = useBookForm(item, toggle);

  return (
    <form className="flex h-auto flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-6">
            <InputField
              label="Book Title"
              name="title"
              placeholder="Enter the book title"
              register={register}
              errors={errors}
            />
            <div>
              <label className="label">
                Book Description
                <textarea
                  className="field scrollbar h-[202px] w-[400px] resize-none"
                  type="text"
                  placeholder="Enter the book description"
                  {...register("description")}
                />
              </label>
              <p className="field-error">{errors["description"]?.message}</p>
            </div>
            <div className="flex gap-4">
              <InputField
                label="Pages"
                name="pageCount"
                type="number"
                placeholder="Amount pages"
                register={register}
                errors={errors}
              />

              <InputField
                label="Year"
                name="publicationYear"
                type="number"
                placeholder="Year of publishing"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <InputField
              label="Author"
              name="author"
              placeholder="Enter the author"
              register={register}
              errors={errors}
            />
            <div>
              <label className="label">
                About the author
                <textarea
                  className="field scrollbar h-[202px] w-[400px] resize-none"
                  type="text"
                  placeholder="Enter information about author"
                  {...register("aboutAuthor")}
                />
              </label>
              <p className="field-error">{errors["aboutAuthor"]?.message}</p>
            </div>
            <div className="flex gap-4">
              <InputField
                label="Genre"
                name="genre"
                placeholder="Enter the genre"
                register={register}
                errors={errors}
              />
              <InputField
                label="Quantity"
                name="quantity"
                type="number"
                placeholder="Enter the quantity"
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </div>
        <div className="flex w-[220px] flex-col gap-6">
          <StatusField statuses={bookStatuses} status={status} setStatus={handleChangeStatus} />
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
                className="flex h-[306px] w-fit cursor-pointer items-center justify-center rounded-[10px] bg-white shadow-md"
              >
                <source srcSet={`${defaultImg1} 1x, ${defaultImg2} 2x`} type="image/webp" />
                <img width={205} height={119} src={defaultImg1} alt="upload img" />
              </picture>
            ) : (
              <div className="relative rounded-[10px] shadow-md">
                {typeof selectedCover === "string" ? (
                  <img
                    src={selectedCover}
                    alt="existing cover"
                    className="max-h-[306px] rounded-[10px] object-cover shadow-md"
                    width={220}
                  />
                ) : (
                  <img
                    src={URL.createObjectURL(selectedCover)}
                    alt="upload"
                    className="max-h-[306px] rounded-[10px] object-cover shadow-md"
                    width={220}
                  />
                )}
                <button
                  type="button"
                  className="absolute right-0 top-0 flex h-[25px] w-[25px] -translate-y-1/4 translate-x-1/4 transform items-center justify-center rounded-full bg-red-500 shadow-md hover:bg-red-700"
                  onClick={handleDeleteImage}
                >
                  <Icon name="close" className="h-[12px] w-[12px]" />
                </button>
              </div>
            )}
            {coverError && <p className="field-error top-[485px]">Add cover for book</p>}
          </div>
        </div>
      </div>
      <div className="mx-auto flex gap-6">
        <button className="primaryBtn h-[56px] w-[185px]" type="button" onClick={toggle}>
          Cancel
        </button>
        <button className="primaryBtn h-[56px] w-[185px]" type="submit">
          {item ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
};
