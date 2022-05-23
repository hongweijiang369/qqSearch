import "./public.css";
interface IProps {
  name: string;
  qlogo: string;
  qq: string;
}

function Result(props: IProps) {
  const { name, qlogo, qq } = props;
  return (
    <div>
      {qq ? (
        <div className="border-wrapper">
          <img src={qlogo} alt="头像" />
          <div>
            <span>{name}</span>
            <span>{qq}</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Result;
