import { PluginItem } from "@babel/core";

export default function(): PluginItem {
	return {
		visitor: {
			Program(path, state) {
				const forbiddenAttrs: string[] = state.opts.attrs || [];

				path.traverse({
					JSXIdentifier(path) {
						const attr = path.node.name;

						if (forbiddenAttrs.includes(attr)) {
							path.parentPath.remove();
						}
					}
				});
			}
		}
	};
}