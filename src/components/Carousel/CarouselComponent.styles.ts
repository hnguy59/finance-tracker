import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

type CarouselItemContainerProps = {
  src: string;
};

export const CarouselItem = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
`;

export const CarouselItemContainer = styled(Paper)<CarouselItemContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;
  }
`;

export const CarouselContainer = styled(Carousel)`
  width: 100%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 16px;
`;

export const InfoTitle = styled.div`
  font-size: xx-large;
  font-weight: bold;
`;

export const InfoDescription = styled.div`
  font-size: large;
`;
