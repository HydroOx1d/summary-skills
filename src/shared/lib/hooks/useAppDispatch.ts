import { AppDispatch } from "app/providers/store";
import { useDispatch } from "react-redux";

export const useAppDispatch = useDispatch<AppDispatch>;
