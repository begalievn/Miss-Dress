import React from "react";

import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import classes from "../return.module.scss";

const ContentReturnProduct = () => {
  return (
    <div>
      <h1>Возврат товара</h1>
      <img
        src="https://rskrf.ru/upload/iblock/993/99397dcf8ac6f7d2ddc2dfd3fd3f8aaf.jpg"
        alt="return product"
      />
      <div className={classes.text}>
        <h3>Условия возврата товара</h3>
        <p>
          При приобретении товаров онлайн на MissDress.kg, срок возврата
          составляет 7 дней с момента получения заказа. Возвращаемые товары,
          должны быть чистыми и не ношенными. Сохраните на них все ярлыки.
        </p>
        <p>
          Товары купленные в интернет-магазине, не подлежат обмену, возможен
          только возврат.
        </p>
        <p>
          Товар, оформленный на сайте методом «Забрать из магазина» можно
          вернуть только в розничный магазин.
        </p>
      </div>
      <div className={classes.blocks}>
        <Accordion className={classes.main}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4 className={classes.first}>
              Возврат интернет-заказов в магазины собственной розничной сети
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Отнесите приобретенный товар в магазин MissDress, имея при
                  себе паспорт, кассовый чек и накладную, которая была приложена
                  к вашему заказу. При оплате заказа онлайн, следует иметь при
                  себе банковскую карту или устройство, которыми совершалась
                  оплата.
                </li>
                <li>
                  Подпишите заявление на возврат, которое вам подготовят
                  сотрудники магазина.
                </li>
                <li>
                  Денежные средства будут возвращены вам в течение 10
                  календарных дней, с момента получения нами вашего возврата на
                  банковскую карту.
                </li>
              </ul>
              <p>
                * Отсутствие кассового чека или накладной не является основанием
                для отказа в возврате, однако мы оставляем за собой право
                дополнительно удостовериться в том, что товар был приобретен в
                нашем магазине.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.main}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4 className={classes.first}>Возврат по почте</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Аккуратно упакуйте товар в оригинальную упаковку в полной
                  комплектации (товары, поставляемые в комплекте, следует
                  возвращать также в комплекте);
                </li>
                <li>Заполните заявление о возврате, приложенное к заказу;</li>
                <li>
                  Приложите копию кассового чека, укажите способ возврата
                  денежных средств (почтовый перевод или перечисление на
                  банковский счет с указанием реквизитов для перечисления);
                </li>
                <li>
                  Вышлите посылку почтой по адресу: 140961, Московский АСЦ, а/я
                  142.
                </li>
                <li>
                  Денежные средства будут возвращены вам в течение 10
                  календарных дней с даты получения нами возврата.
                </li>
                <li>
                  При возврате товара ненадлежащего качества (брак) будут также
                  возвращены расходы на обратную пересылку товара.
                </li>
              </ul>
              <div className={classes.warning}>
                <img
                  src="https://cdn.sela.ru/assets2/assets/img/wysiwyg-warning.svg"
                  alt=""
                />
                <div>
                  <p>
                    Обратите Ваше внимание! Данный способ применим только к
                    заказам, сделанным в интернет-магазине.
                  </p>
                  <p>
                    Товары, приобретенные в розничных магазинах, должны быть
                    возвращены в розничные магазины.
                  </p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.main}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4 className={classes.first}>
              Какие изделия не подлежат возврату?
            </h4>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <p>
              Все товары, приобретенные онлайн, можно вернуть в течение 7 дней
              со дня получения заказа. Возвращаемые товары должны быть
              надлежащего товарного вида с сохраненными ценниками и бирками.
              Поврежденные и товары в ненадлежащем виде будут возвращены
              покупателю без компенсации их стоимости.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.main}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4 className={classes.first}>
              Возврат товара, приобретенного в розничном магазине
            </h4>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Typography>
              <p>
                Вы можете произвести возврат товара (в случае, если товар не был
                в употреблении, сохранены фабричные ярлыки, товарный вид,
                потребительские свойства и т.п.) без указания причин в течение
                14 календарных дней с момента фактического получения товара.
              </p>
              <p>
                Обмен товара происходит через возврат. Покупка нового товара по
                обмену происходит по фактической стоимости товара.
              </p>
              <p>
                Если товар был оплачен наличными, вы можете осуществить возврат
                в любом магазине города приобретения товара.
              </p>
              <p>
                Если товар был оплачен банковской картой, вы можете осуществить
                возврат в любом магазине города приобретения товара. Вам также
                следует иметь при себе банковскую карту, которой вы оплачивали
                товар.
              </p>
              <ul>
                <li>
                  Посетите магазин MissDress, имея при себе возвращаемый товар,
                  паспорт и кассовый чек, банковскую карту, которой вы
                  оплачивали товар.
                </li>
                <li>
                  Подпишите заявление на возврат, которое вам подготовят
                  сотрудники магазина.
                </li>
                <li>
                  Денежные средства будут возвращены вам в течение 10
                  календарных дней с момента осуществления возврата на
                  банковскую карту.
                </li>
              </ul>
              <p>
                * Отсутствие кассового чека не является основанием для отказа в
                возврате. Сотрудники магазина вправе попросить вас иным образом
                удостоверить, что товар был приобретен в нашем магазине.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ContentReturnProduct;
