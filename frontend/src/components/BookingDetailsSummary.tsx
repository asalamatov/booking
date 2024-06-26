import { MeetingRoomType } from '../../../backend/src/shared/types';

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  // childCount: number;
  numberOfNights: number;
  hotel: MeetingRoomType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  // childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Reservation Details</h2>
      <div className="border-b py-2">
        Location:
        <div className="font-bold">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</div>
      </div>
      <div className="flex justify-between">
        <div>
          Reserve Start Date:
          <div className="font-bold"> {checkIn.toDateString()}</div>
        </div>
        <div>
          Reserve End Date:
          <div className="font-bold"> {checkOut.toDateString()}</div>
        </div>
      </div>
      <div className="border-t border-b py-2">
        Total length of reservation:
        <div className="font-bold">{numberOfNights} days</div>
      </div>

      <div>
        Guests{' '}
        <div className="font-bold">
          {adultCount} guests {/* {childCount} children */}
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
