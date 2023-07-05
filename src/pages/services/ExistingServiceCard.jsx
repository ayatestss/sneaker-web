import React from "react";
import { Grid, Typography, Button, Card, CardMedia } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// The ExistingServiceCard component is responsible for rendering a card
// for an existing service. It displays the service's image, name,
// description, and price, along with buttons for deleting and editing the
// service.

const ExistingServiceCard = ({ service, handleDeleteService }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card
      sx={{ maxWidth: 400, paddingTop: 5, paddingLeft: 5, paddingRight: 5 }}
    >
      <CardMedia
        component="img"
        height="300"
        width="300"
        src={service.photo}
        alt=""
      />
      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ padding: "10px 15px 10 10px" }}
      >
        {service.name}
      </Typography>
      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ padding: "10px 15px 10 10px" }}
      >
        {service.description}
      </Typography>
      <Typography
        variant="h4"
        fontWeight="600"
        sx={{ padding: "10px 15px 10 10px" }}
      >
        ${service.price}
      </Typography>
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
          onClick={handleDeleteService}
        >
          Delete
        </Button>
        <Button variant="contained" startIcon={<EditIcon />}>
          Edit
        </Button>
      </Box>
    </Card>
  </Grid>
);

export default ExistingServiceCard;
