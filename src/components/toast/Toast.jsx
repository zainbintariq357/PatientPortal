import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CrossIcon } from '../../assets/icons/svgs';
import CircleCheck from '../../assets/icons/svgs/CircleCheck';
import WarningIcon from '../../assets/warning.svg?react';

const btnClassName =
    'min-w-30 text-text-gray text-sm py-1.5 rounded-full bg-white';

const successClassName = 'text-success';
const warningClassName = 'text-deep-orange';

const Toast = ({
    type,
    message = 'message needs to be provided',
    onClickYes,
    onClose,
    showNoYesButtons = true,
}) => {
    const isWarning = type === 'Warning';
    const isSuccess = type === 'Success';
    toast(
        ({ closeToast }) => {

            const handleClose = () => {
                closeToast();
                onClose();

            };

            return (
                <div
                    className={`flex item-center ${isSuccess ? 'bg-[#E6F4EA]' : 'bg-[#FFF8E1]'} rounded-md border border-border p-5 min-w-120`}>
                    <div>
                        {isWarning && <WarningIcon className="w-5 h-5" />}
                        {isSuccess && <CircleCheck className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="flex justify-between items-center relative">
                            <h4
                                className={`font-semibold w-full ${isSuccess ? successClassName : warningClassName}`}>
                                {type}
                            </h4>
                            <button onClick={closeToast}>
                                <CrossIcon
                                    className={`w-3 h-3 cursor-pointer ${isSuccess ? successClassName : warningClassName}`}
                                />
                            </button>
                        </div>

                        <p className="mt-2 text-sm">{message}</p>

                        {showNoYesButtons && (
                            <div className="flex gap-4 mt-5">
                                <button className={btnClassName} onClick={() => handleClose()}>
                                    No
                                </button>
                                <button
                                    className={`${btnClassName} bg-deep-orange! text-white!`}
                                    onClick={() => {
                                        if (onClickYes) {
                                            onClickYes();
                                        }
                                        closeToast();
                                    }}>
                                    Yes
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )
        },
        {
            toastId: "123",
            closeButton: false,
            className: 'confirm-toast',
            bodyClassName: 'confirm-toast-body',
            onClose
        },
    )
};

export default Toast;
