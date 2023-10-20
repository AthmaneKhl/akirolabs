import { useState } from "react";
const baseUrlApi = import.meta.env.VITE_API;

type Api = [(token: string) => Promise<true | false | undefined>, boolean];
const useApi = (): Api => {
  const [loading, setLoading] = useState(false);

  const validate = async (token: string) => {
    setLoading(true);
    const response = await fetch(`${baseUrlApi}/${token}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    setLoading(false);
    const result = await response.json();
    return result;
  };

  return [validate, loading];
};

export { useApi };
