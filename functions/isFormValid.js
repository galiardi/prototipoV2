export const isFormValid = (formData, setErrorObj) => {
  const errors = {};

  if (!formData.category) {
    errors.category = true;
  }

  if (!formData.title) {
    errors.title = true;
  }

  if (!formData.description) {
    errors.description = true;
  }

  if (!formData.author) {
    errors.description = true;
  }

  if (Object.values(errors).includes(true)) {
    setErrorObj(errors);
    return false;
  } else {
    return true;
  }
};
