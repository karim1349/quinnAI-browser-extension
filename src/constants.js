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
        function: function() {
            console.log("Redact");
            return Promise.resolve(1);
        }
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
                    return Promise.resolve(1);
                }
            },
            {
                name: 'SHORT_SUMMARY',
                label: 'Court résumé',
                function: function() {
                    console.log("Short summary");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'LONG_SUMMARY',
                label: 'Long résumé',
                function: function() {
                    console.log("Long summary");
                    return Promise.resolve(1);
                }
            }
        ],
        function: function() {
            console.log("Summarize");
            return Promise.resolve(1);
        }
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
                function: function() {
                    console.log("English");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'FRENCH',
                label: 'Français',
                function: function() {
                    console.log("French");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'SPANISH',
                label: 'Espagnol',
                function: function() {
                    console.log("Spanish");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'GERMAN',
                label: 'Allemand',
                function: function() {
                    console.log("German");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'PORTUGUESE',
                label: 'Portugais',
                function: function() {
                    console.log("Portuguese");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'DUTCH',
                label: 'Néerlandais',
                function: function() {
                    console.log("Dutch");
                    return Promise.resolve(1);
                }
            }
        ],
        function: function() {
            console.log("Translate");
            return Promise.resolve(1);
        }
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
                function: function() {
                    console.log("Meliorate writing");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'SHORTEN',
                label: 'Raccourcir',
                function: function() {
                    console.log("Shorten");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'LENGTHEN',
                label: 'Allonger',
                function: function() {
                    console.log("Lengthen");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'SIMPLIFY',
                label: 'Simplifier',
                function: function() {
                    console.log("Simplify");
                    return Promise.resolve(1);
                }
            }
        ],
        function: function() {
            console.log("Meliorate");
            return Promise.resolve(1);
        }
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
                function: function() {
                    console.log("Professional");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'CASUAL',
                label: 'Casuel',
                function: function() {                  
                    console.log("Casual");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'DIRECT',
                label: 'Direct',
                function: function() {
                    console.log("Direct");
                    return Promise.resolve(1);
                }
            },
            {
                name: 'FRIENDLY',
                label: 'Amical',
                function: function() {
                    console.log("Friendly");
                    return Promise.resolve(1);
                }
            }
        ],
        function: function() {
            console.log("Change tone");
            return Promise.resolve(1);
        }
    },
    {
        id: '7',
        name: 'IDENTIFY_ACTIONS',
        label: 'Identifier les actions à prendre',
        icon: <IdentifyActionsIcon/>,
        popUpType: 1,
        function: function() {
            console.log("Identify actions");
            return Promise.resolve(1);
        }
    }
]


export default actions;
