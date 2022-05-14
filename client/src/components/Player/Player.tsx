import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export function Player(props: { className: string }) {
  return <FontAwesomeIcon className={props.className} icon={faPlay} />;
}
