const extention = {
    error: '#CB2434',
    black: '#182135',
    gray: '#626264',
    white: '#ffffff',
    primary: '#503E9D',
};

const base = {
    [process.env.PROJECT]: {
        color: '#503E9D',
        background: '#E6DEFF',
        authorDesc: "I'm using Wired!",
        labelDesc:
            'The way this table is created can be seen on our GitHub here. If you would like your project to be added to this dashboard you can do a PR.',
        ...extention,
    },
    ETHERSCAN: {
        color: '#2B286C',
        background: '#E1E3F7',
        ...extention,
    },
    DUNE: {
        color: '#F1603F',
        background: '#FFEAE8',
        ...extention,
    },
    TRENDING: {
        color: '#FB6D3A',
        background: '#FFF0EB',
        ...extention,
    },
    COLLECTION: {
        color: '#DC9D00',
        background: '#FCF3DC',
        ...extention,
    },
    USER: {
        color: '#EA7B8D',
        background: '#FFE8F0',
        authorDesc: "I'm using Wired!",
        labelDesc:
            'The way this table is created can be seen on our GitHub here. If you would like your project to be added to this dashboard you can do a PR.',
        ...extention,
    },
};

export const theme = {
    ...base,
    // some definition is different with backend
    SYSTEM: base[process.env.PROJECT],
};

export type ThemeType = keyof typeof theme;

export type Theme = typeof theme;

export interface ThemeComponent {
    theme?: ThemeType;
}
