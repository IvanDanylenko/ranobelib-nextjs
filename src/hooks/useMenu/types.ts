import { ReactNode, FunctionComponent } from 'react';
import { DropdownContentType } from 'src/components/common/DropdownList';

export interface IUseMenuOption {
  id: number | string;
  label?: string | ReactNode;
  StartIcon?: FunctionComponent;
  EndIcon?: FunctionComponent;
  link?: string;
  dropdownContent?: DropdownContentType[];
  action?: () => void;
}
