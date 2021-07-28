import React from 'react';
import { Flex, Text, useColorMode, Box } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: 'gray.50',
    dark: 'blue.800'
  };
  return (
  <Box bgColor={bgColor[colorMode]} mt="70px">
    <Flex
      justify="space-between"
      alignItems="center"
      flexWrap="wrap"
      height="105px"
      maxW="1280px"
      mx="auto"
      fontFamily="mono"
      padding="10px"
      textAlign="center"
    >
  
        <Text mx="5px" mb="5px" lineHeight="20px" w={{
            base:'100%',
            lg: 'auto'
          }}>
        copyright © 2021 Devaway Racing Services
        </Text>
        <Text mx="5px" w={{
            base:'100%',
            lg: 'auto'
          }}>
          By EDGAR GÓMEZ
        </Text>

    </Flex>
  </Box>
)};

export default Footer;