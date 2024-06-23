import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/store";

export const getScrollSaver = (state: StateSchema) => state.scrollSaver.scroll;
export const getScrollSaverByPath = createSelector(getScrollSaver, (_: StateSchema, path: string) => path, (scroll, path) => scroll[path]);