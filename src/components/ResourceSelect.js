import { listResources } from "@/serverActions/resourceActions";
import {
    MenuItem,
    FormControl,
    Select,
    InputLabel
} from '@mui/material';


export async function ResourceSelect () {
    const resources = await listResources();
    let options;
    const disabled = resources.length === 0;
    if(disabled) {
        options = <MenuItem value={0}>No Resources</MenuItem>
    } else {
        options = (resources?.map(r => (
            <MenuItem key={r.id} value={r.id}>
                {r.name}
            </MenuItem>
        )));
    }
    const firstOption = disabled ? 0 : resources[0]?.id;
    return (
        <FormControl
        >
            <InputLabel id='resource-select-label'>
                Resource
            </InputLabel>
            <Select
                label='Resource'
                name='resourceId'
                autoWidth
                fullWidth
                defaultValue={firstOption}
                disabled={disabled}
            >
                {options}
            </Select>
        </FormControl>
    )
}