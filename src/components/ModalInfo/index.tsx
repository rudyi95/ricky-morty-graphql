import React from "react";
import { Modal, ModalProps } from "@mui/material";

import useStyles from "./style";

const ModalInfo: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.root}>{children}</div>
    </Modal>
  );
};

export default ModalInfo;
