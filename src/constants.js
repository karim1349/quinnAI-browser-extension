import React from 'react';
import { RedactIcon, SummarizeIcon, TranslateIcon, CorrectOrthographyIcon, MeliorateIcon, ChangeToneIcon, IdentifyActionsIcon } from './icons';
import { correctOrthography } from './functions';
const actions = [
    {
        id:'1',
        name: 'REDACT',
        label: 'Rédiger',
        icon: <RedactIcon/>,
        popUpType: 1,
        function: null
    },
    {
        id: '2',
        name: 'SUMMARIZE',
        label: 'Résumer la conversation',
        icon: <SummarizeIcon/>,
        popUpType: 2,
        subActions: [
            {
                name: 'BULLET_POINTS',
                label: 'Bullet Points',
                function: function() {
                    console.log("Bullet points");
                }
            },
            {
                name: 'SHORT_SUMMARY',
                label: 'Court résumé',
                function: null
            },
            {
                name: 'LONG_SUMMARY',
                label: 'Long résumé',
                function: null
            }
        ],
        function: null
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
                label: 'Anglais',
                function: null
            },
            {
                name: 'FRENCH',
                label: 'Français',
                function: null
            },
            {
                name: 'SPANISH',
                label: 'Espagnol',
                function: null
            },
            {
                name: 'GERMAN',
                label: 'Allemand',
                function: null
            },
            {
                name: 'PORTUGUESE',
                label: 'Portugais',
                function: null
            },
            {
                name: 'DUTCH',
                label: 'Néerlandais',
                function: null
            }
        ],
        function: null
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
                label: 'Améliorer l\'écriture',
                function: null
            },
            {
                name: 'SHORTEN',
                label: 'Raccourcir',
                function: null
            },
            {
                name: 'LENGTHEN',
                label: 'Allonger',
                function: null
            },
            {
                name: 'SIMPLIFY',
                label: 'Simplifier',
                function: null
            }
        ],
        function: null
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
                label: 'Professionnel',
                function: null
            },
            {
                name: 'CASUAL',
                label: 'Casuel',
                function: null
            },
            {
                name: 'DIRECT',
                label: 'Direct',
                function: null
            },
            {
                name: 'FRIENDLY',
                label: 'Amical',
                function: null
            }
        ],
        function: null
    },
    {
        id: '7',
        name: 'IDENTIFY_ACTIONS',
        label: 'Identifier les actions à prendre',
        icon: <IdentifyActionsIcon/>,
        popUpType: 1,
        function: null
    }
]


export default actions;
