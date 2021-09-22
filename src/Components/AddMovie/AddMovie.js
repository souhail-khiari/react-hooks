import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function AddMovie({ getNewMovie }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [NewMovie, setNewMovie] = useState({});
    const handleSubmit = (movie) => {
        getNewMovie(movie);
        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add movie
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="Enter Title"
                        placeholder="Title"
                        onChange={(e) =>
                            setNewMovie({ ...NewMovie, Title: e.target.value })
                        }
                    />
                    <Form.Control
                        type="Enter description"
                        placeholder="description"
                        onChange={(e) =>
                            setNewMovie({
                                ...NewMovie,
                                description: e.target.value,
                            })
                        }
                    />
                    <Form.Control
                        type="Enter posterUrl"
                        placeholder="posterUrl"
                        onChange={(e) =>
                            setNewMovie({
                                ...NewMovie,
                                posterUrl: e.target.value,
                            })
                        }
                    />
                    <Form.Control
                        type="Enter Rate"
                        placeholder="Rate"
                        onChange={(e) =>
                            setNewMovie({ ...NewMovie, Rate: e.target.value })
                        }
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSubmit(NewMovie)}
                    >
                        Add movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMovie;
