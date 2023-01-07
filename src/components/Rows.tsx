import { FC, Fragment } from "react";
import { Tr, Th, Td, Button, Center } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store";

export const Rows: FC = () => {
  const records = useSelector((state: RootState) => state.users.records);
  return (
    <Fragment>
      {
        records.map(item => {
          const { email, phone, fullName, country, age, id } = item;
          return (
            <Tr key={`${fullName + id}`}>
              <Td>{email}</Td>
              <Td>{phone}</Td>
              <Td>{fullName}</Td>
              <Td>{country}</Td>
              <Td>{age}</Td>
              <Td>
                <Center>
                  <Link to={`edit/${id}`}>
                    <Button
                      leftIcon={<EditIcon boxSize={5} color="#000" />}
                      className="edit-btn"
                    >Edit</Button>
                  </Link>
                </Center>
              </Td>
            </Tr>
          )
        })
      }
    </Fragment>
  )
}