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
        Projects
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
            Projects
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
            Here's a link to my{' '}
            <Link
              href='https://github.com/eman101101'
              target='_blank'
              css={{ lineHeight: '1' }}
            >
              Github
            </Link>{' '}
            to see all the code for the projects. &#40; my code's clean I swear
            &#41;
            <br></br>
            <br></br>I wanted to create a website that made fun of the whole
            "portfolio" thing, and super minimalistic websites that are boring
            to look at. The project was a lot of fun to build, I learned a lot
            about how Next.js works as well as different javascript animations.
          </Text>
          <Image
            width={1200}
            height={800}
            src='/images/finalportfolio.png'
            alt='Default Image'
            css={{ overflowX: 'auto', maxWidth: '100%' }}
          />
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
            I've done several projects with a group called{' '}
            <Link
              href='https://withyouwithme.com/'
              target='_blank'
              css={{ lineHeight: '1' }}
            >
              WithYouWithMe
            </Link>
            . They're a online training company that teaches people various
            digital skills for free with a focus on Veterans and
            under-represented groups.
            <br></br>
            <br></br>I've created a Breath of a Wild themed encyclopedia, a Java
            and Python project as well as a mock e-commerence site. Links to my
            projects are in the Github, Check them out if you want to learn some
            digital skills!
          </Text>
          <Image
            width={1200}
            height={800}
            src='/images/withyouwithme.png'
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
