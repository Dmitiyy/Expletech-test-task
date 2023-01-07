import { FC, Fragment, useEffect } from "react";
import { Button, Center, Heading } from "@chakra-ui/react";
import {
  Table as TableChakra, Thead, Tbody, Tr, Th, TableContainer
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { Rows } from "../components/Rows";
import { setRecords } from "../store/usersSlice";
import { useGetRecordsQuery } from "../store/usersService";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";
import { Link } from "react-router-dom";

export const Table: FC = () => {
  const { data, isLoading, isError } = useGetRecordsQuery('all', { refetchOnMountOrArgChange: true });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (data) {
      dispatch(setRecords({ data: [...data] }));
    }
  }, [data]);

  return (
    <Fragment>
      <Heading as="h2" color='#e1be3f'>Users 🧑👧</Heading>
      {
        isLoading ? (<Loading />) : isError ? (<ErrorMessage />) : (
          <TableContainer mt="30px">
            <TableChakra variant='simple' color="white">
              <Thead>
                <Tr>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Full Name</Th>
                  <Th>Country</Th>
                  <Th>Age</Th>
                  <Th>
                    <Center>
                      <Link to='create'>
                        <Button className="edit-btn">
                          <AddIcon boxSize={4} color="#000" />
                        </Button>
                      </Link>
                    </Center>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Rows />
              </Tbody>
            </TableChakra>
          </TableContainer>
        )
      }
    </Fragment>
  )
}