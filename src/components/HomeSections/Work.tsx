import * as Styles from './HomeSections.styles'
import { KeyboardArrowRight } from '@mui/icons-material'
import AnimateWrapper from 'components/AnimateWrapper'

export default function work() {
  return (
    <AnimateWrapper>
      <Styles.Work>
        <Styles.Header>Work</Styles.Header>
        <Styles.WorkContent>
          A full-stack developer based in Brisbane with a passion for building digital
          services/anything I want. I enjoy a multitude of things from planning and designing all
          the way to solving real-life problems with code.
        </Styles.WorkContent>
        <Styles.WorkButton color="secondary" endIcon={<KeyboardArrowRight />} disabled>
          My portfolio
        </Styles.WorkButton>
      </Styles.Work>
    </AnimateWrapper>
  )
}
