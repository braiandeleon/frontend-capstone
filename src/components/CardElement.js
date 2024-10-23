import { Heading, HStack, Image, Text, VStack,Card, CardHeader, CardBody, CardFooter, Img } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardElement = ({ title, description, imageSrc }) => {


  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (<Card>
    <CardBody>
    <VStack mt='6' spacing='3'>

    <Heading>{title}</Heading>
      <Image src={imageSrc} borderRadius='lg'>
      </Image>
      <Text>
        {description}
      </Text>
      <Text><b>See more</b> <FontAwesomeIcon icon={faArrowRight} size="1x"/> </Text> 
    </VStack>

    </CardBody>
  </Card>)
}

export default CardElement;
