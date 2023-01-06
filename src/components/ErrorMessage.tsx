import { FC } from "react";
import { Center, Text } from "@chakra-ui/react";

export const ErrorMessage: FC = () => {
  return (
    <Center mt="30px">
      <Text color="#fff">Sorry, we couldn't render the data, try again later 😟</Text>
    </Center>
  )
}