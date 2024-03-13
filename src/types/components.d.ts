/* src/types/components.d.ts */

export interface ButtonProps {
  label?: string;
  onClick: () => void;
  primary?: boolean;
  icon?: IconName;
}
