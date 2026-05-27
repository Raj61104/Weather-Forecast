import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "6aa414ebe30d81c67fbdcd1c40aaa56b";

interface WeatherData {
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

interface WeatherState {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk<
  WeatherData,
  string,
  { rejectValue: string }
>("weather/fetchWeather", async (city, thunkAPI) => {
  try {
    const response = await axios.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }

    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })

      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch weather";
      });
  },
});

export default weatherSlice.reducer;