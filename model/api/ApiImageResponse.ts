interface ApiImageResponse {
  name: string;
  formats: {
    large: {
      url: string;
    };
    small: {
      url: string;
    };
    medium: {
      url: string;
    };
    thumbnail: {
      url: string;
    };
  };
}

export default ApiImageResponse;
