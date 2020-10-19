import React, { useEffect, useState } from 'react';

export const Quotebox = (props) => {

  let randomquote = Math.round(Math.random()*10)
  
  const [users, setUsers] = useState([]);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [Animationclass, setAnimationclass] = useState('quote-text');
  const [AnimationclassAuthor, setAnimationclassAuthor] = useState('quote-author');
  let color = props.color
   
  const mystyle = {
    backgroundColor: props.color,
    };

  useEffect(() => {
    getUsers();
  }, []);

  
  async function getUsers() {
    const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const users = await response.json();
    console.log(users)
    setUsers(users.quotes);
    setQuote( users.quotes[randomquote].quote )
    setAuthor( users.quotes[randomquote].author );

  }

function eventhandler() {
    setQuote( users[++randomquote].quote )
    setAuthor( users[++randomquote].author )
}

function eventmain(e) {
    
    setAnimationclass('jj')
    setAnimationclassAuthor('kk')
    setTimeout(function(){
        setAnimationclass('quote-text')
        setAnimationclassAuthor('quote-author')
        eventhandler()
    },1000)
    props.colorchange()
    
}
  return (<>
    
    <div id="quote-box">
                <div className={Animationclass}>
                    <i className="fa fa-quote-left"></i>
                <span id="text">{quote}</span>
                </div>
                <div className={AnimationclassAuthor}>- <span id="author">{author}</span></div>
                <div class="buttons">
                    <a class="button" style={mystyle} id="tweet-quote" title="Tweet this quote!" target="_blank" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Either%20write%20something%20worth%20reading%20or%20do%20something%20worth%20writing.%22%20Benjamin%20Franklin">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="button" style={mystyle} id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Benjamin%20Franklin&amp;content=Either%20write%20something%20worth%20reading%20or%20do%20something%20worth%20writing.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button">
                        <i class="fab fa-tumblr"></i>
                    </a>
                    <button onClick={eventmain} style={mystyle} class="button" id="new-quote">New quote</button>
                    </div>
                </div>
       
  </>);
};

