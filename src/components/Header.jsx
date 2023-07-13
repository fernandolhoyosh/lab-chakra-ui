import { Center, Flex, Text, Button, ButtonGroup } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex
      direction="column"
      justify="center"
      alignItems='center'
      p="5em 0"
      bg="url('./src/images/motorcycle.jpeg')"
      bgSize='cover'
      bgPosition='center'
      /* bgRepeat='no-repeat' */>
        <Center>
        <Text fontSize='3xl' p=".5em 0">
            DOMINA EL TERRENO
        </Text>
        </Center>
        <Center>
          <ButtonGroup size="sm" variant="outline" colorScheme="white">
            <Button _hover={{bg:'white', color:'rgba(0, 0, 0, 0.5)'}}>VER DETALLES</Button>
            <Button _hover={{bg:'white', color:'rgba(0, 0, 0, 0.5)'}}>VER VIDEO</Button>
          </ButtonGroup>
        </Center>
      </Flex>
    </>
  );
};

export default Header;
