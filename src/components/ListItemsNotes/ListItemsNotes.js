import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import * as actionTypes from '../../store/actions';

import NoContent from '../UI/NoContent/NoContent';

class ListItemsNotes extends Component {
    render() {
        const emptyComponent = "Please add new note by clicking on New Note button";

        let items = (this.props.noteData.map(item => (
            <ListGroup.Item key={item.id} active={item.id === this.props.id} disabled={this.props.disabled} onClick={() => this.props.onSelectItem(item)}>{item.title}</ListGroup.Item>
        )));
    
        let content = this.props.noteData.length > 0 ? <ListGroup variant="flush">{items}</ListGroup> : <NoContent text={emptyComponent}/>; 
    
        return ( 
            <>{content}</>
        )
    }
} 

const mapStateToProps = state => {
    return {
        id: state.id,
        disabled: state.disabled,
        noteData: state.noteData   
    }
}

const mapDispacthToProps = dispatch => {
    return {
        onSelectItem: (item) => dispatch({type: actionTypes.SELECT, selectedItem: item}),
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(ListItemsNotes);