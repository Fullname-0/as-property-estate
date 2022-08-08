import ApiImageResponse from "../api/ApiImageResponse";

class Image {
  large: string = "";
  small: string = "";
  medium: string = "";
  thumbnail: string = "";

  private server: string | undefined = "";
    // process.env.DOMAIN ? process.env.DOMAIN : process.env.NEXT_PUBLIC_DOMAIN;

  constructor(response: ApiImageResponse) {
    this.thumbnail = response.formats?.thumbnail ? `${this.server}${response.formats.thumbnail.url}` : "";
    this.large = response.formats?.large ? `${this.server}${response.formats.large.url}` : "";
    this.medium = response.formats?.medium ? `${this.server}${response.formats.medium.url}` : "";
    this.small = response.formats?.small ? `${this.server}${response.formats.small.url}` : "";
  }
}

export default Image;
