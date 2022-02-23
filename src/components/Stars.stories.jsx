import Stars from "./Stars";
export default {
  title: "UI/Stars",
  component: Stars,
};

export const Default = (args) => {
  return (
    <div>
      Prend en paramètre une note sur 10 et la convertit sur 5. Et renvoie en
      nombre d'étoile la note
    </div>
  );
};
