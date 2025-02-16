const TreatmeantCard = ({ image, title, description, price }) => {
  return (
    <>
      <div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-80">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-5 text-center">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm mt-2">{description}</p>
            <p className="text-lg font-bold text-[#C2A74E] mt-4 pb-5">
              ${price}
            </p>
            <a
              className="bg-[#C2A74E] text-white text-[10px] font-semibold px-[100px] py-[11px] transition-bg hover:bg-black hover:text-[#C2A74E] transition-colors duration-200 mt-4 w-full"
              href="https://wa.me/6282210833987?text=hello I want to order a Massage GI"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmeantCard;
