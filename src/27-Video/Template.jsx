import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./Notes";

function Template() {
  return (
    <div>
      <Header></Header>
      {notes.map((notedata) => (
        <Note key={notedata.key} title={notedata.title} content={notedata.content}></Note>
      ))}
      <Footer></Footer>
    </div>
  );
}

export { Template };
