import { FC, useEffect } from "react";
import { Center, FormControl, FormLabel, Input, Select, Button, useToast } from '@chakra-ui/react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { DeleteBtn } from "./DeleteBtn";
import { useSetRecordMutation } from "../store/usersService";
import { ErrorMessage } from "./ErrorMessage";

export interface IFormik {
  email: string;
  phone: string;
  fullName: string;
  country: string;
  age: number;
}

interface IProps {
  initialData: IFormik;
  isEdit: boolean;
  id?: number;
}

export const RecordForm: FC<IProps> = ({ initialData, isEdit, id }) => {
  const initialValues = { ...initialData } as IFormik;
  const [setUser, { isLoading, isError, isSuccess }] = useSetRecordMutation();
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'The user is saved',
        description: "We've saved the record",
        status: 'success',
        duration: 9000,
        isClosable: true
      });
    }
  }, [isSuccess]);

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    fullName: Yup.string().required(),
    country: Yup.string().required(),
    age: Yup.number().required()
  });

  const formik = useFormik({
    initialValues,
    onSubmit(values) {
      let result;

      if (isEdit) result = { id, body: { ...values }, path: 'edit' }
      else result = { path: 'create', ...values };

      setUser(result);
    },
    validationSchema
  });

  return (
    <Center>
      <form onSubmit={formik.handleSubmit} className="record-form">
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            name="email" id="email"
            onChange={formik.handleChange} value={formik.values.email}
            isInvalid={Boolean(formik.errors.email)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            name="phone" id="phone"
            onChange={formik.handleChange} value={formik.values.phone}
            isInvalid={Boolean(formik.errors.phone)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="fullName">Full Name</FormLabel>
          <Input
            name="fullName" id="fullName"
            onChange={formik.handleChange} value={formik.values.fullName}
            isInvalid={Boolean(formik.errors.fullName)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Select
            name="country" id="country"
            onChange={formik.handleChange} value={formik.values.country}
            isInvalid={Boolean(formik.errors.country)}
          >
            <option value="China">China</option>
            <option value="Canada">Canada</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="Finland">Finland</option>
            <option value="Denmark">Denmark</option>
            <option value="Japan">Japan</option>
            <option value="Italy">Italy</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="age">Age</FormLabel>
          <Input
            name="age" id="age"
            onChange={formik.handleChange} value={formik.values.age}
            isInvalid={Boolean(formik.errors.age)}
          />
        </FormControl>
        <Button type="submit" width='full' isLoading={isLoading}>Submit</Button>
        {isError && (<ErrorMessage />)}
        {isEdit && (<DeleteBtn id={id!} />)}
      </form>
    </Center>
  )
}