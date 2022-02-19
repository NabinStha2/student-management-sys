import React from "react";
import { Container, Paper, Grow, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Grow in>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={1}
          sx={{
            margin: "30px 0px",
            height: "80vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper elevation={4} sx={{ flex: "1", padding: "10px" }}>
            <Grid
              item
              container
              sx={{
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid item sx={{ margin: "20px 0px" }}>
                <h2>Welcome Admin</h2>
              </Grid>
              <Grid
                item
                sx={{
                  margin: "20px 0px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Button
                  component={Link}
                  to="/manageStudents"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#DDDDDD",
                    height: "60px",
                    width: "60%",
                  }}
                >
                  Manage Students Records
                </Button>
              </Grid>
              <Grid
                item
                sx={{
                  margin: "20px 0px 50px 0px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Button
                  component={Link}
                  to="/addStudent"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#DDDDDD",
                    height: "60px",
                    width: "60%",
                  }}
                >
                  Add Student
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Dashboard;
