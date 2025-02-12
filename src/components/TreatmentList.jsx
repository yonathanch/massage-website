import TreatmeantCard from "./TreatmentCard";
  
  const TreatmentList = ({ products, limit }) => {
    if (!Array.isArray(products)) {
      console.error("Error: products is not an array", products);
      return <p className="text-red-500 hidden">No treatments available.</p>;
    }
    const displayedProducts = limit ? products.slice(0, limit) : products;

    return (
      <div className="flex flex-wrap justify-center gap-6 p-10">
        {displayedProducts.map((products) => (
          <TreatmeantCard key={products.id} {...products} />
        ))}
        
      </div>
      
    );
  };
  
  export default TreatmentList;