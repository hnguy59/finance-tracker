import { FC } from "react";
import Carousel from "react-material-ui-carousel";
import * as Styles from "./CarouselComponent.styles";
import CarouselItem from "./molecules/CarouselItem";

export type CarouselItemType = {
  src: string;
  title: string;
  description: string;
};

type CarouselComponentProps = {
  carouselItems?: CarouselItemType[];
};

const CarouselComponent: FC<CarouselComponentProps> = ({ carouselItems }) => {
  if (!carouselItems) {
    return <></>;
  }

  return (
    <Styles.CarouselContainer>
      {carouselItems.map((carouselItem) => (
        <CarouselItem carouselItem={carouselItem} />
      ))}
    </Styles.CarouselContainer>
  );
};

export default CarouselComponent;
