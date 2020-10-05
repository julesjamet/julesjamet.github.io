// Importing images from assets
import ruby from './assets/images/ruby.png';
import ror from './assets/images/rails.png';
import html from './assets/images/html.png';
import css from './assets/images/css.png';
import js from './assets/images/js.png';
import react from './assets/images/react.png';
import sql from './assets/images/sql.png';
import graphql from './assets/images/graphql.png';
import liquid from './assets/images/liquid.png';
import heroku from './assets/images/heroku.png';
import zamzam from './assets/images/zamzam.png';
import shopify from './assets/images/shopify.png';
// Your summary and Greeting Section

const greeting = {
    username: "Jules JAMET",
    title: "Full Stack Developer",
    subtitle: "A passionate Software Developer  having an experience of building Web and Mobile applications with  Ruby on Rails / JavaScript / React.js  and some other cool libraries and frameworks.",
    resumeLink: '',
}

const navBar = [
    {
        title : 'Skills',
        link : '#skills'
    },
    {
        title : 'Open Source',
        link : '#open_source'
    },
    {
        title : 'Projects',
        link : '#clients_projects'
    },
    {
        title : 'Contact Me',
        link : '#contact_me'
    }
]

const skillsSection =  {
    title: 'What i do',
    subtitle: "crazy full stack developer who wants to explore every tech stack",
    // softwareSkills : [ 'html', 'css', 'js', 'ruby', 'ror', 'react' , 'sql', 'graphql'],
    softwareSkills : [
        {
            name : 'html',
            img : html
        },
        {
            name : 'css',
            img : css
        },
        {
            name : 'js',
            img : js
        },
        {
            name : 'ruby',
            img : ruby
        },
        {
            name : 'ruby on rails',
            img : ror
        },
        {
            name : 'react',
            img : react
        },
        {
            name : 'sql',
            img : sql
        },
        {
            name : 'graph ql',
            img : graphql
        },
        {
            name : 'liquid',
            img : liquid
        },
        {
            name : 'heroku',
            img : heroku
        }
    ]

}

const socialMedias = [
    {
        fontawesomeClassname : 'github',
        link : 'https://github.com/julesjamet',
        color : "#000000"
    },
    {
        fontawesomeClassname : 'google',
        link : 'mailto:jules.jamet@gmail.com',
        color : "#e34137"
    },
    {
        fontawesomeClassname : 'facebook',
        link : 'https://www.facebook.com/jules.jamet',
        color : "#3b5998"
    },
    {
        fontawesomeClassname : 'facebook-messenger',
        link : 'https://m.me/jules.jamet',
        color : "#3698f8"
    },
    {
        fontawesomeClassname : 'linkedin-in',
        link : 'https://www.linkedin.com/in/jules-jamet-224b36170/',
        color : '#2a7fb7'
    },
]

const Projects = [
    {
        title : "zamzamjewels.com",
        desc : "I will write something after to describe what I have done inside this project",
        imgProject : zamzam,
        skills : [
            {
                name : 'shopify',
                img : shopify
            },
            {
                name : 'liquid',
                img : liquid
            },
            {
                name : 'html',
                img : html
            },
            {
                name : 'css',
                img : css
            },
            {
                name : 'js',
                img : js
            }
        ]
    }
]

export { socialMedias, skillsSection, navBar, greeting, Projects };