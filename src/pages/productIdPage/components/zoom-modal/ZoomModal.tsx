import React from "react";
import { Modal, Box } from "@mui/material";

import classes from "./zoomModal.module.scss";
import ZoomImage from "../../../../components/zoom-image";

interface IZoomModal {
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  image: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  background: "white",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
};

const ZoomModal = ({ isModalOpen, setModalOpen, image }: IZoomModal) => {
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Modal
        disableAutoFocus={true}
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.container}>
            {/* <ZoomImage image={image} /> */}
            <img src={image} alt="zoomed image" />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ZoomModal;
