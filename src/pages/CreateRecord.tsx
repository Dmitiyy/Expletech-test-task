import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { IFormik, RecordForm } from "../components/RecordForm";

export const CreateRecord: FC = () => {
  const data: IFormik = {
    email: '',
    phone: '',
    fullName: '',
    country: '',
    age: 0
  };

  return (
    <Fragment>
      <Link to="/">
        <Text color="#fff">👈 Back to home page</Text>
      </Link>
      <RecordForm initialData={data} isEdit={false} />
    </Fragment>
  )
}