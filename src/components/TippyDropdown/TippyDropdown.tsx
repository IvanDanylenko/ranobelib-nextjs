import React, { FC, useRef, Fragment } from 'react';
import Tippy from '@tippyjs/react';
import Link from 'next/link';

const TippyDropdown: FC = ({ placement, content, children }) => {
  // This is example of variable content
  /* content = [
    [
      {
        href: "#",
        icon: "fa-icon",
        title: "Японской",
        addClass: "myclass",
        label: "some text",
        action: '[function]'
      },
    ],
    here will be added divider
    [
      {
        href: "#",
        icon: "",
        title: "Японской",
        addClass: "",
        label: "",
        action: '[function]'
      },
    ],
  ] */

  // hide and show tippy on link's click inside
  const tippy = useRef();

  const hideTippy = () => {
    tippy.current._tippy.hide();
  };

  return (
    <Tippy
      placement={placement}
      arrow={false}
      theme="light"
      trigger="click"
      offset={[0, 7]}
      duration="200"
      animation="shift-toward-subtle"
      interactive
      ref={tippy}
      content={
        <div className="menu">
          {content.map((array, arrayIndex) =>
            array.map((item, itemIndex) => (
              <Fragment key={itemIndex}>
                <Link href={item.href ? item.href : '#'}>
                  <a
                    className={item.addClass ? `menu__item ${item.addClass}` : 'menu__item'}
                    onClick={() => {
                      hideTippy();
                      if (typeof item.action == 'function') {
                        item.action();
                      }
                    }}
                  >
                    {item.icon && <i className={`fa ${item.icon} fa-fw`}></i>}
                    {item.title ? item.title : 'Название отсутствует'}
                    {item.label && <span className="menu__label">{item.label}</span>}
                  </a>
                </Link>
                {/* add divider if there are next array with content */}
                {itemIndex >= array.length - 1 && arrayIndex < content.length - 1 && (
                  <div className="menu__divider"></div>
                )}
              </Fragment>
            )),
          )}
        </div>
      }
    >
      {children}
    </Tippy>
  );
};

export default TippyDropdown;
