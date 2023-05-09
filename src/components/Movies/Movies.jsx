import React, { useEffect, useState, useRef } from "react";
import axios from "../../utils/axios";
import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  Pagination,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import MovieCard from "./MovieCard/MovieCard";

import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";

const Movies = () => {
  const ref = useRef(null);
  const [state, setState] = useState({
    search: "",
    name: "",
    category: 28,
  });
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(30);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cat, setCat] = useState(603692);
  const [isGenre, setGenre] = useState([]);
  useEffect(() => {
    const FetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/3/movie/popular?api_key=74880edc8981cecb3010dc7bfcd63aa2&page=${page}`
        );

        const fetchedMovies = response.data.results.map((movie) => {
          return {
            image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            title: movie.title,
            id: movie.id,
            genre: movie.genre_ids,
          };
        });

        const genreList = await axios.get(
          `/3/genre/movie/list?api_key=74880edc8981cecb3010dc7bfcd63aa2&language=en-US`
        );
        const res = genreList.data.genres.map((genre) => {
          return {
            id: genre.id,
            name: genre.name,
          };
        });
        setGenre(res);
        setMovies(fetchedMovies);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };

    FetchMovies();
  }, [page]);

  const onSearchHandler = (ev) => {
    setState({
      ...state,
      search: ref.current.value,
    });
  };

  const onPageChangeHandler = (ev, value) => {
    setPage(value);
  };
  const onSelectChange = (ev) => {
    const getNameFilter = isGenre.filter((g) => {
      return g.id === ev.target.value;
    });
    const getname = getNameFilter[0].name;
    setState({
      ...state,
      category: ev.target.value,
    });
  };
  const renderMovies = () => {
    if (error) {
      return <Typography>{error}</Typography>;
    }
    if (loading) {
      return (
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        </Grid>
      );
    }
    return movies
      .filter(({ image, id, title, genre }) => {
        return (
          title.toLowerCase().includes(state.search.toLowerCase()) &&
          genre.includes(state.category)
        );
      })
      .map(({ id, image, title, genre }) => {
        return (
          <Grid item xs={3} key={id}>
            <MovieCard
              image={image}
              title={title}
              cate={genre}
              categorylist={isGenre}
            />
          </Grid>
        );
      });
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box mt={4} mb={4}>
          <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>
            MoviesDB
          </Typography>
        </Box>
        <Box mb={4}>
          <Search refer={ref} onClick={onSearchHandler} />
        </Box>
        <Box>
          <FormControl>
            <InputLabel id="movies_category">Category</InputLabel>
            <Select
              labelId="movies_category"
              id="demo_movies"
              value={state.category}
              label="Category"
              onChange={onSelectChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                // console.log(isGenre)
                isGenre.map(({ id, name }) => {
                  return (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  );
                })
              }
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={2}>
          {renderMovies()}
        </Grid>
        <Box mt={4} mb={4}>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={onPageChangeHandler}
            />
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Movies;
