import "./App.css";

import Toggle from "./components/Toggle/Toggle";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseline";
import Movies from "./components/Movies/Movies";
import { useCustomHook } from "./CustomHook";
import { Grid, Box, CircularProgress, Container } from "@mui/material";
import MovieCard from "./components/Movies/MovieCard/MovieCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "./components/context/authContent";
import useAuthContext from "./hooks/useAuthContext";

function App() {
  // const url = "https://jsonplaceholder.typicode.com/posts";
  // const { loading, data } = useCustomHook(url);
  const { user, onLogin, onLogout } = useAuthContext();
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  // const renderPosts = () => {
  //   if (loading) {
  //     return (
  //       <Grid item xs={12}>
  //         <Box display="flex" justifyContent="center">
  //           <CircularProgress />
  //         </Box>
  //       </Grid>
  //     );
  //   }

  //   return (
  //     <Container>
  //       <Grid container spacing={2}>
  //         {data.map((item) => {
  //           return (
  //             <Grid item xs={4} key={item.id}>
  //               {item.title}
  //             </Grid>
  //           );
  //         })}
  //       </Grid>
  //     </Container>
  //   );
  // };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      {/* <Toggle /> */}
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            user,
            onLogin: onLogin,
            onLogout: onLogout,
          }}
        >
          <Routes>
            <Route path="/" element={<Movies />}></Route>
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
      {/* <Grid container spacing={2}>
        {renderPosts()}
      </Grid> */}
    </ThemeProvider>
  );
}

export default App;
