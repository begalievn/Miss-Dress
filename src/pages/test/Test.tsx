import { IPost, LikeApi } from "../../store/services/LikeApi";
import Test2 from "./Test2";

const Test = () => {
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = LikeApi.useFetchAllLikeQuery(5);

  return (
    <div>
      <button onClick={() => refetch()}>Обновить</button>
      <div>
        {isLoading && <h1>Идет Загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts &&
          posts.map((item: IPost) => (
            <div key={item.id}>
              <span>{item.title}</span>
              <span>{item.body}</span>
              <button>Delete</button>
            </div>
          ))}
        <Test2 />
      </div>
    </div>
  );
};

export default Test;
