'use client';
import { Button, Modal, Text, useModal } from '@nextui-org/react';

const Music = () => {
  const { setVisible, bindings } = useModal();
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
        Music
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
              fontFamily: 'Lucida Console',
              wordSpacing: '0.2em',
            }}
          >
            Music
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
            I've been making music on ableton and feel like I'm getting to the
            point where it's not terrible! Here are I couple songs I've made:
            Firstly a Mix of several songs from ZUN (game developer) and some
            songs from a techno album that I'm working on. Need to work on
            Mixing / Mastering / Arrangement / actually making good music, but
            I'm getting there!
            <div
              style={{
                marginTop: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <h2>ZUN Track</h2>
              <audio controls style={{ width: '80%' }}>
                <source src='/audio/zuntrack.mp3' type='audio/mpeg' />
                Your browser does not support the audio element.
              </audio>
              <h2>To Deface This Ancient Art</h2>
              <audio controls style={{ width: '80%' }}>
                <source src='/audio/todeface.mp3' type='audio/mpeg' />
                Your browser does not support the audio element.
              </audio>
              <h2>Bot Behaviour</h2>
              <audio controls style={{ width: '80%' }}>
                <source src='/audio/botbehaviour.mp3' type='audio/mpeg' />
                Your browser does not support the audio element.
              </audio>
            </div>
          </Text>
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

export default Music;
