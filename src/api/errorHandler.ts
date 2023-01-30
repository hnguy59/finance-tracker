import { toast } from "react-toastify";

const errorHandler = (error: unknown) => {
  // The JS error message will be displayed to the user
  error instanceof Error && toast.error(error.message);
  console.error(error);
};

export default errorHandler;
