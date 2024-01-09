import { FC, SVGProps } from "react";

export interface SidebarItemType {
  path: string;
  Icon: FC<SVGProps<SVGElement>>;
  text: string;
  onlyAuth?: boolean;
}
