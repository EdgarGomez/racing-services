import Container from '../src/components/Container';
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { fetcher } from '../src/util/fetcher';
import { PilotCard } from '../src/components/PilotCard';
import { Spinner } from '@chakra-ui/react';

import { calculatePointsAndPositions } from '../src/util/calculatePointsAndPositions';

export default function Pilot() {
  const router = useRouter()
  const { data, error } = useSWR(
    "/api/data",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return <Spinner />;
  
  const items = calculatePointsAndPositions(data);
  const pilot = items.find(item => item._id === router.query.id);
  
  return (
    <Container data={data}>
      {(pilot === undefined) ? <Spinner /> : <PilotCard pilot={pilot} tvmode={false} />}
    </Container>
  )
}
