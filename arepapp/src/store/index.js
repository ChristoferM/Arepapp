import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slicesUser/userSlice';

export const store = configureStore({
        reducer:{
            usuarioSesion:userSlice
        }
    });