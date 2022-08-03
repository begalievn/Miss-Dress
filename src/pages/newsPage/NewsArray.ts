export interface IList {
  title: string;
  text: string;
  date: string;
  image: string;
  id: number;
}

export function setLocalStorage(item: IList) {
  if (!localStorage.getItem("news")) {
    localStorage.setItem("news", `[${JSON.stringify(item)}]`);
  } else {
    let currentState = JSON.parse(localStorage.getItem("news") || "");
    currentState.length >= 5 && currentState.pop();

    let newState = [item, ...currentState];
    let arr = newState.map((i: IList, index: number) => {
      return { ...i, id: index + 1 };
    });
    console.log(arr);
    localStorage.setItem("news", JSON.stringify(arr));
  }
}

export function deleteHandler(id: number) {
  if (localStorage.getItem("news")) {
    let currentState = JSON.parse(localStorage.getItem("news") || "");
    const rest = currentState.filter((item: IList) => {
      return item.id !== id;
    });
    let sorted = rest.map((i: IList, index: number) => {
      return { ...i, id: index + 1 };
    });
    localStorage.setItem("news", JSON.stringify(sorted));
  }
}
