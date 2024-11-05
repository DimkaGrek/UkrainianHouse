import { useEffect } from 'react';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';

import { changeMessageStatus } from '../../redux';

export const MessageContent = ({ item }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!item.read) {
      dispatch(changeMessageStatus(item.id));
    }
  }, [dispatch, item]);

  return (
    <div className="w-[500px] flex flex-col gap-8">
      <div className="flex flex-col  justify-start text-sm">
        <p>
          <span className="font-medium">Name:</span> {item.name}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {item.phone}
        </p>
        <p>
          <span className="font-medium">Email:</span> {item.email}
        </p>
      </div>
      <div className="h-auto color-my-black2 text-lg text-justify">
        {item.message}
      </div>
      <p className="flex justify-end  text-sm">
        {format(item.createdAt, 'HH:mm / dd MMM yyyy')}
      </p>
    </div>
  );
};
