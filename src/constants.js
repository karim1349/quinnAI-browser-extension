import React from 'react';
import { RedactIcon, SummarizeIcon, TranslateIcon, CorrectOrthographyIcon, MeliorateIcon, ChangeToneIcon, IdentifyActionsIcon } from './icons';
import { change_tone_email, correctOrthography, detect_actions, meliorate, redact_answer, summarizeEmail, translate } from './functions';
const actions = [
    {
        id:'1',
        name: 'REDACT',
        label: 'Rédiger',
        icon: <RedactIcon/>,
        popUpType: 2,
        function: redact_answer
    },
    {
        id: '2',
        name: 'SUMMARIZE',
        label: 'Résumer la conversation',
        icon: <SummarizeIcon/>,
        popUpType: 1,
        subActions: [
            {
                name: 'BULLET_POINTS',
                label: 'Bullet Points'
            },
            {
                name: 'SHORT_SUMMARY',
                label: 'Court résumé'
            },
            {
                name: 'LONG_SUMMARY',
                label: 'Long résumé'
            }
        ],
        function: summarizeEmail
    },
    {
        id: '3',
        name: 'TRANSLATE',
        label: 'Traduire',
        icon: <TranslateIcon/>,
        popUpType: 2,
        subActions: [
            {
                name: 'ENGLISH',
                label: 'Anglais'
            },
            {
                name: 'FRENCH',
                label: 'Français'
            },
            {
                name: 'SPANISH',
                label: 'Espagnol'
            },
            {
                name: 'GERMAN',
                label: 'Allemand'
            },
            {
                name: 'PORTUGUESE',
                label: 'Portugais'
            },
            {
                name: 'DUTCH',
                label: 'Néerlandais'
            }
        ],
        function: translate
    },
    {
        id: '4',
        name: 'CORRECT_ORTHOGRAPHY',
        label: 'Corriger l\'orthographe',
        icon: <CorrectOrthographyIcon/>,
        popUpType: 2,
        function: correctOrthography
    },
    {
        id: '5',
        name: 'MELIORATE',
        label: 'Améliorer',
        icon: <MeliorateIcon/>,
        popUpType: 2,
        subActions: [
            {
                name: 'MELIORATE_WRITING',
                label: 'Améliorer l\'écriture'
            },
            {
                name: 'SHORTEN',
                label: 'Raccourcir'
            },
            {
                name: 'LENGTHEN',
                label: 'Allonger'
            },
            {
                name: 'SIMPLIFY',
                label: 'Simplifier'
            }
        ],
        function: meliorate
    },
    {
        id: '6',
        name: 'CHANGE_TONE',
        label: 'Changer le ton',
        icon: <ChangeToneIcon/>,
        popUpType: 2,
        subActions: [
            {
                name: 'PROFESSIONAL',
                label: 'Professionnel'
            },
            {
                name: 'CASUAL',
                label: 'Casuel'
            },
            {
                name: 'DIRECT',
                label: 'Direct'
            },
            //{
            //    name: 'FRIENDLY',
            //    label: 'Amical'
            //}
        ],
        function: change_tone_email
    },
    {
        id: '7',
        name: 'IDENTIFY_ACTIONS',
        label: 'Identifier les actions à prendre',
        icon: <IdentifyActionsIcon/>,
        popUpType: 1,
        function: detect_actions
    }
]


export default actions;
