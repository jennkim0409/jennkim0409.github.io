import React from 'react';
import myselfAnimation from '../images/myself.gif';
import learnAnimation from '../images/learnmore.gif';
import { Text, View, StyleSheet,Image } from 'react-native';

function Home() {
    return (
        <>
        <div 
            style={{
                height: '100vh',
                backgroundColor: '#fef1f0',
        }}>
        <div className='learnmore'>
            <img src={learnAnimation} alt="Learn More Animation"
            width={100} height={100}
            />
        </div>
        <View
            style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                paddingTop: 0,
                
        }}>
                <div className='introduction'>
                    <h1> Jennifer Kim</h1>
                    <h6> A motivated, creative, and attentive </h6>
                    <h6> Computer Science student, passionate </h6>
                    <h6> about mobile and web development. </h6>
                </div>
        
                <div className='animationofme'>
                    <img src={myselfAnimation} alt="Jennifer Animation" 
                    width={500} height={500} 
                    />
                </div>
        </View>
        </div>
        </>
    );
}

export default Home;
