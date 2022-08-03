import React, { FC } from "react";

import { useNavigate } from "react-router-dom";

import { IList } from "../../../newsPage/NewsArray";

import SubmitButton from "../../../../components/submitButton/SubmitButton";

import styles from "./newList.module.scss";

interface INewsList {
  title: "Другие новости" | "Новости" | "Удаление";
  info: IList[] | null | undefined;
  showMore?: (e: React.SyntheticEvent) => void;
  editNews?: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    id: number
  ) => void | undefined;
  deleteNews?: (e: React.MouseEvent<HTMLDivElement>, id: number) => void;
}

const NewsList: FC<INewsList> = ({
  title = "Новости",
  info,
  showMore,
  editNews,
  deleteNews,
}) => {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      {title !== undefined && (
        <h1
          className={
            title === "Новости" ? styles.headerMain : styles.headerCurrentNews
          }
        >
          {title}
        </h1>
      )}

      {info &&
        info.map((item: IList) => (
          <div
            onClick={() => navigate(`/news/${item.id}`)}
            key={item.id}
            className={styles.imageBlock}
          >
            {title === "Удаление" && (
              <div
                onClick={(e) => deleteNews && deleteNews(e, item.id)}
                className={`${styles.cross} ${styles.cursor}`}
              >
                X
              </div>
            )}
            <div
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className={
                title === undefined
                  ? `${styles.infoBlock} ${styles.lost}`
                  : `${styles.infoBlock}`
              }
            >
              <div className={styles.titleBlock}>
                <h3 className={styles.title}>{item.title}</h3>
              </div>

              <div className={styles.info}>
                {title === "Удаление" ? (
                  <p
                    onClick={(e) => editNews && editNews(e, item.id)}
                    className={`${styles.read} ${styles.cursor}`}
                  >
                    Редактировать
                  </p>
                ) : (
                  <p className={styles.read}>Читать</p>
                )}

                <p className={styles.date}>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      {title === "Другие новости" && showMore && (
        <div className={styles.buttonBlock}>
          <div>
            <SubmitButton onClick={showMore} text={"Еще новости"} />
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsList;
