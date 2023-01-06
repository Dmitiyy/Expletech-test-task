import { FC } from "react";
import { CircularProgress, Center } from '@chakra-ui/react';

export const Loading: FC = () => {
  return (
    <Center mt='30px'>
      <CircularProgress isIndeterminate color='#e1be3f' />
    </Center>
  )
}