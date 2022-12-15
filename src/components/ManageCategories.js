import axios from 'axios';
import React,{useState} from 'react';
import CategoryList from './CategoryList';

export default function ManageCategories({url}) {
    const [newCategory, setNewCategory] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);

    function saveCategory(e){
        e.preventDefault();
        const json = JSON.stringify({name: newCategory});
        axios.post(url + 'products/addcategory.php', json, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewCategory('');
            setAddingCategory(false);
            setSelectedCategory(response.data);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }

    if (!addingCategory) {
        return (
            <>
            <div className="manage-categories-form">
                <h3>Tuotekategoriat</h3><br/>
                <p>Tällä sivulla voit selata kategorioita sekä lisätä halutessasi uuden kategorian. Lisää kategoria painamalla "lisää kategoria" -painiketta.</p>
                <div>
                    <label>Selaa kategorioita</label><br/>
                    <CategoryList
                        url={url}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <button className="btn btn-dark" type="button" style={{marginLeft:"15px"}} onClick={()=> setAddingCategory(true)}>Lisää kategoria</button>
                </div>
                </div>
            </>
        )
        
    } else {
        return (
            <>
            <div className="manage-categories-form">
            <h3>Lisää uusi kategoria</h3>
            
            <form onSubmit={saveCategory}>
                <div>
                    <label>Kategorian nimi</label>&nbsp;
                    <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                </div><br/>
                <button type="submit" style={{marginRight:"10px"}}>Tallenna</button>
                <button type="button" onClick={() => setAddingCategory(false)}>Peru</button>
                
            </form>
            </div>
            </>
  )
}
}