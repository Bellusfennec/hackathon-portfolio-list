const db = {
  partners: [
    {
      id: 1,
      firstName: "Нияз",
      lastName: "Зайцев",
      age: 31,
      image: "89993415.jpeg",
      info: "Живу в Казани. Люблю компьютерные игры. Иногда бегаю.",
      position: { name: "Team Leader", color: "red" },
      socials: [
        { id: 1, name: "GitHub", link: "https://github.com/Bellusfennec" },
        { id: 2, name: "VK", link: "https://vk.com/bellusfennec" }
      ],
      impacts: [
        { id: 1, name: "layouts" },
        { id: 2, name: "pages" },
        { id: 3, name: "navbar" },
        { id: 4, name: "loading" },
        { id: 5, name: "card" },
        { id: 6, name: "localStorageService" },
        { id: 7, name: "useFavorites" },
        { id: 8, name: "badge" },
        { id: 9, name: "profile" },
        { id: 10, name: "pagination" }
      ],
      skills: [
        {
          id: 1,
          name: "CSS",
          percent: 85,
          darkColor: "#7309AA",
          lightColor: "#E4B3FC"
        },
        {
          id: 2,
          name: "Javascript",
          percent: 75,
          darkColor: "#FFC602FF",
          lightColor: "#FDF1C1"
        },
        {
          id: 3,
          name: "React",
          percent: 70,
          darkColor: "#0A67A3",
          lightColor: "#B9C2FC"
        }
      ],
      portfolio: ["/images/1.png", "/images/2.png", "/images/3.png"],
      reviews: [
        {
          reviewId: 23,
          name: "Максим Андреев",
          rating: 4,
          text: "Работа выполнена на высоком уровне. Все было сделано в срок и с учетом всех моих пожеланий. Я доволен результатом.",
          date: "11.04.2023"
        },
        {
          reviewId: 24,
          name: "Алексей Иванов",
          rating: 2,
          text: "Работой не доволен. Много недочетов и не все было выполнено в срок. Результат оставляет желать лучшего.",
          date: "14.05.2023"
        },
        {
          reviewId: 25,
          name: "Екатерина Смирнова",
          rating: 5,
          text: "Очень довольна работой. Все выполнено на высшем уровне и в срок. Большое спасибо за профессионализм!",
          date: "27.07.2023"
        },
        {
          reviewId: 26,
          name: "Дмитрий Петров",
          rating: 3,
          text: "Работа выполнена на среднем уровне. Есть некоторые недочеты, но в целом я доволен результатом. Спасибо!",
          date: "03.09.2023"
        },
        {
          reviewId: 27,
          name: "Ольга Сидорова",
          rating: 4,
          text: "Работа выполнена на хорошем уровне. Все было сделано в срок и с учетом моих пожеланий. Я довольна результатом.",
          date: "19.11.2023"
        },
        {
          reviewId: 28,
          name: "Андрей Лебедев",
          rating: 1,
          text: "Не рекомендую данную работу. Качество оставляет желать лучшего и есть много недочетов. Результат не соответствует ожиданиям.",
          date: "05.02.2023"
        },
        {
          reviewId: 29,
          name: "Мария Ковалева",
          rating: 4,
          text: "Отличная работа! Все выполнено в срок и с учетом моих пожеланий. Я очень довольна результатом и рекомендую вашу работу другим.",
          date: "22.04.2023"
        },
        {
          reviewId: 30,
          name: "Алексей Козлов",
          rating: 5,
          text: "Я полностью доволен результатом работы. Все выполнено на высшем уровне. Было приятно сотрудничать с вами. Большое спасибо!",
          date: "08.08.2023"
        },
        {
          reviewId: 31,
          name: "Алина Морозова",
          rating: 3,
          text: "Работа выполнена на среднем уровне. Были некоторые недочеты, но в целом я довольна результатом. Спасибо за вашу работу!",
          date: "25.10.2023"
        },
        {
          reviewId: 32,
          name: "Иван Николаев",
          rating: 2,
          text: "Не рекомендую данную работу. Качество оставляет желать лучшего и есть некоторые недочеты. Результат не удовлетворил.",
          date: "10.01.2023"
        },
        {
          reviewId: 33,
          name: "Екатерина Васильева",
          rating: 5,
          text: "Отличное обслуживание и качество работы. Результат превзошел все мои ожидания. Большое спасибо за вашу работу!",
          date: "28.03.2023"
        },
        {
          reviewId: 34,
          name: "Максим Андреев",
          rating: 4,
          text: "Работа выполнена на высоком уровне. Все было сделано в срок и с учетом всех моих пожеланий. Я доволен результатом.",
          date: "15.06.2023"
        }
      ]
    },
    {
      id: 2,
      firstName: "Андрей",
      lastName: "Кутузов",
      age: 18,
      image: "52581965.jpeg",
      info: "О себе (2-3 предложения)",
      position: { name: "Frontend Developer", color: "indigo" },
      socials: [
        { id: 1, name: "GitHub", link: "https://github.com/Andrey999K" }
      ],
      impacts: [
        { id: 1, name: "progress" },
        { id: 2, name: "slider" },
        { id: 3, name: "rewiew" }
      ],
      skills: [
        {
          id: 1,
          name: "CSS",
          percent: 90,
          darkColor: "#7309AA",
          lightColor: "#E4B3FC"
        },
        {
          id: 2,
          name: "Javascript",
          percent: 80,
          darkColor: "#FFC602FF",
          lightColor: "#FDF1C1"
        },
        {
          id: 3,
          name: "React",
          percent: 70,
          darkColor: "#0A67A3",
          lightColor: "#B9C2FC"
        }
      ],
      portfolio: [
        "https://andrey999k.github.io/Portfolio/build/images/wild-acation-1440.webp",
        "https://andrey999k.github.io/Portfolio/build/images/newchurchill.ru-1440.webp",
        "https://andrey999k.github.io/Portfolio/build/images/news-page-1440.webp",
        "https://andrey999k.github.io/Portfolio/build/images/yoga-1440.webp",
        "https://andrey999k.github.io/Portfolio/build/images/delivery-food-1440.jpg",
        "https://andrey999k.github.io/Portfolio/build/images/batman-promo-1440.jpg"
      ],
      reviews: [
        {
          id: 11,
          name: "Ольга Васильева",
          rating: 5,
          text: "Отличное обслуживание и качество работы. Результат превзошел все мои ожидания. Большое спасибо!",
          date: "04.12.2023"
        },
        {
          id: 12,
          name: "Игорь Андреев",
          rating: 4,
          text: "Работой очень доволен, спасибо! Все выполнено в срок и с учетом всех моих пожеланий.",
          date: "19.01.2023"
        },
        {
          id: 13,
          name: "Александр Иванов",
          rating: 3,
          text: "Отличная работа! Все выполнено в срок и с учетом всех моих пожеланий. Благодарю за профессиональный подход!",
          date: "05.07.2023"
        },
        {
          id: 14,
          name: "Елена Смирнова",
          rating: 5,
          text: "Я очень довольна результатом работы. Все выполнено на высшем уровне. Большое спасибо за качественное исполнение!",
          date: "29.09.2023"
        },
        {
          id: 15,
          name: "Дмитрий Петров",
          rating: 2,
          text: "Работа оставляет желать лучшего. Были некоторые недочеты, которые могли бы быть исправлены. Не рекомендую.",
          date: "13.03.2023"
        },
        {
          id: 16,
          name: "Ольга Сидорова",
          rating: 4,
          text: "Работа выполнена на хорошем уровне. Были некоторые недочеты, но в целом я довольна результатом. Спасибо!",
          date: "21.11.2023"
        },
        {
          id: 17,
          name: "Андрей Лебедев",
          rating: 1,
          text: "Я разочарован результатом работы. Качество оставляет желать лучшего и есть много недочетов. Не рекомендую.",
          date: "07.06.2023"
        },
        {
          id: 18,
          name: "Мария Ковалева",
          rating: 4,
          text: "Отличная работа! Все выполнено в срок и с учетом всех моих пожеланий. Я очень довольна результатом и с удовольствием рекомендую вашу работу другим.",
          date: "16.02.2023"
        },
        {
          id: 19,
          name: "Алексей Козлов",
          rating: 5,
          text: "Я полностью доволен результатом работы. Все выполнено на высшем уровне. Было приятно сотрудничать с вами. Большое спасибо!",
          date: "09.09.2023"
        },
        {
          id: 20,
          name: "Алина Морозова",
          rating: 3,
          text: "Работа выполнена на среднем уровне. Были некоторые недочеты, но в целом я довольна результатом. Спасибо за вашу работу!",
          date: "02.12.2023"
        },
        {
          id: 21,
          name: "Иван Николаев",
          rating: 2,
          text: "Не рекомендую данный сервис. Качество работы оставляет желать лучшего и есть некоторые недочеты. Больше ожидал.",
          date: "17.05.2023"
        },
        {
          id: 22,
          name: "Екатерина Васильева",
          rating: 5,
          text: "Отличное обслуживание и качество работы. Результат превзошел все мои ожидания. Большое спасибо за вашу работу!",
          date: "30.08.2023"
        }
      ]
    },
    {
      id: 3,
      firstName: "Алмаз",
      lastName: "Кубакаев",
      age: 51,
      image: "90685957.jpeg",
      info: "Живу в Бишкеке. Люблю читать книги. Нравится отдых на природе.",
      position: { name: "Frontend Developer", color: "indigo" },
      socials: [
        { id: 1, name: "GitHub", link: "https://github.com/Almaz2607" }
      ],
      impacts: [{ id: 1, name: "breadCrumbs" }],
      skills: [
        {
          id: 1,
          name: "CSS",
          percent: 70,
          darkColor: "#7309AA",
          lightColor: "#E4B3FC"
        },
        {
          id: 2,
          name: "Javascript",
          percent: 80,
          darkColor: "#FFC602FF",
          lightColor: "#FDF1C1"
        },
        {
          id: 3,
          name: "React",
          percent: 80,
          darkColor: "#0A67A3",
          lightColor: "#B9C2FC"
        }
      ],
      portfolio: [],
      reviews: [
        {
          reviewId: 1,
          name: "Андрей Кутузов",
          rating: 5,
          text: "Хорошая работа Олег) Ой, т.е. Андрей.",
          date: "27.08.2023"
        },
        {
          reviewId: 2,
          name: "Иван Иванов",
          rating: 3,
          text: "Работа выполнена на среднем уровне. Были некоторые недочеты, но в целом я доволен результатом.",
          date: "15.06.2023"
        },
        {
          reviewId: 3,
          name: "Екатерина Смирнова",
          rating: 4,
          text: "Отличная работа! Профессиональный подход и качественное исполнение. Благодарю за отличный результат.",
          date: "03.09.2023"
        },
        {
          reviewId: 4,
          name: "Алексей Петров",
          rating: 2,
          text: "Я ожидал лучшего качества работы. Некоторые моменты вызвали недовольство. Надеюсь, что в будущем будут учтены все замечания.",
          date: "29.05.2023"
        },
        {
          reviewId: 5,
          name: "Мария Сидорова",
          rating: 5,
          text: "Великолепная работа! Все было сделано на высшем уровне. Я очень довольна результатом и с удовольствием рекомендую вашу работу другим.",
          date: "18.07.2023"
        },
        {
          reviewId: 6,
          name: "Дмитрий Лебедев",
          rating: 1,
          text: "Я очень разочарован результатом работы. Качество оставляет желать лучшего и есть много недочетов. Не рекомендую.",
          date: "07.04.2023"
        },
        {
          reviewId: 7,
          name: "Анна Ковалева",
          rating: 4,
          text: "Отличный сервис и качество работы. Все выполнено в срок и с учетом всех моих пожеланий. Большое спасибо!",
          date: "22.09.2023"
        },
        {
          reviewId: 8,
          name: "Максим Козлов",
          rating: 5,
          text: "Я полностью удовлетворен результатом работы. Все выполнено на высшем уровне. Было приятно сотрудничать с вами.",
          date: "11.08.2023"
        },
        {
          reviewId: 9,
          name: "Алина Морозова",
          rating: 3,
          text: "Работа выполнена на среднем уровне. Были некоторые недочеты, но в целом я довольна результатом.",
          date: "26.10.2023"
        },
        {
          reviewId: 10,
          name: "Егор Николаев",
          rating: 2,
          text: "Не рекомендую данный сервис. Качество работы оставляет желать лучшего и есть некоторые недочеты.",
          date: "09.03.2023"
        }
      ]
    }
  ]
};
export default db;
