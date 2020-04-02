import React from 'react';
import { Typography } from 'antd';
import './App.css';

const { Title, Text } = Typography;

const txt = {
  joinCommunity: 'Join our community',
  dayGuarrantee: '30-day, hassle free, money back guarrantee',
  gainAccess: 'Gain access to our full library of tutorials along with expert code reviews.',
  perfect: 'Perfect for any developer who are serius about honing their skills.',
  monthlySub: 'Monthly Subscription',
  dollar: '$29',
  perMonth: 'per month',
  fullAccess: 'Full access for less that $1 a day',
  signUp: 'Sign Up',
  whyUs: 'Why Us',
  msgs: [
    'Tutorials by industry experts',
    'Peer & expert code review',
    'Coding exercises',
    'Access to our github repos',
    'Community forum',
    'Flashcards deck',
    'New videos every week'
  ]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <div id="topDiv" className="topContainer">
            <Title level={4} style={{ color: '#3db5b0' }}>{txt.joinCommunity}</Title>
            <Text style={{ color: '#c5d674', fontSize: '18px', fontWeight: 'bold' }}>{txt.dayGuarrantee}</Text>
            <Text style={{ color: '#b2b6c1', fontSize: '18px', marginTop: '8px' }}>{txt.gainAccess}</Text>
            <Text style={{ color: '#b2b6c1', fontSize: '18px' }}>{txt.perfect}</Text>
          </div>
          <div id="bottomDiv" className="bottomContainer">
            <div id='bottom-left-div' className="bottomLeft">
              <Text className="heading">{txt.monthlySub}</Text>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Title level={2} style={{ margin: '16px 0' }}>{txt.dollar}</Title>
                <Text style={{ color: '#ffffff77', fontSize: '16px', marginLeft: '8px' }}>{txt.perMonth}</Text>
              </div>
              <Text style={{ color: '#efefefdd', fontSize: '16px' }}>{txt.fullAccess}</Text>
              <button className="button">{txt.signUp}</button>
            </div>
            <div id='bottom-right-div' className="bottomRight">
              <Text className="heading" style={{ marginBottom: '12px' }}>{txt.whyUs}</Text>
              {txt.msgs.map(msg => <Text style={{ color: '#ffffff99', fontSize: '16px', marginTop: '4px' }}>{msg}</Text>)}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
