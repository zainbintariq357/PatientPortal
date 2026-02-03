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
        className={`relative bg-white rounded-2xl p-6 w-3xl max-h-[80vh] overflow-y-auto ${modalStyle}`}>
        <div
          className={`flex justify-between -mt-6 -mx-6 px-6 py-4 border-b border-border ${headerStyle}`}>
          <h2 className={`text-2xl font-semibold ${titleClassName}`}>
            {title}
          </h2>
          <button onClick={onClose} className="cursor-pointer">
            <CrossIcon className="w-5 h-5 mt-1.5" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}

export default PopupWrapper;
