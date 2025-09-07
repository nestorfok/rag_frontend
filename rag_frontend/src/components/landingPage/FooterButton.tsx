import { Button } from "antd";

interface FooterButtonProps {
    onClick: (values: any) => void;
    text: string;
}
export const FooterButton = ({onClick, text}: FooterButtonProps) => {
  return (
    <Button 
      type="link" 
      onClick={onClick}
      className="!p-0 !h-auto !text-neutral-400 hover:!text-neutral-500 !text-xs"
    >
      {text}
    </Button>
  );
};