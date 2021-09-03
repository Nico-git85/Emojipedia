import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";



//3b Map through the emojipedia array and render Entry components.

function createEntry(emojiTerms){
  return <Entry 
    key={emojiTerms.id}
    emoji={emojiTerms.emoji}
    name={emojiTerms.name}
    description={emojiTerms.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createEntry)}
        
      </dl>
    </div>
  );
}

export default App;
