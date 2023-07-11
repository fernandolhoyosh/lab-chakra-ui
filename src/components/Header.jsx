import { Center, Flex, Spacer } from "@chakra-ui/react";
import { Heading, Image } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex direction="column" justify="center" p="5em" bgGradient='https://th.bing.com/th/id/OIG.YP5l6NilBEUqZUkg7Olo?pid=ImgGn'>
        <Center>
          <Heading as="h4" size="md">
            DOMINA EL TERRENO
          </Heading>
        </Center>
        <Center>
          <ButtonGroup variant="outline" colorScheme="white">
            <Button>VER DETALLES</Button>
            <Button>VER VIDEO</Button>
          </ButtonGroup>
        </Center>
      </Flex>
    </>
  );
};

export default Header;
