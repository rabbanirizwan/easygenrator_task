import DOMPurify from "dompurify";


export const sanitizeInput = (value: string): string => {
  return DOMPurify.sanitize(value);
};

export const validatePassword = (_: unknown, value: string) => {
  const a = /(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#^()_-])[A-Za-z\d@$!%*?&_-]{8,}$/;

  const sanitizedValue = sanitizeInput(value);

  if (a.test(sanitizedValue)) {
    return Promise.resolve();
  }

  return Promise.reject(
    new Error(
      "Password must contain at least one  letter, one number, and one special character."
    )
  );
};

export const validateEmail = (_: unknown, value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sanitizedValue = sanitizeInput(value);

  if (emailRegex.test(sanitizedValue)) {
    return Promise.resolve();
  }

  return Promise.reject(new Error("Please enter a valid email address."));
};

export const isAuthenticated = ()=>{
    return !!localStorage.getItem('token')
}