import React, { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Stack,
  Input,
  IconButton
} from '@chakra-ui/react';
import { SearchIcon} from '@chakra-ui/icons'
import SearchPilot from './SearchPilot';

const Search = ({data}) => {
  const initialFocusRef = React.useRef();
  const [searchValue, setSearchValue] = useState('');

  const filteredPilots = data
    .filter((pilot) =>
    pilot.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Popover initialFocusRef={initialFocusRef}>
        <PopoverTrigger>
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            color="white"
            bgColor="red.500"
            size="lg"
            ml="0px"
          />
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          <PopoverArrow />
          <PopoverBody>
            <Stack isInline>
              <Input
                id="search"
                placeholder="Search for pilots"
                onChange={(e) => setSearchValue(e.target.value)}
                ref={initialFocusRef}
                value={searchValue}

              />
            </Stack>
            <Stack
              display={searchValue ? 'block' : 'none'}
              flexWrap="wrap"
              justifyContent="space-between"
              mt="20px"
            >
              {filteredPilots.map((pilot) => (
                <SearchPilot key={pilot.name} {...pilot} />
              ))}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Search;