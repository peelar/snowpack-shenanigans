import { useForm } from 'react-hook-form';
import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from '@chakra-ui/react';

type FormValues = {
  name: string;
};

const defaultValues = {
  name: ''
};

const Form = (): JSX.Element => {
  const { handleSubmit, errors, register, formState } = useForm<FormValues>({
    defaultValues
  });

  const validateName = (value: string) =>
    value ? Boolean(value) : 'Name is required';

  const submitHandler = (values: FormValues) => {
    console.log('submitted!');
    console.table(values);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input
          name="name"
          placeholder="name"
          ref={register({ validate: validateName })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
