
import { forbiddenPageActions, forbiddenPageReducer } from "./model/slice/forbiddenPageSlice";
import type {ForbiddenPageSchema} from "./model/types/forbiddenPage";

import { ForbiddenPageAsyncComponent as ForbiddenPagePage } from "./ui/ForbiddenPage.async";

export {
	forbiddenPageActions, 
	forbiddenPageReducer, 
	ForbiddenPageSchema,
  
	ForbiddenPagePage
};
