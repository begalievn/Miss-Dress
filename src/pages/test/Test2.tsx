import { IPost, LikeApi } from "../../store/services/LikeApi";

const Test2 = () => {
  const { data: posts, error, isLoading } = LikeApi.useFetchAllLikeQuery(5);
  return (
    <div>
      <div>
        {isLoading && <h1>Идет Загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts &&
          posts.map((item: IPost) => (
            <>
              <span>{item.id}</span>
              <span>{item.title}</span>
              <span>{item.body}</span>
              <button>Delete</button>
            </>
          ))}
      </div>
    </div>
  );
};

export default Test2;
