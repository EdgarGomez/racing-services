import useSWR from 'swr';
import Container from '../src/components/Container';
import { Leaderboard } from '../src/components/Leaderboard';
import { fetcher } from '../src/util/fetcher';

export default function Home() {

  const { data, error } = useSWR(
    "/api/data",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <Container data={data}>
      <Leaderboard data={data} />
    </Container>
  );
}
