import "@/components/header/InfoElement.style.scss"

const InfoElement = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="info">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};
export default InfoElement;
