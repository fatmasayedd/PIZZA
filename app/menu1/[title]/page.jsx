export default function FeaturedArticalPage(props) {
    console.log(props);
    return (
        <>
            <h1> Show Artical </h1>
            <h1>{props.params.title}</h1>
        </>
    );
}