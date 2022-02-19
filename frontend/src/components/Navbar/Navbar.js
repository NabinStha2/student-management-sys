import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  // Avatar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
// import decode from "jwt-decode";
// import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  appBar: {
    // margin: "30px 0",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row !important",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  link: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    flex: 2,
    padding: "0 0 0 24px",
    "&:active": {
      color: "blue",
    },
    color: "black",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 0 0",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    flex: "1",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      justifyContent: "center",
    },
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginLeft: "15px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    flex: "1",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      paddingBottom: "4px",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  // const [user, setUser] = useState();
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
  // const { userData } = auth;
  // console.log(userData);

  // useEffect(() => {
  //   setUser(userData ?? null);
  //   // console.log(user);
  // }, [userData, user]);

  // const logout = useCallback(() => {
  //   dispatch({ type: "LOGOUT_AUTH" });
  //   history.push("/auth");
  //   setUser(null);
  // }, [dispatch, history]);

  // useEffect(() => {
  //   const token = userData?.userToken;

  //   if (token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 2000 < new Date().getTime()) logout();
  //   }

  //   setUser(JSON.parse(localStorage.getItem("userData")));
  // }, [userData, logout]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link className={classes.link} to="/">
        <Typography className={classes.heading} variant="h3" align="center">
          SRMS
        </Typography>
      </Link>
      <Toolbar className={classes.toolbar}>
        {/* {user?.userProfile ? ( */}
        <Link className={classes.link} style={{ padding: 0 }} to="/dashboard">
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">
              {/* {user?.userProfile.name} */}Dashboard
            </Typography>
          </div>
        </Link>
        {/* <Link className={classes.link} style={{ padding: 0 }} to="/students">
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">
              Students Record
            </Typography>
          </div>
        </Link>
        <Link className={classes.link} style={{ padding: 0 }} to="/courses">
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">
              Courses
            </Typography>
          </div>
        </Link> */}

        {/* <Button
            variant="outlined"
            // className={classes.logout}
            color="secondary"
            // onClick={logout}
          >
            Logout
          </Button> */}

        {/* ) : ( */}
        {/* <Button component={Link} to="/auth" variant="outlined" color="primary">
          Sign In
        </Button> */}
        {/* )} */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
