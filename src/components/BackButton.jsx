/** @format */

import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onCLick={e => {
        e.preventDefault(); // To not submit the form, because it's html's default behavior
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
