import React , { useState } from 'react';

const Generator = () => {
    const genreList = [
    'Platform',
    'Shooter',
    'Fighting',
    'Beat\'em up',
    'Stealth',
    'Survival',
    'Rhythm',
    'Survival horror',
    'Metroidvania',
    'Text adventure',
    'Racing',
    'Sports',
    'Trivia'];

    const themeList = [
    'You\'re the Enemy',
    'Out of Control',
    'Keep it alive',
    'Start with nothing',
    'Your life is currency',
    'Sacrifices must be made',
    'Running out of space',
    'REWIND',
    'Holes',
    'Love is blind',
    'Light',
    'Indirect interaction',
    'Guardian',
    'Construction/Destruction',
    'Preparation – Set it up, let it go',
    'Infection',
    'Darkness',
    'Growth',
    'Swarms',
    'Build the level you play',
    'Chain reaction',
    'Short Fuse',
    'Weird/unexpected/surprise',
    'Minimalist',
    'The tower',
    'Roads',
    'Doom',
    'Caverns',
    'Islands',
    'Enemies as weapons',
    'It\'s dangerous to go alone! Take this!',
    'Escape',
    'Alone',
    'Tiny world',
    'Evolution',
    'You are the villain',
    'You only get one',
    'One Take',
    'Beneath the surface',
    'Connected Worlds',
    'Entire Game on One Screen',
    'An Unconventional Weapon',
    'You are the Monster',
    '2 button controls',
    'Shapeshift',
    'Ancient Technology'
    ];

    let [generatedText, setgeneratedText] = useState('');
    let [suggestionList, setsuggestionList] = useState([]);

    const randomizer = () => {
        let randomizedText = `${genreList[getRandomNum(genreList)]} Game with the Theme: ${themeList[getRandomNum(themeList)]}`;
        setsuggestionList(() => suggestionList.length >= 5 ? [randomizedText] : [randomizedText,...suggestionList]);
        setgeneratedText(randomizedText);
    }

    const getRandomNum = (array) => Math.floor(Math.random() * Math.floor(array.length));

    return (
        <div>
            <h1>{generatedText}</h1>
            <button type='submit' onClick={randomizer}>Generate New Possibility</button>
            {suggestionList.map(suggestion => (
                <div key={suggestionList.indexOf(suggestion)}>
                    <p>{suggestion}</p>
                </div>
            ))}
        </div>
    )

}

export default Generator;