const Input = ({
  inpType,
  classes,
  placeholder,
  label,
  inpVal,
  name,
  onChangeFun,
}: {
  inpType?: string;
  classes?: string;
  placeholder?: string;
  label?: string;
  inpVal?: string;
  name?: string;
  onChangeFun?: any;
}) => {
  return (
    <div className="w-full">
      {label && <p className="text-sm mb-1 text-slate-600">{label}</p>}
      <input
        type={inpType && inpType}
        className={`${classes && classes} p-2 bg-white w-full border rounded`}
        value={inpVal && inpVal}
        name={name && name}
        placeholder={placeholder && placeholder}
        onChange={onChangeFun && onChangeFun}
      />
    </div>
  );
};

export default Input;
