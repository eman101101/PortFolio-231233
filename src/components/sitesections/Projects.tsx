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
            <br></br>With the increase advancement with AI technology, I wanted showcase the way that 
            even a dystopian future can be made to look appealing. After reading the short story, Liking What You See: A Documentary
            by Ted Chiang, I was inspired to create a website that would be a mock advertisement / product like one in the story.
            With AI tools and incorporating the Vision Pro, I made an Apple styled Site and Video showcasing what this
            product would look like. Even with the many shortcomings of AI generated videos, I was amazed with how well StyleTTS
            was with creating a convincing voice over. This was also a way to start using Vue and was my first time deploying through AWS.
            The site can be found here, and let me know if you want to invest :) - {' '}
            <Link
              href='https://www.calliagnosia.pro/'
              target='_blank'
              css={{ lineHeight: '1' }}
            >
               calliagnosia.pro
            </Link>

                        <Image
              width={1200}
              height={800}
              src='/images/calisite.png'
              alt='Default Image'
            />
            
            <br></br>
            <br></br>Inspired by workout guides online, I created a website for
            a swimming guide that would be an easy way to learn how to swim, as
            well as teach swimming skills. The website was built using Nextra,
            a static site generator used by the Next.JS team. As pages for the site are written in MDX it was pretty easy to get used to,
            the hardest part being the routing for each page and some additional styling.
            I also ended up making my first contribution, adding to the documentation of the project!
             . Check it out here! -{' '}
            <Link
              href='https://learnswimming.ca/'
              target='_blank'
              css={{ lineHeight: '1' }}
            >
              learnswimming.ca
            </Link>
            <Image
              width={1200}
              height={800}
              src='/images/learnswimming.png'
              alt='Default Image'
            />
            <br></br>
            <br></br>The site you're on right now! I wanted to create a website that made fun of the whole
            "portfolio" thing, and super minimalistic websites that are boring
            to look at. The project was a lot of fun to build, I learned a lot
            about how Next.js works as well as different javascript animation
            library's. Setting up the timing for the animations was the hardest part, theres still some issues with it but 
            I'm happy with how it turned out. 
            <Image
              width={1200}
              height={800}
              src='/images/finalportfolio.png'
              alt='Default Image'
            />
          </Text>

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
            under-represented groups. I've created a Breath of a Wild themed encyclopedia, a Java
            game, Python program, and a mock e-commerence site. Links to my
            projects are in the Github, Check them out if you want to learn some
            digital skills!
            <Image
              width={1200}
              height={800}
              src='/images/withyouwithme.png'
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

export default MyModal;
