import { useEffect, useState } from "react";
import {
  Grow,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import { colleges, faculties, semesters } from "../App";

const AddStudentScreen = () => {
  const location = useLocation();
  const [startDate, setStartDate] = useState(null);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({ dob: "" });
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dob: "",
    },
  });

  // console.log(location.state);

  const submit = async (inputData) => {
    console.log(inputData);
    var res;

    inputData.college = inputData.college.toUpperCase();
    inputData.batch = inputData.batch.toUpperCase();
    inputData.dob = startDate;

    if (edit === false) {
      res = await axios.get("http://localhost:5000/addstudent", {
        params: inputData,
      });
    } else {
      res = await axios.get(
        `http://localhost:5000/updatestudent/${location.state.college}${location.state.batch}${location.state.faculty}${location.state.rollno}`,
        { params: inputData }
      );
    }
    console.log(res.data);
    if (res.data) {
      navigate("/manageStudents");
    }
  };

  useEffect(() => {
    if (location.pathname.split("/")[2] === "edit") {
      setData(location.state);
      setEdit(true);
      setStartDate(moment(location.state.dob, "YYYY-MM-DD")._d);
      for (const [key, value] of Object.entries(data)) {
        // console.log(key, value);
        setValue(key, value);
      }
    }
  }, [data, edit, location, setValue]);

  // console.log(data);

  return (
    <Grow in>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={1}
          sx={{
            flexDirection: "column",
            margin: { xs: "40px 0px" },
            height: { xs: "auto", md: "100vh" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              flex: "1",
              display: "flex",
              padding: { xs: "10px 15px 10px 10px", md: "40px 45px 40px 40px" },
              flexDirection: "column",
              alignItems: "center",
              //   justifyContent: "center",
            }}
          >
            <form
              onSubmit={handleSubmit(submit)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12}>
                <h1 style={{ color: "rgba(0,183,255, 1)" }}>
                  {edit ? "Edit Student" : "Add Student"}
                </h1>
              </Grid>

              <Grid item container spacing={2} sx={{ margin: "10px 0px" }}>
                <Grid item xs={12} sm={6}>
                  {edit ? (
                    <TextField
                      defaultValue={data.firstname}
                      label="First Name"
                      // {...register("firstname")}
                    />
                  ) : (
                    <TextField label="First Name" {...register("firstname")} />
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Last Name" {...register("lastname")} />
                </Grid>
              </Grid>
              <Grid item container spacing={2} sx={{ margin: "10px 0px" }}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Email" {...register("email")} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Roll No." {...register("rollno")} />
                </Grid>
              </Grid>
              <Grid item container spacing={2} sx={{ margin: "10px 0px" }}>
                <Grid item xs={12} sm={6}>
                  <TextField label="age" {...register("age")} type="Number" />
                </Grid>
                {/* <Grid item sx={{}}> */}
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  isClearable
                  dateFormat="yyyy/MM/dd"
                  shouldCloseOnSelect={false}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  withPortal
                  locale="ne-NP"
                  placeholderText="Date of birth"
                  className="date_picker"
                />
              </Grid>
              <Grid item container spacing={2} sx={{ margin: "10px 0px" }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="select-label">Faculty</InputLabel>
                    <Select
                      label="Faculty"
                      defaultValue={location.state && location.state.faculty}
                      {...register("faculty", { required: true })}
                    >
                      {faculties.map((fac) => (
                        <MenuItem value={fac.value}>{fac.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {errors.faculty?.type === "required" && (
                    <Typography
                      variant="body2"
                      textAlign="left"
                      sx={{ color: "red", marginTop: "3px" }}
                      gutterBottom
                    >
                      Faculty is required
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="select-label">Semester</InputLabel>

                    <Select
                      label="Semester"
                      defaultValue={location.state &&  location.state.semester}
                      {...register("semester", { required: true })}
                    >
                      {semesters.map((sem) => (
                        <MenuItem sx={{ color: "black" }} value={sem.value}>
                          {sem.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {errors.semester?.type === "required" && (
                    <Typography
                      variant="body2"
                      textAlign="left"
                      sx={{ color: "red", marginTop: "3px" }}
                      gutterBottom
                    >
                      Semester is required
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Grid item container spacing={2} sx={{ margin: "10px 0px" }}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Parent Name" {...register("parentName")} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Batch" {...register("batch")} />
                </Grid>
              </Grid>
              <Grid item container spacing={2} sx={{ margin: "10px 0px" }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="select-label">College</InputLabel>
                    <Select
                      label="College"
                      defaultValue={location.state && location.state.college}
                      {...register("college", { required: true })}
                    >
                      {colleges.map((col) => (
                        <MenuItem value={col.value}>{col.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {errors.college?.type === "required" && (
                    <Typography
                      variant="body2"
                      textAlign="left"
                      sx={{ color: "red", marginTop: "3px" }}
                      gutterBottom
                    >
                      College is required
                    </Typography>
                  )}
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <TextField label="Batch" {...register("batch")} />
                </Grid> */}
              </Grid>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                sx={{ marginTop: "20px" }}
              >
                {edit ? "Edit" : "Add"}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Container>
    </Grow>
  );
};

export default AddStudentScreen;
