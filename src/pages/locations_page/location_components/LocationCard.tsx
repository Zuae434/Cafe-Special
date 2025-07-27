type LocationProps = {
  image: string;
  title: string;
  location: string;
  phone: string;
  hours: string;
};

const LocationPin = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
  >
    <path
      d="M17.5 7.62871C16.45 3.00871 12.42 0.928711 8.87998 0.928711C8.87998 0.928711 8.87998 0.928711 8.86998 0.928711C5.33998 0.928711 1.29998 2.99871 0.249978 7.61871C-0.920022 12.7787 2.23998 17.1487 5.09998 19.8987C6.15998 20.9187 7.51998 21.4287 8.87998 21.4287C10.24 21.4287 11.6 20.9187 12.65 19.8987C15.51 17.1487 18.67 12.7887 17.5 7.62871ZM8.87998 12.6387C7.13998 12.6387 5.72998 11.2287 5.72998 9.48871C5.72998 7.74871 7.13998 6.33871 8.87998 6.33871C10.62 6.33871 12.03 7.74871 12.03 9.48871C12.03 11.2287 10.62 12.6387 8.87998 12.6387Z"
      fill="#F3B54A"
    />
  </svg>
);

const Phone = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="18"
    height="22"
  >
    <path
      d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"
      fill="#F3B54A"
    />
  </svg>
);

const Clock = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
  >
    <path
      d="M10 0.928711C4.49 0.928711 0 5.41871 0 10.9287C0 16.4387 4.49 20.9287 10 20.9287C15.51 20.9287 20 16.4387 20 10.9287C20 5.41871 15.51 0.928711 10 0.928711ZM14.35 14.4987C14.21 14.7387 13.96 14.8687 13.7 14.8687C13.57 14.8687 13.44 14.8387 13.32 14.7587L10.22 12.9087C9.45 12.4487 8.88 11.4387 8.88 10.5487V6.44871C8.88 6.03871 9.22 5.69871 9.63 5.69871C10.04 5.69871 10.38 6.03871 10.38 6.44871V10.5487C10.38 10.9087 10.68 11.4387 10.99 11.6187L14.09 13.4687C14.45 13.6787 14.57 14.1387 14.35 14.4987Z"
      fill="#F3B54A"
    />
  </svg>
);

const LocationCard: React.FC<LocationProps> = ({
  image,
  title,
  location,
  phone,
  hours,
}) => {
  return (
    <>
      <div className="">
        <img
          src={image}
          alt={title}
          className="w-[375px] h-[375px] mb-4 rounded-[200px_200px_0px_0px]"
        />
        <div className="flex flex-col max-w-[600px] justify-center mt-2">
          <h1 className="text-location-text text-2xl mb-[25px]">{title}</h1>
          <p className="flex flex-row gap-2 text-location-text">
            {LocationPin}
            {location}
          </p>
          <p className="flex flex-row gap-2 text-location-text mt-2">
            {Phone}
            {phone}
          </p>
          <p className="flex flex-row gap-2 text-location-text mt-2">
            {Clock}
            {hours}
          </p>
        </div>
      </div>
    </>
  );
};

export default LocationCard;
