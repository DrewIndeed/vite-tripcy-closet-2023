import { useContext } from "react";
import { DataContext } from "@context/data/Provider";

export const useData = () => useContext(DataContext);
