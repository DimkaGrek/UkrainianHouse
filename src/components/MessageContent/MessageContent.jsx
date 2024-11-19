import { useEffect } from "react";
import { format } from "date-fns";
import { useDispatch } from "react-redux";

import { changeMessageStatus } from "../../redux";

export const MessageContent = ({ item }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!item.read) {
      dispatch(changeMessageStatus(item.id));
    }
  }, [dispatch, item]);

  const messageDetails = [
    { label: "Name", value: item.name },
    { label: "Phone", value: item.phone },
    { label: "Email", value: item.email },
  ];

  return (
    <div className="flex w-[500px] flex-col gap-8">
      <div className="flex flex-col justify-start text-sm">
        {messageDetails.map((detail, index) => (
          <p key={index}>
            <span className="font-medium">{detail.label}:</span> {detail.value}
          </p>
        ))}
      </div>
      <pre className="color-my-black2 whitespace-pre-wrap text-justify font-istok text-lg">
        {item.message}
      </pre>
      <p className="flex justify-end text-sm">{format(item.createdAt, "HH:mm / dd MMM yyyy")}</p>
    </div>
  );
};
