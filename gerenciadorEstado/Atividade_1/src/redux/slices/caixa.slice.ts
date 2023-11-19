import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CaixaState {
  saldo: number;
}

const initialState: CaixaState = {
  saldo: 0,
}

export const caixaSlice = createSlice({
  name: "caixaSlice",
  initialState,
  reducers: {
    depositar: (state, action: PayloadAction<number>) => {
      state.saldo += action.payload;
    },
    sacar: (state, action: PayloadAction<number>) => {
      state.saldo -= action.payload
    }
  }
})

export const { depositar, sacar } = caixaSlice.actions;
export default caixaSlice.reducer;
