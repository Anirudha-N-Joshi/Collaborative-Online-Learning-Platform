import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const Home = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f8f9fc" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: "12%",
          backgroundColor: "#d9d7f1",
          borderRadius: "30px",
          position: "fixed",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          marginTop: 5,
          padding: 2,
          gap: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          ClassMate
        </Typography>
        {["Home", "Planner", "Groups", "Resources", "Profile", "Logout"].map((item) => (
          <Button
            key={item}
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#333",
              fontWeight: "bold",
              marginLeft:4,
              padding: 1,
              fontSize:20,
            }}
          >
            {item}
          </Button>
        ))}
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          marginLeft: "14%", // Adjust margin to match sidebar width
          padding: 4,
          flex: 1,
        }}
      >
        <Typography
          className="good-morning"
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}
        >
          Good Morning, Mate!
        </Typography>
        <Grid container spacing={2}>
          {/* Study Plan */}
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: 2, background: "linear-gradient(to right, #fbc2eb, #a6c1ee)" }}>
              <CardContent>
                <Typography variant="h6">Your Study Plan Today:</Typography>
                {[{ task: "Group Study Session", time: "10:00 - 12:00", status: "Completed" },
                  { task: "Project", time: "  12:00 - 2:00", status: "Pending" },
                  { task: "Exam Prep", time: "2:00 - 4:00", status: "Pending" }].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Typography>{item.task}</Typography>
                    <Typography>{item.time}</Typography>
                    <Button variant="contained" color={item.status === "Completed" ? "success" : "warning"}>
                      {item.status}
                    </Button>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Calendar */}
          <Grid item xs={12} md={6}>
            <Card className="calendar"
            sx={{
              padding: 2,
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            >
              <CardContent>
              <Calendar style={{ width: "50%", height: "0%" }} />
              
              </CardContent>
            </Card>
          </Grid>

          {/* Invitations and Insights */}
          <Grid item xs={12} md={6}>
  <Card
    className="invitations"
    sx={{
      width: "100%",  // Make it full width or adjust based on preference
      padding: 2,
      display: "flex",        // Use flexbox to align content
      flexDirection: "column",
      minHeight: "250px", // Stack items vertically
    }}
  >
    <CardContent>
      <Typography variant="h6">Invitations</Typography>
      {["Adarsh", "Walter", "Jon"].map((name) => (
        <Box
          key={name}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography>{`${name} invited you to ...`}</Typography>
          <Button variant="contained" color="primary">
            Accept
          </Button>
        </Box>
      ))}
    </CardContent>
  </Card>
</Grid>

          <Grid item xs={12} md={6}>
            <Card className="insights"
            sx={{
              padding: 2,
              minHeight: "250px", // Match height with Invitations
            }}
            >
              <CardContent>
                <Typography variant="h6">Insights</Typography>
                <Typography>Number of study sessions attended: 8</Typography>
                <Typography>Number of study sessions hosted: 12</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Right Sidebar */}
      <Box
        sx={{
          width: "23%",
          display: "flex",
          
          flexDirection: "column",
          alignItems:"center",
          padding: 2,
          marginTop:65,
          gap: 2,
          position: "fixed",
          right: 0,
          height: "10%",
        }}
      >
        {["Create a Group", "Join a Group", "Schedule a Call"].map((action) => (
          <Button
            key={action}
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
              textTransform: "none",
              color: "#fff",
              width: "80%",
              fontWeight: "bold",
            }}
          >
            {action}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
