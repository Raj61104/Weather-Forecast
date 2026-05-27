export interface WeatherData {
  city: {
    name: string;
  };

  list: {
    dt_txt: string;

    main: {
      temp: number;
      humidity: number;
    };

    weather: {
      description: string;
    }[];

    wind: {
      speed: number;
    };
  }[];
}