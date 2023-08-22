import { HobbiesCarouselContent } from 'utils/helpers/data.helpers'
import CarouselComponent from 'components/Carousel/CarouselComponent'
import AnimateWrapper from 'components/AnimateWrapper'

export default function Hobbies() {
  return (
    <AnimateWrapper>
      <div className="flex flex-col gap-4 text-dark dark:text-light">
        <div className="text-lg font-bold underline decoration-[3px]">Hobbies</div>
        <div className="flex w-full rounded-lg">
          <CarouselComponent carouselItems={HobbiesCarouselContent} />
        </div>
      </div>
    </AnimateWrapper>
  )
}
