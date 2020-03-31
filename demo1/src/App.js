import React from 'react';
import { Typography } from 'antd';
import './App.css';
const { Title, Text } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.mainStyle}>
          <div id="topDiv" style={styles.topDivStyle}>
            <Title level={4} style={{color: '#3db5b0'}}>Join our community</Title>
            <Text style={{ color: '#c5d674', fontSize: '18px', fontWeight: 'bold'}}>30-day, hassle free, money back guarrantee</Text>
            <Text style={{ color: '#b2b6c1', fontSize: '18px', marginTop: '8px' }}>Gain access to our full library of tutorials along with expert code reviews.</Text>
            <Text style={{ color: '#b2b6c1', fontSize: '18px' }}>Perfect for any developer who are serius about honing their skills.</Text>
          </div>
          <div id="bottomDiv" style={styles.bottomDivStyle}>
            <div id='bottom-left-div' style={{ backgroundColor: '#2bb3b0', flex: '1 1', display: 'flex', padding: '48px', flexDirection: 'column', alignItems: 'flex-start', borderRadius: '0 0 0 12px'}}>
              <Text style={{ color: '#efefef', fontSize: '18px', fontWeight: 'bold' }}>Monthly Subscription</Text>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Title level={2} style={{margin: '16px 0'}}>$29</Title><Text style={{color: '#ffffff77', fontSize: '16px', marginLeft: '8px'}}>per month</Text>
              </div>
              <Text style={{ color: '#efefefdd', fontSize: '16px' }}>Full access for less that $1 a day</Text>
              <button style={{ backgroundColor: '#BFDF32', color: '#efefef', fontSize: '16px', fontWeight: 'bold', padding: '12px', borderRadius: '4px', boxShadow: '2px 2px 10px 2px #77777777', width: '100%', marginTop: '24px' }}>Sign Up</button>
            </div>
            <div id='bottom-right-div' style={{ backgroundColor: '#4CC1B9', flex: '1 1', display: 'flex', padding: '48px', flexDirection: 'column', alignItems: 'flex-start', borderRadius: '0 0 12px 0'}}>
              <Text style={{ color: '#efefef', fontSize: '18px', fontWeight: 'bold' }}>Why Us</Text>
              <Text style={{ color: '#ffffff99', fontSize: '16px', marginTop: '16px' }}>Tutorials by industry experts</Text>
              <Text style={{ color: '#ffffff99', fontSize: '16px', marginTop: '4px'}}>Peer & expert code review</Text>
              <Text style={{ color: '#ffffff99', fontSize: '16px', marginTop: '4px' }}>Coding exercises</Text>
              <Text style={{ color: '#ffffff99', fontSize: '16px', marginTop: '4px' }}>Access to our github repos</Text>
              <Text style={{ color: '#ffffff99', fontSize: '16px', marginTop: '4px' }}>Community forum</Text>
              <Text style={{ color: '#ffffff99', fontSize: '16px', marginTop: '4px' }}>Flashcards deck</Text>
              <Text style={{ color: '#ffffff99', fontSize: '16px', marginTop: '4px' }}>New videos every week</Text>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

const styles = {
  mainStyle: { width: '700px', height: '500px', backgroundColor: '#eeeeee', borderRadius: '12px', display:'flex', flexDirection: 'column' },
  topDivStyle: { padding: '18px 48px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', flex: '1 1', boxSizing: 'border-box' },
  bottomDivStyle: { display: 'flex', flexDirection: 'row', flex: '1.4 1', borderRadius: '0 0 12px 12px' }
}

export default App;
