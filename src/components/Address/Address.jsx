import { Icon } from "../../components";

export const Address = ({
  className = "",
  listClass,
  itemClass = "flex items-center gap-[6px]",
  iconClass,
}) => {
  return (
    <address className={className}>
      <ul className={listClass}>
        <li className="flex items-center gap-[6px]">
          <Icon name="mail" className={iconClass} size="24" viewbox="24" />
          ukrainianhouse.maastricht@gmail.com
        </li>
        <li className={itemClass}>
          <Icon name="adress" className={iconClass} size="24" />
          Oranjeplein 96, Maastricht, Netherlands, 6224 KV
        </li>
      </ul>
    </address>
  );
};
