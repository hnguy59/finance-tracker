import { FC } from 'react'
import * as Styles from './CarouselComponent.styles'
import CarouselItem from './molecules/CarouselItem'
import { StaticImageData } from 'next/image'

export type CarouselItemType = {
  image: StaticImageData
  title: string
  description: string
}

type CarouselComponentProps = {
  carouselItems?: CarouselItemType[]
}

const CarouselComponent: FC<CarouselComponentProps> = ({ carouselItems }) => {
  if (!carouselItems) {
    return <></>
  }

  return (
    <Styles.CarouselContainer>
      {carouselItems.map((carouselItem) => (
        <CarouselItem carouselItem={carouselItem} />
      ))}
    </Styles.CarouselContainer>
  )
}

export default CarouselComponent
