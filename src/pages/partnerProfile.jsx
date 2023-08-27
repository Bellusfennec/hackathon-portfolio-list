import MainLayout from "../layouts/mainLayout";
import db from "../db";
import { Navigate, useParams } from "react-router-dom";
import H1 from "../common/components/h1";
import Name from "../common/components/card/name";
import Age from "../common/components/card/age";
import Badge from "../common/components/badge";
import SocialList from "../common/components/card/socialsList";
import ImpactsList from "../common/components/card/impactsList";
import SkillsList from "../common/components/card/skillsList";
import Info from "../common/components/card/info";
import Border from "../common/components/contaner/border";
import Reviews from "../common/components/reviews";

const PartnerProfile = () => {
  const { id } = useParams();
  const { partners } = db;
  const partner = partners.find((p) => p.id === Number(id));
  if (!partner) return <Navigate to="/" />;

  const { firstName, lastName, age, image, info } = partner;
  const { impacts, socials, position, skills } = partner;
  const reviews = [
    { reviewId: 1, name: "Андрей Кутузов", rating: 5, text: "Хорошая работа Олег) Ой, т.е. Андрей.", date: "27.08.2023" },
    { reviewId: 2, name: "Иван Иванов", rating: 3, text: "Работа выполнена на среднем уровне. Были некоторые недочеты, но в целом я доволен результатом.", date: "15.06.2023" },
    { reviewId: 3, name: "Екатерина Смирнова", rating: 4, text: "Отличная работа! Профессиональный подход и качественное исполнение. Благодарю за отличный результат.", date: "03.09.2023" },
    { reviewId: 4, name: "Алексей Петров", rating: 2, text: "Я ожидал лучшего качества работы. Некоторые моменты вызвали недовольство. Надеюсь, что в будущем будут учтены все замечания.", date: "29.05.2023" },
    { reviewId: 5, name: "Мария Сидорова", rating: 5, text: "Великолепная работа! Все было сделано на высшем уровне. Я очень довольна результатом и с удовольствием рекомендую вашу работу другим.", date: "18.07.2023" },
    { reviewId: 6, name: "Дмитрий Лебедев", rating: 1, text: "Я очень разочарован результатом работы. Качество оставляет желать лучшего и есть много недочетов. Не рекомендую.", date: "07.04.2023" },
    { reviewId: 7, name: "Анна Ковалева", rating: 4, text: "Отличный сервис и качество работы. Все выполнено в срок и с учетом всех моих пожеланий. Большое спасибо!", date: "22.09.2023" },
    { reviewId: 8, name: "Максим Козлов", rating: 5, text: "Я полностью удовлетворен результатом работы. Все выполнено на высшем уровне. Было приятно сотрудничать с вами.", date: "11.08.2023" },
    { reviewId: 9, name: "Алина Морозова", rating: 3, text: "Работа выполнена на среднем уровне. Были некоторые недочеты, но в целом я довольна результатом.", date: "26.10.2023" },
    { reviewId: 10, name: "Егор Николаев", rating: 2, text: "Не рекомендую данный сервис. Качество работы оставляет желать лучшего и есть некоторые недочеты.", date: "09.03.2023" },
    { reviewId: 11, name: "Ольга Васильева", rating: 5, text: "Отличное обслуживание и качество работы. Результат превзошел все мои ожидания. Большое спасибо!", date: "04.12.2023" },
    { reviewId: 12, name: "Игорь Андреев", rating: 4, text: "Работой очень доволен, спасибо! Все выполнено в срок и с учетом всех моих пожеланий.", date: "19.01.2023" },
    { reviewId: 13, name: "Александр Иванов", rating: 3, text: "Отличная работа! Все выполнено в срок и с учетом всех моих пожеланий. Благодарю за профессиональный подход!", date: "05.07.2023" },
    { reviewId: 14, name: "Елена Смирнова", rating: 5, text: "Я очень довольна результатом работы. Все выполнено на высшем уровне. Большое спасибо за качественное исполнение!", date: "29.09.2023" },
    { reviewId: 15, name: "Дмитрий Петров", rating: 2, text: "Работа оставляет желать лучшего. Были некоторые недочеты, которые могли бы быть исправлены. Не рекомендую.", date: "13.03.2023" },
    { reviewId: 16, name: "Ольга Сидорова", rating: 4, text: "Работа выполнена на хорошем уровне. Были некоторые недочеты, но в целом я довольна результатом. Спасибо!", date: "21.11.2023" },
    { reviewId: 17, name: "Андрей Лебедев", rating: 1, text: "Я разочарован результатом работы. Качество оставляет желать лучшего и есть много недочетов. Не рекомендую.", date: "07.06.2023" },
    { reviewId: 18, name: "Мария Ковалева", rating: 4, text: "Отличная работа! Все выполнено в срок и с учетом всех моих пожеланий. Я очень довольна результатом и с удовольствием рекомендую вашу работу другим.", date: "16.02.2023" },
    { reviewId: 19, name: "Алексей Козлов", rating: 5, text: "Я полностью доволен результатом работы. Все выполнено на высшем уровне. Было приятно сотрудничать с вами. Большое спасибо!", date: "09.09.2023" },
    { reviewId: 20, name: "Алина Морозова", rating: 3, text: "Работа выполнена на среднем уровне. Были некоторые недочеты, но в целом я довольна результатом. Спасибо за вашу работу!", date: "02.12.2023" },
    { reviewId: 21, name: "Иван Николаев", rating: 2, text: "Не рекомендую данный сервис. Качество работы оставляет желать лучшего и есть некоторые недочеты. Больше ожидал.", date: "17.05.2023" },
    { reviewId: 22, name: "Екатерина Васильева", rating: 5, text: "Отличное обслуживание и качество работы. Результат превзошел все мои ожидания. Большое спасибо за вашу работу!", date: "30.08.2023" },
    { reviewId: 23, name: "Максим Андреев", rating: 4, text: "Работа выполнена на высоком уровне. Все было сделано в срок и с учетом всех моих пожеланий. Я доволен результатом.", date: "11.04.2023" },
    { reviewId: 24, name: "Алексей Иванов", rating: 2, text: "Работой не доволен. Много недочетов и не все было выполнено в срок. Результат оставляет желать лучшего.", date: "14.05.2023" },
    { reviewId: 25, name: "Екатерина Смирнова", rating: 5, text: "Очень довольна работой. Все выполнено на высшем уровне и в срок. Большое спасибо за профессионализм!", date: "27.07.2023" },
    { reviewId: 26, name: "Дмитрий Петров", rating: 3, text: "Работа выполнена на среднем уровне. Есть некоторые недочеты, но в целом я доволен результатом. Спасибо!", date: "03.09.2023" },
    { reviewId: 27, name: "Ольга Сидорова", rating: 4, text: "Работа выполнена на хорошем уровне. Все было сделано в срок и с учетом моих пожеланий. Я довольна результатом.", date: "19.11.2023" },
    { reviewId: 28, name: "Андрей Лебедев", rating: 1, text: "Не рекомендую данную работу. Качество оставляет желать лучшего и есть много недочетов. Результат не соответствует ожиданиям.", date: "05.02.2023" },
    { reviewId: 29, name: "Мария Ковалева", rating: 4, text: "Отличная работа! Все выполнено в срок и с учетом моих пожеланий. Я очень довольна результатом и рекомендую вашу работу другим.", date: "22.04.2023" },
    { reviewId: 30, name: "Алексей Козлов", rating: 5, text: "Я полностью доволен результатом работы. Все выполнено на высшем уровне. Было приятно сотрудничать с вами. Большое спасибо!", date: "08.08.2023" },
    { reviewId: 31, name: "Алина Морозова", rating: 3, text: "Работа выполнена на среднем уровне. Были некоторые недочеты, но в целом я довольна результатом. Спасибо за вашу работу!", date: "25.10.2023" },
    { reviewId: 32, name: "Иван Николаев", rating: 2, text: "Не рекомендую данную работу. Качество оставляет желать лучшего и есть некоторые недочеты. Результат не удовлетворил.", date: "10.01.2023" },
    { reviewId: 33, name: "Екатерина Васильева", rating: 5, text: "Отличное обслуживание и качество работы. Результат превзошел все мои ожидания. Большое спасибо за вашу работу!", date: "28.03.2023" },
    { reviewId: 34, name: "Максим Андреев", rating: 4, text: "Работа выполнена на высоком уровне. Все было сделано в срок и с учетом всех моих пожеланий. Я доволен результатом.", date: "15.06.2023" }
  ];
  return (
    <MainLayout>
      <H1>Партнёр</H1>
      <br />
      <Border className="p-5">
        <div className="flex flex-col min-[480px]:flex-row">
          <img
            className="object-cover w-full rounded-lg h-96 min-[480px]:h-auto min-[480px]:w-40 sm:w-48"
            src={`/images/${image}`}
            alt={`Фото ${firstName}`}
          />
          <div className="flex flex-col justify-between min-[480px]:justify-center pt-5 min-[480px]:pl-5">
            <Name firstName={firstName} lastName={lastName} position={position}>
              <Badge color={position.color} size="sm">
                {position.name}
              </Badge>
            </Name>
            <Age age={age} />
            <Info info={info} />
            <SocialList socials={socials} />
          </div>
        </div>
        <br />
        <SkillsList skills={skills} />
        <br />
        <ImpactsList impacts={impacts} />
      </Border>
      <Reviews reviews={reviews} />
    </MainLayout>
  );
};
export default PartnerProfile;
