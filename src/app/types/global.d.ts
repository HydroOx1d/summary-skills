declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}


declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;