import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Tiếng Việt',
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                title: 'TV1',
                            },
                            {
                                type: 'language',
                                code: 'en',
                                title: 'TV2',
                            },
                        ],
                    },
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    type: 'language',
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    type: 'language',
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    type: 'language',
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    type: 'language',
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    type: 'language',
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA+QMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAD0QAAIBAwMBBgQCCQMDBQAAAAECAwAEEQUSITEGEyJBUWEycYGhFJEVI0JSYnKxwfAz0eEHJFNVkpOy8f/EABsBAAIDAQEBAAAAAAAAAAAAAAIDAAEEBQYH/8QAOBEAAQQBAwEGAwcCBgMAAAAAAQACAxEhBBIxQQUTIlFhcYGR8BQjMqGxwdFS8RUzQkNy4QYWJP/aAAwDAQACEQMRAD8A8gpC6y6orXVFFwqlaWorXVFXC7NRS0q1ETclTr8IpZWtvGFKnPFAVoZlTIuDQlPa0dUZAD5Uty3Q3dBGLF3hC8gnjHrSls7sO5Uy2UiSRd1IkfjG4shYAfT/ADNaoWl2HLmdpSN0bRJG4X5eaPiurOKId3FPdPM+0MmEUjOOAead3LQclcV3/kGpI8DQD80gi1KYM1p2XllfaQZAuQfQgA856j51NkPBKy/4nr927dn4Ie4tZ3Z0utB1qzcfC5tWZPkTjp71Rhj/ANKcztrVFwEufgqm3ikmmBVwrD4ufT3oLbwuwdxN3SBlCFCGK9Mgbuf8+dSvJZ3OBFFNTamXVd+3HXlRRJQNcKGSXxFnbc5POalIDIBzykWXdx0qEUiZLaaYyTwDUBQujs2o3iYHnOKMOSZIiKXBVPh816VRNK2sB8PkipADPtYeQxVHzTMF1FRSR+KqBVuZSi27etFdpVBpyidOe0W+ik1BHktgfGsZ5NXWEIILw45CdPPFqGpM7KkEcjYAVQAg8uB96gwFZcJHeShvbOWynMM64bGQQchh5EHzFQG1TmlhoqCohpMokpKOtUrHKcyYHH5VEZaKTTxgDpUQldUVJwG48cmoiFFcy7SQwwR1qK6alGKrKMeieAcUBTQCQiIDt3Z9OtCRafF4eVPF4h4ATz086EhamORsO5QSDtI4pLl0YsCwUQHbAyCxPw8cmh23wnGYsG54wkhvZJZlhSRi0oYAKenouOvka6bAGtpfP9VqpNVMZXnlbTsrY2UCCa9tY7gO3dt3gGdwyMY/P6Cs8jieEUbQBRW/0/VLaCRYbK3j7oYJ2YAHpms+8tN0nGDc27WrjZjEDIFUkdBzXRY622VznCjheD/9RdD/AED2jlkjgH4O7YyQ+Hwhm+JfbzrM4eLhep0era/TA34hg/ysM0AbLxg/FjmqJyj7ttbkXBo7yLvkl7pGPAC7mdvIKo6n+n2JC0mUBuLym3mn2NrCXaSZJxjasjISR7qORx60Q8kl0YPitUwdy7FCSueDiiISIydynBIHiBH0pS3NdtGUQAskYwPrVcJ5qRtqPuQCw5JHOahKBsYBT+73Td5g7cAZxUDsUr7kl+9EQLZgzG7Rn8H6vaejetUCmOYwjKEe3hjFukjN38hy2VI7oZIwfXpnimXhc4MBfkKCaLa7c7hk4b1HrVWjdHRUQOwt4eoowkkZwuXMjANLtAHG7Jx7VENEld3Y9aiLaVCKJIThzVIguA9TURbV1RThIaiFybuweOtWgtPJ3c881EQKRTVKwpUbFAQnsceqnQluMUJWhjieFYxwi1tRKV/WTEiNT1VRwW/PIHyPpQWtLGG6HRdFOu4KykZ6UtzVuinDXbSFb6VFv1G17zBQzIMH+YUAdRWuSNzonm+h/RVeimGLUp3nBCRTs2dpIV8nr8q6MhoBfOYxmyt72ahfU3dJZmxs3Sk8ZycAZHXzNZJXloXQiAJyjdev9Qso00rs9ZXdxKy94/cLtLH93J6YxQxgO5Ryk5dSD0PSO2Fprr32uzz/AKFfd+Iie5LHbyAQDyoz9qfLs21VrPAHF9ggeSd2i0LVQLi7nvU1Cxv7oSWjk57uPBKR8ng4OPnVuqhXC3dmgd+e86fVrC6kwtiJETdnGAOn0pYyV3tYRC22hAm9uZ/1bySCIeFgg6D/AG+ZptLkPcX8BGraRQRqzwiINyqzjvZWHrsGAB7nH1qrFqGKQtq0Le3DQwxkNJlvEoYAkD1wAFXPyJplghYhG6N/CFdmljHLE+/NI4K6h8UdoiwXC7SOnUULz1WnSNNbSrGOzhuZmIfCqR05Py/5qE2Fqh04e7JRd7o8cIT8LcCVx8a4IA6YAz553fkKqkx0RyaoKvmtNkXKYz6daVvTHaYbAaQjQor4bHHXNMDisT4GgqDbK0JjVsxh92MDgnjr6UwFYXQnJGUJKpViG6555zRgrO9qSEZ61doWC0/b/DUsItqEolkpPFRMXVSiTaT05+VWqAK7afeohIyiPwq7HRDvlU7sqONoGTz7VFdCkOE3BsEDAzz58gcevWrQUOistP0uWZDIzRRxD9t2xn5CgJWmFnmoZ4RC7RlgSDjgUOU0hoUgGNm0ZoSVoY2iKVjesxlhVDhFgjC5/lBP5kk/WluWjTh+fdSW8RdgcgsOnFLvounHFeSrOPORyN69MGqqltY6xnhW+g6V3tvqN3ZwQ3F6s73D2zW4keQMQQo5GBgsPmDWtz7AC+fy6cQTPjd0J+XRanSO7hulfu0gnurMTvHyNrZwQAemDxz1rNICBRRNLS+wiLnWrrTAzRKsrk5XcPi+RpbHELQ+Njx4lDD2p1LWLC5t7WAJcY6yDao9s800yE4KX9njb4ghrmHtHZdidSbUjpqxwKklpZW6lnjCMrZLNjOAD5e9aKG3wpEEh+0AnleWXe5py4wE3ZVS27aDzg/niqxdLu1I4Bzz/KN0s2cV3aXjyuYYpA7RtbHJxzjg4P5irOElpdLgBDqgMrSXshOWLZ6ljznPXFLtbQwhq53tbpe6mVo0Q4hmUbmUejDzH3H2ot1LK7TlxLgpLWzxA8bLHIjDAdfEOoOQfXy+RNLccrdpYWloB+vdaHsl2MbXLyaeedrWwtyqSvtyzN12r9OSfl1q8VbuFk1040slRC3H9vNbaTsz2UtI5O4iuxvkSPvg+c7uhGetWJojgBc1up1ocHAgdaVF2i0Sxs7eO/064/FxC4MBYjaQ48vQ9D+VWSOQuvou0Hai2yCjV+/RZCa5VkO6Mg7+dwxjrSXNwuu3UNIpANErMV2ZYg45wM1TTSzSszhBmI5CqmG+ElSTu86cDhc50Za4lQXFu6TGKcbJPQ0QWeRtcobBUnGeKJZ+OF25/UflUV5Q+aYstpwNUiDglGKiIJSDUtFSdExSRWxu2nOD51LQOYnqRvLuxKEbWb0BH9eKsIX+EUmSXLzbC6piOMIuxccDj86spLCAruO6t4SI+8MgKDb3f7GRznNAQtjH3gIS5snXHeAtuIKyeuM/bkflVFyb9meXApIsRMON3zpRFrXERG4J7Nlst06DFCn31VtpcyQxzEAGSSIqjH9k+tUBlaRloINJsUxixvBB9zjmh25WlmoAWg0WObvDf2srx3EABdFP+pDnxA/LqPcUzlhauZ2xDv2SgZ49/RW+p2/6P7V6dfyXgEUzm3kW4YlpBJ5hv5gPlzSmv3scDyuG9m0tc0qbtFcGXVRaxTYhtxtLMerUAFBGL5KekUhs5JQ6QrE4dpSeCB6461ByrcbFLHTdhe0ct1LqOuPEW/CzzRyRy993xCscFgfCOuM8eVdEkBtBc/Thzpdzuh491nLNi1wGAD7GG5em4CqIFLqRSPLqHRFSCSYoZ5ViXHA/ZXPSh5Tcs8SJl0uXa0ltLBeRAZcwPlhjzIPP5ZFKcPJbI3g/iQUEe1m34XnOD/egcSnwMbRJOEdbXEKDu4CWd+Ny8Y9x6/XiqFtNlP3Me3ZGefJet/8ATCCC30Ob8PJLNG13hkkAypwM5x+dGXbiHLy/aOndA8MdzXJPOUyCe3/RVt+KlihOm6qqhmcAZy6c888NVOFF1DqkNrBu7BWL7UdpdNvbnTtC0p0mt1uZ5L10BAUnwrg+Z+I/UYo9haxxdjK19myOdqNrBYLaPp1/VZ/U4pU75bgky28oSU/vAg7X+vQ+/wA6o8LuCUD8RygvGrHgOrANkHgf80vanCRwNdEjIUIKNtbquOoqCwqe0HHmgLhGEh35ODg5PWmtcufNE4HKg2mRmZSig87RwBRrKm7W9qm0q0JimLDRS9KilFKKiNpUpbgUHKfuFJrPx71YCW6QBMG58KTx79KIYSQ0u5SMhiY8hh7dKu7Q7TGVNZsWkIK8ckce1U4BN07yX1Suw8j2qxuSyqDt/hrOSu9GDtQO5lzyMc5zTKwsVkHK55MOoU8GgA80cktEAdVOsyhdqncfMZziq2m7WgStoAGyrW0uru3iB7wDLD9TJg5UjIbB8qKkJcDW4LVaF3Ty7oWB7yGQMi8BRtPX7UK0yuf3I3dCK+ase0lkuoW0dzOMfhtkzufJQAT9azNxIQFxJQ0D4rA6x2mk1e6TULW32xoN08APiB8ifnWnuKsE+ywfaLAI6Iix7WW0StFqMd1bLJ8atzxj04oTp5LxlENQw5OFc6Rf6Ha6LqkVr2lubiK5gfuNPZyvck8efXr8qY5zw0BwV6Vgk1A2m8rL3XdI0hggGXkJLs2WI9gOBV2aXYdHT99/kopLZp0DLnKeJwOfP/epdIjAJCAOQjG/EOsapkPGAF2+FhSS7K6Q05LNoCUkRjNwC7t+11A9jVk3wqEfdDxi7U1laQRMztIS7dD1Uew+9U5wdhN0sBjcXc2tX2O1saFrDPJO4sZ8q4UbgrYGGx7dPrQttrlm7V0g1cADQNw/lZrtusWoave3ml7ozLMzrkECQfxL656U4S+La5ZD2U5mma6PwyAZ6g/XmsPYQ3n4gtbHbMDypYA/lWp20iivO6WLUiQmPDhyLor0W0DXRie8iAkKfh51JBGwjKk/Jh96x2bXrzGH7XjyyFWXjSrIY8HxeHC4AGPaln8RtaTFsYGtHKp2uQs3/cBlwecDLYpgbYXLl1Gx9OFEJt3teMPG4dSeuMGrAANKSkvZuaqy4PmD9Kc1cmXlQ7z60SVadxVIk5RF3bb9+/8AZxjH1q1RTcVFYan7eKG03ZYTNhYj0zRWklhtF20LsyExgKeOfOqJCaGmrIwiILBXXvCQR+7j0oS4BNj073GyrTSbDvJk8APxYAA9P8/KludZpdTSaT/cfwr+27JXuqRkWUM0mxiC0SAjPoTkDrUDHeSvVajTRYL69L/ZQzf9NO0kaM01ugVj4IzModjzwPvx7CmE7aBXBE0bnG3XXl5LLzWJt1dJWEc0ZI2MMNx5HPvQt8RpdB0YZGHE+3so9K0/8SFlClHJOSelE9xbhBodKJ2iUc2tNa2nfZimV23AAdOdowM+nFKDl2JNJkOd0V3pAYOLe3UGCZlt5rkDCruONoP1zn7YqAbis3aU8elYHSc8gev18lpO0BKXNvpscBK3EjGTjhIkBI++2soGXOPRcYO3bQcryMWUmgdp4L1HLQx3GHZwCYwTtbg8dCcH1ra2YPjLeqyv0xbLuHCDstMmv+0CR30jz2/4oJK5fJdAckA+WV9PUU0yhjMJTdK6WQ2cWvUe0dxaaXdaZp9hbW8Mose/kVIgFTnwj6jINA3MYLighinl1oj0xo/l9HhZt+2KWMzx2lrCGlk8bhBlR+6DQZIsL0b3acSCN4OMV+/7JI9aS8tfxF5Z2zNvMMlyAQwG4FXKjg4+/Iqi48J8LQN0jDgE/L6+XKObVIooowum2SEkB/BvBOcE8+Rzx9KAuC1xwyBhc55v3pQfpOwk/wBewsiQckCLHmR5fSpYVmPc4gvOPVPurvs4VEUFpdBxySkojA45wCGz09BVO2eSqIalmDI2vKrP7JdGbSnLyXNu86uwWNWnK7T5/Dt9q6XZ+jj1W7eaAXE7b7Tl0JYNO7xGycdPY31tXeoxaJHbs1lpcUtwZI44N9xIVZ2yf3uQFVjj2rVL2bDHRBNlcX/2DXSGi75ABeW9prVEVJQu0vh1B6lDz9cH+tcyK2OLD0XV7Y7qeJupbyc+4PPyP6qLstdNBcyKshVXXlT0OCCKvU4bYU/8ekA1BDj0Wn1uaSVYbmI4ilUJKF/fHQ/b7Vmwcrvztex4beM+6zmoRNu3K25vPzxTI3Lla2MkhzTlNgciMKfQ8io4ZVwPIZtKEmGDRtKxzNvKbvH/AI4//ZRJGEwHPFWqBTsVSZ0T0yOgzUKNpUhV2HTFAcJtFydEuG8VUSjY2ipy0oRdp/a9alhW8Pdwp4J3C7G27j1JoSM2Fpgkc1pa7lbPs9eWc02l2djEIpbghZJ25dj0OPQdelSxdLQ9wGkfM514NDj66L03tR2m0vstb2ulW7d20xECCED9QCCAx+tNfKf9tePZFu+8k6/mVmrTU9en0TVNOluu+1zS5luLZpEA7+MYJX3yM8+/tWfc01uTnWwksHoUP257NWfavR4+1GkIy3RgVrmIDHepjk/zD7j5UzeaxyFo0TgZBDMcHjPCznZvS7r8HGkqwpabs95cghSAPLBBJ+VLDnOyvUDu9KwRgkuH9OT8eiL16+0m109o9PYtcyYyUXamAc4JJLYPpkVbnAKmt1RO+Q0Bxf8AYD40qX9ODWVFhLamJSAFSFsLGRnxD885zmmNdt44XG1fZ8evla5ziHi/I58/Ue1fBXuj9r9Rt5Eh1/u7yzUMhvI0/XAFcAsP2seo59qF7Y5LPCxu0Ot03+nc3zHl7coKa0j1bS/xccG5rsmGRcY/WL0IB/e4I+dZ3AxuCayQSA3YKzPYfSrj9K/jbjclhHku5ON3sPetc7muaGJGkhl75xaLV5rmoPcXc8sgCzXB6A52AcKvyA/3oXk4aOF3+z9CNAx0rzuld8h5V/Kz2rwRG4PdRStEAACijjHTPI54oYyM0VNdC0Oa3aeOnOPiE+2zBazPCyzKrbZ4znDIRwSPI586I+qjLjadniA5HUj9v0P5obUdR/D2kSQtldw6+XOeaqOHc7KVrO0GQQgRG7IVcdVAXkNljuOPKm9wSuaO1g1tG859lE+qnPhX61Yg80qTtcn8IRela20RYMFMwcPGWbC+QIIwfLnqPr0ro6V/djY3qVx9VK/UuD5OVsbW6vJrXT1e7srOOOXcSh3MPAyhjkY6MR9a1necmlzxIxpIAKyl0s09g8FyzP8AhVURzFgQFHhUDHljArnamAsf3reuCu9ptWyfSfZZORlp8vQqgWR4pFePIK8g0sgOFdFjilfG8PYaK08WrJcaKYHBDtMrAAdCAc/1rEYi1y9UO0GamEOuihdryI24ge/rUNDhUA97TuKHl44B486MZWeQbeEXbavcW67Rb2LqRgrJaI24e5xRYSfEeqX8Xp3/AKXH/wDOf9qiHaq0SeHaVTjz280SBpA5Tc5qIrtSwbQ/iHFC5Niq8opyGXI+lLvzWw1VhTWsQk5PWludS0aeIPFqZ7YoCc1QktOk0paLKFmhdbWSVNzOcRIP439PkAftT48lc3UM2RucMnge7sfkLVhfSNp9xatBO1tNZ7TDIqEhSBn+vrQscS+0/tGGNumDJCW7Rg15jg0ipe01z2nS6u9Vtrdrsr3ImiUqH9PDzhlznI9flVPiDHiiuHpoJp4iWgUMK50TUtXuri0ltQq6nFG0DkjesqDlc8jGDu/M0HdtyOnRbY9A8DfI4NrHna0+m9oIeyJa33vemQs8sMbBY0YknCZ8sk/8eZO8PiWlvZP2iIbabXBPJ9a/RY7WtRfUbua48SRO5ZI2fd3Y8gD7UkvJNr0UMXcRBt2R14v1VNfFiQjdVPJ9R1qwFm1DnOO09FHZEi8iYd2QTjDA9fpTAcUsrAe9BHX6+rVhc2TSIHtmSPg5CAYJ9waujV8hb5dKc90dp8h9ZTRfanbokSWh8LA96pYHPVSF9R86IbCFikfqODGHDzH61+ov4p0F1q80slslxZyCPrE8BAI9euQfaiBa7FJEMer3eFzRXSjVH4pZYnVD30MNu4bGYiSrY5J56dMfWhc23UE+d7oYi+Tw+rc5PH0VbR9nzLo5v++Xaud0Ycl3w2Gwv7OBz9KdsBbgLyo1cjJSd5t2L6/mD+X7LO3ata4xNFCgLJ3jrgDPlx0+XIoDRO1diFzhp2vOKsW78s88e49FlL5g1xJtdWUADKnhq0MB25XA1rw6Y7TY8x1Qxz9PUUayJpB9KiiJgsLybBit5CPXGKAvaOStMOk1E3+WwlW1npWoW8gkZolG0r4zuHPtUZrADjK3HsHU7bfQCto9LdtMdJCS0jlGbunVlHhKlfFggken1q5NY4t2kJmn7Cc924PwOTSEbs3Fbrm4lYOVLLGSN+P5fL61l+0O8lr/AMFhDbDrP181UyNcWszE7ggPhD808bXhcuT7RppCCPmjIbtrgmPuiiqo9/KkOYGZXW0+rdqDtLapc6UAKY9uEO429KYFlfTUzIokFhMarSXLlOOtRRppSkEZ9apOFoi2O5cH0zSnDK1wPJFFGwKUwemTx70p9LowtLaKPm8YCkjxYOKSMLpTeMbUyYB5rG2DHYrPK3uwVuc/50rQx3hcVzpIm9/Ew9XE/IGlUa9M3exQxyMAy5cFzgj05pumbgkrmduTEOZEwnIzk0rXQbSe+REsYwsTH42AVeOp9OufyFDICDnladG9piBjw3059fmVsbeTTtEs3RZTd30q4kaFyir/AA5/uOTn2oN4aMreNNPqH7iNrR58n1Wcu5IpX3FAhxxjJx9TzSS+zwt7oo6yc+ap7uWeEghg4J9etaGNa/C4mqlngdd2n6ZdpeJuZlHI37vIY/4oJYywpuh1rdTHu9r+vgtFoFlpbz95qgmEYjZQYcZLZyDnyx05qNGMpmphmaWyaciwevkodU16CyuBFpOnxMoOGkkuO8k/IeEf51pm0DlYn6jUPcC87x1AND5DJ+J+CHS7cSSkSTXEUi97G4PjVfP6g9aoAgLfHNy3pyAPLqmbrWFmWSRoraTEizKSzPjyB9eaoXdIXPjjog00qRZlvYJJIEcBZFSFmJG7J559cmpkG0bpW6mJzasHCtbS5m02zeGScwQSo3fL4B5YJBOT0JHBB9zWgE5tcHW9mMgawtPi9f1+fT5LL6vqNvMjNbMk4jbxZbBYnzHFL7vxJ57SI0wZQOzyPwHxWUmXByR15rUCvNSN6ojSLNb6+jgdykZ5dh1AFVI/Y20/QaQ6ucRXjlbGLRLclE02AByQQW8TnHuax965xsr2B7N02mYO7A3DryVdS6TLDblpbizidVyUdsn7edAGNJWl+skEdxsPrhAfiNFSEGe6keXPhhjiO0n3PT/PKmtjpciftPvg1rWlvxS3WrFNps42icqD30oUuR6LjhPpk++OKBy2RNIAL8enT/tUz3g8UjsAzfEQB5UO0lEJ2NG4+yCln71iZdrBvajArhYnzd4fH1UXfIg2xgKB96vaTyg79rPCzCY8ox1qBqF8oIUMjbulMApZZHWo6tLXYzV2pVrghLADzIq0BbSnmYvOxUjA4+1CUxoJKl/0Y/D086XyVrHgCsYLlHtlVYBvBznPrS3DK6MMu6MU3IU8rxwRJmUtJu+BhwRQtaCtE8pYA0lM1JzD/wBwQqtsj4AAABLK3A/mFMYARt90nWOMR70jgM/MuB/VZq9zNfyZO4A4+YrXGAyNeV1lzatw5yt1p0722lpbRNsxhmAbGcjrj5g/5isL5DRIXtdJp42hoPIAQt9eKqsWOD86UA55WnUahkTeVnLvWcHCHdjitbNPYyvL6rtraaZlVst/NMfGeM9BWlkYbwuJPrZZyN5TILh4Jd6Eg/Y1HNDhRS4dRJBJvYaK0ek61ZyT2q6ram6to2Jktt5QSDngEYx6nnJ+VJ2d2cLq/bftkZjJon6r2/f0XqPY3UND1C5uQeyOj2WnWkDTSu5ErlR0+IY5+dC+ZgokXZSJYdTp2gCQi+ADXzo8LA30i3l7cSRqloGlM1sbZQggz0CgYG3HH0pPeEOteibogGNiDzYAIP6/28lWpqotpxFfoynqXgRWV/fa3APypuwSC2rD/iEmmkMUwN+YGD60p7jXXuCkemRTFoxgXEsYxGP4UAx9TV7A3Lyr+3zTuMenBrzrhCpZ9wyXV4Deu7Z7t9zZPvVd6T+HAQf4cxuZyXE8c3f5hR30CSAOLaOGYn4YgEAHyFU2U3k4Vz9nxtYGtjp3uquazdkduhQZIp7Xi8Lky6OSnE9Eb2bhA7+c5wAFH1/wUvUu4at3YUI+8lPQV88/sFsrK7FnpybBiWbdk+YUHGB8znPyFKq114JfvKeOEBqF08kTd22wkYHoajebK06uUvjIjwVnrR2Il3MR5YP9ae4hea0zHkkk0kkupSoSSVsDgZNDtBTXaiStpcg5HMjZycelEBSzOduPKQyY4U1A1R0lCgkALMC1XaprSTZUnOTmhTaPVcaiiSrUUgGKApowkORyOCKsFC8eS5OvSrPCpiOSPvY9v+Gkl1FdNsQe2lJaIS6ow8PmKF7sWj08RLg08K2msBL3QLYAYGlMdtK6+r0gliq+FX9oZVmjnAOBt3L8gcimQfjBC5va7gdM5hPT9CFmrJe9vYVzyX863vw0ryGkb3moYPMrU9+iXMhL4CQjdz05P+w/OueWHYPUr2nfhupcScNbn5n9MfNUWoXUczEGQnPkta4oy1ed1+sjlu3fJDwaXeXIJht3K+p4/rTTI1vJWCHQaicXGw19eagurWS0kEcy7Wxnrmia4OGEifTyQO2SCiom6ZqJZ4tPh2713kgeoGajuMK49ocNxwvQ7aeKw/6fSRwszNq9ziTPxd0nGPlx/Suc5xdqK/p/VdOKNs0l5LVU+G+hWMPsuY8iIscCQfun3ogAF3nuMzRtweiFuL29iISKzaGYcO0sQb8s0Yja3JKz6jWak0xkZaRySLTGupZ4gl1dyEZyI4IVRfrgc0V9AEALnj76Un0aMfH0UsVzIqbFv5o/aOA4/Kh2i+PzWhs8jRQlIPoz/pSuYoo1CEySk+MshX7HmlObbsLQJAxgx4jz9FU18XubjahKr09Oa1RANC4Wv36iamnHCuOzKFrFmEZcmTY65xgAf1pU+XBdXsIf/M41Zuj8P7q61W4sybe1t2xcxJyPUjrQtWqcMbIQ0jdyPYLNvfNKDvJEn9qZsIXLOu70U7lRFRtzkjdz1qrVbBSa6K3iYeecVe5CYmk7ihZsE+HijHCxS0ThRqPzorQtbSkU0Ka0kJ45qk0ZCQ5qICm1ailXmhKY1OPTrmhTEi9RVoWVaPhxsPy4pJ5XUi/Cp7RQblQxOAPKhefCn6YDvhatInEk3ckgkr/ekgZtdYSBx2X0WR1qZjctAeNhw1dGBlNteF7X1RfL3XkgrbetwhiUswbgAZpzuMrmwOcyVrmDI+K00Wl3F745cQIFOUHLv7msfetYPDlerb2bNqadJ92PLkn1P7eSI0ewto52XuV3Lxl+TQOlc9adD2dp4XG224eeSrdVSLvDHjOeARnoaUOq7LmUMLOarHHKRGyAqxzvxyDT4HELznakLHuDXCx59VmpVKkqfI1uteSc0ttpTB8qtLVq15HdraQSt3KwRBAfLd5k/as/dlm5wyStul7p7tr3bfrqpJVmgPd3OQpHhJ+FvrQggiwulKyWPwy/A9D7FT2/aC4tl7uWNbiEcDexJH1qzCDlMh7am0/gcNwUy3tncNuS2uoWP7MSbwaB0R81rj18Mxtsbh7C0StzBCu7E6nye5TaM+1K7srY3WRsFmx/yFIO/vf1GFBLH86OOM3lZNbrQIqaMlQRwmS1y52ueRVufTqCRFpzJp7fglWvZZ2jeZPiXcCR5/OikyQtfZBczvA3z/ZbHtLp0SGOWGKPJgAMigZOR5/elLZpSJGuvnOeq89ls3S5OORyuSetP34XE+xPbKSM8hL3ZWMEjnpjPSlA5T+7IZnlQMzbfGOKKklxNeJDFck0drJsJNpRHV2r2UlwBxVItoCdnAqIt1YTc5qIS612BUVJwNRHfVTCUfh9gRc7slvP5UJCMOBCjHXipSpvoikfwgDrSyFvbIaoImJsN6nHWgK1RG/dE2suIyw4Y/mKW8ZWzTS03cpGeCVv10cb/wAyA1AXgYKJ408h8bAfgFHsW2ObdAnOfCMVYc534ik9xHD/AJTQEZaXYJXkDORgHoapzKytOm1IlO36woojsuWPlQnhW0VISPqlIt0BnJ54z71QaU06kBCXyd7Azrj5UyN1OXP1kXeRFwWdvLfCLxk7gAfUc/3Nb2OXktTp6oV9En9yor6yezmMbjK/st+8KuOQPFhBq9FJpJO7f8PVdbJDOojbiUfDzgN7fOrcSM9EEDI5xsP4+nQH091Y2nfwp3cUxMef9GZNyikOc05P5Lr6ZksQ2Mdj+lwsI+3ljxie3gjbyZRwaQ4G8ErrwPYBUsbW+o4XTzZGI4QR+9BJ/Y1APM/NVM9x/C2/+J/ZCOp5kWAhv/JcMOPp50YI6n5LC5uNzWZ83nj4IdpMoQo7znl8YzTKysgk8FDxeqsoIt0YHVivFZnOIK7cEO5nqhdDuJLLUJJJUzHKdp/h54Nan7S0Lkdmvfp9S57hhxpel3NxFcwQouFljRVZScKVPRvpnn6UgLsFjoQ5wPN1/C82vFktryQ790LOQOffrWgtDmrgNfPC8vecE/RRjSR9yC8atj3xistOvC9A6RmzxC1XXMSsN0bAKf2T1FOa7zXK1EQd4mlQovHXPrVlJY2gucKRnOD6VYVOaCLUJo1nK6oqtcMVSsFLUVrhUVhOxUtXScnB5oSUxuDafCQjMS+dxyB6VTshFCdjjbrtTmYBfDS9q197Qwpreahc1aYJtykEy5P3oaTBK28pTchmwP3avZQVGcOJAUQnMDjaoyOo/P8A3phbYysjZDG/HKtbSx1C4tvxMMDvAQSH4A460osC3sncRd5Vddwy2l1NbztiVCNy/unGSKZtpYe9JJp1hRLettdGB9QvnVmPyVN1rqLSpzp0tzardLkrE6syr0A3D+9E01bfRVJpzI2OZ39Qx6X9WkvI4rsmGU7TuYBsdCP/ANpMe5niC26tkWruF+DZr3H91mrqCS3mMcowf/sPWui1weNwXi9RpnwSFkgz+qlguSpAZmPzFLdGDwtOn1TmkBxRjI9wgIAI9zSgQ1dF7HzCwMJkViRkmR19lqzKgj7OdyXEeycYpY28Dbx6sc1N7Xcq3aeWN1tNj1RKxzPCpBBOaXuFrcyOQxAhW9pBgqWODWV7rXc08GyiVWamrwnERIbPBxxWiEg5K43aQfCdsfPRanTmXVbC1S4QiSUCKbDYOPMfI4ojQdha9Ox0+l3S81/dU2oaTFas8buZu6YoCfQHj+lUZHWlv7PjEYc87uOeQg5CoUKowAKFthC/bVBDMMpgfWiWUgEUFCjCMndyD5UZBKzsLWcqKcrwU86JoSpnN/0pmM0SQF1RFSXFRWAkqK05ThM+fpUKjXClxeqpQvpIXzV0hL0inmoQowolTgc0ulrBpKZNgyPOpttGZdoTRKc49ahagbKSaCeJChX5+nSqq0YfsIT0hku7mKKLG+RgoJ6D3PtVjCGW3GwtBr2u4lisNJnZdPs4RBHtOBIc5Zj/ADHmqpHFJtFnk8/XoqKYvcSmZn3u3LMTkk1AaUc3cbCmtLdSwMhypqOceidBp2k2/haqxhji0i8RdpXwZ/lzQZK64jjjIbeKKzV8e51iCDqSxb55HX7VQae7cVh1MrY9fEwdb/Mf9Lr62iukKu2CPhYDkUMchYccJut0cWpbtdz0PkqOWDuH7q5TDDo+eCPWtocTlq8w+DuTsnGfNTwMsAG1sqetKcCeVsheyEW04UrXLH4WA+lBsWh2rJ4KHeZmYnbuHmcdKaGhY3zuJOLU0E0jIqxA4889KW5oBsrRBNI5obGFe6aDKuT3u5epCEj8+lZ3NyvQaV5dQN3+X8KwvtO/FWoeMDvgvGB1pmygCE3VRiVpB5HBTuzySxLDv4ZJcnIzxmrFFZmRSNhLXcp/aG0aG6uAyZAkOOMdeaFya372AOPkP4KzFwFVjlCD6Yoha5c2xpohQkEL3g5GavqlG9u4cIeVCW8AJB6UwLJIM4UJUg8gj50drMWkFdnFRSwuBqIrXGooUlRDaWooMJCKisi0hFWlkKa0KrMN44qimw7Q8Wj7ko0Z5XPligF3ldCYsLcKuJ96JYi7C6M+MfPFQoWmnIiQbTxyelAtLhiwpI5Xto2dMAspUnHOD1quTSsgsbuUXeK/J49R5Ve0hUJGuFqN3dCQi5GPKiAvlJlc8fhFhFW8gcxdzG4mA2sd2Vx8qp1AZTNOXucNnK2nZ64VI54rrlHVQzL5gn+1IaQchehdG9oAOSOqz/aS1NtrvDBlgYAH1yM/3ow7BC5+paXzRz9B+/ITZY5I8SKqMrcncTSAQcFdCSORh3NAPugJu7uCUnQRy/s+YNObbMtyFzJdk52Sja7p5IKOxvI3Yr3Sp5BiTn7U4yxELms0GrjeS2gPVSd7JEds1nHIPVDQ7A7IcmmeSLEsIPsprWW1Y4YtDz8MkZ2j6ihe19LTBNpSc230LcfNWDraKm57qLb5CPnNIp3QLqk6YNt0gr0RFhebZB+HiZU8yTyahtvVN08rX+FjTt9VoLc77SQrIplALbQeeQRTgbamzkgGgn6QImRbedl3KNysU5DdcH2PPyOPegaRWEqXvNu8D3/n3H6I7tJbM7LOI+Zo1ZwD0JFRwsJWhkppYeASsJqgeKUsFLRkhcHyNXGLwkdob433VgoPcEbao4bgiiqxaxl+00BylBQERMpUN1b1NUPNWSxtRmx6oa6lADQY3ENneaaxvVY9TKAO5AuuqHA4o1l29U01FRS1FfRNzUVYXE1ENpQaisFKaiKsJuORUQVlSgYHxE0K0VhNINWgItKpAx7VagCVZCDzzmhIRRyEYKIkYPDgUsYK2PcHR0gmJVseVPGVyyS00pYpCPCOh86EtTWSVjolGpiMrHHGqncMyAckVZisWVG9p924MYKzz1Wnt7oC2me3bxZUcnofT2rK1pbyvUO1LXNtn0UDdzPPLOrjxKFZvc/4KoivF5rPJJ3rnx1loCPjZo44yu3lAfEM+VJOHFdZrrja4dQFXX6LM/iTPqRToyWrla2NsrqIUMXfQjaJdyHyfyqzTuiTH3kIrdY9UrpIQSq7h5leamOFCHnIHyUcSTM3wvj1ojQSo2zOOAaRIs4lHeSKoPrwaAyO4C1jRQt8bwEq3Kh1EWTz0xVGM1ZVjVsDw1qsjNcDuxDEASecmgbVroPmkDAWt+fknKLzS7/8VC7xrEDsJOQfQYo7LQsz4i4ucT4APoI/U9cuL2K3uXmRy0f60Yxt9vtR2EuL7kAsArrZVHftBfWzbC2eoA9aBtsei1Xc6vTkN5CCMfeRhhgbPiHnmjujSx92JGBw6cps00b7TsbgY5qNaQgllY8Cgq6YEuW45p4OFypR4iVHmiSg9dUV3ac1RWUzFRAuq0KUVFaWqRBOA4qJgCVfOhVtSmqTNoSUQQEUmkVEBaKtKjHAqiETThNlUN1o2pcrQUiIFJAzjFQlLDAHbUVa20Tb5WQEqMAeVA95pa4NNFTpCLI+StdLQJBdxAnZ4GwfWgcbba3aZgYXMHGCpLmJY7hZF+J1w3v50gElhC6cjANQHjk4+Skh5suTnY7qPkGYD+lDIKcEzSvLtPZ6Fw+TiFHKgEeRnNRVI0Bm7qh3UMAGGfnRXSzlgeKchbhPwSG4tmaNwN2AeD8xTWPMnhcsGoiGjb30Joj5fJHXahoYLjo8i5YDpSwKJat+oyxkvBcMrrZRLKEflaF3h4V6cCV213Ck1bbY2jSW6KrgHDY5qovvHU5M7RI0UDnwgA+a0lrp8K9m4NTQyLd92Je8D9GGB0+RNNeAwmkqBzpyGvPNFQ9om7xC5UAlEJx0yduT96qQ2AtEbj3bmetKhvrdBBuBbwx7gM8ZoY3klJ18DWRlzegVJabu7jxI43ttOD5Vqfi1wNPe1mTkrQTARqoUDoDk+dYBmyvWSARgNaFTXDFpCT9q0t4XB1H4yULJTQsEiiFGlAYS1FAuNUqckq0u1//Z"
                                alt="Nguyen Van A"
                                //fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
