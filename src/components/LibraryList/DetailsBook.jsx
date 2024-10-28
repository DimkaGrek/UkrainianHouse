export const DetailsBook = () => {
  return (
    <div className="flex justify-center items-center gap-[25px]">
      <div>
        <header>
          <h1 id="book-title">Вибрані твори</h1>
          <h2>Михайло Коцюбинський</h2>
          <p>
            <strong>Жанр:</strong> поезія
          </p>
        </header>

        <article>
          <h3>Опис книги</h3>
          <p>
            «Вибрані твори» Михайла Коцюбинського – це збірка, що знайомить
            читача з найкращими й найвідомішими творами видатного українського
            письменника. До неї увійшли такі шедеври:
          </p>
          <ul>
            <li>
              <strong>«Тіні забутих предків»</strong> – містична повість про
              життя гуцулів, сповнена фольклорних мотивів та опису природи
              Карпат.
            </li>
            <li>
              <strong>«Intermezzo»</strong> – психологічна повість, що досліджує
              глибини людських почуттів та переживань на тлі гармонії природи.
            </li>
            <li>
              <strong>«Оповідання»</strong> – добірка оповідань, що розкривають
              різні аспекти життя українського села та змальовують психологічні
              портрети селян.
            </li>
          </ul>
        </article>

        <aside>
          <h3>Інформація про книгу</h3>
          <ul>
            <li>
              <strong>Сторінок:</strong> 475
            </li>
            <li>
              <strong>Рік видання:</strong> 2018
            </li>
          </ul>
        </aside>
      </div>

      <img
        src="https://biblioteka.cdu.edu.ua/images/prosvrobota/kotsubinskii/image024.jpg"
        alt={` Image with a book cover `}
        width="238"
        height="238"
        loading="lazy"
      />
    </div>
  );
};
