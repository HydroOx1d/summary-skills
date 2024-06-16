import type { StateSchema } from "@/app/providers/store";


export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleComments?.isLoading || false;