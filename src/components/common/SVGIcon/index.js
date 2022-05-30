import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@ant-design/icons';
import { SVGIconWrapper } from './styles';
import { ReactComponent as ICCard } from '../../../assets/icons/ic-card.svg';
import { ReactComponent as ICCustomer } from '../../../assets/icons/ic-customer.svg';
import { ReactComponent as ICDashboard } from '../../../assets/icons/ic-dashboard.svg';
import { ReactComponent as Reservations } from '../../../assets/icons/ic-severvations.svg';
import { ReactComponent as Transactions } from '../../../assets/icons/ic-trasactions.svg';
import { ReactComponent as ICUser } from '../../../assets/icons/ic-user.svg';
import { ReactComponent as Users2 } from '../../../assets/icons/ic-user-2.svg';
import { ReactComponent as Tool } from '../../../assets/icons/ic-tool.svg';
import { ReactComponent as Skip } from '../../../assets/icons/ic-skip.svg';
import { ReactComponent as Check } from '../../../assets/icons/ic-check.svg';
import { ReactComponent as Case } from '../../../assets/icons/ic-case.svg';
import { ReactComponent as Bookings } from '../../../assets/icons/group-3.svg';
import { ReactComponent as Chekins } from '../../../assets/icons/ic-user-checkin.svg';
import { ReactComponent as Delivery } from '../../../assets/icons/delivery.svg';
import { ReactComponent as Pharmacy } from '../../../assets/icons/pharmacy.svg';
import { ReactComponent as Preparing } from '../../../assets/icons/preparing.svg';
import { ReactComponent as Sending } from '../../../assets/icons/sending.svg';
import { ReactComponent as ICPuzzle } from '../../../assets/icons/ic-puzzle.svg';
import { ReactComponent as ICRocket } from '../../../assets/icons/ic-rocket.svg';
import { ReactComponent as Service } from '../../../assets/icons/ic-service.svg';
import { ReactComponent as ICOnBoarding } from '../../../assets/icons/ic-onboarding.svg';
import { ReactComponent as ICSetting } from '../../../assets/icons/ic-setting.svg';
import { ReactComponent as ICTrash } from '../../../assets/icons/ic-trash.svg';
import { ReactComponent as More } from '../../../assets/icons/more.svg';
import { ReactComponent as ICEdit } from '../../../assets/icons/ic-edit.svg';
import { ReactComponent as Plus } from '../../../assets/icons/ic-plus.svg';
import { ReactComponent as Search } from '../../../assets/icons/ic-search.svg';
import { ReactComponent as Back } from '../../../assets/icons/ic-arrow-left.svg';
import { ReactComponent as Link } from '../../../assets/icons/u-link.svg';
import { ReactComponent as Upload } from '../../../assets/icons/ic-clound.svg';
import { ReactComponent as CheckCircle } from '../../../assets/icons/check-circle.svg';
import { ReactComponent as Bookmark } from '../../../assets/icons/ic-bookmark.svg';
import { ReactComponent as Mail } from '../../../assets/icons/ic-mail.svg';
import { ReactComponent as Phone } from '../../../assets/icons/ic-phone-call.svg';
import { ReactComponent as MoreHorizontal } from '../../../assets/icons/fi_more-horizontal.svg';
import { ReactComponent as Compass } from '../../../assets/icons/ic-compass.svg';
import { ReactComponent as Dollar } from '../../../assets/icons/ic-dollar-sign.svg';
import { ReactComponent as CreditCard } from '../../../assets/icons/ic-credit-card.svg';
import { ReactComponent as Clock } from '../../../assets/icons/ic-clock.svg';
import { ReactComponent as Circle } from '../../../assets/icons/ic-circle.svg';
import { ReactComponent as Group } from '../../../assets/icons/ic-group.svg';
import { ReactComponent as ICWallet } from '../../../assets/icons/ic-wallet.svg';
import { ReactComponent as ICRequest } from '../../../assets/icons/ic-help-circle.svg';
import { ReactComponent as ICPayPal } from '../../../assets/icons/ic-paypal.svg';


export const SVG_ICONS = {
  team: ICCustomer,
  'ic-card': ICCard,
  'ic-home': ICDashboard,
  'ic-date': Reservations,
  'ic-payment': Transactions,
  'ic-seat': Bookings,
  check: Chekins,
  'ic-delivery': Delivery,
  'ic-pharmacy': Pharmacy,
  'ic-prepare': Preparing,
  'ic-send': Sending,
  setting: ICSetting,
  onboarding: ICOnBoarding,
  'ic-service': Service,
  'ic-rocket': ICRocket,
  'ic-puzzle': ICPuzzle,
  edit: ICEdit,
  trash: ICTrash,
  more: More,
  plus: Plus,
  'search': Search,
  back: Back,
  link: Link,
  upload: Upload,
  checkCircle: CheckCircle,
  bookmark: Bookmark,
  mail: Mail,
  phone: Phone,
  'ic-user': ICUser,
  moreHorizontal: MoreHorizontal,
  compass: Compass,
  dollar: Dollar,
  creditCard: CreditCard,
  clock: Clock,
  circle: Circle,
  'ic-user-2': Users2,
  'ic-tool': Tool,
  'ic-check': Check,
  'ic-case': Case,
  'ic-skip': Skip,
  group: Group,
  wallet: ICWallet,
  request: ICRequest,
  paypal: ICPayPal,
};

function SVGIcon({ type, className, ...props }) {
  const Icon = SVG_ICONS[type] || ICDashboard;
  return (
    <SVGIconWrapper {...props} className={`svgIcon ${className || ''}`}>
      <Icon />
    </SVGIconWrapper>
  );
}

SVGIcon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
};

SVGIcon.defaultProps = {
  type: 'logo',
  size: 20,
};

export default SVGIcon;

/** SVG Icon */

const IconWrapper = ({ SVGComponent, svgProps, ...props }) => {
  return (
    <Icon
      {...props}
      component={() => <SVGComponent {...svgProps} fill="none" />}
    />
  );
};

IconWrapper.propTypes = {
  SVGComponent: PropTypes.any,
  svgProps: PropTypes.object,
};

IconWrapper.defaultProps = {
  svgProps: {},
};

export const DashboardIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICDashboard} />
);

export const PuzzleIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICPuzzle} />
);

export const RocketIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICRocket} />
);

export const WalletIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICWallet} />
);

export const CardIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICCard} />
);

export const RequestIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICRequest} />
);

export const OnBoardingIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICOnBoarding} />
);

export const SettingIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICSetting} />
);

export const UserIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICUser} />
);

export const EditIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICEdit} />
);

export const TrashIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICTrash} />
);
