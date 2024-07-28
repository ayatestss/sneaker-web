import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import DeleteIcon from "@mui/icons-material/Delete";

function PhotoInput({ values, setFieldValue }) {
  const handlePhotoUpload = (event) => {
    const files = event.target.files;

    const readAsDataURL = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

    Promise.all(Array.from(files).map(readAsDataURL))
      .then((base64Photos) => {
        setFieldValue("pictures", [...values.pictures, ...base64Photos]);
      })
      .catch((error) => {
        console.error("Error reading files as base64:", error);
      });
  };

  const handlePhotoDelete = (photoBase64) => {
    const updatedPhotos = values.pictures.filter(
      (photo) => photo !== photoBase64
    );
    setFieldValue("pictures", updatedPhotos);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="contained" component="label" sx={{ mb: 2 }}>
        Upload Photos
        <input
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={handlePhotoUpload}
        />
      </Button>
      <ImageList cols={3} rowHeight={164}>
        {values.pictures.map((photo, index) => (
          <ImageListItem key={index}>
            <img
              src={photo}
              alt={`Uploaded thumbnail ${index + 1}`}
              loading="lazy"
            />
            <ImageListItemBar
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`delete ${index + 1}`}
                  onClick={() => handlePhotoDelete(photo)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              actionPosition="right"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default PhotoInput;
