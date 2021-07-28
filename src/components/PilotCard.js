import { Box, Heading, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import styles from '../../styles/Home.module.css'

export const PilotCard = ({ pilot, tvmode }) => {

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" marginX={{base:'0',md:'10px'}} flexDirection={{base:'column',lg: (tvmode) ? 'column' : 'row'}} >
      <Box cursor="pointer" width={{base:'100%',md: '50%',lg: (tvmode) ? '50%' : '33%'}} paddingX="20px" mb="20px">
        <Image src="/pilotimg.png" width="295px" mx="auto" mt="25px" />
        <Heading size={(tvmode) ? 'lg' : 'xl'} textTransform="uppercase" mt="15px">{pilot.name}</Heading>
        <Text>AGE {pilot.age}</Text>
        <Heading padding='2' size={(tvmode) ? 'lg' : 'xl'} m="20px 0px" bgGradient="linear(to-r, red.500, transparent)">{pilot.team}</Heading>
      </Box>

      <Box width={{base:'100%',md:(tvmode) ? '100%' : '75%',lg:(tvmode) ? '100%' : '50%'}}>
      <Box position="relative">
      <Box position="relative">
      <Box position="relative" zIndex="1" paddingX="15px">
      <Box overflowX="scroll">
      <Table size="sm" bgColor="white" color="black" margin="0 auto" borderColor="gray.100" mb="40px">
        <Thead className={styles.tableTitle}>
          <Tr>
            <Th></Th>
            <Th>Position</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody className={styles.tableContent}>
        {pilot.races.map((race, i) =>
        <Tr key={i}>
          <Td className={styles.tableBold} textTransform="uppercase">{race.name}</Td>
          <Td>{race.position + 1}</Td>
          <Td>{race.time}</Td>
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
      </Box>
    </Box>
  )
}
