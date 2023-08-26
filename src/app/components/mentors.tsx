"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material"; // Import Material-UI components
import styles from "./page.module.css"; // Import CSS module for styling

const MentorCard: React.FC<Mentor> = ({ name, uni, picUrl }) => {
  const cardStyle = {
    boxShadow: "none",
    borderRadius: "16px",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  const contentStyle = {
    padding: "16px",
  };

  return (
    <Card style={cardStyle}>
      <img
        src={picUrl}
        alt={name}
        style={{
          width: "100%",
          borderRadius: "50%", // Crop the image in a circular shape
          objectFit: "cover", // Maintain aspect ratio and fill container
        }}
      />
      <CardContent style={contentStyle}>
        <Typography variant="h6" align="center">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {uni}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Mentors = () => {
  const mentors: Mentor[] = [
    {
      name: "Subram",
      uni: "Cambridge University",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
    },
    {
      name: "Alice",
      uni: "Harvard University",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Veena_Sri_mathematics.jpg",
    },
    {
      name: "John",
      uni: "Stanford University",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Veena_Sri_mathematics.jpg",
    },
    {
      name: "Emily",
      uni: "MIT",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Veena_Sri_mathematics.jpg",
    },
    {
      name: "Michael",
      uni: "Caltech",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Veena_Sri_mathematics.jpg",
    },
    {
      name: "Sophia",
      uni: "Princeton University",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Veena_Sri_mathematics.jpg",
    },
    {
      name: "Daniel",
      uni: "Yale University",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Veena_Sri_mathematics.jpg",
    },
    {
      name: "Olivia",
      uni: "University of Oxford",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Veena_Sri_mathematics.jpg",
    },
    {
      name: "William",
      uni: "University of Chicago",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Veena_Sri_mathematics.jpg",
    },
    {
      name: "Emma",
      uni: "Imperial College London",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Veena_Sri_mathematics.jpg",
    },
  ];

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom></Typography>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
          background:
            "linear-gradient(90.23deg, #234EB0 2.75%, #B656E2 104.73%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Meet Your Mentors
      </Typography>
      <br />
      <Grid container spacing={12}>
        {mentors.map((mentor, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <MentorCard {...mentor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Mentors;
