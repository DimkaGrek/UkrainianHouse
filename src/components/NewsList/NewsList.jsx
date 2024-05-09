import { NewsListItem } from './NewsListItem';

export const NewsList = () => {
  const news = [
    {
      title: `A Magical Day at the Children's Carnival`,
      description: `Grateful for the memories created! An enchanting event unfolds at the Carnival, where the air is filled with the lively melodies of traditional Carnival songs and the joyous laughter of children...`,
      date: '01-02-2024',
      author: 'Maastricht',
    },
    {
      title: `A Magical Day at the Children's Carnival`,
      description: `Grateful for the memories created! An enchanting event unfolds at the Carnival, where the air is filled with the lively melodies of traditional Carnival songs and the joyous laughter of children...`,
      date: '01-02-2024',
      author: 'Maastricht',
    },
    {
      title: `A Magical Day at the Children's Carnival`,
      description: `Grateful for the memories created! An enchanting event unfolds at the Carnival, where the air is filled with the lively melodies of traditional Carnival songs and the joyous laughter of children...`,
      date: '01-02-2024',
      author: 'Maastricht',
    },
    {
      title: `A Magical Day at the Children's Carnival`,
      description: `Grateful for the memories created! An enchanting event unfolds at the Carnival, where the air is filled with the lively melodies of traditional Carnival songs and the joyous laughter of children...`,
      date: '01-02-2024',
      author: 'Maastricht',
    },
  ];

  return (
    <ul className="flex flex-col gap-[16px] md:flex-row md:flex-wrap md:gap-x-[20px] gap-y-[16px] lg:gap-x-[24px] lg:gap-y-[44px]">
      {news.map((item, index) => {
        return <NewsListItem key={index} {...item} />;
      })}
    </ul>
  );
};
