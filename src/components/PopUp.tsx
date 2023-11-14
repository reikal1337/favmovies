import { Link } from "react-router-dom";

type Props = {
  closeLink: string,
  children: React.ReactNode,
};
// { onOpen, onClose, children}: Props
const PopUp = ({ closeLink, children }: Props) => (
  <div className=" fixed inset-0 flex justify-center items-center ">
    <Link
      to={closeLink}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-80" />
    </Link>

    <div className="relative">
      {children}
    </div>
  </div>
);

export default PopUp;