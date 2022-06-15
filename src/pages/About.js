import React from 'react';
import myselfPicture from '../images/portfoliopicture.jpg';
import catAnimation from '../images/cat.gif';
import { Text, View, StyleSheet,Image } from 'react-native';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

function About() {
    return (
        <>
        <div 
            style={{
                height: '100',
                backgroundColor: '#fef1f0',
        }}>
        <View
            style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                paddingTop: 100,
        }}>
            <div className='imageofme'>
                <img src={myselfPicture} alt="Jennifer Kim" width={350} height={340}/>
            </div>
            <div className='aboutme'>
                <h2 style={{ color: '#f2a1a1' }}> about me</h2>
                <Text> {'\n'}</Text>
                <h6>Hello! My name is Jennifer Kim, and I'm studying Computer Science at UCLA.
                I'm a software engineer who is mainly interested in front-end roles; but I don't 
                like to limit myself, so I'm open to various opportunities! </h6>
                <Text> {'\n'}</Text>
                <h6>I really enjoy developing applications because I love
                the creative freedom that comes with it. By coding components from an 
                outsider's POV, I can ensure that all users will be satisfied with their experience. </h6>
                <Text> {'\n'}</Text>
                <h6>When I'm not busy with school work or projects, I like to:</h6>
                <Text>
                    ♡    Doodle my friends as cartoon cats   ♡    Sing and listen to music   ♡    Bake a new dessert   ♡
                </Text>
            </div>
        </View>
        <View
            style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                paddingTop: 30,
        }}>
            <img src={catAnimation} alt="Cat Animation" width={200} height={200}/>
            <div className='connectingInfo'>
                <View 
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                <h4> Interested in connecting? </h4>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <a href="https://www.linkedin.com/in/jenniferkim0409/" target="_blank" rel="noreferrer">
                        <button className='connectButton' style={{height: 35, width: 35}}>
                            <FaIcons.FaLinkedin style={{height: 30, width: 30}} />
                        </button>
                    </a>
                    <Text>   ♡   </Text>
                    <a href="https://github.com/jennkim0409" target="_blank" rel="noreferrer">
                        <button className='connectButton' style={{height: 35, width: 35}}>
                            <FaIcons.FaGithub style={{height: 30, width: 30}} />
                        </button>
                    </a>
                    <Text>   ♡   </Text>
                    <a href="mailto:jennkim0409@g.ucla.edu" target="_blank" rel="noreferrer">
                        <button className='connectButton' style={{height: 35, width: 35}}>
                            <IoIcons.IoIosMail style={{height: 30, width: 30}} />
                        </button>
                    </a>
                </View>
                </View>    
            </div>
        </View>


        </div>
        </>
    );
}

export default About;