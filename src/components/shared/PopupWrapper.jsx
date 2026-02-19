import ReactDOM from 'react-dom';
import CrossIcon from '../../assets/icons/svgs/Cross';

function PopupWrapper({
  title,
  isOpen,
  onClose,
  children,
  modalStyle = '', // pass max-w-* tailwind classes instead of w-* to control width
  headerStyle = '',
  titleClassName = '',
}) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Modal box */}
      <div
        className={`relative bg-white rounded-2xl p-6 w-3xl max-h-[90vh] overflow-y-auto ${modalStyle}`}>
        <div
          className={`flex justify-between -mt-6 -mx-6 px-6 py-4 border-b border-border ${headerStyle}`}>
          <h2
            className={`text-2xl font-semibold text-[#1F2937] ${titleClassName}`}>
            {title}
          </h2>
          <button onClick={onClose} className="cursor-pointer">
            <CrossIcon className="mt-1.5 text-[#9CA3AF] w-4 h-4" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}

export default PopupWrapper;
