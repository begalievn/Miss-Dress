import { dropDownApi } from "../../store/services/dropDownApi";
import { IParams } from "../types/collectionsCategory";

export function getDataFromSort(Data: IParams) {
  const { data: filtered } = dropDownApi.useFetchFilteredDropdownQuery(Data);
  if (Data.name) {
    return filtered;
  } else console.log("Функция Params Пустая");
}
