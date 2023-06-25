import { Button, Modal, Text, useModal } from '@nextui-org/react';
import React, { useState } from 'react';

import GuestbookEntry from '@/components/Guestbookentry';
import GuestbookForm from '@/components/Guestbookform';

const Guestbook = () => {
  const { setVisible, bindings } = useModal();
  const [entries, setEntries] = useState<Entry[]>([]);

  interface Entry {
    name: string;
    message: string;
  }

  const handleAddEntry = (entry: Entry) => {
    setEntries([entry, ...entries]);
  };

  return (
    <div>
      <Button
        size='lg'
        auto
        onPress={() => setVisible(true)}
        css={{
          background: 'transparent',
          color: 'white',
          fontSize: '$5xl',
          fontWeight: '$bo',
          fontFamily: 'Major',
          lineHeight: '1',
          textShadow:
            '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
        }}
      >
        Guestbook
      </Button>
      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        {...bindings}
        css={{
          background: 'black',
          fontSize: '$4xl',
          fontWeight: '$bo',
          fontFamily: 'Lucida Console',
        }}
      >
        <Modal.Header
          css={{
            color: 'white',
          }}
        >
          <Text
            id='modal-title'
            css={{
              background: 'transparent',
              color: 'white',
              fontSize: '$4xl',
              wordSpacing: '0.2em',
            }}
          >
            Guestbook
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text
            css={{
              color: 'white',

              lineHeight: '1',
            }}
          >
            A guestbook I made for the site, Sign Below!{' '}
          </Text>
          <div className='container mx-auto px-4 py-12'>
            <GuestbookForm onAdd={handleAddEntry} />
            <div className='mt-8'>
              {entries.map((entry, index) => (
                <GuestbookEntry key={index} entry={entry} />
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            flat
            auto
            color='error'
            onPress={() => setVisible(false)}
            css={{
              background: 'transparent',
              color: 'white',
              fontSize: '$4xl',
              fontWeight: '$bo',
              fontFamily: 'Lucida Console',
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Guestbook;
