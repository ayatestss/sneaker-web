import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import CreateServiceCard from "./CreateServiceCard";
import ExistingServiceCard from "./ExistingServiceCard";

// The Services component is the main component responsible for rendering
// the services section. It manages the state for the list of services and
// the new service being created. It also handles the functions for input
// changes, adding a new service, and deleting a service. It renders the
// CreateServiceCard component for creating a new service and the
// ExistingServiceCard component for each existing service in the list.

const Services = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({ ...prevService, [name]: value }));
  };
  const handleAddService = () => {
    setServices((prevServices) => [...prevServices, newService]);
    setNewService({ name: "", description: "", price: "" });
  };
  const handleDeleteService = () => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
  };
  return (
    <Box>
      <CreateServiceCard
        newService={newService}
        handleInputChange={handleInputChange}
        handleAddService={handleAddService}
      />
      <Grid container spacing={2}>
        {services.map((service, index) => {
          <ExistingServiceCard
            key={index}
            service={service}
            handleDeleteService={() => handleDeleteService(index)}
          />;
        })}
      </Grid>
    </Box>
  );
};

export default Services;
