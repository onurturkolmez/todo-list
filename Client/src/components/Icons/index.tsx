import { Icon } from 'react-icons-kit';
import React from 'react';
import { circle_plus } from 'react-icons-kit/ikons/circle_plus';
import { close } from 'react-icons-kit/ikons/close';
import { bin } from 'react-icons-kit/ikons/bin';
import { pen_1 } from 'react-icons-kit/ikons/pen_1';
import { tick } from 'react-icons-kit/ikons/tick';
import { more } from 'react-icons-kit/ikons/more';
import { calendar_add } from 'react-icons-kit/ikons/calendar_add';

export const PlusIcon = () => <Icon className="icon mr-1" icon={circle_plus} />

export const TrashIcon = () => <Icon className="icon" icon={bin} />

export const PenIcon = () => <Icon className="icon" icon={pen_1} />

export const OkIcon = () => <Icon className="icon" icon={tick} />

export const CancelIcon = () => <Icon className="icon" icon={close} />

export const MoreIcon = () => <Icon className="icon" icon={more} />

export const DateIcon = () => <Icon className="icon" icon={calendar_add} />