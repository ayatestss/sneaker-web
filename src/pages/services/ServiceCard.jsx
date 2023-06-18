import React, { useStat, useEffect } from "react";
import { Card, CardMedia, Typography, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material";
import EditIcon from "@mui/icons-material";
import { useQuery, useMutuation, gql } from "@apollo/client";

const GET_CARDS = gql`
  query {
    cards {
      id
      title
      description
      image
      buttons {
        label
        icon
      }
    }
  }
`;

const ADD_CARD = gql`
mutation AddCard($title: String)!, $description: String!, $image: String!, $buttons: [ButtonInput]) {
    addCard(title: $title, description, image: $image, buttons: $buttons) {
        id
        title
        description
        image
        
        buttons {
            label
            icon
        }
    }
}
`;

const DELETE_CARD = gql`
mututation DeleteCard($id:  ID!) {
    deleteCard(id: $id)
}
`;

const UPDATE_CARD = gql`
  mutation UpdateCard(
    $id: ID!
    $title: String!
    $description: String!
    $image: String!
    $buttons: [ButtonInput]
  ) {
    updateCard(
      id: $id
      title: $title
      description: $description
      image: $image
      buttons: $buttons
    ) {
      id
      title
      description
      image
      buttons {
        label
        icon
      }
    }
  }
`;

function MyCard(props) {
  const { id, title, description, image, buttons, onDelete, onEdit } = props;

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        textAlign={"center"}
        component={"img"}
        height="300"
        width="300"
        src={image}
        alt={title}
      />
      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ padding: "10px 15px 10 10px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ padding: "10px 15px 10 10px" }}
      >
        {description}
      </Typography>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        padding="10px"
      ></Box>
    </Card>
  );
}
