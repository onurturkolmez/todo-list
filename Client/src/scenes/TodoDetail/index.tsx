import React, { useEffect, useRef } from 'react';
import './index.css';
import { Props, connector } from './types';
import moment from 'moment';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import { DateIcon } from '../../components/Icons';

function useOnClickOutside(ref: any, handler: any) {
  useEffect(
    () => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler]
  );
}

function TodoDetail(props: Props) {

  const location: any = useLocation();
  const history = useHistory();
  const id = location.pathname.split('/').pop();
  const item: any = location.state.todoItem;
  const ref: any = useRef();

  useOnClickOutside(ref, () => history.push({ pathname: `/todos` }));

  return (
    <div
      className="modal">

      <div
        className="modal-content"
        ref={ref}>
        <input className="editable-input" value={item.name} />
        <span>Description</span>
        <textarea rows={4} className="w-100">{item.description}</textarea>

        <DateIcon />
        <span>{moment(item.deadline).format("DD MMM")}</span>

        <div
          className="modal-footer">
          <button className="btn bg-gray">Cancel</button>
          <button className="btn bg-green">Update</button>
        </div>
      </div>

    </div>
  )
}

export default withRouter(connector(TodoDetail));