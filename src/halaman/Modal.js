import Modal from "react-bootstrap/Modal";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Kartu } from "../anggota";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function MyVerticallyCenteredModal(props) {
  const font = useContext(Kartu);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  console.log("ww", font);
  return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Detail Informasi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 style={{ fontFamily: font.value }}>Informasi Lebih Detail</h4>
            <p>{props.phone}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.changefont}>Ganti Tipe Font</Button>
          </Modal.Footer>
        </Modal>
  );
}
