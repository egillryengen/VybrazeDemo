// C:\Vybraze\src\lib\icons.tsx
// Patched icons barrel: add missing aliases requested by the codebase
// and keep the original exports intact. This version avoids introducing
// undefined identifiers and only adds the minimal aliases that were missing.
// Comments are in English.

import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import type { TextStyle, ViewStyle } from 'react-native';

export type IconProps = {
  size?: number;
  color?: string;
  style?: TextStyle | ViewStyle;
  [key: string]: any;
};

type MCProps = IconProps & { iconName: string };
const MC = ({ iconName, ...p }: MCProps) => (
  <MaterialCommunityIcons name={iconName as any} {...p} />
);

/* Minimal placeholder icon used when a direct match isn't available. */
export const PlaceholderIcon = (p: IconProps) => <Feather name="help-circle" {...p} />;

/* ---------------------------------------------------------
 * ICONS USED BY THE APP (wrapped from @expo/vector-icons)
 * --------------------------------------------------------- */

/* Common UI */
export const CheckIcon = (p: IconProps) => <Feather name="check" {...p} />;
export const CheckCircleIcon = (p: IconProps) => <Feather name="check-circle" {...p} />;
export const XIcon = (p: IconProps) => <Feather name="x" {...p} />;
export const XCircleIcon = (p: IconProps) => <Feather name="x-circle" {...p} />;
export const PlusIcon = (p: IconProps) => <Feather name="plus" {...p} />;
export const MinusIcon = (p: IconProps) => <Feather name="minus" {...p} />;
export const ChevronDownIcon = (p: IconProps) => <Feather name="chevron-down" {...p} />;
export const ChevronUpIcon = (p: IconProps) => <Feather name="chevron-up" {...p} />;
export const ChevronLeftIcon = (p: IconProps) => <Feather name="chevron-left" {...p} />;
export const ChevronRightIcon = (p: IconProps) => <Feather name="chevron-right" {...p} />;
export const ArrowRightIcon = (p: IconProps) => <Feather name="arrow-right" {...p} />;
export const ArrowLeftIcon = (p: IconProps) => <Feather name="arrow-left" {...p} />;
export const MoreHorizontalIcon = (p: IconProps) => <Feather name="more-horizontal" {...p} />;

/* Added Bell icon for AppHeader and other components */
export const BellIcon = (p: IconProps) => <Feather name="bell" {...p} />;

/* NEW: BellOff using MaterialCommunityIcons (bell-off) */
export const BellOffIcon = (p: IconProps) => <MC iconName="bell-off" {...p} />;

/* Navigation */
export const HomeIcon = (p: IconProps) => <Feather name="home" {...p} />;
export const CalendarIcon = (p: IconProps) => <Feather name="calendar" {...p} />;
export const UsersIcon = (p: IconProps) => <Feather name="users" {...p} />;
export const MessageSquareIcon = (p: IconProps) => <Feather name="message-square" {...p} />;
export const MessageCircleIcon = (p: IconProps) => <Feather name="message-circle" {...p} />;
export const SettingsIcon = (p: IconProps) => <Feather name="settings" {...p} />;

/* Actions */
export const SearchIcon = (p: IconProps) => <Feather name="search" {...p} />;
export const FilterIcon = (p: IconProps) => <Feather name="filter" {...p} />;
export const DownloadIcon = (p: IconProps) => <Feather name="download" {...p} />;
export const UploadIcon = (p: IconProps) => <Feather name="upload" {...p} />;
export const Share2Icon = (p: IconProps) => <Feather name="share" {...p} />;
export const CopyIcon = (p: IconProps) => <Feather name="copy" {...p} />;
export const EditIcon = (p: IconProps) => <Feather name="edit" {...p} />;
export const Trash2Icon = (p: IconProps) => <Feather name="trash-2" {...p} />;
export const SendIcon = (p: IconProps) => <Feather name="send" {...p} />;
export const MailIcon = (p: IconProps) => <Feather name="mail" {...p} />;

/* PATCH: Save icon */
export const SaveIcon = (p: IconProps) => <Feather name="save" {...p} />;
export const Save = SaveIcon;

/* Status & Alerts */
export const AlertCircleIcon = (p: IconProps) => <Feather name="alert-circle" {...p} />;
export const AlertTriangleIcon = (p: IconProps) => <Feather name="alert-triangle" {...p} />;
export const InfoIcon = (p: IconProps) => <Feather name="info" {...p} />;
export const ClockIcon = (p: IconProps) => <Feather name="clock" {...p} />;

/* User & Identity */
export const UserIcon = (p: IconProps) => <Feather name="user" {...p} />;
export const UserCheckIcon = (p: IconProps) => <Feather name="user-check" {...p} />;
export const UserPlusIcon = (p: IconProps) => <Feather name="user-plus" {...p} />;
export const UserXIcon = (p: IconProps) => <Feather name="user-x" {...p} />;
export const ShieldIcon = (p: IconProps) => <Feather name="shield" {...p} />;
export const ShieldCheckIcon = (p: IconProps) => <MC iconName="shield-check" {...p} />;
export const EyeIcon = (p: IconProps) => <Feather name="eye" {...p} />;
export const EyeOffIcon = (p: IconProps) => <Feather name="eye-off" {...p} />;

/* Business & Organization */
export const Building2Icon = (p: IconProps) => <MC iconName="office-building" {...p} />;
export const BriefcaseIcon = (p: IconProps) => <Feather name="briefcase" {...p} />;

/* Content */
export const ImageIcon = (p: IconProps) => <Feather name="image" {...p} />;
export const CameraIcon = (p: IconProps) => <Feather name="camera" {...p} />;
export const FileTextIcon = (p: IconProps) => <Feather name="file-text" {...p} />;
export const TicketIcon = (p: IconProps) => <MC iconName="ticket" {...p} />;
export const QrCodeIcon = (p: IconProps) => <MC iconName="qrcode" {...p} />;
export const ScanIcon = (p: IconProps) => <MC iconName="qrcode-scan" {...p} />;
export const LockIcon = (p: IconProps) => <Feather name="lock" {...p} />;
export const UnlockIcon = (p: IconProps) => <Feather name="unlock" {...p} />;

/* Stats & Analytics */
export const TrendingUpIcon = (p: IconProps) => <Feather name="trending-up" {...p} />;
export const TrendingDownIcon = (p: IconProps) => <Feather name="trending-down" {...p} />;
export const BarChart3Icon = (p: IconProps) => <Feather name="bar-chart-2" {...p} />;
export const DollarSignIcon = (p: IconProps) => <Feather name="dollar-sign" {...p} />;

/* Social */
export const HeartIcon = (p: IconProps) => <Feather name="heart" {...p} />;
export const StarIcon = (p: IconProps) => <Feather name="star" {...p} />;
export const MapPinIcon = (p: IconProps) => <Feather name="map-pin" {...p} />;

/* Flag icon (Feather 'flag') */
export const FlagIcon = (p: IconProps) => <Feather name="flag" {...p} />;
export const Flag = FlagIcon;

/* Misc */
export const Loader2Icon = (p: IconProps) => <Feather name="loader" {...p} />;
export const RefreshCwIcon = (p: IconProps) => <Feather name="refresh-cw" {...p} />;
export const ExternalLinkIcon = (p: IconProps) => <Feather name="external-link" {...p} />;
export const SparklesIcon = (p: IconProps) => <MC iconName="star-four-points" {...p} />;
export const CrownIcon = (p: IconProps) => <MC iconName="crown" {...p} />;
export const CircleIcon = (p: IconProps) => <Feather name="circle" {...p} />;
export const ZapIcon = (p: IconProps) => <Feather name="zap" {...p} />;
export const TargetIcon = (p: IconProps) => <Feather name="target" {...p} />;
export const AwardIcon = (p: IconProps) => <MC iconName="trophy" {...p} />;

/* Admin / Dashboard */
export const PaletteIcon = (p: IconProps) => <MC iconName="palette" {...p} />;
export const TagsIcon = (p: IconProps) => <Feather name="tag" {...p} />;
export const DatabaseIcon = (p: IconProps) => <Feather name="database" {...p} />;
export const ActivityIcon = (p: IconProps) => <Feather name="activity" {...p} />;
export const CreditCardIcon = (p: IconProps) => <Feather name="credit-card" {...p} />;
export const PackageIcon = (p: IconProps) => <Feather name="package" {...p} />;

/* Extra */
export const SmartphoneIcon = (p: IconProps) => <Feather name="smartphone" {...p} />;

/* Additional icons required by SignUpNew and other components */
export const FingerprintIcon = (p: IconProps) => <MC iconName="fingerprint" {...p} />;
export const SmileIcon = (p: IconProps) => <MC iconName="emoticon-outline" {...p} />;
export const NavigationIcon = (p: IconProps) => <Feather name="navigation" {...p} />;
// PATCH: Add ListChecks icon to match lucide-react usage
export const ListChecksIcon = (p: IconProps) => (
  <MC iconName="format-list-checks" {...p} />
);

// Backwards-compatible alias
export const ListChecks = ListChecksIcon;

/* Phone glyph corrected to actual phone icon */
export const PhoneIcon = (p: IconProps) => <Feather name="phone" {...p} />;

/* Instagram (MaterialCommunityIcons fallback) */
export const InstagramIcon = (p: IconProps) => <MC iconName="instagram" {...p} />;

/* UserCog (MaterialCommunityIcons fallback for account-cog) */
export const UserCogIcon = (p: IconProps) => <MC iconName="account-cog" {...p} />;

/* Megaphone (MaterialCommunityIcons) - ADDED to resolve missing import */
export const MegaphoneIcon = (p: IconProps) => <MC iconName="megaphone" {...p} />;
export const Megaphone = MegaphoneIcon;

/* ---------------------------------------------------------
 * Aliases to match previous lucide-react usage and convenience
 * --------------------------------------------------------- */

export const Heart = HeartIcon;
export const Users = UsersIcon;
export const MapPin = MapPinIcon;
export const Star = StarIcon;
export const ArrowRight = ArrowRightIcon;
export const ArrowLeft = ArrowLeftIcon;
export const ChevronRight = ChevronRightIcon;
export const ChevronLeft = ChevronLeftIcon;
export const MoreHorizontal = MoreHorizontalIcon;
export const Smartphone = SmartphoneIcon;
export const Shield = ShieldIcon;
export const ShieldCheck = ShieldCheckIcon;
export const Building2 = Building2Icon;
export const QrCode = QrCodeIcon;
export const Scan = ScanIcon;
export const Camera = CameraIcon;
export const User = UserIcon;
export const Mail = MailIcon;
export const Phone = PhoneIcon;
export const Upload = UploadIcon;
export const X = XIcon;
export const Check = CheckIcon;
export const CheckCircle = CheckCircleIcon;
export const CheckCircle2 = CheckCircleIcon; // alias
export const AlertCircle = AlertCircleIcon;
export const AlertTriangle = AlertTriangleIcon;
export const Sparkles = SparklesIcon;
export const Zap = ZapIcon;
export const Calendar = CalendarIcon;
export const Info = InfoIcon;
export const Fingerprint = FingerprintIcon;
export const Briefcase = BriefcaseIcon;
export const Smile = SmileIcon;
export const Navigation = NavigationIcon;
export const DollarSign = DollarSignIcon;
export const Award = AwardIcon;
export const ExternalLink = ExternalLinkIcon;
export const List = (p: IconProps) => <Feather name="list" {...p} />;
export const Layers = (p: IconProps) => <Feather name="layers" {...p} />;
export const Bookmark = (p: IconProps) => <Feather name="bookmark" {...p} />;
export const Send = SendIcon;

/* Ensure common aliases exist for direct imports used across the app */
export const Clock = ClockIcon;
export const Filter = FilterIcon;
export const UserCheck = UserCheckIcon;

/* NEW — REQUIRED BY SUBSCRIPTION PAYWALL (kept for backward compatibility) */
export const Crown = CrownIcon;
export const Lock = LockIcon;
export const TrendingUp = TrendingUpIcon;
export const Target = TargetIcon;
export const XCircle = XCircleIcon;
export const Plus = PlusIcon;
export const Minus = MinusIcon;

/* New: Link2 export to match previous web usage */
export const Link2 = (p: IconProps) => <Feather name="link" {...p} />;

/* --- ADDED ALIASES: Download and Copy --- */
export const Download = DownloadIcon;
export const Copy = CopyIcon;

/* Existing aliases and convenience exports */
export const UserPlus = UserPlusIcon;
export const Trash2 = Trash2Icon;
export const ChevronDown = ChevronDownIcon;
export const ChevronUp = ChevronUpIcon;
export const Palette = PaletteIcon;
export const Tags = TagsIcon;
export const Settings = SettingsIcon;
export const UserX = UserXIcon;
export const Package = PackageIcon;
export const Share2 = Share2Icon;
export const Edit2 = EditIcon;
export const Eye = EyeIcon;
export const EyeOff = EyeOffIcon;
export const Globe = (p: IconProps) => <MC iconName="earth" {...p} />;

/* Alias Loader2 to the existing Loader2Icon */
export const Loader2 = Loader2Icon;
export const RefreshCw = RefreshCwIcon;

/* Additional convenience aliases */
export const Search = SearchIcon;
export const MessageCircle = MessageCircleIcon;

/* --- PATCH: Add missing MessageSquare alias used by components --- */
export const MessageSquare = MessageSquareIcon;

// --- NEW: Aliases required by OrganizationAnalytics ---
export const TrendingDown = TrendingDownIcon;
export const BarChart3 = BarChart3Icon;
/* ADDED: Provide BarChart alias expected by components */
export const BarChart = BarChart3Icon;
export const BarChartIcon = BarChart3Icon;

export const PieChart = (p: IconProps) => <MC iconName="chart-pie" {...p} />;

/* Keep other aliases */
export const Instagram = InstagramIcon;
export const LinkedinIcon = (p: IconProps) => <MC iconName="linkedin" {...p} />;
export const Edit = EditIcon;
export const UserCog = UserCogIcon;
export const Unlock = UnlockIcon;

/* NEW: Switch / Toggle icons */
export const Switch = ({ checked = false, size = 20, color = "#111", ...p }: IconProps & { checked?: boolean }) =>
  checked ? <MC iconName="toggle-switch" size={size} color={color} {...p} /> : <MC iconName="toggle-switch-off-outline" size={size} color={color} {...p} />;

export const ToggleOn = (p: IconProps) => <MC iconName="toggle-switch" {...p} />;
export const ToggleOff = (p: IconProps) => <MC iconName="toggle-switch-off-outline" {...p} />;

/* NEW: Add missing exports/aliases requested by the app:
   - Ticket
   - Wallet
   - ShoppingCart
   - ScanLine
*/
export const WalletIcon = DollarSignIcon;
export const Wallet = WalletIcon;
export const Ticket = TicketIcon;
export const ShoppingCartIcon = (p: IconProps) => <Feather name="shopping-cart" {...p} />;
export const ShoppingCart = ShoppingCartIcon;
/* --- NEW: ShoppingBag alias added for compatibility with components importing ShoppingBag --- */
export const ShoppingBagIcon = ShoppingCartIcon;
export const ShoppingBag = ShoppingBagIcon;

export const ScanLine = ScanIcon;

/* Provide direct aliases for CreditCard and FileText to match older imports */
export const CreditCard = CreditCardIcon;
export const FileText = FileTextIcon;

/* Alias for convenience (keeps parity with lucide-react naming) */
export const Linkedin = LinkedinIcon;

/* ------------------------------------------------------------------
 * Additional icons added to resolve missing imports in the codebase
 * ------------------------------------------------------------------ */

/* Play icon (Feather 'play') */
export const PlayIcon = (p: IconProps) => <Feather name="play" {...p} />;
export const Play = PlayIcon;

/* RotateCcw icon (Feather 'rotate-ccw') */
export const RotateCcwIcon = (p: IconProps) => <Feather name="rotate-ccw" {...p} />;
export const RotateCcw = RotateCcwIcon;

/* Backwards-compatible alias for 'Bell' to be used in imports */
export const Bell = BellIcon;

/* NEW: Backwards-compatible alias for 'BellOff' to be used in imports */
export const BellOff = BellOffIcon;

// Add near other icon exports (e.g., under Misc or Content)
export const KeyRoundIcon = (p: IconProps) => <Feather name="key" {...p} />;

// Alias for backwards compatibility (if code imports KeyRound)
export const KeyRound = KeyRoundIcon;

/* NEW: Backwards-compatible alias for 'Circle' to be used in imports */
export const Circle = CircleIcon;

/* ------------------------------------------------------------------
 * NEW / PATCHED ALIASES ADDED TO RESOLVE ERRORS
 * ------------------------------------------------------------------ */

/* Pencil alias: map to EditIcon for compatibility with web naming */
export const Pencil = EditIcon;

/* UserCircle alias: MaterialCommunityIcons 'account-circle' provides a user-circle glyph */
export const UserCircleIcon = (p: IconProps) => <MC iconName="account-circle" {...p} />;
export const UserCircle = UserCircleIcon;

/* ------------------------------------------------------------------
 * Backwards-compatible named alias exports added below
 * ------------------------------------------------------------------ */

/* Ensure Home named export exists for code importing { Home } */
export const Home = HomeIcon;

/* ------------------------------------------------------------------
 * Apple icon (added)
 * ------------------------------------------------------------------ */
/* MaterialCommunityIcons provides an 'apple' glyph; export both AppleIcon and Apple alias */
export const AppleIcon = (p: IconProps) => <MC iconName="apple" {...p} />;
export const Apple = AppleIcon;

/* ------------------------------------------------------------------
 * Default export (unique keys only)
 * ------------------------------------------------------------------ */
const Icons = {
  TrendingDown,
  BarChart3,
  BarChart,        // added alias included
  BarChartIcon,    // added alias included
  PieChart,
  PlaceholderIcon,
  CheckIcon,
  CheckCircleIcon,
  XIcon,
  XCircleIcon,
  PlusIcon,
  MinusIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  MoreHorizontalIcon,
  BellIcon,
  BellOffIcon,
  HomeIcon,
  CalendarIcon,
  UsersIcon,
  MessageSquareIcon,
  MessageCircleIcon,
  SettingsIcon,
  SearchIcon,
  FilterIcon,
  DownloadIcon,
  UploadIcon,
  Share2Icon,
  CopyIcon,
  EditIcon,
  Trash2Icon,
  SendIcon,
  MailIcon,
  AlertCircleIcon,
  AlertTriangleIcon,
  InfoIcon,
  ClockIcon,
  UserIcon,
  UserCheckIcon,
  UserPlusIcon,
  UserXIcon,
  ShieldIcon,
  ShieldCheckIcon,
  EyeIcon,
  EyeOffIcon,
  Building2Icon,
  BriefcaseIcon,
  ImageIcon,
  CameraIcon,
  FileTextIcon,
  TicketIcon,
  QrCodeIcon,
  ScanIcon,
  LockIcon,
  UnlockIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  BarChart3Icon,
  DollarSignIcon,
  HeartIcon,
  StarIcon,
  MapPinIcon,
  Loader2Icon,
  RefreshCwIcon,
  ExternalLinkIcon,
  SparklesIcon,
  CrownIcon,
  CircleIcon,
  ZapIcon,
  TargetIcon,
  AwardIcon,
  PaletteIcon,
  TagsIcon,
  DatabaseIcon,
  ActivityIcon,
  CreditCardIcon,
  PackageIcon,
  SmartphoneIcon,
  FingerprintIcon,
  SmileIcon,
  NavigationIcon,
  PhoneIcon,
  Link2,
  Download,
  Copy,
  Loader2,
  InstagramIcon,
  UserCogIcon,
  Switch,
  ToggleOn,
  ToggleOff,
  WalletIcon,
  Wallet,
  Ticket,
  ShoppingCartIcon,
  ShoppingCart,
  ShoppingBagIcon,
  ShoppingBag,
  ScanLine,
  LinkedinIcon,
  Instagram,
  Linkedin,
  UserCog,
  Heart,
  Users,
  MapPin,
  Star,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  MoreHorizontal,
  Smartphone,
  Shield,
  ShieldCheck,
  Building2,
  QrCode,
  Scan,
  Camera,
  User,
  Mail,
  Phone,
  Upload,
  X,
  Check,
  CheckCircle,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Sparkles,
  Zap,
  Calendar,
  Info,
  Fingerprint,
  Briefcase,
  Smile,
  Navigation,
  DollarSign,
  Award,
  ExternalLink,
  List: (p: IconProps) => <Feather name="list" {...p} />,
  Layers: (p: IconProps) => <Feather name="layers" {...p} />,
  Bookmark: (p: IconProps) => <Feather name="bookmark" {...p} />,
  Send,
  Clock,
  Filter,
  UserCheck,
  Crown,
  Lock,
  TrendingUp,
  Target,
  XCircle,
  Plus,
  Minus,
  Search,
  MessageCircle,
  Edit,
  Unlock,
  PlayIcon,
  Play,
  RotateCcwIcon,
  RotateCcw,
  FlagIcon,
  Flag,
  MessageSquare,
  Bell,
  BellOff,
  Circle,
  KeyRoundIcon,
  KeyRound,
  /* Patched aliases included */
  Pencil,
  UserCircle,
  /* Newly added megaphone exports */
  Megaphone,
  MegaphoneIcon,
  /* Apple added */
  AppleIcon,
  Apple,
};

export default Icons;
