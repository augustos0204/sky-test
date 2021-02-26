import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {ApiMovies} from "../../services/api";

const getApiData = async () => {
    const response = await (await (ApiMovies())).data;
    const listFilms = await response[2].movies;
    const slideFilms = await response[0];
    const terrorFilms = new Array;

    listFilms.forEach(film => {
        const categories = ((film.categories).toLowerCase()).split(", ");
        categories.forEach(category => {
            if(category == "suspense"){
                terrorFilms.push(film);
            }
        });
    });
}

getApiData();

const HomePage = () => {
    return (
        <container>
            <Header/>

            <Footer/>
        </container>
    );
}

export default HomePage;