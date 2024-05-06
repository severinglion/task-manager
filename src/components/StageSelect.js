import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import { TaskStages } from '@/model/TaskStages';
import { useState } from 'react';

export function StageSelect() {
    const [item, setItem] = useState(0);

    const options = TaskStages.getOptions().map((s) => {
        return (
            <MenuItem key={s.value} value={s.value}>
                {s.label}
            </MenuItem>
        )
    })
    return (
        <FormControl>
            <InputLabel id='select-stage-label'>Stage</InputLabel>
            <Select
                name='stage'
                labelId='select-stage-label'
                label='Select Stage'
                value={item}
                onChange={(e) => setItem(e.target.value)}
            >
                {options}
            </Select>
        </FormControl>
    )
}

export default StageSelect;