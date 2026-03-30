const topicsData = {
  'js-basics': {
    title: 'Основы JavaScript',
    description:
      'Базовые задачи для старта: переменные, условия, простые функции, работа со значениями и основная логика JavaScript.',
    tasks: [
      {
        title: 'Проверка числа',
        description:
          'Напиши функцию, которая принимает число и возвращает строку: положительное, отрицательное или ноль.',
      },
      {
        title: 'Приветствие пользователя',
        description:
          'Напиши функцию, которая принимает имя и возвращает строку приветствия.',
      },
      {
        title: 'Чётное или нечётное',
        description:
          'Напиши функцию, которая проверяет, является ли число чётным.',
      },
    ],
  },

  arrays: {
    title: 'Массивы',
    description:
      'Задачи на перебор, поиск, фильтрацию, преобразование и базовую работу с массивами.',
    tasks: [
      {
        title: 'Сумма элементов массива',
        description:
          'Напиши функцию, которая принимает массив чисел и возвращает сумму всех элементов.',
      },
      {
        title: 'Поиск максимального значения',
        description:
          'Напиши функцию, которая находит самое большое число в массиве.',
      },
      {
        title: 'Фильтрация чётных чисел',
        description:
          'Напиши функцию, которая возвращает новый массив только с чётными числами.',
      },
    ],
  },

  objects: {
    title: 'Объекты',
    description:
      'Задачи на чтение свойств, сравнение объектов, создание новых объектов и работу с ключами.',
    tasks: [
      {
        title: 'Получение имени',
        description:
          'Напиши функцию, которая принимает объект пользователя и возвращает его имя.',
      },
      {
        title: 'Проверка свойства',
        description:
          'Напиши функцию, которая проверяет наличие нужного ключа в объекте.',
      },
      {
        title: 'Создание нового объекта',
        description:
          'Напиши функцию, которая создаёт новый объект на основе переданных данных.',
      },
    ],
  },

  functions: {
    title: 'Функции',
    description:
      'Темы про параметры, возвращаемые значения, переиспользование кода и композицию функций.',
    tasks: [
      {
        title: 'Сложение двух чисел',
        description:
          'Напиши функцию, которая принимает два числа и возвращает их сумму.',
      },
      {
        title: 'Функция с параметром по умолчанию',
        description:
          'Напиши функцию приветствия с параметром по умолчанию.',
      },
      {
        title: 'Проверка возраста',
        description:
          'Напиши функцию, которая возвращает true, если возраст пользователя больше или равен 18.',
      },
    ],
  },

  loops: {
    title: 'Циклы',
    description:
      'Практика for, while, for...of и задач на повторяющиеся действия.',
    tasks: [
      {
        title: 'Вывод чисел от 1 до 10',
        description:
          'Напиши цикл, который выводит числа от 1 до 10.',
      },
      {
        title: 'Подсчёт суммы',
        description:
          'Напиши функцию, которая через цикл считает сумму чисел от 1 до n.',
      },
      {
        title: 'Перебор массива',
        description:
          'Напиши цикл, который выводит каждый элемент массива отдельно.',
      },
    ],
  },

  strings: {
    title: 'Строки',
    description:
      'Задачи на длину строки, объединение, поиск символов и базовую обработку текста.',
    tasks: [
      {
        title: 'Длина строки',
        description:
          'Напиши функцию, которая возвращает длину переданной строки.',
      },
      {
        title: 'Первая буква',
        description:
          'Напиши функцию, которая возвращает первый символ строки.',
      },
      {
        title: 'Проверка подстроки',
        description:
          'Напиши функцию, которая проверяет, содержит ли строка заданное слово.',
      },
    ],
  },

  async: {
    title: 'Асинхронность',
    description:
      'Введение в асинхронное мышление: таймеры, ожидание операций и порядок выполнения кода.',
    tasks: [
      {
        title: 'Порядок вывода',
        description:
          'Разбери, в каком порядке выведутся сообщения при использовании setTimeout.',
      },
      {
        title: 'Задержка выполнения',
        description:
          'Сделай функцию, которая выводит сообщение через указанное количество миллисекунд.',
      },
      {
        title: 'Асинхронный сценарий',
        description:
          'Опиши пошагово, как выполняется код с обычными вызовами и setTimeout.',
      },
    ],
  },

  promises: {
    title: 'Promise / async-await',
    description:
      'Практика работы с Promise, await, обработкой ошибок и асинхронными цепочками.',
    tasks: [
      {
        title: 'Простой Promise',
        description:
          'Создай Promise, который успешно завершается и возвращает строку с результатом.',
      },
      {
        title: 'Async функция',
        description:
          'Напиши async-функцию, которая ждёт Promise и выводит результат.',
      },
      {
        title: 'Обработка ошибки',
        description:
          'Напиши пример с try...catch для обработки ошибки в async/await.',
      },
    ],
  },

  'node-basics': {
    title: 'Node.js основы',
    description:
      'Первые задачи по запуску Node.js, работе с файлами проекта и базовой серверной логике.',
    tasks: [
      {
        title: 'Первый скрипт на Node.js',
        description:
          'Создай файл, который выводит сообщение в консоль при запуске через node.',
      },
      {
        title: 'Аргументы командной строки',
        description:
          'Напиши скрипт, который читает аргументы из process.argv.',
      },
      {
        title: 'Работа с package.json',
        description:
          'Создай npm-скрипт для запуска своего файла.',
      },
    ],
  },

  'node-modules': {
    title: 'Модули Node.js',
    description:
      'Практика импорта, экспорта и разбиения логики на отдельные файлы.',
    tasks: [
      {
        title: 'Экспорт функции',
        description:
          'Создай модуль с функцией и импортируй его в главный файл.',
      },
      {
        title: 'Разделение логики',
        description:
          'Разбей один большой файл на два независимых модуля.',
      },
      {
        title: 'Утилита для вычислений',
        description:
          'Сделай модуль с математическими функциями и используй его в проекте.',
      },
    ],
  },

  fs: {
    title: 'Файловая система',
    description:
      'Задачи на чтение и запись файлов через встроенные возможности Node.js.',
    tasks: [
      {
        title: 'Чтение файла',
        description:
          'Напиши скрипт, который читает текстовый файл и выводит его содержимое.',
      },
      {
        title: 'Запись в файл',
        description:
          'Напиши скрипт, который создаёт новый файл и записывает туда текст.',
      },
      {
        title: 'Добавление данных',
        description:
          'Напиши пример, который дописывает новый текст в существующий файл.',
      },
    ],
  },

  express: {
    title: 'Express.js',
    description:
      'Базовые темы по маршрутам, ответам сервера и старту простого backend-приложения.',
    tasks: [
      {
        title: 'Первый маршрут',
        description:
          'Создай сервер на Express и маршрут GET / с текстовым ответом.',
      },
      {
        title: 'Маршрут с JSON',
        description:
          'Сделай маршрут, который возвращает JSON с данными пользователя.',
      },
      {
        title: 'Несколько страниц',
        description:
          'Добавь несколько маршрутов и разные ответы для каждого пути.',
      },
    ],
  },

  algorithms: {
    title: 'Алгоритмы',
    description:
      'Практика задач на логику, анализ данных, сортировки и работу с условиями.',
    tasks: [
      {
        title: 'Поиск минимума',
        description:
          'Напиши функцию, которая находит минимальное значение в массиве.',
      },
      {
        title: 'Разворот строки',
        description:
          'Напиши функцию, которая переворачивает строку.',
      },
      {
        title: 'Подсчёт повторений',
        description:
          'Напиши функцию, которая считает, сколько раз символ встречается в строке.',
      },
    ],
  },

  'data-structures': {
    title: 'Структуры данных',
    description:
      'Начальные задачи на стек, очередь и практику организации данных.',
    tasks: [
      {
        title: 'Простой стек',
        description:
          'Реализуй стек с операциями push и pop на массиве.',
      },
      {
        title: 'Очередь',
        description:
          'Реализуй очередь с добавлением в конец и извлечением из начала.',
      },
      {
        title: 'Проверка скобок',
        description:
          'Напиши функцию для проверки сбалансированности скобочной структуры.',
      },
    ],
  },
};

const topicButtons = document.querySelectorAll('.topic-link');
const topicTitle = document.getElementById('topicTitle');
const topicDescription = document.getElementById('topicDescription');
const tasksList = document.getElementById('tasksList');

const renderTasks = (tasks) => {
  tasksList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('article');
    taskItem.className = 'task-item';

    taskItem.innerHTML = `
      <span class="task-number">Задача ${index + 1}</span>
      <h3>${task.title}</h3>
      <p>${task.description}</p>
    `;

    tasksList.append(taskItem);
  });
};

const setActiveTopic = (topicKey) => {
  const topic = topicsData[topicKey];

  if (!topic) {
    return;
  }

  topicTitle.textContent = topic.title;
  topicDescription.textContent = topic.description;
  renderTasks(topic.tasks);

  topicButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.topic === topicKey);
  });
};

topicButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const topicKey = button.dataset.topic;
    setActiveTopic(topicKey);
  });
});