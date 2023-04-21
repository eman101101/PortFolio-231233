import { useState } from 'react';

import GuestbookEntry from '../components/GuestbookEntry';
import GuestbookForm from '../components/GuestbookForm';

export default function Home() {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='mb-8 text-4xl font-bold'>Guestbook</h1>
      <GuestbookForm onAdd={handleAddEntry} />
      <div className='mt-8'>
        {entries.map((entry, index) => (
          <GuestbookEntry key={index} entry={entry} />
        ))}
      </div>
    </div>
  );
}
