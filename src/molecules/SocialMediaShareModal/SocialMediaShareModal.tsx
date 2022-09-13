import { VFC } from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegramPlane, FaViber } from 'react-icons/fa';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';

import Modal, { ModalProps } from '../../atoms/Modal/Modal';
import { GlobalStyles, SocialMedia, SocialMedias } from './SocialMediaShareModal.styles';

type SocialMediaShareModalProps = {
  isOpen?: boolean;
  onClose: ModalProps['onClose'];
  url: string;
  title?: string;
  description?: string;
};

export const SocialMediaShareModal: VFC<SocialMediaShareModalProps> = ({
  isOpen = false,
  onClose,
  url,
  title,
  description
}: SocialMediaShareModalProps) => (
  <Modal
    animation="bottom"
    isOpen={isOpen}
    onClose={onClose}
    className='social-media-share-modal'
  >
    <GlobalStyles />

    <SocialMedias>
      <SocialMedia color='red'>
        <EmailShareButton
          url={url}
          subject={title}
          body={description}
        >
          <AiOutlineMail />
        </EmailShareButton>
      </SocialMedia>

      <SocialMedia color='#3b5998'>
        <FacebookShareButton
          url={url}
          quote={title}
        >
          <AiFillFacebook />
        </FacebookShareButton>
      </SocialMedia>

      <SocialMedia color='#0072b1'>
        <LinkedinShareButton
          url={url}
          title={title}
          summary={description}
        >
          <AiFillLinkedin />
        </LinkedinShareButton>
      </SocialMedia>

      <SocialMedia color='#229ED9'>
        <TelegramShareButton
          url={url}
          title={title}
        >
          <FaTelegramPlane />
        </TelegramShareButton>
      </SocialMedia>
    
      <SocialMedia color='#1DA1F2'>
        <TwitterShareButton
          url={url}
          title={title}
        >
          <AiFillTwitterCircle />
        </TwitterShareButton>
      </SocialMedia>

      <SocialMedia color='#7360F2'>
        <ViberShareButton
          url={url}
          title={title}
        >
          <FaViber />
        </ViberShareButton>
      </SocialMedia>

      <SocialMedia color='#25D366'>
        <WhatsappShareButton
          url={url}
          title={title}
        >
          <AiOutlineWhatsApp />
        </WhatsappShareButton>
      </SocialMedia>
    </SocialMedias>
  </Modal>
);
