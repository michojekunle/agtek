'use client'

import { useState, ChangeEvent } from 'react';

interface FormState {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
  password?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useFormState = () => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const errors: FormErrors = {};

    // Add your form validation logic here
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formState.email.trim())) {
      errors.email = 'Please enter a valid email';
    }

    if (!formState.password.trim()) {
      errors.password = 'Password is required';
    }

    setFormErrors(errors);

    // Return true if the form is valid, false otherwise
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate the form before submitting
    const isValid = validateForm();

    if (isValid) {
      // Do something with the form data, e.g., send it to a server
      console.log('Form data:', formState);
    } else {
      console.log('Form is invalid. Please check errors.');
    }
  };

  return {
    formState,
    formErrors,
    handleChange,
    handleSubmit,
  };
};
