import mockMediumAPI from './mockMediumAPI'

export const menu = {
    profile: 'profile',
    skills: 'skills',
    works: 'works',
    contents: 'contents',
    activity: 'activity'
}

export const header = {
    title: 'WEL TO MY WEBSITE',
    sub: 'Let\'s get to know me'
}

export const profile = [
    'Name: Passakorn Rattanaprapan',
    'Date of Birth: 1 November 1995',
    'Email: passakornworking@gmail.com',
    'Education: Software Engineering, Prince of Songkla University',
]

export const skills = [
    {
        name: 'REACT',
        percent: 50
    },
    {
        name: 'ANGULAR',
        percent: 60
    },
    {
        name: 'EXPRESS',
        percent: 40
    },
    {
        name: 'BOOTSTRAP',
        percent: 70
    },
    {
        name: 'PYTHON',
        percent: 30
    },
]

export const works = [
    {
        name: 'Anonymock',
        des: '',
        img: require('src/images/anonymock.png'),
        repo: '',
        tech: 'angular|nodejs|mongodb'
    },
    {
        name: 'YWC15 Announcement',
        des: '',
        img: require('src/images/ywc.png'),
        repo: '',
        tech: 'angular|m-firebase'
    },
    {
        name: 'Crop Tops',
        des: '',
        img: require('src/images/croptop.png'),
        repo: '',
        tech: 'm-electron|react'
    },
    {
        name: 'Shoes E-commerce',
        des: '',
        img: require('src/images/shoesshop.png'),
        repo: '',
        tech: 'java|mysql'
    }
]

export const contents = {
    mockMediumAPI: mockMediumAPI
}

export const activity = [
    {
        name: 'Coding',
        icon: 'code'
    },
    {
        name: 'Gaming',
        icon: 'gamepad'
    },
    {
        name: 'Reading',
        icon: 'book'
    },
    {
        name: 'Loving',
        icon: 'heart'
    },
]

export const footer = {
    powerBy: 'Power By @Passakorn Rattanaprapan',
    social: [
        {
            name: 'facebook',
            link: 'https://www.facebook.com/passakorn.rattanaparpan'
        },
        {
            name: 'google',
            link: 'https://plus.google.com/u/0/101611407605791294922'
        },
        {
            name: 'medium',
            link: 'https://medium.com/@passakornworking'
        },
    ]
}