import { useForm } from 'react-hook-form';
import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react';

type FieldName = 'name' | 'amount';

type FieldValue = string | number;

type FormValues = Record<FieldName, FieldValue>;

const defaultValues = {
  name: '',
  amount: 0
};

const Form = (): JSX.Element => {
  const { handleSubmit, errors, register, formState } = useForm<FormValues>({
    defaultValues
  });

  const validateRequired = (value: FieldValue) =>
    value ? Boolean(value) : 'Field is required';

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
          ref={register({ validate: validateRequired })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <NumberInput>
          <NumberInputField
            name="amount"
            ref={register({ validate: validateRequired })}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>
          {errors.amount && errors.amount.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
