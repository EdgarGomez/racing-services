import React from 'react';
import Link from 'next/link';
import { Heading, Flex, Box } from '@chakra-ui/react';

const SearchPilot = (pilot) => {
  const { name } = pilot;

  return (
    <Link href={{
      pathname: '/pilot',
      query: { id: pilot._id },
    }}>

        <Box display="block" borderBottom="1px solid red" cursor="pointer">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
            px="15px"
          >
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {name}
            </Heading>
          </Flex>

        </Box>
    </Link>
  );
};

export default SearchPilot;