export interface iTask {
  _id?: string;
  title: string;
  description: string;
  dateOfCreattion?: Date;
  dateOfCompletion: Date;
  status: "IN_PROGRESS" | "DONE";
}

export interface iTasks {
  tasks: iTask[];
  isLoading: false;
  isSuccess: false;
  isError: false;
  typeError:
    | "NONE"
    | "GET_ERROR"
    | "ADD_ERROR"
    | "DELETE_ERROR"
    | "GET_ONE_ERROR"
    | "UPDATE_ONE_ERROR";
  errorMessage: string;
  successMessage: string;
}

export interface iTaskInput {
  name: string;
  description: string;
  priority: number;
  deadline: string;
  categories: string[];
}
