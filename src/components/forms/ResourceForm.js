"use client"

import { createResource, updateResource } from '@/serverActions/resourceActions';
import {
  TextField,
  Button,
} from '@mui/material';
import {useState} from 'react';
import FormBody from '@/components/inputs/FormBody'

export function ResourceForm({type, initial}) {
  const [name, setName] = useState(initial?.name);
  const [href, setHref] = useState(initial?.href);
  
  let action;
  if (type === 'create') {
    action = createResource;
  } else if (type === 'edit') {
    action = updateResource;
  } else {
    throw new RangeError('Invalid type');
  }
  const handleUpdateName = (e) => {
    setName(e.target.value);
  }

  const handleUpdateHref = (e) => {
    setHref(e.target.value);
  }
  return (
    <FormBody action={action} title='Create Resource'>
      <input name='id' type='hidden' value={initial?.id}/>
      <TextField name='name' label='Name' required value={name} onChange={handleUpdateName}/>
      <TextField name='href' type='url' label='URL' required value={href} onChange={handleUpdateHref}/>
      <Button type='submit'>{type}</Button>
    </FormBody>
  )
}

export default ResourceForm;

