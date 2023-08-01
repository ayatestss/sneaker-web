import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import UserInfoStep from './UserInfoStep';
import { AddressForm } from './AddressForm';

const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  dob: '',
  profilePic: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
};

const UserSignUpForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form>
          {step === 1 && (
            <UserInfoStep
              handleNext={handleNext}
              setFieldValue={setFieldValue}
            />
          )}
          {step === 2 && (
            <AddressForm
              handlePrevious={handlePrevious}
              handleSubmit={handleSubmit}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default UserSignUpForm;
