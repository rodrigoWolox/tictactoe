function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const required = value => (value ? undefined : 'Value is required.');

export const validEmail = value => (validateEmail(value) ? undefined : 'Invalid email.');

export const minLenght = value => (value.length < 8 ? 'Password too short.' : undefined);
