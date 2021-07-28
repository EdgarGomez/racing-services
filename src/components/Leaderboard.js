import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Text,
  Tr,
  Th,
  Td,
  Box,
  Heading
} from "@chakra-ui/react"
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

import { calculatePointsAndPositions } from '../util/calculatePointsAndPositions';

export const Leaderboard = ({data}) => {

  const items = calculatePointsAndPositions(data);
  const nraces = items[0]?.races?.length || 0;

  return (
    <Box position="relative">
      <Heading textAlign="center" textTransform="uppercase" mb="40px">Leaderboard</Heading>
      <Box position="relative">
      <Box position="relative" zIndex="1" paddingX="15px">
      <Box overflowX="scroll">
      <Table size="sm" bgColor="white" color="black" margin="0 auto" borderColor="gray.100" mb="40px">
        <Thead className={styles.tableTitle}>
          <Tr>
            <Th></Th>
            <Th>Name</Th>
            <Th bgColor="red.500">Points</Th>
            {[...Array(nraces).keys()].map((race,i) => <Th key={i}>Race {race + 1}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item,i) =>
          <Tr key={i}>
            <Td className={styles.tableBold}>{i+1}.</Td>
            <Td className={styles.tableBold}><Link href={{
              pathname: '/pilot',
              query: { id: item._id },
            }}><Text color="red.500" cursor="pointer" _hover={{textDecoration: 'underline'}}>{item.name}</Text></Link></Td>
            <Td textAlign="center" className={styles.tableBold} bgColor="red.500" color="white">{item.points}</Td>
            {item.races.map((race, i) => <Td textAlign="center" key={i}>{race.points}</Td>)}
          </Tr>
          )}
        </Tbody>
      </Table>
      </Box>
      </Box>
      <Box
        position="absolute"
        bgColor="white"
        opacity="0.5"
        bottom="-15px"
        width="100%"
        height="100%"
      >

      </Box>
      </Box>
    </Box>
  )
}