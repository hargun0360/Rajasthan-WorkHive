import { confirmFileDeletion } from "pages/Assets/Functions";
import React from "react";
import PropTypes, { func, string } from "prop-types";
import { Alert, Button, FormFeedback, Input, Modal, Row } from "reactstrap";

const DeleteConfirmationByInputModal = (props) =>{
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}centered>
            <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                    Delete Asset
                </h5>
                <button
                    type="button"
                    onClick={props.toggle}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <Alert color="danger" role="alert">
                    You are about to perform an ir-reversable action
                </Alert>
                <h4>Are You Sure About deleting the Asset <i onCopy={(e) => {
                    e.preventDefault();
                    console.log("Dont Copy!");
                    return false;
                }}>Drone</i></h4>

                <p>Please Enter The Asset Name Correctly to Proceed to delete!</p>

                <Input 
                    placeholder="Enter The Name of the Asset"
                    // onChange={(e) => setModalInput(e.target.value)}
                    onChange={(e) => props.onInputChange(e.target.value)}
                    // invalid={props.modalInput.length > 0 ? confirmFileDeletion("Drone",props.modalInput) != true : false}
                    invalid={props.modalInput.length > 0 ? confirmFileDeletion(props.originalValue,props.modalInput) != true : false}
                />
                {
                    props.modalInput.length > 0 && confirmFileDeletion(props.originalValue,props.modalInput) != true ? (
                        <FormFeedback type="invalid">
                            Entered Input is invalid
                        </FormFeedback>
                    ) : null
                }

                <Row className="d-flex justify-content-center mt-4">
                    <Button
                        disabled={!confirmFileDeletion(props.originalValue,props.modalInput)}
                        onClick={props.onDelete}
                        style={{width : "40%"}}
                        color="dark"
                    > 
                        Delete
                    </Button>
                </Row>
            </div>
        </Modal>
    )
}

DeleteConfirmationByInputModal.propTypes = {
  isOpen:PropTypes.bool,
  toggle:PropTypes.func,
  onInputChange:func,
  modalInput: string,
  originalValue: string,
  onDelete: func  
}

export default DeleteConfirmationByInputModal;