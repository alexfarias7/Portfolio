interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  id: string;
  error?: any;
}

export default function Input({
  label,
  placeholder,
  id,
  error,
  ...props
}: Props) {
  return (
    <div>
      <label
        className="block text-blue0 text-lg sm:text-sm font-firamono font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        className="w-full h-12 bg-blue7 rounded-lg placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0   text-blue0 focus:text-purple7  p-4 focus:outline-none focus:ring-2 ring-purple7"
        id={id}
        {...props}
      />
      {error && (
        <span className="text-purple5  text-sm font-firamono font-normal">
          {error}
        </span>
      )}
    </div>
  );
}
