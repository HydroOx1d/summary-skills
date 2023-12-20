import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "app/providers/store";
import { useDispatch } from "react-redux";

export const useThunkDispatch =
  useDispatch<ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>>;
