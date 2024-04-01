import { Button, Modal, Text, useModal } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';


const Guestbook = () => {
  const { setVisible, bindings } = useModal();
  const [entries, setEntries] = useState<Entry[]>([]);
  const chattableRef = React.useRef<HTMLIFrameElement>(null);

  interface Entry {
    name: string;
    message: string;
  }

  const handleAddEntry = (entry: Entry) => {
    setEntries([entry, ...entries]);
  };

  useEffect(() => {
    if (chattableRef.current && chattableRef.current.contentWindow) {
      chattableRef.current.contentWindow.postMessage(`
        .msgWrapper {
  
        }
        .allMessages {
  
        }
        .senderInfo {
          font-weight: bold;
        }
        .sent {
  
        }
        .recieved {
  
        }
        .msgBody {
  
        }
        #background {
  
        }
        #input {
  
        }
        #settings {
  
        }
        .mod:before {
  
        }
        .owner:before {
  
        }
      `, '*');
    }
  }, []);
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
            id='modal-description'
            css={{
              background: 'transparent',
              color: 'white',
              fontSize: '$4xl',
              fontFamily: 'Lucida Console',
              lineHeight: '1',
            }}
          >
            Make sure to sign my guestbook / checkout some of the sites on the side! Powered by Chattable.
            </Text>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', height: '100vh' }}>
        <iframe src='https://chattable.neocities.org/embed?chat=30819191' ref={chattableRef} frameBorder='0' style={{ background: 'grey', width: '80%', height: '80vh' }}></iframe>  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>  <img src="https://bin-web.neocities.org/buttons/kirby.gif" title="Chattable" alt="Chattable" />
  <img src="https://bin-web.neocities.org/buttons/no-twitter.gif" title="Chattable" alt="Chattable" /><a href="https://chattable.neocities.org/" target="_blank"><img src="https://chattable.neocities.org/chattable-alt.gif" title="Chattable" alt="Chattable" /></a>
<a href="https://www.neocities.org/" target="_blank"><img src="https://sugarforbrains.neocities.org/img/88x31/neo.png" title="Chattable" alt="Chattable" /></a>
<a href="https://chattable.neocities.org/" target="_blank"><img src="https://lawoftalos.neocities.org/img/puterbutton.gif" title="Chattable" alt="Chattable" /></a>
<a href="https://dimden.dev/" target="_blank"><img src="https://dimden.dev/services/images/88x31.gif" title="Chattable" alt="Chattable" /></a>
<a href="https://odditycommoddity.neocities.org" target="_blank"><img src="https://odditycommoddity.neocities.org/Images/Buttons/bantimetravel.png" title="Chattable" alt="Chattable" /></a>
<a href="https://odditycommoddity.neocities.org" target="_blank"><img src="https://odditycommoddity.neocities.org/Images/Buttons/winrar.jpg" title="Chattable" alt="Chattable" /></a>
<a href="https://fauux.neocities.org/" target="_blank"><img src="https://y2k.neocities.org/buttons/fauux.gif" title="Chattable" alt="Chattable" /></a>
<img src="https://i.imgur.com/rWvNuJt.gif" title="Chattable" alt="Chattable" /></div>
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
