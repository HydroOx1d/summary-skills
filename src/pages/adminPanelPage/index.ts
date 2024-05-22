
import { adminPanelPageActions, adminPanelPageReducer } from "./model/slice/adminPanelPageSlice";
import type {AdminPanelPageSchema} from "./model/types/adminPanelPage";

import { AdminPanelPageAsyncComponent as AdminPanelPagePage } from "./ui/AdminPanelPage.async";

export {
	adminPanelPageActions, 
	adminPanelPageReducer, 
	AdminPanelPageSchema,
  
	AdminPanelPagePage
};
