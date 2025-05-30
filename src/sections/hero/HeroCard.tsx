const HeroCard = ({ icon, text }: { icon: any; text: string }) => {
  return (
    <div className=" grid justify-items-center items-center rounded-xl p-4 text-6xl gap-2">
      <div>{icon}</div>
      <span className="text-lg text-center">{text}</span>
    </div>
  );
};

export default HeroCard;
