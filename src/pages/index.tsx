import {
  Download,
  Email,
  Facebook,
  GitHub,
  Instagram,
  KeyboardArrowRight,
  Language,
  LinkedIn,
  YouTube,
} from '@mui/icons-material'
import { Divider } from '@mui/material'
import HenryCats from 'data/images/HenryCats.jpg'
import { HobbiesCarouselContent } from '~/utils/helpers/data.helpers'
import { Theme } from '~/utils/helpers/theme.helpers'
import { FC, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CarouselComponent from 'components/Carousel/CarouselComponent'
import ImageWithDialog from 'components/ImageWithDialog'
import useTheme from '~/utils/hooks/useTheme'

const Home: FC<{}> = () => {
  const { theme, themeProps } = useTheme()

  return <Home />
}

export default Home
