interface Props {
  name: string;
}

const TechBadge = ({ name }: Props) => {
  return (
    <span className="text-purple0 bg-purple5/80 text-sm py-1 px-3 rounded-lg ">
      {name}
    </span>
  );
};

export default TechBadge;
