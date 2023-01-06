import { FC, Fragment, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import {
  Table as TableChakra, Thead, Tbody, Tr, Th, TableContainer
} from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { Rows } from "../components/Rows";
import { setRecords } from "../store/usersSlice";
import { useGetAllRecordsQuery } from "../store/usersService";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";

export const Table: FC = () => {
  const { data, isLoading, isError } = useGetAllRecordsQuery('all');
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
                  <Th />
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