import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
//import { tokens } from "../../theme";
import Header from "../../components/Header";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ViewCompact, List as ListIcon } from "@mui/icons-material";
import { useState } from "react";
import InsertPhoto from "../MemberChat/Icons/InsertPhoto";
import Sidebar from "../../dashboard/SideBar";

const Services = () => {
  const [isListView, setIsListView] = useState(false);

  const handleViewChange = () => {
    setIsListView(!isListView);
  };
  return (
    <Box m="20px">
      <Header title="Services" subtitle="List of Services" />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Sidebar />
          <Card
            sx={{
              maxWidth: 400,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <Box
              sx={{
                height: 450,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="400"
                width="300"
                src="/assets/soleswap.jpeg"
                alt="sneakerrestoration"
              />
            </Box>

            <Typography
              variant="h3"
              textAlign="center"
              fontWeight="600"
              sx={{ padding: "10px 15px 10 10px" }}
            >
              Sole Swap
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight="600"
              sx={{ padding: "10px 15px 10 10px" }}
            >
              This sole swap hybrid service gives you the option to take two
              different pairs of shoes you provide and use the upper and sole
              from each to create one hybrid sneaker.
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
              >
                Delete
              </Button>
              <Button variant="contained" startIcon={<EditIcon />}>
                Edit
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 400,
            }}
          >
            <Box
              sx={{
                height: 450,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="400"
                width="300"
                src="/assets/yellowrestoration.jpg"
                alt="sneakerrestoration"
              />
            </Box>
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight="600"
              sx={{ padding: "10px 15px 10 10px" }}
            >
              Yellow Restoration
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight="600"
              sx={{ padding: "10px 15px 10 10px" }}
            >
              You dont even have to wear sneakers for them yellow over time. It
              happens, it looks bad but we will take care of the sneaker
              yellowing on your kicks and make them look new.
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
              >
                Delete
              </Button>
              <Button variant="contained" startIcon={<EditIcon />}>
                Edit
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 400,
              transition: "transform 0.1s ease-in-out",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            <Box
              sx={{
                height: 450,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="400"
                width="300"
                src="/assets/sneakercleaning.webp"
                alt="sneakerrestoration"
              />
            </Box>
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight="600"
              sx={{ padding: "10px 15px 10 10px" }}
            >
              Sneaker Cleaning
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight="600"
              sx={{ padding: "10px 15px 10 10px" }}
            >
              You dont even have to wear sneakers for them yellow over time. It
              happens, it looks bad but we will take care of the sneaker
              yellowing on your kicks and make them look new.
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
              >
                Delete
              </Button>
              <Button variant="contained" startIcon={<EditIcon />}>
                Edit
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 400,
            }}
          >
            <Box
              sx={{
                height: 500,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="400"
                width="300"
                src="/assets/iceysolerestoration.jpeg"
                alt="sneakerrestoration"
              />
            </Box>
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight="600"
              sx={{ padding: "10px 15px 10 10px" }}
            >
              Icey Sole Restoration
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight="600"
              sx={{ padding: "10px 15px 10 10px" }}
            >
              Even the most dingy sneaker yellowing can be brought back to icy
              so let us bring your icy soles back! We also now have a Icy Sole
              Masterclass so you can learn how to Ice Sneakers with sole sauce!
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
              >
                Delete
              </Button>
              <Button variant="contained" startIcon={<EditIcon />}>
                Edit
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 400,
            }}
          >
            <CardMedia height="300" width="300">
              <InsertPhoto height="x" />
            </CardMedia>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Enter your service name here"
              name="address1"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Enter your service description here"
              name="address1"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Enter your price here"
              name="address1"
              sx={{ gridColumn: "span 4" }}
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
                Delete
              </Button>
              <Button variant="contained" startIcon={<EditIcon />}>
                Edit
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
