import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getUserFromLocalStorage } from "../../utils/userLocalStorage";
import { getAddress } from "../../services/apiGeocoding";


function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}



export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async () => {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryCode}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  }
)

const initialState = {
  username: getUserFromLocalStorage()?.username || "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddress.pending, (state) => {
      state.status = "loading"
    }).addCase(fetchAddress.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.position = action.payload.position;
      state.address = action.payload.address;
      state.status = "idle";
    }).addCase(fetchAddress.rejected, (state) => {
      state.status = "error";
      state.error = 'Cannot get your address, please allow location access and try again';
    })
  }
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;