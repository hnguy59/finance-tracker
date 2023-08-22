import { HobbiesCarouselContent } from 'utils/helpers/data.helpers'
import CarouselComponent from 'components/Carousel/CarouselComponent'
import * as Styles from './HomeSections.styles'

export default function Hobbies() {
  return (
    <Styles.Hobbies>
      <Styles.Header>Hobbies</Styles.Header>
      <Styles.HobbiesContent>
        <CarouselComponent carouselItems={HobbiesCarouselContent} />
      </Styles.HobbiesContent>
    </Styles.Hobbies>
  )
}
