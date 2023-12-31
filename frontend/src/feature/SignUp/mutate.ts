import { useMutation, UseMutationOptions, MutationFunction } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

interface User {
  token: string;
}

export interface Params {
  name: string;
  email: string;
  password: string;
}

const getUser: MutationFunction<User, Params> = async (params) => {
 
  try {
    const response: AxiosResponse<User> = await axios.post(
      "http://localhost:8000/auth/signup",
      params,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (
      error instanceof AxiosError &&
      typeof error?.response?.data.message === "string"
    ) {
      throw new Error(error?.response?.data.message);
    } else {
      throw new Error("An error occurred during signup. Please try again.");
    }
  }
};

export const useRegister = (
  config?: UseMutationOptions<User, Error, Params>
) => {
  const {
    mutate: mutateRegister,
    isLoading,
    data: loginCredentials,
  } = useMutation(getUser, {
    ...config,
  });

  return { mutateRegister, isLoading, loginCredentials };
};
