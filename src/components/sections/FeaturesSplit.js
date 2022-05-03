import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Ռուզաննա Հարությունյանի անվան Խոհարարական դպրոց',
    paragraph: (
      <>
        <li>Ավելի քան 20 տարվա խոհարարական հարուստ փորձ</li>
        <li>ուսումնառություն լավագույն խոհարարական դպրոցներում</li>
        <li>
          Հարյուրավոր աշակերտներ, որոնք գտել են իրենց տեղը հայտնի ռեստորաննորի
          ետնաբեմում
        </li>
        <li>Նոր և համեղ հողինակային բաղադրատոմսեր</li>
      </>
    ),
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container" style={{ marginTop: '520px' }}>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item">
                <div
                  className="text-xxs text-color-primary fw-600 tt-u mb-8"
                  style={{ textAlign: 'center' }}>
                  Ովքե՞ր կարող են մասնակցել մեր խոհարարական դասընթացներին
                </div>
                <h3 className="mt-0 mb-12" style={{ textAlign: 'center' }}>
                  Ովքե՞ր կարող են մասնակցել մեր խոհարարական դասընթացներին
                </h3>
                <p className="m-0">
                  <li>
                    {' '}
                    Սկսնակ խոհարարներ, ովքեր ցանկանում են ձեռք բերել լուրջ
                    խոհարարական գիտելիքներ և աշխատել լավագույն ռեստորաններում
                    կամ ստեղծել իրենցը
                  </li>
                  <li>
                    փորձառու խոհարարներ, որոնք ցանկանում են վերապատրաստվել և
                    հարստացնել իրենց գիտելիքներն ու փորձը խոհարարական ոլորտում
                  </li>
                  <li>
                    Մայրիներ, ովքեր արդեն իսկ համեղ պատրաստում են իրենց
                    ընտանիքների համար, բայց ցանկանում են տալ նոր՝ պրոֆեսիոնալ
                    հաղորդ իրենց խոհանոցներին, սովորել նոր ռեցեպտներով պատրաստել
                    նոր ուտեստներ, և զարմացնել իրենց հյուրերին և սիրելիներին
                  </li>
                  <li>
                    պատանիներ և երիասարդներ, որոնք ունեն մեծ սեր խոհանոցի
                    նկատմամբ և ցանկանում են ձեռք բերել մասնագիտություն
                  </li>
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/foods/pasta-1854245.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Դպրոցի ծրագիրը ներառում է'
                </div>
                <h3 className="mt-0 mb-12">Դպրոցի ծրագիրը ներառում է'</h3>
                <p className="m-0">
                  <li> Խոհարարության հիմունքներ </li>
                  <li>Ազգային և միջազգային խոհանոցների ուսումնասիրություն </li>
                  <li> Ջերմային մշակման եղանակները</li>
                  <li> Կտրատման եղանակներ և հմտություն</li>
                  <li> Համեմունքների ուսումնասիրություն և օգտագործում</li>
                  <li>
                    Նախուտեստների պատրաստում և տեխնոլոգիական գործընթացների
                    վերահսկում
                  </li>
                  <li> Ապուրների և թանձրուկների պատրաստում</li>
                  <li>
                    Թռչնամսից, ձկից, խոզից, հորթից, գառան մսից և մսամթերքից
                    կերակրատեսակների պատրաստում և տեխնոլոգիական գործընթացների
                    վերահսկում
                  </li>
                  <li> Հացատեսակների պատրաստում և այլ։</li>
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/foods/vecteezy_baked-chicken-stuffed-apples-with-fresh-orange-in-the-baking_7181285_963.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Մեր հաջորդ դասընթացը՝ Մայիսի 9-ից
                </div>
                <h3 className="mt-0 mb-12">
                  Մեր հաջորդ դասընթացը՝ Մայիսի 9-ից
                </h3>
                <p className="m-0">
                  <li>
                    Տևողությունը՝ 3 ամիս, շաբաթական 3 դաս, դասի տևողությունը՝ 2
                    ժամ
                  </li>
                  <li>Դասընթացի ամբողջական արժեքը՝ 90.000 դրամ։ </li>
                  <li>Ամբողջ մթերքը տրամադրում է ստուդիան։</li>
                  <li>Ավարտին տրվում է երկլեզու վկայական:</li>
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/foods/sub-buzz-86-1591886919-8.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
