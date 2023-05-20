import { collections } from "@constants/obj";
import { ReactNode, createContext, useEffect, useReducer } from "react";
import { GET_COLLECTION_BY_ID, LOADING } from "./action";
import { dataReducer } from "./reducer";

const dataInitState = {
  loading: false,
  currentCol: {},
};
export const DataContext = createContext<any>(dataInitState);

// data wrapper
export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(dataReducer, dataInitState);

  // [GET] [CLIENT] Collection data by ID
  const getCollectionDataById = async (colId: string) => {
    // loading is true
    dispatch({ type: LOADING });

    // if colId is empty, reset current collection data
    if (colId.length === 0) {
      dispatch({
        type: GET_COLLECTION_BY_ID,
        payload: { data: dataInitState.currentCol },
      });
      return;
    }
    // else, save the currentl;y chosen collection
    dispatch({
      type: GET_COLLECTION_BY_ID,
      payload: { data: collections[colId as keyof typeof collections] },
    });
  };

  // initial data populating
  useEffect(() => {}, []);

  return (
    <DataContext.Provider value={{ ...state, getCollectionDataById }}>
      {children}
    </DataContext.Provider>
  );
};
