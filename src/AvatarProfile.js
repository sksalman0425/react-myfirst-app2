import Avatar from "./Avatar";
//here we are directly passing all props attribute as it is to Avatar component.
export default function AvatarProfile(props) {
  return (
    <>
      <Avatar {...props} />
    
    </>
  );
}
