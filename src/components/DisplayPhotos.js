const DisplayPhotos = (props) => {
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
                                        <div className="imageContainer" key={photo.id}>
                                            <img
                                                alt={photo.alt_description}
                                                src={photo.urls.regular}
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