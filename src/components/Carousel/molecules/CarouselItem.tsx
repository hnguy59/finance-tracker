import { Dialog } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { CarouselItemType } from "../CarouselComponent";
import * as Styles from "../CarouselComponent.styles";

export type CarouselItemProps = { carouselItem: CarouselItemType };

const CarouselItem: FC<CarouselItemProps> = ({ carouselItem }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleOpenImageModal = useCallback(() => {
    setIsImageModalOpen(true);
  }, []);

  const handleCloseImageModal = useCallback(() => {
    setIsImageModalOpen(false);
  }, []);

  return (
    <Styles.CarouselItem>
      <Styles.CarouselItemContainer
        src={carouselItem.src}
        onClick={handleOpenImageModal}
      >
        <Styles.InfoBox>
          <Styles.InfoTitle>{carouselItem.title}</Styles.InfoTitle>
          <Styles.InfoDescription>
            {carouselItem.description}
          </Styles.InfoDescription>
        </Styles.InfoBox>
      </Styles.CarouselItemContainer>
      <Dialog open={isImageModalOpen} onClose={handleCloseImageModal}>
        <img src={carouselItem.src} alt={carouselItem.title} />
      </Dialog>
    </Styles.CarouselItem>
  );
};

export default CarouselItem;
