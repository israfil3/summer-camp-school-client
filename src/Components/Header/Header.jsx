import React from 'react';
import './Header.css'
import PopularStudent from '../Popularr/PopularStudent';
import PopulerTecher from '../PopulareTecher/PopulerTecher';
import ExtraSection from '../extraSection/ExtraSection';

const Header = () => {
    return (
        <>
        <div className="my-7">
            <ExtraSection></ExtraSection>
        </div>
        <div className='lg:w-[600px] lg:h-[600px] mx-auto lg:my-[50px]'>
           <div className="carousel ">
                <div id="item1" className="carousel-item w-full image-container">
                    <img src="https://img.freepik.com/free-vector/acoustic-guitar-concept-illustration_114360-12608.jpg?w=2000"  className="w-full"/>
                    <div className="image-text">
                        <h1 className='text-2xl text-center'>Guitar</h1>
                        <h1>The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand. A plectrum or individual finger</h1>
                    </div>
                </div> 
                <div id="item2" className="carousel-item w-full image-container">
                    <img src="https://pianofortechicago.com/wp-content/uploads/2017/08/Yamaha-CFX-Series.jpg" className="w-full" />
                    <div className="image-text">
                        <h1 className='text-2xl text-center'>piano</h1>
                        <h1>The piano is a keyboard instrument that produces sound when pressed on the keys. Most modern pianos have a row of 88 black and white keys: 52 white keys for the notes of the C major scale (C, D, E, F, G, A and B) and 36 shorter black keys raised above the white keys and set further back, for sharps and flats. This</h1>
                    </div>
                </div> 
                <div id="item3" className="carousel-item w-full image-container">
                    <img src="https://m.media-amazon.com/images/I/71KUdr-LtGL.jpg" className="full"/>
                    <div className="image-text">
                        <h1 className='text-2xl text-center'>Flute</h1>
                        <h1>The flute is a member of a family of musical instruments in the woodwind group. Like all woodwinds, flutes are aerophones, producing sound with a vibrating column of air. Unlike woodwind instruments with reeds, a flute produces sound when the player's air flows across an opening. In the Hornbostel–Sachs classification system,</h1>
                    </div>
                </div> 
                <div id="item4" className="carousel-item w-full image-container">
                    <img src="https://www.musicca.com/files/scripts/drumkit/static/media/drum-kit.eb6cdcf0.png"  className="full" />
                    <div className="image-text">
                        <h1 className='text-2xl text-center'>Drum</h1>
                        <h1>he drum is a member of the percussion group of musical instruments. In the Hornbostel-Sachs classification system, it is a membranophone.[1] Drums consist of at least one membrane, called a drumhead or drum skin, that is stretched over a shell and struck, either directly with the player's hands, or with a percussion mallet, to produce</h1>
                    </div>
                </div>
                </div> 
                <div className="flex justify-center w-full py-2 gap-2 mb-10">
                    <a href="#item1" className="btn btn-xs">1</a> 
                    <a href="#item2" className="btn btn-xs">2</a> 
                    <a href="#item3" className="btn btn-xs">3</a> 
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
        </div>
        <div className="">
            <PopulerTecher></PopulerTecher>
        </div>
        <div className="my-10">
            <PopularStudent></PopularStudent>
        </div>
        </>
    );
};

export default Header;