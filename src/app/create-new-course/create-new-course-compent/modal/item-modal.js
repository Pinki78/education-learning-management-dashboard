import React from 'react'
import { Modal, Button, ModalHeader, ModalBody ,ModalFooter} from "flowbite-react";

const ItemModal = props => {

    const { openModal, setOpenModal, selectedItem } = props

  return (
    <>
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>{selectedItem?.addItemHeader}  </ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            {selectedItem?.Itemstype === "lecture" && <div>Lecture Form</div>}
        {selectedItem?.Itemstype === "quiz" && <div>Quiz Form</div>}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal()}>Accept</Button>
            <Button color="gray" onClick={() => setOpenModal()}>Decline</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}



export default ItemModal