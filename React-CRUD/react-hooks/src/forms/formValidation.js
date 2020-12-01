const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }if (!values.lastName) {
        errors.lastName = 'Last Name is required';
      }
    return errors;
  };

  
export default validate;