import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface movieData {
  adult: boolean;
  backdrop_path: String;
  genre_ids: [number];
  id: Number;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  release_date: String;
  title: String;
  video: boolean;
  vote_average: Number;
  vote_count: Number;
}

async function getPopularMovieData() {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  );
  return res.data.results;
}
async function getupcomingMovieData() {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  );
  return res.data.results;
}

async function Home() {
  const popularMovies = await getPopularMovieData();
  const upcomingMovies = await getupcomingMovieData();

  const data = [...popularMovies, ...upcomingMovies];

  const uniqueMovies = data.filter(
    (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-5 ">
        {uniqueMovies.map((movie: movieData, index: number) => {
          let img = `https://image.tmdb.org/t/p/original${
            movie && movie.backdrop_path
          }`;
          return (
            <div className="p-3" key={index}>
              <Link href={`/movie/${movie.id}`}>
                <Image
                  className="rounded-lg"
                  src={img}
                  alt="Movie Poster"
                  height={500}
                  width={700}
                />
              </Link>
              <div className="flex flex-col gap-3">
                <div className="mt-3">
                  Movie : {movie ? movie.original_title : ""}
                </div>
                <div className="">
                  <div className="">
                    Date : {movie ? movie.release_date : ""}
                  </div>
                </div>
                <div className="h-[100px] overflow-y-hidden">
                  Description : {movie ? movie.overview : ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
