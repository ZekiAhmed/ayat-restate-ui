import './listPage.scss';
import { listData } from '../../lib/dummydata';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';

const ListePage = () => {
  const data = listData;

  return (
    <div className='listePage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item)=>(
           <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  )
}

export default ListePage