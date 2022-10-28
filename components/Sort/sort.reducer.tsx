import { SortEnum } from "./Sort.props";
import { ProductModel } from "../../types/Product.type";

export type SortActions =
  | {
      type: SortEnum.Rating;
    }
  | {
      type: SortEnum.Price;
    }
  | {
      type: "reset";
      payload: ProductModel[];
    };

export type SortReducerState = {
  sort: SortEnum;
  products: ProductModel[];
};

export const SortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating: {
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => {
          return a.initialRating > b.initialRating ? -1 : 1;
        }),
      };
    }
    case SortEnum.Price: {
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => {
          return a.price > b.price ? -1 : 1;
        }),
      };
    }
    case "reset": {
      return {
        sort: SortEnum.Rating,
        products: action.payload,
      };
    }
    default:
      throw new Error("Неверный тип сортировки");
  }
};
