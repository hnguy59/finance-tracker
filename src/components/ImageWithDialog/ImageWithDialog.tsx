import { Dialog } from '@mui/material'
import { useCallback, useState } from 'react'
import * as Styles from './ImageWithDialog.styles'
import Image from 'next/image'

type ImageWithDialogProps = {
  src: string
  alt?: string
  children?: React.ReactNode
}

export default function ImageWithDialog({ src, alt, children }: ImageWithDialogProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  const handleOpenImageModal = useCallback(() => {
    setIsImageModalOpen(true)
  }, [])

  const handleCloseImageModal = useCallback(() => {
    setIsImageModalOpen(false)
  }, [])

  return (
    <Styles.ImageWithDialog>
      <Styles.Image onClick={handleOpenImageModal}>{children}</Styles.Image>
      <Dialog open={isImageModalOpen} onClose={handleCloseImageModal}>
        <Image src={src} alt={alt} width={999} height={999} />
      </Dialog>
    </Styles.ImageWithDialog>
  )
}
