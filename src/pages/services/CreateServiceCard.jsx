import React from "react";
import { Grid, Box, TextField, Button, Card, CardMedia } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// The CreateServiceCard component is responsible for rendering a card to
// create a new service. It displays an image, text fields for entering the
// service name, description, and price, as well as buttons for canceling
// and adding the service.

const CreateServiceCard = ({
  newService,
  handleInputChange,
  handleAddService,
}) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card
      sx={{ maxWidth: 400, paddingTop: 5, paddingLeft: 5, paddingRight: 5 }}
    >
      <CardMedia
        component="img"
        height="300"
        width="300"
        src="/assets/iceysolerestoration.jpeg"
        alt="sneakerrestoration"
        sx={{ gridColumn: "span 2", marginBottom: "30px" }}
      />
      <TextField
        fullWidth
        variant="outlined"
        type="text"
        name="name"
        value={newService.name}
        label="Enter Your Service"
        sx={{ gridColumn: "span 2", marginBottom: "30px" }}
        onChange={handleInputChange}
      />

      <TextField
        fullWidth
        variant="outlined"
        type="text"
        name="description"
        value={newService.description}
        label="Enter a Description"
        sx={{ gridColumn: "span 2", marginBottom: "30px" }}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        variant="outlined"
        type="text"
        name="price"
        value={newService.price}
        label="Enter a Price"
        sx={{ gridColumn: "span 2", marginBottom: "30px" }}
        onChange={handleInputChange}
      />
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        padding="10px"
      >
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          sx={{ marginRight: "10px" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={handleAddService}
        >
          Add Service
        </Button>
      </Box>
    </Card>
  </Grid>
);

export default CreateServiceCard;
