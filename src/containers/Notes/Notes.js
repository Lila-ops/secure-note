import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Spinner from '../../components/UI/Spinner/Spinner';
import ListItemsNotes from '../../components/ListItemsNotes/ListItemsNotes';
import AddNewNoteBtn from '../../components/AddNewNoteBtn/AddNewNoteBtn';
import CreateNote from '../../components/CreateNote/CreateNote';
import * as actionTypes from '../../store/actions';

class Notes extends Component {
    render () {
        return (
            <Container fluid style={{height: "calc(100% - 80px)"}}>
                <Row className="block-example border border-dark"> 
                    <Col>          
                        <AddNewNoteBtn addNewNote={this.props.onAddNewNote} disabled={this.props.editing} />
                    </Col>
                </Row>            
                <Row className="h-100 block-example border border-top-0 border-dark">
                    <Container fluid>
                        <Row className="h-100">
                            <Col className="pl-0 pr-0 block-example border-right border-dark">
                                <ListItemsNotes />
                            </Col>
                            <Col>
                                <CreateNote />
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        id: state.id,
        editing: state.editing,
        noteData: state.noteData   
    }
}

const mapDispacthToProps = dispatch => {
    return {
        onAddNewNote: () => dispatch({type: actionTypes.NEW}),
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(Notes);