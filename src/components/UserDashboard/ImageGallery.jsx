import React, { Component } from 'react';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = () => {
    fetch('http://localhost:5000/getImages')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch images');
        }
      })
      .then(data => {
        this.setState({
          images: data,
          isLoading: false,
          error: null
        });
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({
          error: error.message,
          isLoading: false
        });
      });
  };

  render() {
    const { images, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="image-gallery">
        <h1>Image Gallery</h1>
        <div className="image-list">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img
                src={`data:image/jpeg;base64,${image.base64}`}
                alt={`Image ${index + 1}`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageGallery;
