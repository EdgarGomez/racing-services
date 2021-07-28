import React from 'react';
import Link from 'next/link'
import {
  useColorMode,
  Button,
  Flex,
  Box,
  IconButton,
  Heading,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import Search from './Search';
import Footer from './Footer';
import { TvMode } from './TvMode';

const Container = ({ children, data }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const primarytextColor = {
    light: 'black',
    dark: 'white'
  };

  const primaryGradient = {
    light: 'gray.50',
    dark: 'gray.500'
  };

  const secondaryGradient = {
    light: 'gray.200',
    dark: 'blue.800'
  };

  return (
    <Flex bgGradient={`linear(to-b, ${secondaryGradient[colorMode]}, ${primaryGradient[colorMode]})`} flexDirection="column" justifyContent="space-between" minHeight="100vh">
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        wrap="wrap"
        alignItems="center"
        align="center"
        maxWidth="1280px"
        width="100%"
        bg="transparent"
        as="nav"
        mx="auto"
        mb="40px"
        padding="0 10px"
      >
        <Box display="flex">
          <Box>
            <Heading as="span" size="md" mt="15px" color="red" display="block" textTransform="uppercase">
              World Cars
            </Heading>
            <Heading as="span" size="lg" pl="30px" color="red" display="block" textTransform="uppercase">
              Championship
            </Heading>
          </Box>
          
        </Box>
        <Box
            display={{
              sm: 'none',
              base:'none',
              md: 'none',
              lg: 'none',
              xl: 'flex'
            }}
            width={{
              sm: 'full',
              md: 'auto'
            }}

            py="25px"
            px="40px"
          >
            <Link href="/">
              <Button colorScheme="white" variant="link"  p={[1, 4]} mx="10px" textTransform="uppercase" fontFamily="mono">
                Leaderboard
              </Button>
            </Link>

            <Link href="/pilots">
              <Button colorScheme="white" variant="link" p={[1, 4]} mx="10px" textTransform="uppercase" fontFamily="mono">
                Pilots
              </Button>
            </Link>

            <TvMode data={data} />
          </Box>
        <Box
          display={{
            base:'none',
            sm: 'none',
            md: 'none',
            lg: 'none',
            xl: 'flex'
          }}
        >
          <Stack
            isInline
            spacing={5}
            align="center"
            height="90px"
            pl="20px"
            pr="40px"
            ml="20px"
          >
            <IconButton
              color="white"
              bgColor="red.500"
              size="lg"
              aria-label="Toggle dark mode"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
            <Search data={data} />
          </Stack>
        </Box>
        <Box
          display={{
            base:'block',
            sm: 'block',
            md: 'block',
            lg: 'block',
            xl: 'none'
          }}
          onClick={onOpen}
        >
          <svg
            fill="white"
            width="24px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <Link href="/">
                <Button
                  colorScheme="white"
                  textTransform="uppercase"
                  variant="link"
                  p={[1, 4]}
                  w="100%"
                  my="10px"
                >
                  Leaderboard
                </Button>
              </Link>

              <Link href="/pilots">
                <Button
                  colorScheme="white"
                  textTransform="uppercase"
                  variant="link"
                  p={[1, 4]}
                  w="100%"
                  my="10px"
                >
                  Pilots
                </Button>
              </Link>

              <Stack isInline mt="40px" display="flex" justifyContent="center">
                <IconButton
                    color="white"
                    bgColor="red.500"
                    size="lg"
                    aria-label="Toggle dark mode"
                    icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    onClick={toggleColorMode}
                  />
                <Search data={data}/>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        maxW="1280px"
        mx="auto"
        w="100%"
        color={primarytextColor[colorMode]}
      >
        {children}

      </Flex>
      <Footer />
    </Flex>
  );
};

export default Container;