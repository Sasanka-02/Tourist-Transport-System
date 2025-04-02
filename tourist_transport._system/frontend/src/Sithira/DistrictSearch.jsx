import { useState } from 'react';
import axios from 'axios';

function DistrictSearch() {
  const [district, setDistrict] = useState('Galle');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:8080/api/predictions?district=' + district);
    setData(res.data);
  };

  return (
    <div>
      <input value={district} onChange={(e) => setDistrict(e.target.value)} />
      <button onClick={fetchData}>Search</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}