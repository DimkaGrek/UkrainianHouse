import {
  Advertisement,
  LoadMoreButton,
  NewsList,
  SearchBar,
} from '../../components';

const News = () => {
  return (
    <>
      <div className="hidden  md:flex justify-between items-center mb-[40px] lg:mb:[44px]">
        <h3 className="font-proza-semibold font-semibold text-[20px] text-[#222] leading-[160%] lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[130%]">
          News
        </h3>
        <SearchBar />
      </div>
      <Advertisement />
      <NewsList />
      <LoadMoreButton />
    </>
  );
};

export default News;
