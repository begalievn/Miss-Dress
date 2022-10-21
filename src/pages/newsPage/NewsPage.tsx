import React, { FC, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import NewsList from "../mainPage/components/newsList/NewsList";

import styles from "./newsPage.module.scss";

import { deleteHandler, IList, setLocalStorage } from "./NewsArray";

interface IRefreshInfo {
  currentNews: IList | null;
  otherNews: IList[];
}
interface INewsPage {
  edit: boolean;
}
interface IChangedData {
  title: string;
  text: string;
}

const NewsPage: FC<INewsPage> = ({ edit = false }) => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  const newsStr = localStorage.getItem("news");
  const [refreshInfo, setRefreshInfo] = useState<IRefreshInfo | null>(null);
  const params = useParams();
  const [changedData, setChangedData] = useState<IChangedData>({
    title: "",
    text: "",
  });
  const [editCurrentNews, setEditCurrentNews] = useState(0);
  const [rend, setRend] = useState(true);

  const news: IList[] = newsStr && JSON.parse(newsStr || "");

  // useEffect(() => {
  //   return () => {
  //     setEditCurrentNews(false);
  //   };
  // }, [editCurrentNews]);

  useEffect(() => {
    if (edit) {
      newsStr && setRefreshInfo({ currentNews: null, otherNews: news });
    } else {
      window.scrollTo(0, 0);
      const other = news?.filter((item) => {
        return item.id.toString() !== params.id;
      });
      const one = news?.filter((item) => {
        return item.id.toString() === params.id;
      })[0];

      setRefreshInfo({ currentNews: one, otherNews: other });
    }
  }, [params, rend]);

  const showMoreHandler = (e: React.SyntheticEvent) => {};

  function changeHandler(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    console.log(e.target.value);
    setChangedData((changedData) => {
      return {
        ...changedData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function pushOne() {
    const zero = (int: number) => {
      if (int < 10) {
        return `0${int}`;
      }
      return int;
    };

    setRend((rend) => !rend);
    if (editCurrentNews) {
      const { title, text } = changedData;
      const data = refreshInfo?.otherNews.map((item) => {
        return item.id === editCurrentNews
          ? { ...item, title: title, text: text }
          : item;
      });
      console.log(data);
      localStorage.setItem("news", JSON.stringify(data));
      // setRend((rend) => !rend);
      setEditCurrentNews(0);
    } else {
      setLocalStorage({
        title: changedData.title,
        text: changedData.text,
        date: `${zero(new Date().getDay())}.${zero(
          new Date().getMonth() + 1
        )}.${new Date().getFullYear()}`,
        id: 0,
        image: "https://via.placeholder.com/300x500",
      });
    }
    setChangedData({ title: "", text: "" });
  }

  const editHandler = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    id: number
  ) => {
    const editingArticle = refreshInfo?.otherNews.filter((item: IList) => {
      return item.id === id;
    })[0];
    setChangedData({
      title: editingArticle?.title!,
      text: editingArticle?.text!,
    });
    setEditCurrentNews(id);
  };

  function handleDelete(e: React.MouseEvent<HTMLDivElement>, id: number) {
    deleteHandler(id);
    setEditCurrentNews(0);
    setChangedData({ title: "", text: "" });
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.titleMobile}>
          {refreshInfo?.currentNews?.title}
        </h3>
        <section className={styles.newsContainer}>
          {edit ? (
            <div className={styles.downloadBlock}></div>
          ) : (
            <img
              src={refreshInfo?.currentNews?.image}
              alt=""
              className={styles.image}
            />
          )}
          {edit ? (
            <div className={styles.block}>
              <section className={styles.textBlock}>
                <input
                  type="text"
                  onChange={(e) => changeHandler(e)}
                  className={styles.titleInput}
                  value={changedData.title}
                  name="title"
                />
                <textarea
                  value={changedData.text}
                  rows={15}
                  onChange={(e) => changeHandler(e)}
                  className={styles.textInput}
                  name="text"
                />
              </section>
              {editCurrentNews ? (
                <p
                  onClick={() => pushOne()}
                  className={`${styles.date} ${styles.cursor}`}
                >
                  Редактировать новость
                </p>
              ) : (
                <p
                  onClick={() => pushOne()}
                  className={`${styles.date} ${styles.cursor}`}
                >
                  Добавить новость
                </p>
              )}
            </div>
          ) : (
            <div className={styles.block}>
              <section className={styles.textBlock}>
                <h3 className={styles.title}>
                  {refreshInfo?.currentNews?.title}
                </h3>
                <p className={styles.text}>{refreshInfo?.currentNews?.text}</p>
              </section>
              <p className={styles.date}>{refreshInfo?.currentNews?.date}</p>
            </div>
          )}
        </section>
        <NewsList
          title={edit ? "Удаление" : "Другие новости"}
          showMore={(e) => showMoreHandler(e)}
          editNews={editHandler}
          deleteNews={handleDelete}
          info={refreshInfo?.otherNews}
        />
      </div>
    </div>
  );
};

export default NewsPage;
