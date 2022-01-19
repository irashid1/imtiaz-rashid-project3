const DisplayPhotos = (props) => {
    // console.log(props);
    return (
        <section>
            {
                // conditionally rendering elements if there are photos
                props.allPhotos.length === 0 ?
                    (
                        <h2>Sorry no photos returned!</h2>
                    ) : (
                        <>
                            {
                                // looping through the photos and dynamically rendering them to the screen
                                props.allPhotos.map((photo) => {
                                    return (
                                        <div key={photo.id}>
                                            <img
                                                alt={photo.alt_description}
                                                src={photo.urls.small}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </>
                    )
            }
        </section>
    )
}
export default DisplayPhotos;