function Button({
  title = '',
  variant = 'primary',
  children,
  className = '',
  ...props
}) {
  const isDisabled = props.disabled ? 'opacity-50 cursor-not-allowed' : '';
  const base = 'px-6 py-2 rounded-full justify-center flex items-center ';

  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-700 ' + isDisabled,
    secondary: 'border border-primary text-primary',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {title || children || ''}
    </button>
  );
}

export default Button;
