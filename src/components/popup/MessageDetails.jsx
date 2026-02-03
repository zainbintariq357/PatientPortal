import { CheckIcon } from 'lucide-react';
import React, { useCallback } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import Attachment from '../../assets/icons/svgs/Attachment';
import PDFIcon from '../../assets/icons/svgs/Pdf';
import ImageIcon from '../../assets/icons/svgs/Image';
import CrossIcon from '../../assets/icons/svgs/Cross';
import Send from '../../assets/icons/svgs/Send';
import Button from '../shared/Button';
import PopupWrapper from '../shared/PopupWrapper';
import TextArea from '../shared/TextArea';

const dummyMeesages = [
  {
    id: 1,
    senderName: 'Dr. Michael Smith',
    senderRole: 'Doctor',
    time: '11:00 AM',
    senderProfileImage:
      'https://plus.unsplash.com/premium_photo-1671656333708-1ae2dd142d76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    message:
      "The pain is about 7/10, and I'm also experiencing some sensitivity to light. I've tried over-the-counter painkillers, but they haven't helped much.",
  },
  {
    id: 2,
    senderName: 'Nurse Emily Johnson',
    senderRole: 'Nurse',
    time: '11:00 AM',
    senderProfileImage:
      'https://plus.unsplash.com/premium_photo-1671656333708-1ae2dd142d76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    message:
      "I've scheduled an appointment for you next Monday at 10 AM. Please let me know if that works for you.",
  },
];

const ReplyComponent = ({ msg }) => (
  <div className="flex mt-6 gap-4">
    <img
      src={msg.senderProfileImage}
      alt="Profile"
      className="h-10 w-10 rounded-full"
    />

    <div className="flex-1 p-4 rounded-xl bg-[#F9FAFB]">
      <div className="flex justify-between">
        <p className="font-semibold text-text-dark-gray">{msg.senderName}</p>
        <p className="text-sm text-text-more-light-gray">{msg.time}</p>
      </div>
      <p className="text-sm text-text-more-light-gray mt-1">{msg.senderRole}</p>
      <p className="mt-2.5 text-text-gray leading-loose">{msg.message}</p>
    </div>
  </div>
);

function MessageDetails({ open, onClose }) {
  const inputRef = React.useRef(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors, isDirty },
    setValue,
  } = useForm({
    defaultValues: {
      reply: '',
      attachments: [],
    },
  });
  const selectedAttachments = useWatch({
    control,
    name: 'attachments',
  });

  const handleReply = () => {
    console.log('Reply Data: ');
    handleClose();
  };

  const handleClose = useCallback(() => {
    onClose();
    reset();
  }, [onClose, reset]);

  const removeAttachment = useCallback(
    index => {
      setValue(
        'attachments',
        selectedAttachments.filter((_, i) => i !== index),
        {
          shouldDirty: true,
        },
      );
    },
    [selectedAttachments, setValue],
  );

  if (!open) return null;

  return (
    <PopupWrapper
      title="Message Details"
      isOpen={open}
      onClose={handleClose}
      modalStyle="w-250! "
      headerStyle="border-light-gray"
    >
      <div>
        <div className="pl-6 pt-3.5 pb-6 pr-3.5 mt-6 rounded-xl bg-[#EFF6FF]">
          <div className="flex w-full justify-between">
            <div className="items-center pl-4">
              <p className="text-lg text-text-dark-gray font-semibold">
                Hamid Khan{' '}
                <span className="text-base text-text-more-light-gray font-normal">
                  (Patient)
                </span>
              </p>
              <p className="text-sm text-text-more-light-gray mt-1">Other</p>
              <p className="text-sm text-text-more-light-gray mt-1">
                Jan 15, 2025 • 10:30 AM
              </p>
            </div>
            <Button className="flex self-start items-center bg-primary px-3.5! py-2! font-normal">
              <CheckIcon className="h-4 w-4 text-white" />
              <span className="ml-2">Marked as Resolved</span>
            </Button>
          </div>
          <p className="mt-7 text-text-gray">
            Hello Dr. Smith, I've been experiencing severe headaches for the
            past few days, particularly in the morning. Could we discuss this in
            detail?
          </p>
          <div className="flex mt-6 gap-3 flex-wrap">
            {[
              { name: 'medical_history.pdf', type: 'pdf' },
              { name: 'xray_image.png', type: 'image' },
            ].map((file, index) => (
              <div
                key={index}
                className="flex items-center px-3 py-3 rounded-lg bg-white">
                {file.type === 'pdf' ? (
                  <PDFIcon className="h-4 w-6" />
                ) : (
                  <ImageIcon className="h-4 w-6" />
                )}
                <p className="ml-1 text-sm text-text-dark-gray">{file.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Replies */}
        <div className="mb-12  overflow-y-auto max-h-100">
          {dummyMeesages.map(msg => (
            <ReplyComponent key={msg.id} msg={msg} />
          ))}
        </div>

        <hr className="-mx-6 border-border border-light-gray" />

        <div className="flex min-h-25! justify-between gap-4 mt-6">
          <div className="flex-1">
            <TextArea
              placeholder="Type your reply..."
              name="reply"
              control={control}
              textAreaClassName="max-h-25! border-light-gray"
            />
            {!!selectedAttachments.length && (
              <div className="flex flex-wrap gap-2 pb-5">
                {selectedAttachments.map((file, index) => (
                  <div
                    key={index}
                    className="min-w-30 flex justify-between items-center bg-gray-100 p-2 gap-2 rounded">
                    <p className="text-text-gray text-sm truncate">
                      {file.name}
                    </p>
                    <button onClick={() => removeAttachment(index)}>
                      <CrossIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="h-25 flex flex-col gap-4">
            <Button
              className="flex items-center px-3.5! py-2! font-normal!"
              onClick={handleSubmit(handleReply)}
              disabled={isSubmitting || !isValid || !isDirty}>
              <Send className="h-4 w-4" />
              <span className="ml-2">Send Reply</span>
            </Button>

            <Controller
              name="attachments"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <>
                  {/* Hidden input */}
                  <input
                    type="file"
                    multiple
                    ref={inputRef}
                    className="hidden"
                    onChange={e => {
                      console.log(e.target.files, 'files');
                      const files = Array.from(e.target.files);
                      field.onChange([...field.value, ...files]);
                      e.target.value = null;
                    }}
                  />

                  <Button
                    className="flex items-center px-3.5! py-2! border-border! font-normal! text-text-dark-gray! border-light-gray!"
                    variant="secondary"
                    onClick={() => {
                      if (!inputRef.current) return;
                      inputRef.current.click();
                    }}>
                    <Attachment className="h-4 w-4" />
                    <span className="ml-2 ">Attach File</span>
                  </Button>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </PopupWrapper>
  );
}
export default MessageDetails;
