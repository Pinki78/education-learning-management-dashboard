import React from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabItem,
  Tabs,
} from "flowbite-react";

const ItemModal = (props) => {
  const { openModal, setOpenModal, selectedItem } = props;
  if (!selectedItem) return null;
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>{selectedItem?.addItemHeader} </ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            {/* {selectedItem?.Itemstype === "lecture" && <div>Lecture Form</div>}
            {selectedItem?.Itemstype === "quiz" && <div>Quiz Form</div>} */}
            <Tabs aria-label="Default tabs" variant="default">
              {selectedItem.FormSectionsItemsTab?.map((item, index) => (
                <TabItem
                  key={item.id}
                  active={index === 0} // ✅ only first tab is active
                  title={item.tabItemName}
                >
                  {/* render tab content based on type */}
                  <div className="p-4">
                    {item.ItemsTabForm?.map((formItem) => (
                      <div key={formItem.id} className="mb-4">
                        <label className="block mb-1 font-medium">
                          {formItem.tabLabel}
                        </label>

                        {formItem.tabType === "textarea" ? (
                          <textarea
                            name={formItem.tabInputName}
                            placeholder={formItem.tabPlaceholder}
                            className="w-full border rounded p-2"
                          />
                        ) : formItem.tabType === "switch" ? (
                          <input type="checkbox" name={formItem.tabInputName} />
                        ) : (
                          <input
                            type={formItem.tabType}
                            name={formItem.tabInputName}
                            placeholder={formItem.tabPlaceholder}
                            className="w-full border rounded p-2"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </TabItem>
              ))}
            </Tabs>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal()}>Accept</Button>
          <Button color="gray" onClick={() => setOpenModal()}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ItemModal;
