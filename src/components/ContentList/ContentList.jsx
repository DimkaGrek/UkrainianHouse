import { ContentListItem } from "./ContentListItem";

export const ContentList = ({ items }) => {
  
  return (
    <ul className="scrollbar mb-6 flex flex-col pr-2" style={{ height: "calc(100vh - 258px)" }}>
      {items.map((item) => (
        <ContentListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
