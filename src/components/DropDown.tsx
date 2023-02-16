import { SelectInput } from "vcc-ui";

interface SelectProps {
  options: Array<string>;
  selected: string;
  onChange: (value: string) => void;
}
const DropDown = ({
  options,
  selected,
  onChange,
}: SelectProps): JSX.Element => {
  return (
    <SelectInput
      label={"Filter cars by type"}
      value={selected}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      <option value="all">All</option>
      {options.map((option: string) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </SelectInput>
  );
};
export default DropDown;
