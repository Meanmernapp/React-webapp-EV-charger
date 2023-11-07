import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const DriverRadioGroup = ({
  options,
  onRadioChange,
  name,
  selectedValue,
}) => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby={`demo-${name}-label`}
        name={name}
        onChange={onRadioChange}
        value={selectedValue}
      >
        {options.map((option, index) => (
          <FormControlLabel
            value={option.value}
            key={index}
            control={
              <Radio
                size="large"
                sx={{
                  color: "#B3B7AE",
                  "&.Mui-checked": {
                    color: "#BADA55",
                  },
                }}
              />
            }
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
