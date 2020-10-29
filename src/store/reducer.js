import * as actionTypes from './actions';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    loading: false,
    editing: false,
    editNote: false,
    disabled: false,
    id: '',
    title: '',
    body: '',
    noteData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEW:
            return {
                ...state,
                title: '',
                body: '',
                editing: true,
                editNote: true,
                id: uuidv4(),
                disabled: true,
            };
        case actionTypes.EDIT:
            return {
                ...state,
                editing: true,
                editNote: true,
                disabled: true
            };    
        case actionTypes.SELECT: 
            return {
                ...state,
                editing: true,
                editNote: true,
                disabled: true,
                id: action.selectedItem.id,
                title: action.selectedItem.title,
                body: action.selectedItem.body
            };   
        case actionTypes.CREATE:
            const target = action.event.target;
            const value = target.value;
            const name = target.name;

            return {
                ...state,
                [name]: value
            };
        case actionTypes.SAVE:
            let updatedArraySave = [];
            if ( state.noteData.length > 0 ) {
                state.noteData.map((item) => {
                    if (item.id === state.id) {
                        item.title = state.title;
                        item.body = state.body;
                        updatedArraySave = [...state.noteData];
                    } else {
                        updatedArraySave = state.noteData.concat({id: state.id, title: state.title, body: state.body});
                    }
                });
            } else {
                updatedArraySave = state.noteData.concat({id: state.id, title: state.title, body: state.body});
            }

            return {
                ...state,
                editing: false,
                editNote: false,
                disabled: false,
                noteData: updatedArraySave 
            }; 
        case actionTypes.DELETE:
            const updatedArray = state.noteData.filter((note, index) => note.id !== action.noteIdEl);

            return {
                ...state,
                id: '',
                title: '',
                body: '',
                editing: false,
                editNote: false,
                disabled: false,
                noteData: updatedArray
            };    
        case actionTypes.CANCEL:
            return {
                ...state,
                editing: false,
                editNote: false,
                disabled: false,
                id: state.id,
                title: state.title,
                body: state.body
            };
        default:
            return state;
        }
}

export default reducer;