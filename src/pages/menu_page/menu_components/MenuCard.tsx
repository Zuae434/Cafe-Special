type MenuCardProps = {
  image: string;
  title: string;
  subtitle: string;
};

const MenuCard: React.FC<MenuCardProps> = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-[372px] h-[450px] rounded-[50px] overflow-hidden shadow-lg m-10 hover:scale-110 transition-all duration-300 ease-in-out">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col justify-end items-center h-full p-6 bg-gradient-to-t from-black/60 to-transparent text-white space-y-4">
        <h3 className="font-georgia text-2xl font-bold">{title}</h3>
        <p className="text-lg mb-2 font-georgia">{subtitle}</p>
        <p className="text-xl font-semibold mb-4 font-georgia">$6.00</p>
        <button className="self-center px-6 py-2 rounded-[80px] border-3 border-[#A6AA70] bg-white text-[#764D3D] font-georgia font-bold hover:bg-[#A6AA70] hover:text-white transition cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
