import { useState } from 'react';

type GuestbookFormProps = {
  onAdd: (guestbookEntry: { name: string; message: string }) => void;
};

const GuestbookForm = ({ onAdd }: GuestbookFormProps) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({ name, message });
    setName('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-3'>
      <div>
        <label htmlFor='name' className='block text-sm font-medium text-white'>
          Name
        </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          required
        />
      </div>
      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-white'
        >
          Message
        </label>
        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          required
        ></textarea>
      </div>
      <button
        type='submit'
        className='rounded-md bg-indigo-500 px-4 py-2 text-white'
      >
        Submit
      </button>
    </form>
  );
};

export default GuestbookForm;
