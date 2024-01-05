import {useState} from 'react';
import VideoList from './components/VideoList';
import data from './data';

/* eslint-disable no-unused-vars */
export default function App() {
  const [list, setList] = useState(data);
  return <VideoList list={list} />;
}
