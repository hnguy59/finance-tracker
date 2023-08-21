import {
  Download,
  Email,
  Facebook,
  GitHub,
  Instagram,
  KeyboardArrowRight,
  Language,
  LinkedIn,
  Work,
  YouTube,
} from '@mui/icons-material'
import HenryCats from 'data/images/HenryCats.jpg'
import { Theme } from '~/utils/helpers/theme.helpers'
import { useNavigate } from 'react-router-dom'
import ImageWithDialog from 'components/ImageWithDialog'
import useTheme from '~/utils/hooks/useTheme'
import * as Styles from './Home.styles'
import { Greeting } from '~/components/HomeSections/Greeting'
import { Intro } from '~/components/HomeSections/Intro'
import { FC } from 'react'
import { Bio } from '~/components/HomeSections/Bio'

const Home: FC<{}> = () => {
  const { theme, themeProps } = useTheme()

  return (
    <Styles.Home key="home">
      <Styles.HomeContainer>
        <Greeting />
        <Intro />
        <Work />
        <Bio />
        <Styles.Hobbies>
          <Styles.Header>Hobbies</Styles.Header>
          <Styles.HobbiesContent>
            <CarouselComponent carouselItems={HobbiesCarouselContent} />
          </Styles.HobbiesContent>
        </Styles.Hobbies>
        <Styles.Socials>
          <Styles.Header>Socials</Styles.Header>
          <Styles.SocialsContent>
            <Styles.SocialsItem
              href="https://www.linkedin.com/in/henry-nguyen-1a5980191/"
              target="_blank"
              {...themeProps}
            >
              <LinkedIn /> Henry Nguyen
            </Styles.SocialsItem>
            <Styles.SocialsItem href="https://github.com/hnguy59" target="_blank" {...themeProps}>
              <GitHub />
              @hnguy59
            </Styles.SocialsItem>
            <Styles.SocialsItem
              href="https://www.instagram.com/apricot.taffy/"
              target="_blank"
              {...themeProps}
            >
              <Instagram />
              @apricot.taffy
            </Styles.SocialsItem>
            <Styles.SocialsItem href="mailto:riripishu@gmail.com" target="_blank" {...themeProps}>
              <Email />
              riripishu@gmail.com
            </Styles.SocialsItem>
          </Styles.SocialsContent>
        </Styles.Socials>
      </Styles.HomeContainer>
    </Styles.Home>
  )
}

export default Home
