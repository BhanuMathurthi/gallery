import React, { useState, useEffect } from "react";

export default function Images() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const imagesPerPage = 8;
  const arrayForHoldingImages = [];

  const [imagesToShow, setImagesToShow] = useState([]);
  const [count, setCount] = useState(1);

  const loopThroughImages = (count) => {
    for (
      let i = count * imagesPerPage - imagesPerPage;
      i < imagesPerPage * count;
      i++
    ) {
      if (images[i] !== undefined) {
        arrayForHoldingImages.push(images[i]);
      }
    }
    setImagesToShow(arrayForHoldingImages);
  };

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
    loopThroughImages(count);
  }, []);

  const handleShowMoreImages = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughImages(count);
  };

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await fetch(
        `https://unsplash.com/napi/landing_pages/wallpapers/desktop/pc?page=1&per_page=100`
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.photos);
      setImages(result.photos);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  if (isLoading)
    return (
      <h2 className="text-success text-center my-5 fw-bold">Loading...</h2>
    );

  const getData = (imgSrc) => {
    console.log(imgSrc);
  };

  return (
    <div>
      <h2 className="text-center text-primary my-4">
        {" "}
        <strong>Image Gallery App</strong>{" "}
      </h2>
      <div className="d-flex justify-content-center flex-wrap">
        {images.map((val) => {
          return (
            <div className="col-md-4 col-sm-6 p-1 py-2" key={val.id}>
              <img
                className="img-fluid img-thumbnail h-100"
                loading="lazy"
                src={val.urls.small}
                alt="val.alt_description"
                onClick={() => getData(val.urls.small)}
              />
            </div>
          );
        })}

        <div className="d-flex justify-content-center flex-wrap">
          {imagesToShow.map((im) => (
            <div className="col-md-4 col-sm-6 p-1 py-2" key={im.id}>
              <img
                className="img-fluid img-thumbnail h-100"
                loading="lazy"
                src={im.urls.small}
                alt="im.alt_description"
              />
            </div>
          ))}
        </div>

        <div className="col-12 p-3 my-4">
          <div className="d-flex justify-content-center">
            <button onClick={handleShowMoreImages} className="btn btn-primary">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
