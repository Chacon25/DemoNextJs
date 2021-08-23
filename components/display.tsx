

export type MovieView = {
    title: string;
    id: number;
    overview: string;
    poster_path: string;

};
function Display(props: MovieView) {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: "center"
        }}>
            <div className="card" style={{ width: '18rem', flex: 1, minWidth: '330px', display: "flex", alignItems: "center", flexDirection: 'column', textAlign: 'center' }} >
                <img src={props.poster_path} width={100} alt="image poster" style={{ paddingBottom: '20px', }} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.overview}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div >
    )
}

export default Display
