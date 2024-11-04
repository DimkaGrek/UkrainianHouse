import { ContentListItem } from './ContentListItem';

export const ContentList = ({ items }) => {
  return (
    <ul
      className="pr-2 flex flex-col scrollbar mb-6"
      style={{ height: 'calc(100vh - 258px)' }}
    >
      {items.map(item => (
        <ContentListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
