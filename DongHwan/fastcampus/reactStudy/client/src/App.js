import React from 'react';
import './App.css';
//import ImportConponent from './R003_ImportConponent'
//import LifeCycleEx from './R004_LifeCycleEx'
//import LifeCycleEx2 from './R005_LifeCycleEx'
//import LifeCycleEx from './R006_LifeCycleEx'
//import LifeCycleEx from './R007_LifeCycleEx'
//import LifeCycleEx from './R008_LifeCycleEx'
//import Es6 from './R009_Es6'
//import Variable from './R010_Variable'
//import SpreadOperator from './R011_SpreadOperator'
//import ClassProtoType from './R012_Class&Prototype'
//import ArrowFunc from './R013_ArrowFunction'
//import ForEach from './R014_ForEach'
//import Map from './R015_Map'
//import Jquery from './R016_Jquery'
//import Props from './R017_Props'
import PropsDatatype from './R018_PropsDatatype'

function App() {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <PropsDatatype
             String ='react'
             Number={200}
             Boolean={1==1}
             Array={[0,1,8]}
             ObjectJson={{react:"리액트", twohundred:"200"}}
             Function={console.log("FunctionProps: function!")}
            />
        </div>
    );
}

export default App;
