import { Button, Input } from "antd";

interface InputFormProps {
  input: string;
  setInput: (input: string) => void;
  handleSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const InputForm = ({ input, setInput, handleSendMessage, isLoading }: InputFormProps) => {
  return (
      <div className="flex gap-3 justify-center items-center">
        <Input
          placeholder="Ask me anything"
          // autoSize={{ minRows: 1, maxRows: 5 }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 basis-9/10 !rounded-2xl !h-11"
        />
        <Button
          type="primary"
          onClick={() => {
            console.log(input);
            handleSendMessage(input);
          }}
          loading={isLoading}
          className="flex-1 basis-1/10 !rounded-2xl !bg-primary-500 hover:!bg-primary-400"
          size="large"
        >
          Submit
        </Button>
      </div>
  );
};