const PriceHistory = ({ priceHistory }) => {
  return (
    <div className="mt-4">
      <ul className="mt-2">
        {priceHistory.map((history, index) => (
          <li key={index}>
            <span className="text-white font-semibold text-md mb-2">
              ₹{history.price}
            </span>
            - <span>{new Date(history.checkedAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceHistory;
