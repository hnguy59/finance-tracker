import { Dialog } from "@mui/material";
import { FC, useCallback, useState } from "react";
import * as Styles from "./ImageWithDialog.styles";

type ImageWithDialogProps = {
  src: string;
  alt?: string;
  children?: React.ReactNode;
};

const ImageWithDialog: FC<ImageWithDialogProps> = ({ src, alt, children }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleOpenImageModal = useCallback(() => {
    setIsImageModalOpen(true);
  }, []);

  const handleCloseImageModal = useCallback(() => {
    setIsImageModalOpen(false);
  }, []);

  return (
    <Styles.ImageWithDialog>
      <Styles.Image onClick={handleOpenImageModal}>{children}</Styles.Image>
      <Dialog open={isImageModalOpen} onClose={handleCloseImageModal}>
        <img src={src} alt={alt} />
      </Dialog>
    </Styles.ImageWithDialog>
  );
};

export default ImageWithDialog;
