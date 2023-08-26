"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Container,
  Button,
} from "@mui/material"; // Import Material-UI components
import styles from "./page.module.css"; // Import CSS module for styling

const MentorAdvisorCard: React.FC<MentorAdvisor> = ({
  name,
  uni,
  post,
  picUrl,
}) => {
  return (
    <Card
      style={{
        boxShadow: "none",
        borderRadius: "16px",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={picUrl}
        alt={name}
        style={{
          width: "100%",
          borderRadius: "50%", // Crop the image in a circular shape
          objectFit: "cover", // Maintain aspect ratio and fill container
        }}
      />
      <CardContent
        style={{
          padding: "16px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "#6B7280", // Text color for post
            marginBottom: "8px",
          }}
        >
          {post}
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "#6B7280", // Text color for university
          }}
        >
          {uni}
        </Typography>
        <Button
          variant="outlined"
          style={{
            marginTop: "16px",
            borderColor: "#B656E2", // Purple border color
            color: "#B656E2", // Purple text color
            transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
          }}
        >
          Message him now
        </Button>
      </CardContent>
    </Card>
  );
};

const MentorAdvisor = () => {
  const mentors: MentorAdvisor[] = [
    {
      name: "Subram",
      uni: "Cambridge University",
      post: "Principal Project Scientist",
      picUrl:
        "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
    },
    {
      name: "Alice",
      uni: "Harvard University",
      post: "Research Advisor",
      picUrl: "https://www.sciastra.com/teams/dr_omkar.jpg",
    },
    {
      name: "John",
      uni: "Stanford University",
      post: "Senior Researcher",
      picUrl: "https://www.sciastra.com/teams/dr_omkar.jpg",
    },
    {
      name: "Emily",
      uni: "MIT",
      post: "Lead Scientist",
      picUrl: "https://www.sciastra.com/teams/dr_omkar.jpg",
    },
    {
      name: "Michael",
      uni: "Caltech",
      post: "Professor",
      picUrl: "https://www.sciastra.com/teams/dr_omkar.jpg",
    },
    {
      name: "Sophia",
      uni: "Princeton University",
      post: "Research Fellow",
      picUrl: "https://www.sciastra.com/teams/dr_omkar.jpg",
    },
    {
      name: "Daniel",
      uni: "Yale University",
      post: "Senior Research Scientist",
      picUrl: "https://www.sciastra.com/teams/dr_omkar.jpg",
    },
    {
      name: "Olivia",
      uni: "University of Oxford",
      post: "Postdoctoral Researcher",
      picUrl: "https://www.sciastra.com/teams/dr_omkar.jpg",
    },
    {
      name: "William",
      uni: "University of Chicago",
      post: "Research Associate",
      picUrl: "https://www.sciastra.com/teams/dr_omkar.jpg",
    },
    {
      name: "Emma",
      uni: "Imperial College London",
      post: "Junior Scientist",
      picUrl: "https://www.sciastra.com/teams/dr_omkar.jpg",
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
        Mentor & Advisor
      </Typography>
      <br />
      <Grid container spacing={12}>
        {mentors.map((mentor, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <MentorAdvisorCard {...mentor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MentorAdvisor;
