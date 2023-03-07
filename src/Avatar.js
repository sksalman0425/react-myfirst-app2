export default function Avatar({ person, size = 100 }) {
  // const [person,size=100]=props;
  //here if size attribute value is not passed then by default it takes 100.
    return (
      <img
        className="avatar"
        src={`https://i.imgur.com/${person.imageId}.jpg`}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }