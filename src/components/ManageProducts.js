import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';
import uuid from 'react-uuid';
import '../styles/Manage.css';


export default function ManageProducts({url}) {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [addingProduct, setAddingProduct] = useState(false);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productBrewery, setProductBrewery] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPercent, setProductPercent] = useState('');


    useEffect(()=> {
        if (selectedCategory !== null) {
            axios.get(url + 'products/getproducts.php/' + selectedCategory.id)
            .then((response) => {
                const json = response.data;
                if (json) {
                    setProducts(json.products);
                }
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
        }
    }, [url,selectedCategory])
    
    function saveProduct(e){
        e.preventDefault();
        const json = JSON.stringify({name: productName, brewery: productBrewery, price: productPrice, categoryid: selectedCategory.id, description: productDescription, percent: productPercent});
        console.log(json);
        axios.post(url + 'products/addproduct.php',json, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            const updatedProducts = [...products, response.data];
            setProducts(updatedProducts);
            setAddingProduct(false);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }

if (!addingProduct) {
    return (
        <>
        <div className="manage-products-container">
        <h3>Tuotteet</h3>         

        <p>Voit lisätä tietokantaan uusia tuotteita kategoriakohtaisesti. Valitse kategorialistasta haluamasi kategoria ja paina "lisää tuote" -painiketta</p>
        <div className="add-product"><CategoryList url={url} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>         
            <button className="btn add-product-btn btn-dark" type="button" onClick={()=>setAddingProduct(true)}>Lisää tuote</button>
        </div>
        <table className="product-mng-table">
            <thead>
                <tr key={uuid()}>
                    <th>category</th>
                    <th>name</th>
                    <th>price</th>
                    <th>brewery</th>
                    <th>abv</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={uuid()}>
                        <td>{product.category_id}</td>
                        <td>{product.name}</td>
                        <td>{product.price + "€"}</td>
                        <td>{product.brewery}</td>
                        <td>{product.percent ? product.percent + "%" : ""}</td>
                        <td>{product.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )
} else {
    return (
        <>
            
            <form className="add-product-form" onSubmit={saveProduct}>
            <h3>Lisää uusi tuote</h3>
                <div>
                    <label>Tuotteen nimi</label>
                    <input type="text" value={productName} onChange={(e)=> setProductName(e.target.value)}/>
                </div>
                <div>
                    <label>Panimo</label>
                    <input type="text" value={productBrewery} onChange={(e)=> setProductBrewery(e.target.value)}/>
                </div>
                <div>
                    <label>Hinta</label>
                    <input type="number" value={productPrice} onChange={(e)=> setProductPrice(e.target.value)}/>
                </div>
            
                <div>
                    <label>Alkoholiprosentti</label>
                    <input type="number" value={productPercent} onChange={(e)=> setProductPercent(e.target.value)}/>
                </div>
                <div>
                    <label>Tuotekuvaus</label>
                    <input type="text" value={productDescription} onChange={(e)=> setProductDescription(e.target.value)}/>
                </div>
                <button type="submit" style={{marginRight:"10px"}}>Tallenna</button>
                <button type="button" onClick={()=> setAddingProduct(false)}>Peru</button>
                
            </form>
        </>
    )
}
}