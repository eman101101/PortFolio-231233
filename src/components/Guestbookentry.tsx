type GuestbookEntryProps = {
  entry: {
    name: string;
    message: string;
  };
};

const GuestbookEntry = ({ entry }: GuestbookEntryProps) => {
  return (
    <div className='mb-4 rounded-md bg-white p-4 shadow-md'>
      <h3 className='font-bold text-black'>{entry.name}</h3>
      <p className='text-grey'>{entry.message}</p>
    </div>
  );
};

export default GuestbookEntry;
