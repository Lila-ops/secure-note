import React from 'react';
import Button from '../UI/Button/Button';

import classes from './AddNewNoteBtn.css';

const newNote = (props) => (
    <div className={classes.CreateNote}> 
        <Button disabled={props.disabled} clicked={props.addNewNote}>New Note</Button>
    </div>
)

export default newNote;