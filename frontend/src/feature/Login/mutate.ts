import { useMutation, UseMutationOptions } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

interface LoginCredentials {
 email:string;
 password:string
}

const getUser = async (params: LoginCredentials): Promise<LoginCredentials> => {
  try {
    const response: AxiosResponse<LoginCredentials> = await axios.post(
      "http://localhost:8000/auth/login",
      params,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("ddd",response.data)

    return response.data;
  } catch (error:any) {
    console.log(error,"error logn")
    
    if (error instanceof AxiosError && typeof error?.response?.data.message === "string") {
      throw new Error(error?.response?.data.message);
    } else {
      throw new Error("An error occurred during signup. Please try again.");
    }
   
  }
};

export const Uselogin = (
  config?: UseMutationOptions<LoginCredentials, Error, any, any>
) => {
  console.log("config",config)
  const {
    mutate: mutateLogin,
    isLoading,
    data: loginCredentials,
  } = useMutation(getUser, {
    ...config,
  });

  return { mutateLogin, isLoading, loginCredentials };
};
