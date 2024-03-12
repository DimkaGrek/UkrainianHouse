import { Button } from '../Button/Button';

export const NewsForm = () => {
  return (
    <form className="flex flex-col content-center items-center gap-[20px] w-[500px]">
      <div className="w-full">
        <label className="font-istok font-normal text-[16px] leading-[22px] flex flex-col items-start gap-[4px]">
          Title:
          <input
            className="font-istok font-normal text-[20px] leading-[24px] w-full p-[14px] placeholder:text-[#7C7C7C] border border-solid border-[#1C1C1C] rounded-[10px] focus:outline-none focus:border-[#FFD437]"
            type="text"
            name="title"
            placeholder="Enter the title"
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
          />
        </label>
      </div>
      <div className="w-full">
        <label className="font-istok font-normal text-[16px] leading-[22px] flex flex-col items-start gap-[4px]">
          Photos:
          <input
            // className="invisible h-0 w-0"
            type="file"
            name="photos"
            multiple
          />
        </label>
      </div>
      <Button type="submit">Add News</Button>
    </form>
  );
};
