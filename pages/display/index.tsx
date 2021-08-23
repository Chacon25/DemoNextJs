import Display from '../../components/display'
import Layout from '../../components/layout'



export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    genre_ids: number[];
}
function Blog({ posts }: any) {
    return (

        <Layout>
            <div className="row row-cols-3" >
                {posts.map((post: Movie) => (
                    <div className="col">
                        <Display id={post.id} overview={post.overview} poster_path={"http://image.tmdb.org/t/p/w185/" + post.poster_path} key={post.id} title={post.title} />
                    </div>
                ))}

            </div>

        </Layout >

    )
}

export default Blog


// This function gets called at build time
export async function getServerSideProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=03fdd8f321f29b9e3f052238c9a26c14&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    const posts = await res.json().then((res) => res.results.slice(0, 6))


    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts

        },

    }

}

