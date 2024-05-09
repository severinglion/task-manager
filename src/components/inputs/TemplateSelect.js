"use server"
import { listTemplates } from '@/serverActions/templateActions';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

export async function TemplateSelect() {
    const templates = await listTemplates();

    return (
        <FormControl>
            <InputLabel id='template-id-select'>
                Template
            </InputLabel>
            <Select name='templateId' defaultValue={0}>
                <MenuItem value={0}>
                    None
                </MenuItem>
                {templates?.map(t => (
                    <MenuItem key={t.id} value={t.id}>
                        {t.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default TemplateSelect;