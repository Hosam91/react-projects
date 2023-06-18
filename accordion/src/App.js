import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App()
{
  
  // const [questions, setQuestions] = useState(data)
  
  console.log(data);

  return <main className='container'>
    <h3>Question and answers About login </h3>
    {/* <Question questions={ questions} /> */}

    {
      data.map((question) =>
      {
        return <Question  key={question.id}  {...question} />
      })
    }



  </main>;
}

export default App;
