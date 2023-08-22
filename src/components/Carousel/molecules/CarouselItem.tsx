import { Dialog, Paper } from '@mui/material'
import { useCallback, useState } from 'react'
import { CarouselItemType } from '../CarouselComponent'
import Image from 'next/image'

export type CarouselItemProps = { carouselItem: CarouselItemType }

export default function CarouselItem({ carouselItem }: CarouselItemProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  const handleOpenImageModal = useCallback(() => {
    setIsImageModalOpen(true)
  }, [])

  const handleCloseImageModal = useCallback(() => {
    setIsImageModalOpen(false)
  }, [])

  return (
    <div className="flex w-full h-[300px]">
      <Paper
        className="flex flex-col w-full h-full justify-end bg-cover bg-center hover:cursor-pointer"
        style={{ backgroundImage: `url("${carouselItem.image}")` }}
        onClick={handleOpenImageModal}
      >
        <div className="flex flex-col w-full p-4 bg-white/50">
          <div className="text-2xl font-bold">{carouselItem.title}</div>
          <div className="text-lg">{carouselItem.description}</div>
        </div>
      </Paper>
      <Dialog open={isImageModalOpen} onClose={handleCloseImageModal}>
        <Image src={carouselItem.image} alt={carouselItem.title} width={999} height={999} />
      </Dialog>
    </div>
  )
}
