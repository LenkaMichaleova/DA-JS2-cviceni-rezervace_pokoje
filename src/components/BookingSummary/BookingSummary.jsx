import { Cancel } from "../Cancel/Cancel";
import { Detail } from "../Detail/Detail";
import { Header } from "../Header/Header";
import { Services } from "../Services/Services";

export const BookingSummary = ({ bookingData }) => {
  const { title, photo, hotel, room, detail, services, cancel } = bookingData;

  return (
    <div className="summary">
      <Header title={title} photo={photo} hotel={hotel} room={room} />
      <Detail {...detail} />
      <Services {...services} />
      <Cancel {...cancel} />
    </div>
  );
};

// export const BookingSummary = () => {
//   return (
//     <div className="summary">
//       <Header
//         title={bookingData.title}
//         photo={bookingData.photo}
//         hotel={bookingData.hotel}
//         room={bookingData.room}
//       />
//       <Detail
//         title={bookingData.detail.title}
//         number={bookingData.detail.number}
//         dates={bookingData.detail.dates}
//         guests={bookingData.detail.guests}
//         catering={bookingData.detail.catering}
//         total={bookingData.detail.total}
//         checkIn={bookingData.detail.checkIn}
//         checkOut={bookingData.detail.checkOut}
//       />
//       <Services
//         title={bookingData.services.title}
//         items={bookingData.services.items}
//       />
//       <Cancel
//         title={bookingData.cancel.title}
//         paragraphs={bookingData.cancel.paragraphs}
//       />
//     </div>
//   );
// };