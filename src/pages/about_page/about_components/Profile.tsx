type ProfileProps = {
  image: string;
  name: string;
  description: string;
};

const Profile: React.FC<ProfileProps> = ({ image, name, description }) => {
  return (
    <div className="container mx-auto flex flex-start m-10 pl-20 max-w-[1100px] gap-10 font-georgia">
      <img src={image} alt={name} className="w-[250px] h-[350px]" />
      <div className="flex flex-col max-w-[600px] justify-center">
        <h1 className="text-2xl mb-[25px]">{name}</h1>
        <p className="indent-5">{description}</p>
      </div>
    </div>
  );
};

export default Profile;
