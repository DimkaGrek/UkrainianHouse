import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { useModal } from "../hooks";
import { needHelpFormSchema } from "../schemas";
import { createMessage, selectIsLoadingMessages } from "../redux";

export const useNeedHelpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isSubmitted },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(needHelpFormSchema),
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingMessages);

  const [isOpenModal, toggleModal] = useModal();

  const onSubmit = (data) => {
    dispatch(createMessage(data))
      .then(() => {
        reset();
        toggleModal();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const inputClass = (fieldName) => {
    const baseClass =
      fieldName === "message"
        ? "scrollbar resize-none w-full h-[123px] py-[14px] px-[18px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] leading-[1.4] placeholder-[#666] md:placeholder:w-[550px] lg:placeholder:w-[390px] outline-none hover:border-[#ffd437] transition duration-300 sm-max:h-[145px] md:h-[110px] md:text-[20px] md:leading-[1.2] lg:h-[129px]"
        : "py-[14px] px-[18px] w-full h-[50px] md:h-[52px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] placeholder-[#666] outline-none hover:border-[#ffd437] transition duration-300 md:text-[20px]";
    const errorClass = "border-red-700";
    const successClass = "border-green-700 hover:shadow-sm focus-visible:shadow-sm";

    if (errors[fieldName] && (dirtyFields[fieldName] || isSubmitted)) {
      return `${baseClass} ${errorClass}`;
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return `${baseClass} ${successClass}`;
    }
    return baseClass;
  };

  const renderMessage = (fieldName) => {
    if (errors[fieldName] && (dirtyFields[fieldName] || isSubmitted)) {
      return (
        <p className="absolute -bottom-4 left-0 text-[12px] text-red-700 md:-bottom-5 md:text-[14px]">
          {errors[fieldName].message}
        </p>
      );
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return (
        <p className="absolute -bottom-4 left-0 text-[12px] text-green-700 md:-bottom-5 md:text-[14px]">
          {`${fieldName.charAt(0).toUpperCase()}${fieldName.slice(1)} is entered correctly`}
        </p>
      );
    }
    return null;
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    inputClass,
    renderMessage,
    isOpenModal,
    toggleModal,
    isLoading,
  };
};
