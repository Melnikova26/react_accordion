import SearchPage from "../searchPage/SearchPage";
import { IData } from "../../types";

const App: React.FC = () => {
  const data: IData[] = [
    {
      id: 1,
      title: "Очень интересный заголовок под номером 1",
      children: [
        {
          id: 2,
          title: "Оппенгеймер",
          children: [
            { id: 4, title: "Киллиан Мёрфи", children: [] },
            { id: 5, title: "Роберт Дауни — младший", children: [] },
          ],
        },
        {
          id: 3,
          title: "Барби",
          children: [
            { id: 6, title: "Марго Робби", children: [] },
            { id: 7, title: "Райан Гослинг", children: [] },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "А это уже заголовок под номером 2",
      children: [
        {
          id: 9,
          title: "Нобелевская премия",
          children: [
            { id: 10, title: "Ричард Фейнман", children: [] },
            {
              id: 11,
              title: "Мария Кюри",
              children: [{ id: 12, title: "Ирен Жолио-Кюри", children: [] }],
            },
          ],
        },
        {
          id: 13,
          title: "Apple",
          children: [
            { id: 14, title: "Стив Возняк", children: [] },
            { id: 15, title: "Стив Джобс", children: [] },
          ],
        },
      ],
    },
    {
      id: 16,
      title: "Заголовок №3",
      children: [
        {
          id: 17,
          title: "Подзаголовок здесь будет под номером 99",
          children: [
            { id: 18, title: "А тут 50", children: [] },
            { id: 19, title: "А тут 89", children: [] },
          ],
        },
      ],
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <SearchPage data={data} />
        </main>
      </header>
    </div>
  );
};

export default App;
