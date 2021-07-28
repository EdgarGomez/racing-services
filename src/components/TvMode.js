import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Box,
  Spinner
} from "@chakra-ui/react"
import { Leaderboard } from './Leaderboard'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { PilotCard } from './PilotCard';
import { calculatePointsAndPositions } from '../util/calculatePointsAndPositions';

export const TvMode = ({data}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const items = calculatePointsAndPositions(data);

  return (
    <>
    <Button colorScheme="white" variant="link" p={[1, 4]} mx="10px" textTransform="uppercase" fontFamily="mono" onClick={onOpen}>
      TV Mode
    </Button>

    <Modal isOpen={isOpen} onClose={onClose} size="full" margin="0">
    <ModalOverlay />
    <ModalContent margin="0">
      <ModalBody>
        <Box display="flex">
        <Box w="65%">
          <Leaderboard data={data} />
        </Box>

        <Box w="35%">
          <Carousel autoPlay={true} interval={3000} showStatus={false} infiniteLoop={true} showArrows={false} showIndicators={false} showThumbs={false}>
            {
              items.map((pilot,i) => (
                <PilotCard key={i} pilot={pilot} tvmode={true} />
              ))
            }
          </Carousel>
        </Box>
        </Box>
      </ModalBody>
    </ModalContent>
    </Modal>
    </>
  )
}
