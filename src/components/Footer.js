import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
          direction="column"
          gap={0}
        >
          <h1 style={{ marginTop: '64px' }}>Your reservation is confirmed!</h1> <br></br>
          <p className="text-dark">Brian de Leon • © 2022</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
