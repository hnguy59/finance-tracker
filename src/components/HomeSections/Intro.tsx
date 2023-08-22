import useTheme from 'utils/hooks/useTheme'
import { Download } from '@mui/icons-material'
import AnimateWrapper from 'components/AnimateWrapper'
import { Card, CardContent } from '@mui/material'
import ImageWithDialog from 'components/ImageWithDialog'
import Image from 'next/image'

export default function Intro() {
  const { themeProps } = useTheme()

  return (
    <AnimateWrapper>
      <Card className="flex justify-between bg-white/50 rounded-lg">
        <CardContent className="flex flex-col justify-start  text-dark dark:text-light">
          <div className="font-bold text-3xl">Henry Nguyen</div>
          <div>Software Engineer (Web, Mobile, UX/UI)</div>
          <a
            href="/HenryResume.pdf"
            download="Henry Nguyen - CV"
            className="flex items-center justify-center w-fit mt-2 gap-2 underline-none opacity-60 hover:opacity-100"
          >
            <Download />
            CV
          </a>
        </CardContent>
        <ImageWithDialog src="/images/HenryCats.jpg">
          <Image
            src="/images/HenryCats.jpg"
            alt="HenryCats"
            width={999}
            height={999}
            className="object-cover w-[200px] h-[136px]"
          />
        </ImageWithDialog>
      </Card>
    </AnimateWrapper>
  )
}
