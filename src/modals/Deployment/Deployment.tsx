import React, { useCallback } from 'react';
import { Dialog, Modal } from '@material-ui/core';

import {
  createSlackAppContent,
  createTeamsAppContent,
  IContent,
  integrateSlackAppContent,
  integrateTeamsAppContent,
} from './assets';
import { selectDeployment } from '../../redux/modals/selectors';

// styles
import styles from './Deployment.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { modalsActions } from '../../redux/modals/actions';

interface IContentMap {
  [path: string]: IContent;
}

const contentMap: IContentMap = {
  'slack-creation': createSlackAppContent,
  'slack-integration': integrateSlackAppContent,
  'teams-creation': createTeamsAppContent,
  'teams-integration': integrateTeamsAppContent,
};

const Deployment = () => {
  const dispatch = useDispatch();
  const { visible, messenger, stage } = useSelector(selectDeployment);

  const onClickClose = useCallback(() => {
    dispatch(modalsActions.deploymentModalToggle(false));
  }, [dispatch]);

  if (!messenger || !stage) {
    return null;
  }

  const contentPath = `${messenger}-${stage}`;
  const content = contentMap[contentPath];

  if (!content) {
    return null;
  }

  let direction = 'reverse';
  let listStart = 1;

  const { name, items, footerMessage } = content;
  const sectionItems = items.map((item, index) => {
    const { list, image } = item;
    const { title, src } = image;

    const className = styles[direction];
    const olStart = listStart;

    direction = direction === 'standard' ? 'reverse' : 'standard';
    listStart = listStart + list.length;

    return (
      <div className={className} key={index}>
        <div className={styles.info}>
          <ol start={olStart}>
            {list.map((listItem, index) => {
              return <li key={index}>{listItem.content}</li>;
            })}
          </ol>
        </div>
        <div className={styles.image}>
          <img alt={title} src={src} />
        </div>
      </div>
    );
  });

  return (
    <Modal open={visible}>
      <Dialog style={{ overflow: 'hidden' }} open={visible} fullWidth maxWidth="lg" onBackdropClick={onClickClose}>
        <main className={`${styles.Slack} global`}>
          <span className={styles.close} onClick={onClickClose} />
          <section className={styles.section}>
            <h1>{name}</h1>
            {sectionItems}
            {footerMessage}
          </section>
        </main>
      </Dialog>
    </Modal>
  );
};

export default Deployment;
export { Deployment };
