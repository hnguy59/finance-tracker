import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import AnimateWrapper from 'components/AnimateWrapper'

export default function Socials() {
  return (
    <AnimateWrapper>
      <div className="flex flex-col gap-4 text-dark dark:text-light">
        <div className="text-lg font-bold underline decoration-[3px]">Socials</div>
        <div className="flex flex-col gap-2">
          <a
            className="flex flex-row gap-2 no-underline w-fit hover:underline"
            href="https://www.linkedin.com/in/henry-nguyen-1a5980191/"
            target="_blank"
          >
            <LinkedIn /> Henry Nguyen
          </a>
          <a
            className="flex flex-row gap-2 no-underline w-fit hover:underline"
            href="https://github.com/hnguy59"
            target="_blank"
          >
            <GitHub />
            @hnguy59
          </a>
          <a
            className="flex flex-row gap-2 no-underline w-fit hover:underline"
            href="https://www.instagram.com/apricot.taffy/"
            target="_blank"
          >
            <Instagram />
            @apricot.taffy
          </a>
          <a
            className="flex flex-row gap-2 no-underline w-fit hover:underline"
            href="mailto:riripishu@gmail.com"
            target="_blank"
          >
            <Email />
            riripishu@gmail.com
          </a>
        </div>
      </div>
    </AnimateWrapper>
  )
}
