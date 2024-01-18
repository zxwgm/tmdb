import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

export default function Search() {
    const [ data, setData ] = useState();
    const location = useLocation()
    const search = new URLSearchParams(location.search);
    const keyword = search.get("keyword")
    // console.log(keyword)
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGE2YjA1MDkzYzU3NTZjYjdjZTY5MjE2ZjE2NTI2YyIsInN1YiI6IjVlY2NiODQ2MDIxY2VlMDAyMThhNmNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O8NTSQ3WbjEipLHuOyR1hqkz2NSJCB-IP_4Q5M0hSsE'
            }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            setData(json);
            console.log(json);
        })
        .catch(err => console.error('error:' + err));
    }, [])
  return (
    <Layout>
        <div className="w-full flex justify-center py-16">
            <div className="w-[1200px] h-64 bg-red-500">
            
            </div>
        </div>
    </Layout>
  )
}