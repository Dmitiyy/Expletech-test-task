import { Text } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import { RecordForm } from "../components/RecordForm";
import { useGetCertainRecordQuery } from "../store/usersService";

export const EditRecord: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetCertainRecordQuery(`${id}`);

  const spredData = () => {
    if (data) {
      const { id, ...rest } = data;
      return <RecordForm initialData={rest} isEdit={true} id={id} />;
    }
  }

  return (
    <Fragment>
      <Link to="/">
        <Text color="#fff">👈 Back to home page</Text>
      </Link>
      {isLoading ? (<Loading />) : isError ? (<ErrorMessage />) : spredData()}
    </Fragment>
  )
}