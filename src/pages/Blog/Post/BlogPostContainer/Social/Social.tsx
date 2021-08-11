import React, { Fragment } from "react";
import { SocialContainer } from "./Social.style";

import { ReactComponent as TwitterIcon } from "assets/design/social/darkIcons/twitter.svg";
import { ReactComponent as FacebookIcon } from "assets/design/social/darkIcons/facebook.svg";
import { ReactComponent as LinkedIn } from "assets/design/social/darkIcons/linkedin.svg";
import { ReactComponent as Email } from "assets/design/social/darkIcons/email.svg";
import { ReactComponent as CopyIcon } from "assets/design/social/darkIcons/copy.svg";
import { ISocial } from "../../../types";

interface IProps {
  social: ISocial;
}

const Social = ({ social }: IProps) => {
  const { email, facebook, linkedin, twitter } = social;
  return (
    <Fragment>
      <SocialContainer href={twitter}>
        <TwitterIcon />
      </SocialContainer>
      <SocialContainer href={facebook}>
        <FacebookIcon />
      </SocialContainer>
      <SocialContainer href={linkedin}>
        <LinkedIn />
      </SocialContainer>
      <SocialContainer href={email}>
        <Email />
      </SocialContainer>
      <SocialContainer href={'#'}>
        <CopyIcon />
      </SocialContainer>
    </Fragment>
  );
};

export default Social;
export { Social };
