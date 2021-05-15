import React, { FC } from 'react';

const ToastItem: FC = ({ text }) => {
  return (
    <div className="toast-item-wrap">
      <div className="toast-item is-alert">
        <div className="toast-item__icon">
          <i className="fa fa-exclamation-circle"></i>
        </div>
        <div className="toast-item__text">{text}</div>
      </div>
      <style jsx>
        {`
          .toast-item {
            position: relative;
            padding: 12px 16px;
            margin: 0 auto;
            min-width: 160px;
            max-width: 420px;
            border-radius: 6px;
            text-align: left;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
          }
          .toast-item__icon {
            margin-top: 2px;
            margin-right: 10px;
            font-size: 16px;
          }
        `}
      </style>
    </div>
  );
};

export default ToastItem;
