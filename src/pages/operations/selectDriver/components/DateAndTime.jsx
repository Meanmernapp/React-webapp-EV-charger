import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

export default function DateAndTime({ onDateTimeChange }) {
  const handleDateChange = (date) => {
    // Here, we call the callback function from the parent component
    onDateTimeChange(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["StaticDateTimePicker"]}>
        <DemoItem label="Pick Date and Time">
          <StaticDateTimePicker
            sx={{
              borderRadius: "1rem",
              backgroundColor: "white",
              ".MuiDateTimePickerToolbar-dateContainer.css-1d7o9mv-MuiDateTimePickerToolbar-dateContainer":
                {
                  backgroundColor: "#BADA55",
                  borderRadius: "10px",
                  minWidth: "4rem",
                  display: "flex",
                  justifyItems: "center",
                  padding: "8px",
                  alignItems: "center",
                },
              ".MuiTypography-root.MuiTypography-overline.css-50l4hi-MuiTypography-root":
                { display: "none" },
              ".MuiTypography-root.MuiTypography-h3.MuiDateTimePickerToolbar-separator.MuiPickersToolbarText-root.css-15qszln-MuiTypography-root-MuiPickersToolbarText-root-MuiDateTimePickerToolbar-separator":
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ".MuiPickersYear-yearButton.Mui-selected.css-vavizz-MuiPickersYear-yearButton":
                {
                  backgroundColor: "#BADA55",
                },
              ".MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-i4bv87-MuiSvgIcon-root":
                {
                  color: "#BADA55",
                  width: "2rem",
                  height: "2rem",
                },
              ".MuiClock-squareMask.css-tfwo93-MuiClock-squareMask": {
                backgroundColor: "#BADA55",
              },
              ".MuiSvgIcon-root.MuiSvgIcon-fontSizeInherit.css-1vooibu-MuiSvgIcon-root":
                {
                  color: "#BADA55",
                },
              ".MuiButtonBase-root.MuiPickersDay-root.Mui-selected.MuiPickersDay-dayWithMargin.MuiPickersDay-today.css-1inhwg7-MuiButtonBase-root-MuiPickersDay-root":
                {
                  backgroundColor: "#BADA55",
                },
              ".MuiDialogActions-root.MuiDialogActions-spacing.MuiPickersLayout-actionBar.css-hlj6pa-MuiDialogActions-root":
                {
                  display: "none",
                },
            }}
            onChange={handleDateChange}
            defaultValue={dayjs(Date.now())}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
