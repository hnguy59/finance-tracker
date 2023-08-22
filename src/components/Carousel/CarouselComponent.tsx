import Carousel from 'react-material-ui-carousel'
import CarouselItem from './molecules/CarouselItem'

export type CarouselItemType = {
  image: string
  title: string
  description: string
}

type CarouselComponentProps = {
  carouselItems?: CarouselItemType[]
}

export default function CarouselComponent({ carouselItems }: CarouselComponentProps) {
  if (!carouselItems) {
    return <></>
  }

  return (
    <Carousel className="w-full">
      {carouselItems.map((carouselItem) => (
        <CarouselItem carouselItem={carouselItem} key={carouselItem.title} />
      ))}
    </Carousel>
  )
}
