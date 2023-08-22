import * as Styles from './HomeSections.styles'
import useTheme from 'utils/hooks/useTheme'
import { Download } from '@mui/icons-material'
// import HenryCats from '/images/HenryCats.jpg'

export default function Intro() {
  const { themeProps } = useTheme()

  return (
    <Styles.IntroCard>
      <Styles.IntroCardContent>
        <Styles.Name {...themeProps}>Henry Nguyen</Styles.Name>
        <Styles.Role {...themeProps}>Software Engineer (Web, Mobile, UX/UI)</Styles.Role>
        <Styles.ResumeDownload href="/HenryResume.pdf" download="Henry Nguyen - CV" {...themeProps}>
          <Download />
          CV
        </Styles.ResumeDownload>
      </Styles.IntroCardContent>
      {/* <ImageWithDialog {...HenryCats}>
        <Styles.Image {...HenryCats} />
      </ImageWithDialog> */}
    </Styles.IntroCard>
  )
}
