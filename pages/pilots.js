import Container from '../src/components/Container';
import useSWR from 'swr';
import { fetcher } from '../src/util/fetcher';
import { Box, Heading, Image, Spinner, Text } from '@chakra-ui/react';
import Link from 'next/link'


export default function Pilot() {

  const { data, error } = useSWR(
    "/api/data",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return <Spinner />;

    return (
      <Container data={data}>
        <Heading textAlign="center" textTransform="uppercase" mb="40px">Pilots</Heading>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" paddingX={{base:'10px',lg: '0'}}>
       {data && data.map((pilot, i) => (
        <Link key={i} href={{
          pathname: '/pilot',
          query: { id: pilot._id },
        }}>
        <Box cursor="pointer" w={{base:'100%',md: '50%',lg: '33%'}} paddingX={{base:'0',md: '1%'}}>
        <Box padding="3%" bgColor="gray.500" mb={{base:'5%',lg: '8%'}}>
          <Image src="/pilotimg.png" width="295px" mx="auto" mt="25px" />
          <Heading textTransform="uppercase" mt="15px">{pilot.name}</Heading>
          <Text>AGE {pilot.age}</Text>
          <Heading padding='2' m="20px 0px" bgGradient="linear(to-r, red.500, transparent)">{pilot.team}</Heading>
        </Box>
        </Box>
        </Link>
       ))}
       </Box>
      </Container>
    )

}
