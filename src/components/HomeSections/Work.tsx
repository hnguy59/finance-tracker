import * as Styles from './HomeSections.styles'
import useTheme from '~/utils/hooks/useTheme'
import { KeyboardArrowRight } from '@mui/icons-material'
import { Theme } from '~/utils/helpers/theme.helpers'

export const work = () => {
  const { theme } = useTheme()

  return (
    <Styles.Work>
      <Styles.Header>Work</Styles.Header>
      <Styles.WorkContent>
        A full-stack developer based in Brisbane with a passion for building digital
        services/anything I want. I enjoy a multitude of things from planning and designing all the
        way to solving real-life problems with code.
      </Styles.WorkContent>
      <Styles.WorkButton
        color="secondary"
        variant={theme === Theme.DARK ? 'contained' : 'outlined'}
        endIcon={<KeyboardArrowRight />}
      >
        My portfolio
      </Styles.WorkButton>
    </Styles.Work>
  )
}
