import { uniqBy } from 'lodash';
import {
  FallOutlined,
  RiseOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileWordOutlined,
  FileExcelOutlined,
  FileZipOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import theme from '../theme/index';
import commonJobs from './commonJobs';
import nationalities from './nationalities';

export const IMAGE_TYPES = ['png', 'jpg', 'jpeg', 'gif', 'tif', 'tiff'];

export const FILE_TYPES = [
  { value: 'pdf', Icon: FilePdfOutlined, color: theme.color.red },
  { value: 'ppt', Icon: FilePptOutlined, color: theme.color.pink },
  { value: 'pptx', Icon: FilePptOutlined, color: theme.color.pink },
  { value: 'doc', Icon: FileWordOutlined, color: theme.color.blue },
  { value: 'docx', Icon: FileWordOutlined, color: theme.color.blue },
  { value: 'xlsx', Icon: FileExcelOutlined, color: theme.color.green },
  { value: 'xls', Icon: FileExcelOutlined, color: theme.color.green },
  { value: 'csv', Icon: FileExcelOutlined, color: theme.color.green },
  { value: 'zip', Icon: FileZipOutlined, color: theme.color.violet },
  { value: 'zar', Icon: FileZipOutlined, color: theme.color.violet },
  { value: 'txt', Icon: FileTextOutlined, color: 'currentColor' },
  { value: 'mov', Icon: VideoCameraOutlined, color: 'currentColor' },
  { value: 'mp4', Icon: VideoCameraOutlined, color: 'currentColor' },
  { value: 'avi', Icon: VideoCameraOutlined, color: 'currentColor' },
  { value: 'flv', Icon: VideoCameraOutlined, color: 'currentColor' },
  { value: 'wmv', Icon: VideoCameraOutlined, color: 'currentColor' },
];

export const ORDER_STATUSES = [
  {
    value: 'new_deal',
    color: '#e16551',
    textColor: '#fff',
  },
  {
    value: 'designer_confirm',
    color: '#9163b6',
    textColor: '#fff',
  },
  {
    value: 'design_in_progress',
    color: '#ead78d',
    textColor: '#000',
  },
  {
    value: 'verified',
    color: '#4285F4',
    textColor: '#fff',
  },
  {
    value: 'delivery',
    color: '#a34974',
    textColor: '#fff',
  },
  {
    value: 'waiting_approved',
    color: '#f19670',
    textColor: '#000',
  },
  {
    value: 'waiting_a_file',
    color: '#F4B400',
    textColor: '#000',
  },
  {
    value: 'feedback',
    color: '#4e2472',
    textColor: '#fff',
  },
  {
    value: 'done',
    color: '#0F9D58',
    textColor: '#fff',
  },
  {
    value: 'canceled',
    color: '#c94953',
    textColor: '#fff',
  },
  {
    value: 'gua_pd',
    color: '#74c493',
    textColor: '#000',
  },
  {
    value: 'pre_order',
    color: '#e4c07f',
    textColor: '#000',
  },
];

export const FORMAT_DATE = 'MMM DD, YYYY';

export const REPORTS_USER = [
  {
    text: 'role.admin',
    value: 'admin',
  },
  {
    text: 'role.coach',
    value: 'coach',
  },
  {
    text: 'role.provider',
    value: 'provider',
  },
  {
    text: 'role.startup',
    value: 'startup',
  },
];

export const PERMISSION = [
  {
    value: 'PUT',
    text: 'permission.put',
  },
  {
    value: 'CREATE',
    text: 'permission.create',
  },
  {
    value: 'READ',
    text: 'permission.read',
  },
  {
    value: 'DELETE',
    text: 'permission.delete',
  },
  {
    value: 'ADDCLASS',
    text: 'permission.addClass',
  },
  {
    value: 'REMOVECLASS',
    text: 'permission.removeClass',
  },
  {
    value: 'GETLIST',
    text: 'permission.getList',
  },
  {
    value: 'LIST_PERMISSION',
    text: 'permission.listPermission',
  },
];

export const SEMESTERS = [
  {
    value: true,
    text: 'semesters.isDone',
    color: 'gray',
  },
  {
    value: false,
    text: 'semesters.notDone',
    color: 'green',
  },
];

export const CHART_LINES = [
  {
    value: 'sales',
    dataKey: 'sales',
    text: 'home.chart.sales',
    stroke: '#f83995',
    fillId: 'salesFillColor',
    fillColor: '#f83995',
  },
  {
    value: 'profit',
    dataKey: 'profit',
    text: 'home.chart.profit',
    stroke: '#4d79f6',
    fillId: 'profitFillColor',
    fillColor: '#4d79f6',
  },
];

export const COUNTRY = [
  { value: 'Afghanistan', text: 'Afghanistan' },
  { value: 'Åland Islands', text: 'Åland Islands' },
  { value: 'Albania', text: 'Albania' },
  { value: 'Algeria', text: 'Algeria' },
  { value: 'American Samoa', text: 'American Samoa' },
  { value: 'AndorrA', text: 'AndorrA' },
  { value: 'Angola', text: 'Angola' },
  { value: 'Anguilla', text: 'Anguilla' },
  { value: 'Antarctica', text: 'Antarctica' },
  { value: 'Antigua and Barbuda', text: 'Antigua and Barbuda' },
  { value: 'Argentina', text: 'Argentina' },
  { value: 'Armenia', text: 'Armenia' },
  { value: 'Aruba', text: 'Aruba' },
  { value: 'Australia', text: 'Australia' },
  { value: 'Austria', text: 'Austria' },
  { value: 'Azerbaijan', text: 'Azerbaijan' },
  { value: 'Bahamas', text: 'Bahamas' },
  { value: 'Bahrain', text: 'Bahrain' },
  { value: 'Bangladesh', text: 'Bangladesh' },
  { value: 'Barbados', text: 'Barbados' },
  { value: 'Belarus', text: 'Belarus' },
  { value: 'Belgium', text: 'Belgium' },
  { value: 'Belize', text: 'Belize' },
  { value: 'Benin', text: 'Benin' },
  { value: 'Bermuda', text: 'Bermuda' },
  { value: 'Bhutan', text: 'Bhutan' },
  { value: 'Bolivia', text: 'Bolivia' },
  { value: 'Bosnia and Herzegovina', text: 'Bosnia and Herzegovina' },
  { value: 'Botswana', text: 'Botswana' },
  { value: 'Bouvet Island', text: 'Bouvet Island' },
  { value: 'Brazil', text: 'Brazil' },
  {
    value: 'British Indian Ocean Territory',
    text: 'British Indian Ocean Territory',
  },
  { value: 'Brunei Darussalam', text: 'Brunei Darussalam' },
  { value: 'Bulgaria', text: 'Bulgaria' },
  { value: 'Burkina Faso', text: 'Burkina Faso' },
  { value: 'Burundi', text: 'Burundi' },
  { value: 'Cambodia', text: 'Cambodia' },
  { value: 'Cameroon', text: 'Cameroon' },
  { value: 'Canada', text: 'Canada' },
  { value: 'Cape Verde', text: 'Cape Verde' },
  { value: 'Cayman Islands', text: 'Cayman Islands' },
  { value: 'Central African Republic', text: 'Central African Republic' },
  { value: 'Chad', text: 'Chad' },
  { value: 'Chile', text: 'Chile' },
  { value: 'China', text: 'China' },
  { value: 'Christmas Island', text: 'Christmas Island' },
  { value: 'Cocos (Keeling) Islands', text: 'Cocos (Keeling) Islands' },
  { value: 'Colombia', text: 'Colombia' },
  { value: 'Comoros', text: 'Comoros' },
  { value: 'Congo', text: 'Congo' },
  {
    value: 'Congo, The Democratic Republic of the',
    text: 'Congo, The Democratic Republic of the',
  },
  { value: 'Cook Islands', text: 'Cook Islands' },
  { value: 'Costa Rica', text: 'Costa Rica' },
  { value: "Cote D'Ivoire", text: "Cote D'Ivoire" },
  { value: 'Croatia', text: 'Croatia' },
  { value: 'Cuba', text: 'Cuba' },
  { value: 'Cyprus', text: 'Cyprus' },
  { value: 'Czech Republic', text: 'Czech Republic' },
  { value: 'Denmark', text: 'Denmark' },
  { value: 'Djibouti', text: 'Djibouti' },
  { value: 'Dominica', text: 'Dominica' },
  { value: 'Dominican Republic', text: 'Dominican Republic' },
  { value: 'Ecuador', text: 'Ecuador' },
  { value: 'Egypt', text: 'Egypt' },
  { value: 'El Salvador', text: 'El Salvador' },
  { value: 'Equatorial Guinea', text: 'Equatorial Guinea' },
  { value: 'Eritrea', text: 'Eritrea' },
  { value: 'Estonia', text: 'Estonia' },
  { value: 'Ethiopia', text: 'Ethiopia' },
  { value: 'Falkland Islands (Malvinas)', text: 'Falkland Islands (Malvinas)' },
  { value: 'Faroe Islands', text: 'Faroe Islands' },
  { value: 'Fiji', text: 'Fiji' },
  { value: 'Finland', text: 'Finland' },
  { value: 'France', text: 'France' },
  { value: 'French Guiana', text: 'French Guiana' },
  { value: 'French Polynesia', text: 'French Polynesia' },
  { value: 'French Southern Territories', text: 'French Southern Territories' },
  { value: 'Gabon', text: 'Gabon' },
  { value: 'Gambia', text: 'Gambia' },
  { value: 'Georgia', text: 'Georgia' },
  { value: 'Germany', text: 'Germany' },
  { value: 'Ghana', text: 'Ghana' },
  { value: 'Gibraltar', text: 'Gibraltar' },
  { value: 'Greece', text: 'Greece' },
  { value: 'Greenland', text: 'Greenland' },
  { value: 'Grenada', text: 'Grenada' },
  { value: 'Guadeloupe', text: 'Guadeloupe' },
  { value: 'Guam', text: 'Guam' },
  { value: 'Guatemala', text: 'Guatemala' },
  { value: 'Guernsey', text: 'Guernsey' },
  { value: 'Guinea', text: 'Guinea' },
  { value: 'Guinea-Bissau', text: 'Guinea-Bissau' },
  { value: 'Guyana', text: 'Guyana' },
  { value: 'Haiti', text: 'Haiti' },
  {
    value: 'Heard Island and Mcdonald Islands',
    text: 'Heard Island and Mcdonald Islands',
  },
  {
    value: 'Holy See (Vatican City State)',
    text: 'Holy See (Vatican City State)',
  },
  { value: 'Honduras', text: 'Honduras' },
  { value: 'Hong Kong', text: 'Hong Kong' },
  { value: 'Hungary', text: 'Hungary' },
  { value: 'Iceland', text: 'Iceland' },
  { value: 'India', text: 'India' },
  { value: 'Indonesia', text: 'Indonesia' },
  { value: 'Iran, Islamic Republic Of', text: 'Iran, Islamic Republic Of' },
  { value: 'Iraq', text: 'Iraq' },
  { value: 'Ireland', text: 'Ireland' },
  { value: 'Isle of Man', text: 'Isle of Man' },
  { value: 'Israel', text: 'Israel' },
  { value: 'Italy', text: 'Italy' },
  { value: 'Jamaica', text: 'Jamaica' },
  { value: 'Japan', text: 'Japan' },
  { value: 'Jersey', text: 'Jersey' },
  { value: 'Jordan', text: 'Jordan' },
  { value: 'Kazakhstan', text: 'Kazakhstan' },
  { value: 'Kenya', text: 'Kenya' },
  { value: 'Kiribati', text: 'Kiribati' },
  {
    value: "Korea, Democratic People'S Republic of",
    text: "Korea, Democratic People'S Republic of",
  },
  { value: 'Korea, Republic of', text: 'Korea, Republic of' },
  { value: 'Kuwait', text: 'Kuwait' },
  { value: 'Kyrgyzstan', text: 'Kyrgyzstan' },
  {
    value: "Lao People'S Democratic Republic",
    text: "Lao People'S Democratic Republic",
  },
  { value: 'Latvia', text: 'Latvia' },
  { value: 'Lebanon', text: 'Lebanon' },
  { value: 'Lesotho', text: 'Lesotho' },
  { value: 'Liberia', text: 'Liberia' },
  { value: 'Libyan Arab Jamahiriya', text: 'Libyan Arab Jamahiriya' },
  { value: 'Liechtenstein', text: 'Liechtenstein' },
  { value: 'Lithuania', text: 'Lithuania' },
  { value: 'Luxembourg', text: 'Luxembourg' },
  { value: 'Macao', text: 'Macao' },
  {
    value: 'Macedonia, The Former Yugoslav Republic of',
    text: 'Macedonia, The Former Yugoslav Republic of',
  },
  { value: 'Madagascar', text: 'Madagascar' },
  { value: 'Malawi', text: 'Malawi' },
  { value: 'Malaysia', text: 'Malaysia' },
  { value: 'Maldives', text: 'Maldives' },
  { value: 'Mali', text: 'Mali' },
  { value: 'Malta', text: 'Malta' },
  { value: 'Marshall Islands', text: 'Marshall Islands' },
  { value: 'Martinique', text: 'Martinique' },
  { value: 'Mauritania', text: 'Mauritania' },
  { value: 'Mauritius', text: 'Mauritius' },
  { value: 'Mayotte', text: 'Mayotte' },
  { value: 'Mexico', text: 'Mexico' },
  {
    value: 'Micronesia, Federated States of',
    text: 'Micronesia, Federated States of',
  },
  { value: 'Moldova, Republic of', text: 'Moldova, Republic of' },
  { value: 'Monaco', text: 'Monaco' },
  { value: 'Mongolia', text: 'Mongolia' },
  { value: 'Montenegro', text: 'Montenegro' },
  { value: 'Montserrat', text: 'Montserrat' },
  { value: 'Morocco', text: 'Morocco' },
  { value: 'Mozambique', text: 'Mozambique' },
  { value: 'Myanmar', text: 'Myanmar' },
  { value: 'Namibia', text: 'Namibia' },
  { value: 'Nauru', text: 'Nauru' },
  { value: 'Nepal', text: 'Nepal' },
  { value: 'Netherlands', text: 'Netherlands' },
  { value: 'Netherlands Antilles', text: 'Netherlands Antilles' },
  { value: 'New Caledonia', text: 'New Caledonia' },
  { value: 'New Zealand', text: 'New Zealand' },
  { value: 'Nicaragua', text: 'Nicaragua' },
  { value: 'Niger', text: 'Niger' },
  { value: 'Nigeria', text: 'Nigeria' },
  { value: 'Niue', text: 'Niue' },
  { value: 'Norfolk Island', text: 'Norfolk Island' },
  { value: 'Northern Mariana Islands', text: 'Northern Mariana Islands' },
  { value: 'Norway', text: 'Norway' },
  { value: 'Oman', text: 'Oman' },
  { value: 'Pakistan', text: 'Pakistan' },
  { value: 'Palau', text: 'Palau' },
  {
    value: 'Palestinian Territory, Occupied',
    text: 'Palestinian Territory, Occupied',
  },
  { value: 'Panama', text: 'Panama' },
  { value: 'Papua New Guinea', text: 'Papua New Guinea' },
  { value: 'Paraguay', text: 'Paraguay' },
  { value: 'Peru', text: 'Peru' },
  { value: 'Philippines', text: 'Philippines' },
  { value: 'Pitcairn', text: 'Pitcairn' },
  { value: 'Poland', text: 'Poland' },
  { value: 'Portugal', text: 'Portugal' },
  { value: 'Puerto Rico', text: 'Puerto Rico' },
  { value: 'Qatar', text: 'Qatar' },
  { value: 'Reunion', text: 'Reunion' },
  { value: 'Romania', text: 'Romania' },
  { value: 'Russian Federation', text: 'Russian Federation' },
  { value: 'RWANDA', text: 'RWANDA' },
  { value: 'Saint Helena', text: 'Saint Helena' },
  { value: 'Saint Kitts and Nevis', text: 'Saint Kitts and Nevis' },
  { value: 'Saint Lucia', text: 'Saint Lucia' },
  { value: 'Saint Pierre and Miquelon', text: 'Saint Pierre and Miquelon' },
  {
    value: 'Saint Vincent and the Grenadines',
    text: 'Saint Vincent and the Grenadines',
  },
  { value: 'Samoa', text: 'Samoa' },
  { value: 'San Marino', text: '' },
  { value: 'Sao Tome and Principe', text: '' },
  { value: 'Saudi Arabia', text: 'Saudi Arabia' },
  { value: 'Senegal', text: 'Senegal' },
  { value: 'Serbia', text: 'Serbia' },
  { value: 'Seychelles', text: 'Seychelles' },
  { value: 'Sierra Leone', text: 'Sierra Leone' },
  { value: 'Singapore', text: 'Singapore' },
  { value: 'Slovakia', text: 'Slovakia' },
  { value: 'Slovenia', text: 'Slovenia' },
  { value: 'Solomon Islands', text: 'Solomon Islands' },
  { value: 'Somalia', text: 'Somalia' },
  { value: 'South Africa', text: 'South Africa' },
  {
    value: 'South Georgia and the South Sandwich Islands',
    text: 'South Georgia and the South Sandwich Islands',
  },
  { value: 'Spain', text: 'Spain' },
  { value: 'Sri Lanka', text: 'Sri Lanka' },
  { value: 'Sudan', text: 'Sudan' },
  { value: 'Surivalue', text: 'Surivalue' },
  { value: 'Svalbard and Jan Mayen', text: 'Svalbard and Jan Mayen' },
  { value: 'Swaziland', text: 'Swaziland' },
  { value: 'Sweden', text: 'Sweden' },
  { value: 'Switzerland', text: 'Switzerland' },
  { value: 'Syrian Arab Republic', text: 'Syrian Arab Republic' },
  { value: 'Taiwan, Province of China', text: 'Taiwan, Province of China' },
  { value: 'Tajikistan', text: 'Tajikistan' },
  {
    value: 'Tanzania, United Republic of',
    text: 'Tanzania, United Republic of',
  },
  { value: 'Thailand', text: 'Thailand' },
  { value: 'Timor-Leste', text: 'Timor-Leste' },
  { value: 'Togo', text: 'Togo' },
  { value: 'Tokelau', text: 'Tokelau' },
  { value: 'Tonga', text: 'Tonga' },
  { value: 'Trinidad and Tobago', text: 'Trinidad and Tobago' },
  { value: 'Tunisia', text: 'Tunisia' },
  { value: 'Turkey', text: 'Turkey' },
  { value: 'Turkmenistan', text: 'Turkmenistan' },
  { value: 'Turks and Caicos Islands', text: 'Turks and Caicos Islands' },
  { value: 'Tuvalu', text: 'Tuvalu' },
  { value: 'Uganda', text: 'Uganda' },
  { value: 'Ukraine', text: 'Ukraine' },
  { value: 'United Arab Emirates', text: 'United Arab Emirates' },
  { value: 'United Kingdom', text: 'United Kingdom' },
  { value: 'United States', text: 'United States' },
  {
    value: 'United States Minor Outlying Islands',
    text: 'United States Minor Outlying Islands',
  },
  { value: 'Uruguay', text: 'Uruguay' },
  { value: 'Uzbekistan', text: 'Uzbekistan' },
  { value: 'Vanuatu', text: 'Vanuatu' },
  { value: 'Venezuela', text: 'Venezuela' },
  { value: 'Viet Nam', text: 'Viet Nam' },
  { value: 'Virgin Islands, British', text: 'Virgin Islands, British' },
  { value: 'Virgin Islands, U.S.', text: 'Virgin Islands, U.S.' },
  { value: 'Wallis and Futuna', text: 'Wallis and Futuna' },
  { value: 'Western Sahara', text: 'Western Sahara' },
  { value: 'Yemen', text: 'Yemen' },
  { value: 'Zambia', text: 'Zambia' },
  { value: 'Zimbabwe', text: 'Zimbabwe' },
];

export const FINANCES = [
  {
    value: 'tuition',
    text: 'finances.tuition',
  },
  {
    value: 'mealFee',
    text: 'finances.mealFee',
  },
  {
    value: 'subClass',
    text: 'finances.subClass',
  },
];

export const GENDER = [
  {
    value: 'male',
    text: 'gender.male',
  },
  {
    value: 'female',
    text: 'gender.female',
  },
];

export const SUBJECTS = [
  {
    value: 'main',
    text: 'subjects.typeMain',
    color: '#56ac00',
  },
  {
    value: 'sub',
    text: 'subjects.typeSub',
    color: '#f8961d',
  },
];

export const STATUS = [
  {
    value: 'true',
    text: 'Active',
    color: theme.color.green,
  },
  {
    value: 'false',
    text: 'Inactive',
    color: theme.color.red,
  },
];

export const PAYMENT_STATUS = [
  {
    value: false,
    text: 'Not paid',
    textColor: theme.color.red,
    icon: 'close-circle',
  },
  {
    value: true,
    text: 'Paid',
    textColor: theme.color.green,
    icon: 'check-circle',
  },
];

export const QUOTE_STATUS = [
  {
    value: 'REJECTED',
    text: 'Rejected',
    color: theme.color.red,
    textColor: '#fff',
  },
  {
    value: 'ACCEPTED',
    text: 'Accepted',
    color: theme.color.green,
    textColor: '#fff',
  },
  {
    value: 'CANCELLED',
    text: 'Cancelled',
    color: theme.color.red,
    textColor: '#fff',
  },
];

export const ORDER_STATUS = [
  {
    value: 'OPEN',
    text: 'Open',
    color: theme.color.yellow,
    icon: 'folder-open',
    textColor: 'white',
  },
  {
    value: 'PROCESSING',
    text: 'Processing',
    color: theme.color.green,
    icon: 'interaction',
    textColor: 'white',
  },
  {
    value: 'ONDELIVERY',
    text: 'On Delivery',
    color: theme.color.green,
    icon: 'car',
    textColor: 'white',
  },
  {
    value: 'DELIVERED',
    text: 'Delivered',
    color: theme.color.blue,
    icon: 'home',
    textColor: 'white',
  },
  {
    value: 'COMPLETE',
    text: 'Complete',
    color: theme.color.blue,
    icon: 'check-circle',
    textColor: 'white',
  },
  {
    value: 'CANCELLED',
    text: 'Cancelled',
    color: theme.color.red,
    icon: 'close-circle',
    textColor: 'white',
  },
  {
    value: 'WAITING_FOR_QUOTE',
    text: 'Waiting for Quote',
    color: theme.color.orange,
    icon: 'check-circle',
    textColor: 'white',
  },
];

export const PRODUCT_STATUS = [
  {
    value: 'inprogress',
    text: 'status.inprogress',
    color: theme.color.green,
  },
  {
    value: 'pending',
    text: 'status.pending',
    color: theme.color.orange,
  },
  {
    value: 'completed',
    text: 'status.completed',
    color: theme.color.blue,
  },
  {
    value: 'developing',
    text: 'status.developing',
    color: theme.color.green,
  },
];

export const ACTIVITIES_LOG = [
  {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vulputate justo ornare feugiat.',
  },
  {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vulputate justo ornare feugiat.',
  },
  {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vulputate justo ornare feugiat.',
  },
  {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vulputate justo ornare feugiat.',
  },
];

export const ACTIVITY_TYPE = [
  {
    id: 1,
    value: 'ADD_COMMENT',
    text: 'startUps.activities.addComment',
    textColor: '#36BF57',
  },
  {
    id: 2,
    value: 'DELETE_COMMENT',
    text: 'startUps.activities.deleteComment',
    textColor: '#F16063',
  },
  {
    id: 3,
    value: 'DONE_CONCEPT',
    text: 'startUps.activities.doneConcept',
    textColor: '#FB8429',
  },
  {
    id: 4,
    value: 'CANCELLED_CONCEPT',
    text: 'startUps.activities.cancelConcept',
    textColor: '#F16063',
  },
  {
    id: 5,
    value: 'DONE_TODO_STEP',
    text: 'startUps.activities.doneTodoStep',
    textColor: '#FB8429',
  },
  {
    id: 6,
    value: 'CANCELLED_TODO_STEP',
    text: 'startUps.activities.cancelConcept',
    textColor: '#F16063',
  },
  {
    id: 7,
    value: 'ADD_RATING',
    text: 'startUps.activities.addRating',
    textColor: '#4C6FFF',
  },
  {
    id: 8,
    value: 'UPDATE_RATING',
    text: 'startUps.activities.updateRating',
    textColor: '#36BF57',
  },
  {
    id: 9,
    value: 'SKIP_TODO',
    text: 'startUps.activities.skipTodo',
    textColor: '#F5A303',
  },
  {
    id: 10,
    value: 'DONE_TODO',
    text: 'startUps.activities.doneTodo',
    textColor: '#36BF57',
  },
  {
    id: 11,
    value: 'SKIP_CONCEPT',
    text: 'startUps.activities.skipConcept',
    textColor: '#F5A303',
  },
];

export const USER_STATUS = [
  {
    id: 1,
    value: true,
    text: 'status.active',
    color: '#DEFFEE',
    textColor: '#36BF57',
  },
  {
    id: 2,
    value: false,
    text: 'status.inactive',
    color: '#EBF2FA',
    textColor: '#808DA4',
  },
];

export const PAYMENT_TYPE = [
  {
    id: 1,
    value: 'SUBSCRIPTION',
    text: 'Subscription',
  },
  {
    id: 2,
    value: 'PERPETUAL',
    text: 'Perpetual',
  },
];

export const BILLING_STATUS = [
  {
    id: 1,
    value: 'IN_PROGRESS',
    text: 'status.inprogress',
    color: '#E1E8FF',
    textColor: '#4C6FFF',
  },
  {
    id: 2,
    value: 'COMPLETED',
    text: 'status.completed',
    color: '#FFEDE3',
    textColor: '#F5A303',
  },
  {
    id: 3,
    value: 'CANCELLED',
    text: 'status.cancel',
    color: '#FFEEF1',
    textColor: '#F16063',
  },
  {
    id: 4,
    value: 'PENDING',
    text: 'status.pending',
    color: '#FFF1E9',
    textColor: '#FF934B',
  },
];

export const ORDER_DETAIL_STATUS = [
  {
    id: 1,
    value: 'SUCCESS',
    text: 'status.success',
    color: '#DEFFEE',
    textColor: '#36BF57',
  },
  {
    id: 2,
    value: 'FAILED',
    text: 'status.fail',
    color: '#FFEEF1',
    textColor: '#FF374F',
  },
  {
    id: 3,
    value: 'IN_PROGRESS',
    text: 'status.inprogress',
    color: '#E1E8FF',
    textColor: '#4C6FFF',
  },
  {
    id: 4,
    value: 'COMPLETED',
    text: 'status.completed',
    color: '#DEFFEE',
    textColor: '#00C48C',
  },
  {
    id: 5,
    value: 'CANCELLED',
    text: 'status.cancel',
    color: '#FFEEF1',
    textColor: '#FF374F',
  },
  {
    id: 6,
    value: 'PENDING',
    text: 'status.pending',
    color: '#FFEDE3',
    textColor: '#FF8238',
  },
  {
    id: 7,
    value: 'ERROR',
    text: 'status.error',
    color: '#FFEEF1',
    textColor: '#f54242',
  },  
  {
    id: 8,
    value: 'UNCLAIMED',
    text: 'status.unclaimed',
    color: '#D0DAE5',
    textColor: '#738FB0',
  },
];

export const USER_ROLE = [
  {
    id: 1,
    value: 'startup',
    text: 'role.startup',
    color: '#E1E8FF',
    textColor: '#4C6FFF',
  },
  {
    id: 2,
    value: 'coach',
    text: 'role.coach',
    color: '#FFEDE3',
    textColor: '#F5A303',
  },
  {
    id: 3,
    value: 'provider',
    text: 'role.provider',
    color: '#FFEEF1',
    textColor: '#F16063',
  },
  {
    id: 4,
    value: 'admin',
    text: 'role.admin',
    color: '#DEFFEE',
    textColor: '#36BF57',
  },
  {
    id: 5,
    value: 'superadmin',
    text: 'role.superAdmin',
    color: '#DEFFEE',
    textColor: '#36BF57',
  },
];

export const CREATE_USER_ROLE = [
  {
    id: 1,
    value: 'startup',
    text: 'role.startup',
    color: '#E1E8FF',
    textColor: '#4C6FFF',
  },
  {
    id: 2,
    value: 'coach',
    text: 'role.coach',
    color: '#FFEDE3',
    textColor: '#F5A303',
  },
  {
    id: 3,
    value: 'provider',
    text: 'role.provider',
    color: '#FFEEF1',
    textColor: '#F16063',
  },
  {
    id: 4,
    value: 'admin',
    text: 'role.organization',
    color: '#FFEEF1',
    textColor: '#36BF57',
  },
];

export const MEMBER_STATUS = [
  {
    id: 1,
    data: 'false',
    text: {
      en: 'Locked',
      vi: 'Khoá',
    },
  },
  {
    id: 1,
    data: 'true',
    text: {
      en: 'Unlock',
      vi: 'Không Khoá',
    },
  },
];

export const ACTIVE_TYPES = [
  {
    id: 1,
    value: false,
    text: 'isActive.deactive',
    color: '#9FA2AA',
    textColor: '#fff',
  },
  {
    id: 2,
    value: true,
    text: 'isActive.active',
    color: '#32C12F10',
    textColor: '#139C5A',
  },
];

export const ONBOARDING_TYPES = [
  {
    id: 1,
    value: 'hidden',
    text: 'onboardings.hidden',
    color: '#9FA2AA',
    textColor: '#fff',
  },
  {
    id: 2,
    value: 'publish',
    text: 'onboardings.publish',
    color: '#32C12F10',
    textColor: '#139C5A',
  },
];

export const USER_PROGRAM_STATUS = [
  {
    id: 1,
    value: 'IN_PROGRESS',
    text: 'status.inprogress',
    color: '#E8FBFF',
    textColor: '#2E8ADF',
  },
  {
    id: 2,
    value: 'DONE',
    text: 'status.done',
    color: '#EDF9F0',
    textColor: '#4AC267',
  },
  {
    id: 3,
    value: 'CANCELLED',
    text: 'status.cancel',
    color: '#FEECEC',
    textColor: '#EC432C',
  },
];

export const PROGRAM_PHASES_STATUS = [
  {
    value: 'onGoing',
    text: 'On Going',
    color: '#F5A30310',
    textColor: '#F5A303',
  },
  {
    value: 'done',
    text: 'Done',
    color: '#2D9CDB10',
    textColor: '#2D9CDB',
  },
];

export const DISABLE_TYPES = [
  {
    value: false,
    text: 'isDisabled.notDisabled',
  },
  {
    value: true,
    text: 'isDisabled.disabled',
  },
];

export const MEMBER_ROLES = [
  {
    id: 1,
    text: {
      en: 'Admin',
      vi: 'Admin',
    },
  },
  {
    id: 2,
    text: {
      en: 'Staff',
      vi: 'Nhân viên',
    },
  },
  {
    id: 3,
    text: {
      en: 'Member',
      vi: 'Khách hàng',
    },
  },
];

export const LANGUAGES = [
  {
    id: 'en',
    text: 'English',
    shortText: 'En',
  },
  {
    id: 'fr',
    text: 'French',
    shortText: 'Fr',
  },
];

export const GENDERS = [
  {
    value: 'male',
    text: 'gender.male',
    color: '#1890ff',
    icon: 'man',
  },
  {
    value: 'female',
    text: 'gender.female',
    color: '#eb2f96',
    icon: 'woman',
  },
  {
    value: 'other',
    text: 'gender.other',
    color: '#959595',
    icon: 'key',
  },
];

export const BOOKING_STATUS = [
  {
    id: 'INPROGRESS',
    value: 'INPROGRESS',
    text: 'status.inprogress',
    requestSuffixUrl: 'inprogress',
  },
  {
    id: 'COMPLETED',
    value: 'COMPLETED',
    text: 'status.completed',
    requestSuffixUrl: 'complete',
  },
  {
    id: 'CANCELLED',
    value: 'CANCELLED',
    text: 'status.cancelled',
    requestSuffixUrl: 'cancel',
  },
  { id: 'PENDING', value: 'PENDING', text: 'status.pending' },
];

export const HOME_TAB = [
  { id: 'todayBooking', title: 'Today' },
  { id: 'pendingBooking', title: 'Upcoming' },
];

export const MOMENT_CODE = {
  daily: 'd',
  hourly: 'h',
  weekly: 'w',
  monthly: 'M',
};

export const TRANSACTION_TYPE = [
  { value: 'INCOME', text: 'button.income' },
  { value: 'EXPENSE', text: 'button.expense' },
];

export const PACKAGE_TYPES_TIME_UNIT = {
  hourly: 'hour',
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
};
export const BOOKINGS_TYPES = ['todayBooking', 'pendingBooking'];
export const CHECKIN_STATUS = [
  { text: 'checkinStatus.waitingCheckin', value: 'waitingCheckin' },
  { text: 'checkinStatus.waitingCheckout', value: 'waitingCheckout' },
  { text: 'checkinStatus.completed', value: 'completed' },
  { text: 'checkinStatus.all', value: 'all' },
  { text: 'checkinStatus.upcoming', value: 'upcoming' },
];
export const DISCOUNT_UNIT = [
  { text: '%', value: 'percent' },
  { text: 'VND', value: 'number' },
];
export const PAYMENT_METHOD = [
  { text: 'payType.paymentByCash', value: 'cash' },
  { text: 'payType.paymentByBank', value: 'bank' },
];

export const NOTIFICATIONS = [
  {
    value: 'pharmacy',
    text: 'notifications.pharmacy',
    icon: 'ic-pharmacy',
  },
  {
    value: 'delivery',
    text: 'notifications.delivery',
    icon: 'ic-delivery',
  },
  {
    value: 'prepare',
    text: 'notifications.prepare',
    icon: 'ic-prepare',
  },
  {
    value: 'send',
    text: 'notifications.send',
    icon: 'ic-send',
  },
];

export const BILLING_UNIT = [
  { text: 'packages.hour', value: 'Hour' },
  { text: 'packages.month', value: 'Month' },
  { text: 'packages.week', value: 'Week' },
  { text: 'packages.day', value: 'Day' },
];

export const ROLE = [
  { text: 'role.superadmin', value: 'superadmin' },
  { text: 'role.admin', value: 'admin' },
  { text: 'role.pharmacist', value: 'user' },
];

export const JOBS = commonJobs;
export const NATIONALITIES = uniqBy(nationalities, 'nationality');

export const QUALIFICATIONS = [
  { text: 'qualifications.university', value: 'university' },
  { text: 'qualifications.colleges', value: 'colleges' },
];

export const OPEN_TIME = [
  {
    value: true,
    text: 'time.open',
    color: '#52c41a',
  },
  {
    value: false,
    text: 'time.closed',
    color: '#e64c38',
  },
];

export const SUMMARY_CARD_TYPES = [
  {
    value: 'up',
    text: 'summaryCard.up',
    icon: RiseOutlined,
    color: theme.color.green,
  },
  {
    value: 'down',
    text: 'summaryCard.down',
    icon: FallOutlined,
    color: theme.color.red,
  },
];

export const DETAIL_SUMMARY_CARD_TYPES = [
  {
    value: 'up',
    text: 'detailSummaryCard.up',
    icon: RiseOutlined,
    color: theme.color.green,
  },
  {
    value: 'down',
    text: 'detailSummaryCard.down',
    icon: FallOutlined,
    color: theme.color.red,
  },
];

export const SUMMARIES_CUSTOMER = [
  {
    dataKey: 'newCustomer',
    color: '#0088FE',
    text: 'customers.newCustomer',
  },
  {
    dataKey: 'repeatedCustomer',
    color: '#00C49F',
    text: 'customers.repeatedCustomer',
  },
];

export const CONTRACT_TYPES = [
  { text: 'contractTypes.official', value: 'official' },
  { text: 'contractTypes.partTime', value: 'partTime' },
];

export const RATINGS = [
  {
    value: '1',
    text: '1 Star',
  },
  {
    value: '2',
    text: '2 Star',
  },
  {
    value: '3',
    text: '3 Star',
  },
  {
    value: '4',
    text: '4 Star',
  },
  {
    value: '5',
    text: '5 Star',
  },
];

export const ARTICLES_STATUS = [
  { color: '#4cb1e8', text: 'articles.status.public', value: 'public' },
  { color: '#d1d1d1', text: 'articles.status.draft', value: 'draft' },
];

export const TEAMS = [
  { color: theme.color.blue, value: 'react', text: 'react' },
  { color: theme.color.red, value: 'angular', text: 'angular' },
  { color: theme.color.green, value: 'nodejs', text: 'nodejs' },
  { color: theme.color.blueShade, value: '.net', text: '.net' },
  { color: theme.color.blueShade, value: 'react-native', text: 'react-native' },
  { color: theme.color.yellow, value: 'marketing', text: 'marketing' },
  { color: theme.color.pink, value: 'design', text: 'design' },
];

export const ORDER_FEATURE = [
  { value: 'prioritize', text: 'Prioritize', color: '#ff2911' },
  { value: 'information', text: 'Information', color: '#38393a' },
  { value: 'basic', text: 'Basic', color: '#64bb55' },
  { value: 'medium', text: 'Medium', color: '#f1d42f' },
  { value: 'highClass', text: 'High-class', color: '#fd9e31' },
  { value: 'customerCare', text: 'Customer Care', color: '#59e69a' },
  { value: 'pr', text: 'PR', color: '#fd7bca' },
  { value: 'test', text: 'Test', color: '#d08cb5' },
];

export const LOCALES = [
  {
    text: 'Vietnamese',
    value: 'vi',
  },
  {
    text: 'English',
    value: 'en',
  },
  {
    text: 'zh-CN',
    value: 'zh-CN',
  },
  {
    text: 'zh-TW',
    value: 'zh-TW',
  },
];

export const ORIENTATION = [
  {
    text: 'Landscape',
    value: 'landscape',
  },
  {
    text: 'Portrait',
    value: 'portrait',
  },
  {
    text: 'Square',
    value: 'square',
  },
];

export const UNIT_SIZE = [
  {
    text: 'cm',
    value: 'cm',
  },
  {
    text: 'inch',
    value: 'inch',
  },
];

export const inchToCM = 2.54;

export const CONDITIONS = [
  {
    text: 'Excellent',
    value: 'excellent',
    color: '#108ee9',
  },
  {
    text: 'Good',
    value: 'good',
    color: '#87d068',
  },
  {
    text: 'Bad',
    value: 'bad',
    color: '#f50',
  },
];

export const CMS_STATUS = [
  { text: 'Published', value: 'published', color: theme.color.blue },
  { text: 'Draft', value: 'draft', color: '#c2bca5' },
  // { text: 'cms.contentType.productDetail', value: 'PRODUCT_DETAIL' },
  // { text: 'cms.contentType.categoryDetail', value: 'CATEGORY_DETAIL' },
];

export const CMS_CONTENT_TYPES = [
  {
    text: 'cms.contentType.page',
    value: 'page',
    prefixUrl: '/',
    desc: 'cms.contentType.pageDesc',
    initialFilter: {
      orderBy: 'updatedAt:DESC',
    },
    // initialFilter: {
    //   filter: {
    //     type: 'page',
    //   },
    // },
  },
  {
    text: 'cms.contentType.menu',
    value: 'menu',
    desc: 'cms.contentType.menuDesc',
    initialFilter: {
      filter: {
        type: 'menu',
      },
    },
  },
  // { text: 'cms.contentType.productDetail', value: 'PRODUCT_DETAIL' },
  // { text: 'cms.contentType.categoryDetail', value: 'CATEGORY_DETAIL' },
  {
    text: 'cms.contentType.contact',
    value: 'contact',
    desc: 'cms.contentType.contactDesc',
    initialFilter: {
      filter: {
        type: 'contact',
      },
    },
  },
];

export const CMS_TEMPLATES = [
  { text: 'cms.template.section', value: 'SECTION' },
  { text: 'cms.template.banner', value: 'BANNER' },
  { text: 'cms.template.menuItem', value: 'MENU_ITEM' },
];
