type Props = {
  id: string;
  type: 'text' | 'date';
  label?: string;
  placeholder?: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = ({
  type,
  label,
  id,
  placeholder,
  value,
  onChangeHandler,
}: Props) => {
  return (
    <div className="inputGroup">
      <input
        id={id}
        className={`${type}-input`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
