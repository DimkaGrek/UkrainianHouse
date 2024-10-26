import { ContentListItem } from './ContentListItem';

export const ContentList = ({ items }) => {
  return (
    <ul className="pr-2 flex flex-col gap-8 max-h-[70vh] scrollbar mb-6">
      {items.map(item => (
        <ContentListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
