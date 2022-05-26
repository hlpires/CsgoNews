import {configureStore} from '@reduxjs/toolkit';
import {csnewsApi} from  '../services/csnewsApi'
export default configureStore({
    reducer:{
    [csnewsApi.reducerPath]: csnewsApi.reducer,
    },
}) 