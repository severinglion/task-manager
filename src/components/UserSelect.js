import { useEffect, useState} from 'react'
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';

async function fetchUsers () {
    const res = await fetch('http://localhost:3000/api/user')
    if(!res.ok) {
        console.error('Failed to get users', res.status, res.statusText)
        throw new Error()
    }
    return res.json();
}

function useUsers() {
    const [userList, setUserList] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const requestUsers = async () => {
        setLoading(true);
        const users = await fetchUsers();
        setUserList(users)
        setLoading(false);
    }

    useEffect(() => {
        requestUsers();
    }, []);

    return [userList, loading];
}

export function UserSelect() {
    const [users, loading] = useUsers();
    const [item, setItem] = useState(0);
    const items = users?.map(u => (
        <MenuItem key={u.id} value={u.id}>
            {u.name}
        </MenuItem>
    ))
    return (
        <>
        <FormControl>
            <InputLabel id='user-select-label'>
                Assigned User
            </InputLabel>
            <Select
                label='Assign User'
                labelId='user-select-label'
                name='assignee'
                value={item}
                disabled={loading}
                onChange={e => setItem(e.target.value)}
            >
                <MenuItem value={0}>Unassigned</MenuItem>
                {items}
            </Select>
        </FormControl>
        </>
    )
}

export default UserSelect;