import { useEffect, useState} from 'react'
import {
    Select,
    MenuItem,
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
        <Select
            label='Assign User'
            name='assignee'
            value={item}
            disabled={loading}
            onChange={e => setItem(e.target.value)}
        >
            <MenuItem value={0}>Unassigned</MenuItem>
            {items}
        </Select>
        </>
    )
}

export default UserSelect;