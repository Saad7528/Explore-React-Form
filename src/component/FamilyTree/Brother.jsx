import { use } from 'react';
import { MoneyAsset } from './FamilyTree';

const Brother = () => {
    const [money, setMoney] = use(MoneyAsset)
    return (
        <div>
            <h3>Brother</h3>
            <br />
            <button className='btn' onClick={()=> setMoney(money+10000)}>Add 10000 tk</button>
        </div>
    );
};

export default Brother;