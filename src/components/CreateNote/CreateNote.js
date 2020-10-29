import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoContent from '../UI/NoContent/NoContent';
import Button from '../UI/Button/Button';
import './CreateNote.css';
import * as actionTypes from '../../store/actions';

class CreateNote extends Component {
    render () {
        const emptyComponent = "Please select a note";
        const titleInput = (<input type="text" value={this.props.title} name="title" onChange={(event) => this.props.onHandleChange(event)} placeholder="Title"></input>);
        const bodyInput = (<textarea name="body" value={this.props.body} onChange={(event) => this.props.onHandleChange(event)} placeholder="Enter the body"></textarea>);
        let title = this.props.editing || this.props.editNote ? titleInput : this.props.title;
        let body = this.props.editing || this.props.editNote ? bodyInput : this.props.body;

        let form = (
            <div className="h-100 d-flex flex-column">
                <div className="p-3 border-bottom border-dark flex-shrink-1">
                    {title}
                </div>
                <div className="h-100 p-3 border-bottom border-dark">  
                    {body}              
                </div>
                <div className="flex-shrink-1">
                    <ul className="d-flex">
                        <li className="mr-auto">
                            {this.props.editing || this.props.editNote ? <Button clicked={this.props.onHandleCancel}>Cancel</Button> : null}
                        </li>
                        <li>
                            {this.props.editing || this.props.editNote ? <Button clicked={() => this.props.onHandleSave()}>Save</Button> : null}
                        </li>
                        <li className="pl-2">
                            {this.props.editing || this.props.editNote ? <Button clicked={() => this.props.onHandleDelete(this.props.id)}>Delete</Button> : <Button clicked={this.props.onHandlerEdit}>Edit</Button>}
                        </li>
                    </ul>
                </div>
            </div>
        )
    
        let content = this.props.noteData.length > 0 || this.props.editing ? <>{form}</> : <NoContent text={emptyComponent}></NoContent>;

        return (
            <>{content}</>
        )
    }
}

const mapStateToProps = state => {
    return {
        id: state.id,
        editing: state.editing,
        title: state.title,
        body: state.body,
        noteData: state.noteData,
        editNote: state.editNote     
    }
}

const mapDispacthToProps = dispatch => {
    return {
        onHandleChange: (event) => dispatch({type: actionTypes.CREATE, event: event}),
        onHandleCancel: () => dispatch({type: actionTypes.CANCEL}),
        onHandleSave: () => dispatch({type: actionTypes.SAVE}),
        onHandleDelete: (id) => dispatch({type: actionTypes.DELETE, noteIdEl: id}),
        onHandlerEdit: () => dispatch({type: actionTypes.EDIT}),
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(CreateNote);