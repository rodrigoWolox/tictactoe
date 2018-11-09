function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const required = value => (value ? undefined : 'Value is required.');

export const validEmail = value => (validateEmail(value) ? undefined : 'Invalid email.');

export const minLenght = value => (value.length < 8 ? 'Password too short.' : undefined);

export const validate = values => {
  const error = {};

  if (!values.email) {
    error.email = 'El email es requerido.';
  } else if (!validateEmail(values.email)) {
    error.email = 'Email no valido.';
  }

  if (!values.password){
    error.password = 'Debe ingresar una contraseña.';
  } else if (values.password.length < 8) {
    error.password = 'La contraseña debe tener minimo 8 caracteres.';
  }
  return error;
};
