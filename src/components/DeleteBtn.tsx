import { FC, useState, Fragment } from "react";
import { Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

export const DeleteBtn: FC<{ id: number }> = ({ id }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const deleteUser = async () => {
    try {
      setIsLoading(true);
      await axios.get(`${process.env.REACT_APP_BACKEND}/users/delete/${id}`);
      setIsLoading(false);
      setIsError(false);
      navigate('/');
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  return (
    <Fragment>
      <Button
        isLoading={isLoading} onClick={deleteUser}
        width='full' mt="15px" colorScheme="red" leftIcon={<DeleteIcon boxSize={4} />}
      >Delete</Button>
      {isError && (<ErrorMessage />)}
    </Fragment>
  )
}