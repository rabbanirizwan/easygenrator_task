import { useMutation, UseMutationOptions, MutationFunction } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

interface User {
  id: number;
  name: string;
  token: string
}

export interface Params {
  name: string;
  email: string;
  password: string;
}

const getUser: MutationFunction<User, Params> = async (params) => {
  console.log(params, "params singup");
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
    console.error(error, "error");

    if (error instanceof AxiosError && typeof error?.response?.data.message === "string") {
      throw new Error(error?.response?.data.message);
    } else {
      throw new Error("An error occurred during signup. Please try again.");
    }
  }
};


export const useRegister = (
  config?: UseMutationOptions<User, Error, Params>
) => {
  console.log(config, "signup config");
  const {
    mutate: mutateRegister,
    isLoading,
    data: loginCredentials,
  } = useMutation(getUser, {
    ...config,
  });

  return { mutateRegister, isLoading, loginCredentials };
};
