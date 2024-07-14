import { Button } from "@mui/material";

interface SaveButtonProps {
  onClick: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      기록 저장
    </Button>
  );
};

export default SaveButton;
