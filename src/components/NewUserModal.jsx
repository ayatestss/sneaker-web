import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContextv2";
import { Modal, Typography, Box, Button } from "@mui/material";
import { gql, useMutation } from "@apollo/client";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rprimary",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UPDATE_NEW_USER = gql`
  mutation updateNewUser($data: UpdateUserInput!) {
    updateUser(data: $data)
  }
`;

export const NewUserModal = () => {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    if (user.isNewUser) {
      handleOpen();
    }
  }, []);

  const [updateUser] = useMutation(UPDATE_NEW_USER, {
    onCompleted: handleClose,
  });

  const handleOnClick = async () => {
    await updateUser({
      variables: {
        data: {
          isNewUser: false,
        },
      },
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h1">
          Welcome!
        </Typography>
        <Typography id="modal-modal-description" sx={{ my: 2 }}>
          Welcome to The Sneaker Society, your one-stop destination for sneaker
          customization! Whether you're looking for custom designs, restoration,
          sole cleaning, or other services, we’re here to connect you with
          top-tier experts!
        </Typography>

        <Button variant="contained" onClick={handleOnClick}>
          Let’s get started!
        </Button>
      </Box>
    </Modal>
  );
};
