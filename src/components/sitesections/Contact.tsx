'use client';
import { Button, Modal, Text, useModal } from '@nextui-org/react';
import { Image, Link } from '@nextui-org/react';

const Contact = () => {
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
        Contact
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
            Contact
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
            Wait you actually want to contact me? Well, it that case, you can
            reach me at my{' '}
            <Link
              href='https://www.linkedin.com/in/evan-koumarelas'
              target='_blank'
              css={{ lineHeight: '1' }}
            >
              Linkden
            </Link>{' '}
            profile or my email{' '}
            <Link
              href='mailto:evankoumarelas@hotmail.com'
              target='_blank'
              css={{ lineHeight: '1' }}
            >
              here
            </Link>
            <br></br>
            <br></br> I'm extremely broke I'll do whatever you want
            <Image
              width={1000}
              height={700}
              src='/images/meme1.png'
              alt='Default Image'
            />
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

export default Contact;
