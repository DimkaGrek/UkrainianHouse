import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { Loader, Modal, NeedHelpModal } from '../../components';

import { needHelpFormSchema } from '../../schemas';
import { createMessage, selectIsLoadingMessages } from '../../redux';
import { useModal } from '../../hooks';

export const NeedHelpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isSubmitted },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(needHelpFormSchema),
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingMessages);

  const [isOpenModal, toggleModal] = useModal();

  const onSubmit = data => {
    dispatch(createMessage(data))
      .then(() => {
        reset();
        toggleModal();
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const inputClass = fieldName => {
    const baseClass =
      fieldName === 'message'
        ? 'overflow-hidden resize-none w-full h-[123px] py-[14px] px-[18px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] leading-[1.4] placeholder-[#666] md:placeholder:w-[550px] lg:placeholder:w-[390px] outline-none hover:border-[#ffd437] transition duration-300 sm-max:h-[145px] md:h-[110px] md:text-[20px] md:leading-[1.2] lg:h-[129px]'
        : 'py-[14px] px-[18px] w-full h-[50px] md:h-[52px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] placeholder-[#666] outline-none hover:border-[#ffd437] transition duration-300 md:text-[20px]';
    const errorClass = 'border-red-700';
    const successClass =
      'border-green-700 hover:shadow-sm focus-visible:shadow-sm';

    if (errors[fieldName] && (dirtyFields[fieldName] || isSubmitted)) {
      return `${baseClass} ${errorClass}`;
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return `${baseClass} ${successClass}`;
    }
    return baseClass;
  };

  const renderMessage = fieldName => {
    if (errors[fieldName] && (dirtyFields[fieldName] || isSubmitted)) {
      return (
        <p className="text-red-700 text-[12px] md:text-[14px] absolute -bottom-4 md:-bottom-5 left-0">
          {errors[fieldName].message}
        </p>
      );
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return (
        <p className="text-green-700 text-[12px] md:text-[14px] absolute -bottom-4 md:-bottom-5 left-0">
          {`${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
            1
          )} is entered correctly`}
        </p>
      );
    }
    return null;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contacts-form"
        name="contacts-form"
        className="mb-[34px] md:mb-[30px] lg:mb-0"
      >
        <p className="font-semibold text-[20px] leading-[1.2] text-[#1e1e1e] mb-[16px] md:font-normal md:leading-[1.4] md:w-[500px] md:mb-[26px] lg:font-bold lg:text-[26px] lg:leading-[1.4]">
          Need help, have feedback, or want to collaborate? Contact us!
        </p>
        <div className="relative flex flex-col gap-[6px] mb-[12px] md:mb-[18px]">
          <label className="font-proza font-normal text-[16px] text-[#1e1e1e]">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Type your name..."
            {...register('name')}
            className={inputClass('name')}
          />
          {renderMessage('name')}
        </div>
        <div className="relative flex flex-col gap-[6px] mb-[12px] md:mb-[18px]">
          <label className="font-normal text-[16px] text-[#1e1e1e]">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+xx(xx) xxx xx xx"
            {...register('phone')}
            className={inputClass('phone')}
          />
          {renderMessage('phone')}
        </div>
        <div className="relative flex flex-col gap-[6px] mb-[12px] md:mb-[18px]">
          <label className="font-normal text-[16px] text-[#1e1e1e]">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Type your email..."
            {...register('email')}
            className={inputClass('email')}
          />
          {renderMessage('email')}
        </div>

        <div className="relative flex flex-col gap-[6px] mb-5 md:mb-[25px]">
          <label className="font-normal text-[16px] leading-[1.4] text-[#1e1e1e]">
            Your message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Tell us what's on your mind! We're happy to answer your questions, hear your feedback, or just chat about... well, anything!"
            {...register('message')}
            className={inputClass('message')}
          ></textarea>
          {renderMessage('message')}
        </div>

        <button
          type="submit"
          className="border border-[#1e1e1e] rounded-[10px] py-[10px] px-[18px] w-full h-[44px] font-bold text-[16px] text-[#1e1e1e] leading-none hover:bg-[#ffd437] focus-visible:bg-[#ffd437] transition duration-300 md:text-[20px] md:font-bold md:h-[52px]"
        >
          Submit
        </button>
      </form>
      {isOpenModal && (
        <Modal
          toggleModal={toggleModal}
          className="px-[24px] lg:pl-[124px] lg:py-[181px] lg:pr-[479px] pb-[47px] pt-[36px] bg-white"
        >
          <NeedHelpModal toggleModal={toggleModal} />
        </Modal>
      )}

      {isLoading && <Loader />}
    </>
  );
};
