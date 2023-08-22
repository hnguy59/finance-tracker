import * as Styles from './HomeSections.styles'
import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import useTheme from 'utils/hooks/useTheme'
import AnimateWrapper from 'components/AnimateWrapper'

export default function Socials() {
  const { themeProps } = useTheme()

  return (
    <AnimateWrapper>
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
    </AnimateWrapper>
  )
}
