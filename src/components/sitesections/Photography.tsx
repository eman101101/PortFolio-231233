'use client';
import { Button, Modal, Text, useModal } from '@nextui-org/react';
import { Image, Link } from '@nextui-org/react';

const MyModal = () => {
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
        Photography
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
            Photography
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
            I've always really loved street Photography with how it captures the
            essence of a moment, but recently I've been getting into more
            landscape and nature photography. Here are some of my favorites, the
            rest can be found on my Flickr.{' '}
            <Link
              href='https://flic.kr/ps/3kkmWP'
              target='_blank'
              css={{ lineHeight: '1' }}
            >
              Check out my Flickr!
            </Link>
          </Text>

          <Image
            width={1200}
            height={800}
            src='/images/photo1.jpg'
            alt='Default Image'
            css={{ overflowX: 'auto', maxWidth: '100%' }}
          />
          <Image
            width={1200}
            height={800}
            src='/images/photo2.jpg'
            alt='Default Image'
            css={{ overflowX: 'auto', maxWidth: '100%' }}
          />
          <Image
            width={1200}
            height={800}
            src='/images/photo3.jpg'
            alt='Default Image'
            css={{ overflowX: 'auto', maxWidth: '100%' }}
          />
          <Image
            width={1200}
            height={800}
            src='/images/photo4.jpg'
            alt='Default Image'
            css={{ overflowX: 'auto', maxWidth: '100%' }}
          />
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

export default MyModal;
