export const Header = ({ title, photo, hotel, room }) => {
  const { name: hotelName, address, city, rating } = hotel;
  const { name: roomName, type, price } = room;

  return (
    <>
      <h2>{title}</h2>
      <div className="summary__head">
        <img className="summary__photo" src={photo} alt="Hotel" />
        <div className="summary__head-property">
          <h3 className="summary__name">{hotelName}</h3>
          <div className="summary__adress">{address}</div>
          <div className="summary__city">{city}</div>
          <div className="summary__rating">{rating}</div>
        </div>
        <div className="summary__head-room">
          <h3 className="summary__name">{roomName}</h3>
          <div className="summary__room-type">{type}</div>
          <div className="summary__room-price">{price}</div>
        </div>
      </div>
    </>
  );
};

// export const Header = ({ title, photo, hotel, room }) => {
//   return (
//     <>
//       <h2>{title}</h2>
//       <div className="summary__head">
//         <img className="summary__photo" src={photo} alt={hotel.name} />
//         <div className="summary__head-property">
//           <h3 className="summary__name">{hotel.name}</h3>
//           <div className="summary__adress">{hotel.address}</div>
//           <div className="summary__city">{hotel.city}</div>
//           <div className="summary__rating">{hotel.rating}</div>
//         </div>
//         <div className="summary__head-room">
//           <h3 className="summary__name">{room.name}</h3>
//           <div className="summary__room-type">{room.type}</div>
//           <div className="summary__room-price">{room.price}</div>
//         </div>
//       </div>
//     </>
//   );
// };