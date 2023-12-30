import { useMutation, UseMutationOptions } from "react-query";
import axios, { AxiosResponse } from "axios";

interface LoginCredentials {
 email:string;
 password:string
}

const getUser = async (params: any): Promise<LoginCredentials> => {
  try {
    const response: AxiosResponse<LoginCredentials> = await axios.post(
      "https://ai-ml-auth-drhbjrcbiq-uc.a.run.app/profile/auth/login",
      params,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : 'An error occurred';
    throw new Error(errorMessage);
  }
};

export const Uselogin = (
  config?: UseMutationOptions<LoginCredentials, Error, any, any>
) => {
  const {
    mutate: mutateLogin,
    isLoading,
    data: loginCredentials,
  } = useMutation(getUser, {
    ...config,
  });

  return { mutateLogin, isLoading, loginCredentials };
};
