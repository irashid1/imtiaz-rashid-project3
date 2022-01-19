// const DisplayPhotos = (props) => {
//     return (
//         <section>
//             {
//                 // conditionally rendering elements if there are photos
//                 props.length === 0 ?
//                     (
//                         <h2>Sorry no photos returned!</h2>
//                     ) : (
//                         <>
//                             <h2>Here are the photos!</h2>
//                             {
//                                 // looping through the photos and dynamically rendering them to the screen
//                                 props.map((photo) => {
//                                     return (
//                                         <div key={photo.id}>
//                                             <img
//                                                 alt={photo.alt_description}
//                                                 src={photo.urls.small}
//                                             />
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </>
//                     )
//             }
//         </section>
//     )
// }
// export default DisplayPhotos;