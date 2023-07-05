interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <label htmlFor={props.name} className="text-left w-full text-white">
        {label}
      </label>
      <input {...props} className="p-2 rounded-md text-black w-full" />
    </div>
  );
};

export default Input;
