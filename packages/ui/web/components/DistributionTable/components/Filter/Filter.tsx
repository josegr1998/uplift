export const Filter = ({
  value,
  onChange,
  options,
  placeholder,
  name,
}: {
  value: string;
  onChange: (name: string, value: string) => void;
  options: string[];
  placeholder: string;
  name: string;
}) => (
  <select
    value={value}
    onChange={(e) => onChange(name, e.target.value)}
    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  >
    <option value="">{placeholder}</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);
