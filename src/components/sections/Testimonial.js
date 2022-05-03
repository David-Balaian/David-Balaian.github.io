import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { ReactComponent as Fb } from '../../assets/images/socials/icons8-facebook.svg';
import { ReactComponent as Gm } from '../../assets/images/socials/icons8-gmail-logo.svg';
import { ReactComponent as Insta } from '../../assets/images/socials/icons8-instagram.svg';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'Շտապիր գրանցվել մեր հաջորդ դասընթացին',
    paragraph: '',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <div
                    onClick={() => {
                      window.open(
                        'mailto:' + 'rhculinaryschool@gmail.com',
                        '_self'
                      );
                    }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}>
                    <Gm />
                  </div>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  {/* <span className="testimonial-item-name text-color-high">
                    Roman Level
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span> */}
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <div
                    onClick={() => {
                      window.open(
                        'https://www.instagram.com/harutyunyan_culinary_school/',
                        '_blank'
                      );
                    }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}>
                    <Insta />
                  </div>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  {/* <span className="testimonial-item-name text-color-high">
                    Diana Rynzhuk
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span> */}
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <div
                    onClick={() => {
                      window.open(
                        'https://www.facebook.com/Harutyunyanculinaryschool',
                        '_blank'
                      );
                    }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}>
                    <Fb />
                  </div>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  {/* <span className="testimonial-item-name text-color-high">
                    Ben Stafford
                  </span>
                  <span className="text-color-low"> / </span> */}
                  {/* <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
