import { layoutInterface } from "./layoutSlice";

export interface RootState{
    layout:layoutInterface
}

export interface formState{
    firstName: {
      value:string,
      errorMessage:string | null
    };
    lastName: {
      value:string,
      errorMessage:string | null
    };
    email: {
        value: string;
        error: boolean;
        hovered: boolean;
        isValid:boolean,
        errorMessage:string | null
    };
    password: {
        value: string;
        hovered: boolean;
        error: boolean;
        errorMessage: string | null;
        isValid:number,
        isVisible:boolean
    }
  }