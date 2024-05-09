'use client'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export function ClientDatePicker (props) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker {...props} />
        </LocalizationProvider>
    );
}

export default ClientDatePicker;